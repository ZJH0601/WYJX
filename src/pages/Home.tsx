import { CourseCards } from '../components/CourseCard';
import { BookOpen, Award, Users, Clock, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '系统课程',
      description: '从零基础到精通的完整教学体系',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '高考标准',
      description: '符合职业高考考试大纲要求',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '实战练习',
      description: '配套大量练习题和模拟考试',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '随时随地',
      description: '支持离线学习，自由安排时间',
    },
  ];

  const testimonials = [
    {
      name: '张三',
      course: 'C语言',
      comment: '通过这个平台学习，我顺利通过了职业高考，感谢老师们的精心教学！',
      score: '95分',
    },
    {
      name: '李四',
      course: '办公自动化',
      comment: 'Excel和Word课程非常实用，现在工作中也经常用到这些技能。',
      score: '90分',
    },
    {
      name: '王五',
      course: '网络知识',
      comment: '网络课程讲解清晰，知识点覆盖全面，考试轻松应对。',
      score: '92分',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              职业高考学习平台
            </h1>
            <p className="text-xl text-primary-200 mb-8">
              专业、系统、高效的职业高考备考资源，助你成功上岸！
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">4</span>
                <span className="ml-2 text-primary-200">核心课程</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">92</span>
                <span className="ml-2 text-primary-200">学习课时</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">500+</span>
                <span className="ml-2 text-primary-200">练习题</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">100%</span>
                <span className="ml-2 text-primary-200">高考覆盖</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">平台特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">核心课程</h2>
          <CourseCards />
        </div>
      </section>

      {/* Study Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">学习指南</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
              
              <div className="space-y-8">
                {[
                  { step: '01', title: '选择课程', desc: '根据自己的薄弱科目选择相应课程开始学习' },
                  { step: '02', title: '系统学习', desc: '按照章节顺序进行学习，理解每个知识点' },
                  { step: '03', title: '完成练习', desc: '每章学习完成后完成配套练习题，巩固知识' },
                  { step: '04', title: '模拟考试', desc: '进入题库系统进行模拟考试，检验学习成果' },
                  { step: '05', title: '查漏补缺', desc: '根据考试结果，针对薄弱环节进行专项复习' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 md:space-x-8">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">学员评价</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{item.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.course}学员</p>
                  </div>
                  <span className="bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-medium">
                    高考成绩: {item.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">开始你的职业高考备考之旅！</h2>
          <p className="text-primary-200 mb-6">选择一门课程，立即开始学习</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/c-language')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              浏览课程
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <BarChart3 className="w-4 h-4" />
              <span>学习仪表盘</span>
            </button>
            <button
              onClick={() => navigate('/exams')}
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors"
            >
              进入题库
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">职业高考学习平台 © 2026</p>
            <p className="text-xs mt-2">助力每一位职高学子实现升学梦想</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
