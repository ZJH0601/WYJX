import { BookOpen, Database, Globe, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

/**
 * 课程卡片组件
 * 显示单个课程的概览信息，包括标题、描述和学习进度
 * 点击可跳转到对应课程详情页
 */
export const CourseCard = ({ id, title, description, icon, color, bgColor }: CourseCardProps) => {
  const navigate = useNavigate();
  const { getCourseProgress } = useAppStore();
  const progress = getCourseProgress(id);

  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className={`${bgColor} rounded-2xl p-6 card-hover cursor-pointer border border-gray-100`}
    >
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-24 bg-white bg-opacity-50 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-600">{progress}%</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export const CourseCards = () => {
  const courses = [
    {
      id: 'c-language',
      title: 'C语言',
      description: '从零基础到精通，系统学习C语言编程，掌握职业高考核心考点',
      icon: <BookOpen className="w-7 h-7 text-primary-600" />,
      color: 'bg-blue-100',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    },
    {
      id: 'vfp',
      title: 'VFP数据库',
      description: '深入学习数据库原理，掌握VFP操作和SQL查询，应对高考数据库考点',
      icon: <Database className="w-7 h-7 text-green-600" />,
      color: 'bg-green-100',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    },
    {
      id: 'network',
      title: '网络知识',
      description: '掌握计算机网络基础、TCP/IP协议、网络安全等专业知识',
      icon: <Globe className="w-7 h-7 text-purple-600" />,
      color: 'bg-purple-100',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    },
    {
      id: 'office',
      title: '办公自动化',
      description: '精通Excel和Word操作，掌握公式函数、数据处理和文档排版技能',
      icon: <FileSpreadsheet className="w-7 h-7 text-orange-600" />,
      color: 'bg-orange-100',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};
