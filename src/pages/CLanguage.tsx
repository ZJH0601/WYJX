import { CoursePage } from './CoursePage';
import { cLanguageCourse } from '../data/cLanguage';

export const CLanguage = () => {
  return (
    <CoursePage
      title="C语言程序设计"
      description="从零基础到精通，系统学习C语言编程，掌握变量、函数、指针、结构体等核心概念，配套大量练习题和编程实践，帮助你应对职业高考C语言考试。"
      chapters={cLanguageCourse}
      courseId="c-language"
    />
  );
};
