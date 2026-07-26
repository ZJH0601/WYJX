import { ChevronRight, BookOpen, Database, Globe, FileSpreadsheet, BarChart3, FlaskConical } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

interface CourseLink {
  path: string;
  label: string;
  icon: React.ReactNode;
}

/**
 * 侧边栏导航组件
 * 提供课程导航和快捷入口，支持移动端响应式
 * 在移动端显示为抽屉式侧边栏，桌面端常驻显示
 */
export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebarOpen, setSidebarOpen } = useAppStore();

  // 移动设备切换页面后必须关闭抽屉，确保课程正文不会被目录遮挡。
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setSidebarOpen(false);
    }
  }, [location.pathname, setSidebarOpen]);
  const courseLinks: CourseLink[] = [
    { path: '/c-language', label: 'C语言', icon: <BookOpen className="w-5 h-5" /> },
    { path: '/vfp', label: 'VFP数据库', icon: <Database className="w-5 h-5" /> },
    { path: '/network', label: '网络知识', icon: <Globe className="w-5 h-5" /> },
    { path: '/office', label: '办公自动化', icon: <FileSpreadsheet className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 transition-all duration-300 overflow-y-auto ${
          sidebarOpen ? 'w-72 md:w-64' : 'w-0 md:w-64'
        } ${sidebarOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}
      >
        <div className="p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            课程导航
          </div>

          {/* 仪表盘 */}
          <button
            onClick={() => navigate('/dashboard')}
            className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive('/dashboard')
                ? 'bg-primary-600 text-white'
                : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
            }`}
          >
            <span className="mr-3">
              <BarChart3 className="w-5 h-5" />
            </span>
            <span>学习仪表盘</span>
          </button>

          {courseLinks.map((course) => {
            const active = isActive(course.path);

            return (
              <div key={course.path} className="mb-1">
                <button
                  onClick={() => {
                    navigate(course.path);
                    if (window.matchMedia('(max-width: 767px)').matches) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={active ? 'text-primary-200' : 'text-primary-600'}>
                      {course.icon}
                    </span>
                    <span className="truncate">{course.label}</span>
                  </div>
                  <ChevronRight
                    className="w-4 h-4"
                  />
                </button>
              </div>
            );
          })}

          <div className="border-t border-gray-200 mt-4 pt-4">
            <button
              onClick={() => navigate('/lab')}
              className={`mb-2 w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/lab')
                  ? 'bg-cyan-600 text-white'
                  : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
              }`}
            >
              <FlaskConical className="mr-3 w-5 h-5" />
              <span>跨课程实训中心</span>
            </button>
            <button
              onClick={() => navigate('/exams')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/exams')
                  ? 'bg-accent-500 text-white'
                  : 'text-gray-700 hover:bg-accent-50 hover:text-accent-600'
              }`}
            >
              <span className="mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span>题库系统</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
