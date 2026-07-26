import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 学习进度记录
 * 追踪每个课时的学习状态和练习得分
 */
export interface LearningProgress {
  courseId: string;
  chapterId: string;
  lessonId: string;
  completed: boolean;
  exerciseScore: number;
  /** 练习最大可能得分，用于计算完成百分比 */
  exerciseMaxScore: number;
  readCompleted?: boolean;
  experimentCompleted?: boolean;
  practiceCompleted?: boolean;
  masteryLevel?: 'started' | 'understanding' | 'practiced' | 'mastered';
  attempts?: number;
  timestamp: number;
}

export interface WrongAnswerRecord {
  questionId: string;
  courseId: string;
  chapterId?: string;
  lessonId?: string;
  question: string;
  options?: string[];
  type: string;
  correctAnswer: string;
  userAnswer: string;
  explanation: string;
  attempts: number;
  lastWrongAt: number;
}

export interface LessonNote {
  courseId: string;
  chapterId: string;
  lessonId: string;
  content: string;
  updatedAt: number;
}

/**
 * 考试结果记录
 * 存储每次考试的成绩和详情
 */
export interface ExamResult {
  examId: string;
  courseId: string;
  score: number;
  totalScore: number;
  /** 答题详情：每题得分 */
  answers: Record<string, { answer: string; correct: boolean; score: number }>;
  timestamp: number;
}

/**
 * 课程学习统计
 */
export interface CourseStats {
  courseId: string;
  totalLessons: number;
  completedLessons: number;
  averageScore: number;
  examCount: number;
  examAverageScore: number;
}

/** 各课程总课时数映射表 */
const COURSE_LESSON_COUNTS: Record<string, number> = {
  'c-language': 28,  // 9章 (8+1综合实战)
  'vfp': 23,
  'network': 18,      // 5章 + 新增子网划分、IPv6、网络命令、DHCP
  'office': 24,       // 7章 (6+1PowerPoint)
};

interface AppState {
  progress: LearningProgress[];
  examResults: ExamResult[];
  wrongAnswers: WrongAnswerRecord[];
  notes: LessonNote[];
  bookmarks: string[];
  currentCourse: string;
  currentChapter: string;
  currentLesson: string;
  sidebarOpen: boolean;
  
  setProgress: (progress: LearningProgress) => void;
  markLessonStage: (
    courseId: string,
    chapterId: string,
    lessonId: string,
    stage: 'read' | 'experiment',
  ) => void;
  getProgress: (courseId: string, chapterId: string, lessonId: string) => LearningProgress | undefined;
  getCourseProgress: (courseId: string) => number;
  getCourseStats: (courseId: string) => CourseStats;
  getOverallStats: () => { totalLessons: number; completedLessons: number; totalExams: number; averageScore: number };
  setExamResult: (result: ExamResult) => void;
  getExamResults: (courseId: string) => ExamResult[];
  recordWrongAnswer: (record: Omit<WrongAnswerRecord, 'attempts' | 'lastWrongAt'>) => void;
  resolveWrongAnswer: (questionId: string) => void;
  clearWrongAnswers: (courseId?: string) => void;
  setLessonNote: (note: Omit<LessonNote, 'updatedAt'>) => void;
  getLessonNote: (courseId: string, chapterId: string, lessonId: string) => LessonNote | undefined;
  toggleBookmark: (lessonKey: string) => void;
  setCurrentCourse: (courseId: string) => void;
  setCurrentChapter: (chapterId: string) => void;
  setCurrentLesson: (lessonId: string) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  resetProgress: (courseId?: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      progress: [],
      examResults: [],
      wrongAnswers: [],
      notes: [],
      bookmarks: [],
      currentCourse: '',
      currentChapter: '',
      currentLesson: '',
      sidebarOpen: false,
      
      /** 设置或更新学习进度 */
      setProgress: (newProgress) => {
        set((state) => {
          const existingIndex = state.progress.findIndex(
            (p) => p.courseId === newProgress.courseId && 
                   p.chapterId === newProgress.chapterId && 
                   p.lessonId === newProgress.lessonId
          );
          
          if (existingIndex >= 0) {
            const updated = [...state.progress];
            updated[existingIndex] = { ...updated[existingIndex], ...newProgress, timestamp: Date.now() };
            return { progress: updated };
          }
          
          return { progress: [...state.progress, { ...newProgress, timestamp: Date.now() }] };
        });
      },

      markLessonStage: (courseId, chapterId, lessonId, stage) => {
        set((state) => {
          const existingIndex = state.progress.findIndex(
            (item) => item.courseId === courseId && item.chapterId === chapterId && item.lessonId === lessonId,
          );
          const base: LearningProgress = existingIndex >= 0
            ? state.progress[existingIndex]
            : {
                courseId,
                chapterId,
                lessonId,
                completed: false,
                exerciseScore: 0,
                exerciseMaxScore: 0,
                timestamp: Date.now(),
              };
          const readCompleted = stage === 'read' ? true : Boolean(base.readCompleted);
          const experimentCompleted = stage === 'experiment' ? true : Boolean(base.experimentCompleted);
          const practicePassed = Boolean(
            base.practiceCompleted &&
            base.exerciseMaxScore > 0 &&
            base.exerciseScore / base.exerciseMaxScore >= 0.8,
          );
          const closureComplete = readCompleted && experimentCompleted && practicePassed;
          const updated: LearningProgress = {
            ...base,
            readCompleted,
            experimentCompleted,
            completed: closureComplete,
            masteryLevel: closureComplete ? 'mastered' : practicePassed ? 'practiced' : 'understanding',
            timestamp: Date.now(),
          };
          const progress = [...state.progress];
          if (existingIndex >= 0) progress[existingIndex] = updated;
          else progress.push(updated);
          return { progress };
        });
      },
      
      /** 获取单个课时的学习进度 */
      getProgress: (courseId, chapterId, lessonId) => {
        return get().progress.find(
          (p) => p.courseId === courseId && 
                 p.chapterId === chapterId && 
                 p.lessonId === lessonId
        );
      },
      
      /** 计算课程完成百分比：基于总课时数的准确进度 */
      getCourseProgress: (courseId) => {
        const state = get();
        const totalLessons = COURSE_LESSON_COUNTS[courseId] || 0;
        if (totalLessons === 0) return 0;
        const courseProgress = state.progress.filter((p) => p.courseId === courseId);
        const completedCount = courseProgress.filter((p) => p.completed).length;
        return Math.round((completedCount / totalLessons) * 100);
      },
      
      /** 获取课程详细统计数据 */
      getCourseStats: (courseId) => {
        const state = get();
        const totalLessons = COURSE_LESSON_COUNTS[courseId] || 0;
        const courseProgress = state.progress.filter((p) => p.courseId === courseId);
        const completedLessons = courseProgress.filter((p) => p.completed).length;
        
        const courseExams = state.examResults.filter((e) => e.courseId === courseId);
        const examCount = courseExams.length;
        const examAverageScore = examCount > 0
          ? Math.round(courseExams.reduce((sum, e) => sum + (e.score / e.totalScore) * 100, 0) / examCount)
          : 0;
        
        const scoredProgress = courseProgress.filter((p) => p.exerciseMaxScore > 0);
        const averageScore = scoredProgress.length > 0
          ? Math.round(scoredProgress.reduce((sum, p) => sum + (p.exerciseScore / p.exerciseMaxScore) * 100, 0) / scoredProgress.length)
          : 0;
        
        return { courseId, totalLessons, completedLessons, averageScore, examCount, examAverageScore };
      },
      
      /** 获取全局学习统计 */
      getOverallStats: () => {
        const state = get();
        const totalLessons = Object.values(COURSE_LESSON_COUNTS).reduce((s, c) => s + c, 0);
        const completedLessons = state.progress.filter((p) => p.completed).length;
        const totalExams = state.examResults.length;
        const averageScore = totalExams > 0
          ? Math.round(state.examResults.reduce((sum, e) => sum + (e.score / e.totalScore) * 100, 0) / totalExams)
          : 0;
        
        return { totalLessons, completedLessons, totalExams, averageScore };
      },
      
      /** 保存考试结果 */
      setExamResult: (result) => {
        set((state) => ({
          examResults: [...state.examResults, { ...result, timestamp: Date.now() }],
        }));
      },
      
      /** 获取指定课程的考试结果列表 */
      getExamResults: (courseId) => {
        return get().examResults.filter((e) => e.courseId === courseId);
      },

      recordWrongAnswer: (record) => {
        set((state) => {
          const existing = state.wrongAnswers.find((item) => item.questionId === record.questionId);
          const next: WrongAnswerRecord = {
            ...record,
            attempts: (existing?.attempts || 0) + 1,
            lastWrongAt: Date.now(),
          };
          return {
            wrongAnswers: existing
              ? state.wrongAnswers.map((item) => item.questionId === record.questionId ? next : item)
              : [next, ...state.wrongAnswers],
          };
        });
      },
      resolveWrongAnswer: (questionId) =>
        set((state) => ({ wrongAnswers: state.wrongAnswers.filter((item) => item.questionId !== questionId) })),
      clearWrongAnswers: (courseId) =>
        set((state) => ({
          wrongAnswers: courseId
            ? state.wrongAnswers.filter((item) => item.courseId !== courseId)
            : [],
        })),
      setLessonNote: (note) => {
        set((state) => {
          const keyMatches = (item: LessonNote) =>
            item.courseId === note.courseId && item.chapterId === note.chapterId && item.lessonId === note.lessonId;
          const next = { ...note, updatedAt: Date.now() };
          return {
            notes: state.notes.some(keyMatches)
              ? state.notes.map((item) => keyMatches(item) ? next : item)
              : [...state.notes, next],
          };
        });
      },
      getLessonNote: (courseId, chapterId, lessonId) =>
        get().notes.find((item) => item.courseId === courseId && item.chapterId === chapterId && item.lessonId === lessonId),
      toggleBookmark: (lessonKey) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(lessonKey)
            ? state.bookmarks.filter((item) => item !== lessonKey)
            : [...state.bookmarks, lessonKey],
        })),
      
      setCurrentCourse: (courseId) => set({ currentCourse: courseId }),
      setCurrentChapter: (chapterId) => set({ currentChapter: chapterId }),
      setCurrentLesson: (lessonId) => set({ currentLesson: lessonId }),
      
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      /** 重置学习进度（可选指定课程） */
      resetProgress: (courseId) => {
        if (courseId) {
          set((state) => ({
            progress: state.progress.filter((p) => p.courseId !== courseId),
            examResults: state.examResults.filter((e) => e.courseId !== courseId),
            wrongAnswers: state.wrongAnswers.filter((item) => item.courseId !== courseId),
            notes: state.notes.filter((item) => item.courseId !== courseId),
            bookmarks: state.bookmarks.filter((item) => !item.startsWith(`${courseId}:`)),
          }));
        } else {
          set({ progress: [], examResults: [], wrongAnswers: [], notes: [], bookmarks: [] });
        }
      },
    }),
    {
      name: 'vocational-exam-app',
    }
  )
);
