import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

/**
 * 404 页面未找到
 * 当用户访问不存在的路由时显示此页面
 */
export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* 404 图标 */}
        <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">页面未找到</h1>
        <p className="text-gray-600 mb-8">
          您访问的页面不存在或已被移除，请检查链接是否正确。
        </p>

        {/* 导航按钮 */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>返回首页</span>
          </button>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回上页</span>
            </button>
            <button
              onClick={() => navigate('/exams')}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>题库系统</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};