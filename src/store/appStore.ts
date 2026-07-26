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
  timestamp: number;
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
  'vfp': 22,          // 7章 (6+1综合实战)
  'network': 18,      // 5章 + 新增子网划分、IPv6、网络命令、DHCP
  'office': 24,       // 7章 (6+1PowerPoint)
};

interface AppState {
  progress: LearningProgress[];
  examResults: ExamResult[];
  currentCourse: string;
  currentChapter: string;
  currentLesson: string;
  sidebarOpen: boolean;
  
  setProgress: (progress: LearningProgress) => void;
  getProgress: (courseId: string, chapterId: string, lessonId: string) => LearningProgress | undefined;
  getCourseProgress: (courseId: string) => number;
  getCourseStats: (courseId: string) => CourseStats;
  getOverallStats: () => { totalLessons: number; completedLessons: number; totalExams: number; averageScore: number };
  setExamResult: (result: ExamResult) => void;
  getExamResults: (courseId: string) => ExamResult[];
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
      currentCourse: '',
      currentChapter: '',
      currentLesson: '',
      sidebarOpen: true,
      
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
            updated[existingIndex] = { ...newProgress, timestamp: Date.now() };
            return { progress: updated };
          }
          
          return { progress: [...state.progress, { ...newProgress, timestamp: Date.now() }] };
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
        const courseIds = Object.keys(COURSE_LESSON_COUNTS);
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
          }));
        } else {
          set({ progress: [], examResults: [] });
        }
      },
    }),
    {
      name: 'vocational-exam-app',
    }
  )
);
