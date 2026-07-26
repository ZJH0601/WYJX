import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { ChevronDown, ChevronRight, PlayCircle, CheckCircle, BarChart3, AlertTriangle, Lightbulb, Target, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp } from 'lucide-react';
import { Chapter, Lesson } from '../data/cLanguage';
import { CodeBlock } from '../components/CodeBlock';
import { PracticeArea } from '../components/PracticeArea';
import { useAppStore } from '../store/appStore';
import { LearningCycle } from '../components/LearningCycle';
import { InteractiveLab } from '../components/InteractiveLab';
import { ScenarioWorkshop } from '../components/ScenarioWorkshop';
import { LessonClosurePanel } from '../components/LessonClosurePanel';

/** 可视化组件数据驱动映射表 - 通过 visualType 字段动态加载可视化组件 */
const VISUALIZATION_MAP: Record<string, () => React.ReactElement> = {
  'if-else-flowchart': () => {
    const IfElseFlowChart = lazy(() => import('../components/Visualization/FlowChart').then(m => ({ default: m.IfElseFlowChart })));
    return <Suspense fallback={null}><IfElseFlowChart /></Suspense>;
  },
  'for-loop-flowchart': () => {
    const ForLoopFlowChart = lazy(() => import('../components/Visualization/FlowChart').then(m => ({ default: m.ForLoopFlowChart })));
    return <Suspense fallback={null}><ForLoopFlowChart /></Suspense>;
  },
  'variable-memory': () => {
    const VariableMemoryLayout = lazy(() => import('../components/Visualization/MemoryLayout').then(m => ({ default: m.VariableMemoryLayout })));
    return <Suspense fallback={null}><VariableMemoryLayout /></Suspense>;
  },
  'array-memory': () => {
    const ArrayMemoryLayout = lazy(() => import('../components/Visualization/MemoryLayout').then(m => ({ default: m.ArrayMemoryLayout })));
    return <Suspense fallback={null}><ArrayMemoryLayout /></Suspense>;
  },
  'pointer-memory': () => {
    const PointerMemoryLayout = lazy(() => import('../components/Visualization/MemoryLayout').then(m => ({ default: m.PointerMemoryLayout })));
    return <Suspense fallback={null}><PointerMemoryLayout /></Suspense>;
  },
  'home-network': () => {
    const HomeNetworkTopology = lazy(() => import('../components/Visualization/NetworkTopology').then(m => ({ default: m.HomeNetworkTopology })));
    return <Suspense fallback={null}><HomeNetworkTopology /></Suspense>;
  },
  'enterprise-network': () => {
    const EnterpriseNetworkTopology = lazy(() => import('../components/Visualization/NetworkTopology').then(m => ({ default: m.EnterpriseNetworkTopology })));
    return <Suspense fallback={null}><EnterpriseNetworkTopology /></Suspense>;
  },
  'osi-model': () => {
    const OSIModel = lazy(() => import('../components/Visualization/OSIModel').then(m => ({ default: m.OSIModel })));
    return <Suspense fallback={null}><OSIModel /></Suspense>;
  },
  'tcpip-model': () => {
    const TCPIPModel = lazy(() => import('../components/Visualization/OSIModel').then(m => ({ default: m.TCPIPModel })));
    return <Suspense fallback={null}><TCPIPModel /></Suspense>;
  },
  'basic-excel': () => {
    const BasicExcelTable = lazy(() => import('../components/Visualization/ExcelTable').then(m => ({ default: m.BasicExcelTable })));
    return <Suspense fallback={null}><BasicExcelTable /></Suspense>;
  },
  'conditional-formatting': () => {
    const ConditionalFormattingTable = lazy(() => import('../components/Visualization/ExcelTable').then(m => ({ default: m.ConditionalFormattingTable })));
    return <Suspense fallback={null}><ConditionalFormattingTable /></Suspense>;
  },
  'pivot-table': () => {
    const PivotTableExample = lazy(() => import('../components/Visualization/ExcelTable').then(m => ({ default: m.PivotTableExample })));
    return <Suspense fallback={null}><PivotTableExample /></Suspense>;
  },
};

interface CoursePageProps {
  title: string;
  description: string;
  chapters: Chapter[];
  courseId: string;
}

/**
 * 通用课程页面组件
 * 提供章节导航、课程内容展示、可视化组件渲染、代码块展示和练习区域
 * 通过数据驱动方式支持四门课程，是课程页面的核心复用组件
 */
export const CoursePage = ({ title, description, chapters, courseId }: CoursePageProps) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(chapters.map(c => c.id));
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(chapters[0]?.lessons[0] || null);
  const [selectedChapterId, setSelectedChapterId] = useState<string>(chapters[0]?.id || '');
  const { setProgress, getProgress, getCourseProgress, setSidebarOpen } = useAppStore();
  const lessonContentRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 监听滚动，显示/隐藏返回顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 获取所有课时列表
  const allLessons = chapters.flatMap(chapter => 
    chapter.lessons.map(lesson => ({ ...lesson, chapterId: chapter.id }))
  );

  // 获取上一个/下一个课时
  const currentIndex = allLessons.findIndex(l => l.id === selectedLesson?.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // 切换到上一个/下一个课时
  const handlePrevLesson = () => {
    if (prevLesson) {
      handleLessonSelect(prevLesson.chapterId, prevLesson);
    }
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      handleLessonSelect(nextLesson.chapterId, nextLesson);
    }
  };

  const courseProgress = getCourseProgress(courseId);
  const totalLessons = chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
  const activeLessonNumber = chapters
    .flatMap((chapter) => chapter.lessons)
    .findIndex((lesson) => lesson.id === selectedLesson?.id) + 1;
  const labCourse = courseId as 'c-language' | 'vfp' | 'network' | 'office';

  const toggleChapter = (chapterId: string) => {
    if (expandedChapters.includes(chapterId)) {
      setExpandedChapters(expandedChapters.filter(c => c !== chapterId));
    } else {
      setExpandedChapters([...expandedChapters, chapterId]);
    }
  };

  const handleLessonSelect = (chapterId: string, lesson: Lesson) => {
    setSelectedLesson(lesson);
    setSelectedChapterId(chapterId);

    if (window.matchMedia('(max-width: 767px)').matches) {
      setSidebarOpen(false);
    }

    // 等待新课时内容渲染后，将正文标题滚动到固定导航栏下方。
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const content = lessonContentRef.current;
        if (!content) return;
        const headerOffset = 80;
        const targetTop = content.getBoundingClientRect().top + window.scrollY - headerOffset;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: reduceMotion ? 'auto' : 'smooth' });
        content.focus({ preventScroll: true });
      });
    });

    const progress = getProgress(courseId, chapterId, lesson.id);
    if (!progress) {
      setProgress({
        courseId,
        chapterId,
        lessonId: lesson.id,
        completed: false,
        exerciseScore: 0,
        exerciseMaxScore: 0,
        // store 会在持久化时写入真实时间戳；这里保持事件数据为纯值。
        timestamp: 0,
      });
    }
  };

  /** 获取当前课时的可视化组件 */
  const renderVisualization = () => {
    if (!selectedLesson?.visualType) return null;
    const component = VISUALIZATION_MAP[selectedLesson.visualType];
    return component ? component() : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-primary-50 text-primary-600 px-4 py-2 rounded-lg">
              <span className="font-semibold">{chapters.length}</span> 章节
            </div>
            <div className="bg-accent-50 text-accent-600 px-4 py-2 rounded-lg">
              <span className="font-semibold">{totalLessons}</span> 课时
            </div>
            <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="font-semibold">{courseProgress}%</span> 已完成
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Chapters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">章节导航</h2>
              <div className="space-y-2">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="mb-2">
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-800">{chapter.title}</span>
                      {expandedChapters.includes(chapter.id) ? (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                    </button>

                    {expandedChapters.includes(chapter.id) && (
                      <div className="ml-4 mt-1 space-y-1">
                        {chapter.lessons.map((lesson) => {
                          const isSelected = selectedLesson?.id === lesson.id;
                          const progress = getProgress(courseId, chapter.id, lesson.id);
                          const isCompleted = progress?.completed;

                          return (
                            <button
                              key={lesson.id}
                              onClick={() => handleLessonSelect(chapter.id, lesson)}
                              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                                isSelected
                                  ? 'bg-primary-100 text-primary-700'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <PlayCircle className="w-4 h-4 text-gray-400" />
                              )}
                              <span className="truncate">{lesson.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Lesson */}
          <div
            ref={lessonContentRef}
            tabIndex={-1}
            className="flex-1 scroll-mt-20 outline-none"
            aria-live="polite"
          >
            {selectedLesson ? (
              <div className="bg-white rounded-xl shadow-sm p-6 animate-fadeIn">
                {/* Lesson Header */}
                <div className="mb-6 pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        {selectedLesson.title}
                      </h2>
                      <p className="text-gray-600">{selectedLesson.description}</p>
                    </div>
                    {selectedLesson.exercises && (
                      <span className="bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedLesson.exercises.length} 道练习题
                      </span>
                    )}
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100" aria-label={`课程位置 ${activeLessonNumber}/${totalLessons}`}>
                    <div className="h-full rounded-full bg-primary-600 transition-all" style={{ width: `${Math.max(4, (activeLessonNumber / totalLessons) * 100)}%` }} />
                  </div>
                </div>

                <LearningCycle />

                <div className="my-6 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <div className="flex items-center gap-2 font-bold text-blue-800"><Target className="h-4 w-4" />本节达成标准</div>
                    <p className="mt-2 text-sm leading-6 text-blue-900/80">能解释“{selectedLesson.title}”的核心规则，并独立完成至少一道变式题。</p>
                  </div>
                  <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                    <div className="flex items-center gap-2 font-bold text-amber-800"><AlertTriangle className="h-4 w-4" />学习提醒</div>
                    <p className="mt-2 text-sm leading-6 text-amber-900/80">不要只背结论：主动预测示例结果，特别检查边界条件与易混概念。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <div className="flex items-center gap-2 font-bold text-emerald-800"><Lightbulb className="h-4 w-4" />掌握证据</div>
                    <p className="mt-2 text-sm leading-6 text-emerald-900/80">不看正文复述原理，修改实验输入后仍能提前判断输出，才算真正掌握。</p>
                  </div>
                </div>

                {/* Lesson Content */}
                <div className="lesson-content prose prose-lg max-w-none rounded-2xl border border-slate-100 bg-white p-1 sm:p-3">
                  <div dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />
                </div>

                {/* Visualization - Data-driven */}
                {renderVisualization()}

                {/* Code Block */}
                {selectedLesson.code && (
                  <CodeBlock code={selectedLesson.code} language="c" />
                )}

                <InteractiveLab key={`lab:${selectedLesson.id}`} courseId={labCourse} compact lessonTitle={selectedLesson.title} />
                <ScenarioWorkshop key={`scenario:${selectedLesson.id}`} courseId={labCourse} lessonTitle={selectedLesson.title} />
                <LessonClosurePanel
                  key={`closure:${selectedLesson.id}`}
                  courseId={courseId}
                  chapterId={selectedChapterId}
                  lessonId={selectedLesson.id}
                  lessonTitle={selectedLesson.title}
                />

                {/* Practice Area */}
                {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                  <PracticeArea
                    exercises={selectedLesson.exercises}
                    courseId={courseId}
                    chapterId={selectedChapterId}
                    lessonId={selectedLesson.id}
                  />
                )}

                {/* Lesson Navigation */}
                <div className="mt-8 pt-6 border-t flex justify-between items-center">
                  <button
                    onClick={handlePrevLesson}
                    disabled={!prevLesson}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      prevLesson
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">上一节</span>
                    {prevLesson && (
                      <span className="text-xs text-gray-500 hidden sm:block">- {prevLesson.title}</span>
                    )}
                  </button>

                  <div className="text-sm text-gray-500">
                    {activeLessonNumber} / {totalLessons}
                  </div>

                  <button
                    onClick={handleNextLesson}
                    disabled={!nextLesson}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      nextLesson
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-sm font-medium">下一节</span>
                    {nextLesson && (
                      <span className="text-xs text-primary-200 hidden sm:block">{nextLesson.title} -</span>
                    )}
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">选择一个章节开始学习</h3>
                <p className="text-gray-600">从左侧章节列表中选择一个章节，开始您的学习之旅</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        } hover:bg-primary-700 hover:scale-105`}
        aria-label="返回顶部"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};
