import { useState } from 'react';
import { BookOpen, Menu, X, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { SearchModal } from './SearchModal';

/**
 * 全局头部导航栏组件
 * 包含Logo、桌面端导航菜单、移动端菜单按钮和全局搜索入口
 * 固定在页面顶部，支持响应式布局
 */
export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebarOpen, toggleSidebar } = useAppStore();
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/dashboard', label: '仪表盘' },
    { path: '/c-language', label: 'C语言' },
    { path: '/vfp', label: 'VFP数据库' },
    { path: '/network', label: '网络知识' },
    { path: '/office', label: '办公自动化' },
    { path: '/exams', label: '题库系统' },
  ];

  return (
    <>
      <header className="bg-primary-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="bg-accent-500 p-2 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold">职业高考学习平台</h1>
                <p className="text-xs text-primary-200">Vocational College Entrance Exam</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-accent-500 text-white'
                      : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* 搜索按钮 */}
              <button
                onClick={() => setSearchOpen(true)}
                className="ml-2 px-3 py-2 rounded-lg text-primary-100 hover:bg-primary-700 hover:text-white transition-all duration-200 flex items-center space-x-2"
                title="搜索 (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
                <span className="text-xs bg-primary-800 px-2 py-0.5 rounded">Ctrl+K</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 全局搜索弹窗 */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};