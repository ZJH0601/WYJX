import { useState, lazy, Suspense } from 'react';
import { ChevronDown, ChevronRight, PlayCircle, CheckCircle, BarChart3 } from 'lucide-react';
import { Chapter, Lesson } from '../data/cLanguage';
import { CodeBlock } from '../components/CodeBlock';
import { PracticeArea } from '../components/PracticeArea';
import { useAppStore } from '../store/appStore';

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
  const { setProgress, getProgress, getCourseProgress } = useAppStore();

  const courseProgress = getCourseProgress(courseId);
  const totalLessons = chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);

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

    const progress = getProgress(courseId, chapterId, lesson.id);
    if (!progress) {
      setProgress({
        courseId,
        chapterId,
        lessonId: lesson.id,
        completed: false,
        exerciseScore: 0,
        exerciseMaxScore: 0,
        timestamp: Date.now(),
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
          <div className="flex-1">
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
                </div>

                {/* Lesson Content */}
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />
                </div>

                {/* Visualization - Data-driven */}
                {renderVisualization()}

                {/* Code Block */}
                {selectedLesson.code && (
                  <CodeBlock code={selectedLesson.code} language="c" />
                )}

                {/* Practice Area */}
                {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                  <PracticeArea
                    exercises={selectedLesson.exercises}
                    courseId={courseId}
                    chapterId={selectedChapterId}
                    lessonId={selectedLesson.id}
                  />
                )}
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
    </div>
  );
};