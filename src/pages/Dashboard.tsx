import { useNavigate } from 'react-router-dom';
import {
  BookOpen, Database, Globe, FileSpreadsheet, BarChart3,
  Trophy, Target, TrendingUp, Clock, Award, CheckCircle, ArrowRight
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { EXAM_NAME_MAP } from '../data/questions';

/** 课程配置：用于仪表盘展示 */
const COURSE_CONFIG = [
  { id: 'c-language', name: 'C语言', icon: BookOpen, color: 'bg-blue-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
  { id: 'vfp', name: 'VFP数据库', icon: Database, color: 'bg-green-500', bgColor: 'bg-green-50', textColor: 'text-green-600' },
  { id: 'network', name: '网络知识', icon: Globe, color: 'bg-purple-500', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
  { id: 'office', name: '办公自动化', icon: FileSpreadsheet, color: 'bg-orange-500', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
];

/** 成就徽章定义 */
const ACHIEVEMENTS = [
  { id: 'first-lesson', name: '初出茅庐', desc: '完成第一个课时', icon: '🎯', minLessons: 1 },
  { id: 'ten-lessons', name: '学有所成', desc: '完成10个课时', icon: '📚', minLessons: 10 },
  { id: 'half-course', name: '半途而进', desc: '完成总课程50%', icon: '🏃', minLessons: 46 },
  { id: 'all-lessons', name: '满腹经纶', desc: '完成全部课时', icon: '🎓', minLessons: 92 },
  { id: 'first-exam', name: '初试锋芒', desc: '完成第一次考试', icon: '✍️', minExams: 1 },
  { id: 'exam-90', name: '学霸降临', desc: '考试得分90分以上', icon: '🏆', minScore: 90 },
  { id: 'all-courses', name: '全能选手', desc: '四门课程均有进度', icon: '🌟', minCourses: 4 },
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const { getOverallStats, getCourseStats, getCourseProgress, examResults } = useAppStore();

  const overallStats = getOverallStats();
  const overallProgress = overallStats.totalLessons > 0
    ? Math.round((overallStats.completedLessons / overallStats.totalLessons) * 100)
    : 0;

  /** 计算获得的成就 */
  const earnedAchievements = ACHIEVEMENTS.filter(a => {
    if (a.minLessons && overallStats.completedLessons >= a.minLessons) return true;
    if (a.minExams && overallStats.totalExams >= a.minExams) return true;
    if (a.minScore && examResults.some(e => (e.score / e.totalScore) * 100 >= a.minScore)) return true;
    if (a.minCourses) {
      const coursesWithProgress = COURSE_CONFIG.filter(c => getCourseProgress(c.id) > 0).length;
      if (coursesWithProgress >= a.minCourses) return true;
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">学习仪表盘</h1>
          <p className="text-gray-600">全面追踪学习进度，掌握学习成果</p>
        </div>

        {/* 总体统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-3xl font-bold text-blue-600">{overallProgress}%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">总体进度</h3>
            <p className="text-xs text-gray-400 mt-1">{overallStats.completedLessons}/{overallStats.totalLessons} 课时完成</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-3xl font-bold text-green-600">{overallStats.completedLessons}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">已完成课时</h3>
            <p className="text-xs text-gray-400 mt-1">共 {overallStats.totalLessons} 课时</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-3xl font-bold text-purple-600">{overallStats.totalExams}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">已完成考试</h3>
            <p className="text-xs text-gray-400 mt-1">平均分 {overallStats.averageScore} 分</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-3xl font-bold text-orange-600">{earnedAchievements.length}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">获得成就</h3>
            <p className="text-xs text-gray-400 mt-1">共 {ACHIEVEMENTS.length} 个成就</p>
          </div>
        </div>

        {/* 总体进度条 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">学习总进度</h3>
            <span className="text-sm font-medium text-primary-600">{overallProgress}%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-full rounded-full transition-all duration-1000 animate-progress"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* 各课程进度详情 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">课程进度详情</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSE_CONFIG.map((course) => {
              const stats = getCourseStats(course.id);
              const progress = getCourseProgress(course.id);
              const Icon = course.icon;

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => navigate(`/${course.id}`)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${course.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${course.textColor}`} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{course.name}</h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>

                  {/* 进度条 */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">学习进度</span>
                      <span className={`font-medium ${course.textColor}`}>{progress}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className={`${course.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* 统计数据 */}
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="font-bold text-gray-700">{stats.completedLessons}/{stats.totalLessons}</p>
                      <p className="text-xs text-gray-400">课时</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="font-bold text-gray-700">{stats.averageScore}%</p>
                      <p className="text-xs text-gray-400">练习均分</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="font-bold text-gray-700">{stats.examCount}</p>
                      <p className="text-xs text-gray-400">考试次数</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 成就徽章 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">成就徽章</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {ACHIEVEMENTS.map((achievement) => {
                const earned = earnedAchievements.some(a => a.id === achievement.id);
                return (
                  <div
                    key={achievement.id}
                    className={`text-center p-4 rounded-xl transition-all ${
                      earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className={`text-sm font-medium ${earned ? 'text-gray-800' : 'text-gray-400'}`}>
                      {achievement.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{achievement.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 最近考试记录 */}
        {examResults.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">最近考试记录</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">考试名称</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">课程</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">得分</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">正确率</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">时间</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[...examResults].reverse().slice(0, 10).map((result, index) => {
                    const percentage = Math.round((result.score / result.totalScore) * 100);
                    const courseConfig = COURSE_CONFIG.find(c => c.id === result.courseId);
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                          {EXAM_NAME_MAP[result.examId] || result.examId}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {courseConfig?.name || result.courseId}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-medium ${
                            percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {result.score}/{result.totalScore}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`h-full rounded-full ${
                                  percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500">{percentage}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {new Date(result.timestamp).toLocaleDateString('zh-CN')}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 快捷入口 */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">快捷入口</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COURSE_CONFIG.map((course) => {
              const Icon = course.icon;
              return (
                <button
                  key={course.id}
                  onClick={() => navigate(`/${course.id}`)}
                  className={`${course.bgColor} p-4 rounded-xl hover:shadow-md transition-shadow text-center`}
                >
                  <Icon className={`w-8 h-8 ${course.textColor} mx-auto mb-2`} />
                  <span className="text-sm font-medium text-gray-700">{course.name}</span>
                </button>
              );
            })}
            <button
              onClick={() => navigate('/exams')}
              className="bg-accent-50 p-4 rounded-xl hover:shadow-md transition-shadow text-center"
            >
              <Trophy className="w-8 h-8 text-accent-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-700">题库系统</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};