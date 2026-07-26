import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Database, Globe, FileSpreadsheet, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { FuseResult } from 'fuse.js';
import { SearchableContent } from '../data/cLanguage';
import { buildSearchIndex } from '../utils/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  /** 构建搜索索引 - 仅在组件挂载时执行一次 */
  const { fuse } = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    if (!query.trim() || !fuse) return [];
    return fuse.search(query).slice(0, 20);
  }, [query, fuse]);

  const getCourseIcon = (courseId: string) => {
    switch (courseId) {
      case 'c-language': return <BookOpen className="w-4 h-4" />;
      case 'vfp': return <Database className="w-4 h-4" />;
      case 'network': return <Globe className="w-4 h-4" />;
      case 'office': return <FileSpreadsheet className="w-4 h-4" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  const getCourseColor = (courseId: string) => {
    switch (courseId) {
      case 'c-language': return 'text-blue-600 bg-blue-50';
      case 'vfp': return 'text-green-600 bg-green-50';
      case 'network': return 'text-purple-600 bg-purple-50';
      case 'office': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleSelect = (result: FuseResult<SearchableContent>) => {
    const item = result.item;
    navigate(`/${item.courseId}#${item.lessonId}`);
    onClose();
    setQuery('');
    setSelectedIndex(0);
  };

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    } else {
      // 打开时自动聚焦输入框
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
        return;
      }
      // 键盘导航
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* 遮罩层 */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* 搜索面板 */}
      <div className="fixed inset-x-0 top-[15%] mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* 搜索输入 */}
          <div className="flex items-center px-4 py-3 border-b">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
              placeholder="搜索课程内容、知识点、练习题... (Ctrl+K 打开)"
              className="flex-1 ml-3 text-base outline-none text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* 搜索结果 */}
          <div className="max-h-[400px] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-6 text-center text-gray-500">
                <Search className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">输入关键词搜索课程内容</p>
                <p className="text-xs text-gray-400 mt-1">支持搜索课程标题、知识点、练习题</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <p className="text-sm">未找到相关内容</p>
                <p className="text-xs text-gray-400 mt-1">尝试使用不同的关键词</p>
              </div>
            ) : (
              <div className="py-2">
                {results.map((result, index) => {
                  const item = result.item;
                  return (
                    <button
                      key={`${item.id}-${index}`}
                      onClick={() => handleSelect(result)}
                      className={`w-full px-4 py-3 text-left transition-colors flex items-start space-x-3 ${
                        index === selectedIndex ? 'bg-primary-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getCourseColor(item.courseId)}`}>
                        {getCourseIcon(item.courseId)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-0.5">
                          <span className="text-xs font-medium text-gray-400">{item.courseName}</span>
                          <span className="text-xs text-gray-300">·</span>
                          <span className="text-xs text-gray-400">{item.chapterTitle}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-800 truncate">{item.lessonTitle}</p>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {item.type === 'exercise' ? '练习题' : '课程内容'}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 底部快捷键提示 */}
          <div className="px-4 py-2 bg-gray-50 border-t flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-4">
              <span>↑↓ 导航</span>
              <span>Enter 选择</span>
              <span>Esc 关闭</span>
            </div>
            <span>{results.length} 个结果</span>
          </div>
        </div>
      </div>
    </div>
  );
};
