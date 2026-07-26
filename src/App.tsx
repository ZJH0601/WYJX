import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';

/** 课程页面懒加载 - 按需加载减少初始包体积 */
const CLanguage = lazy(() => import('./pages/CLanguage').then(m => ({ default: m.CLanguage })));
const VFP = lazy(() => import('./pages/VFP').then(m => ({ default: m.VFP })));
const Network = lazy(() => import('./pages/Network').then(m => ({ default: m.Network })));
const Office = lazy(() => import('./pages/Office').then(m => ({ default: m.Office })));
const Exams = lazy(() => import('./pages/Exams').then(m => ({ default: m.Exams })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Lab = lazy(() => import('./pages/Lab').then(m => ({ default: m.Lab })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

/** 课程页面加载骨架屏 */
const CourseSkeleton = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
        <div className="flex gap-6">
          <div className="w-80">
            <div className="bg-white rounded-xl p-4 space-y-3">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-10 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-100 rounded w-full" />
              <div className="h-4 bg-gray-100 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CourseLayout = () => {
  return (
    <>
      <Sidebar />
      <main className="ml-0 md:ml-64">
        <Suspense fallback={<CourseSkeleton />}>
          <Routes>
            <Route path="/c-language" element={<CLanguage />} />
            <Route path="/vfp" element={<VFP />} />
            <Route path="/network" element={<Network />} />
            <Route path="/office" element={<Office />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {isHome ? <Home /> : <CourseLayout />}
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}
