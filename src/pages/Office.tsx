import { CoursePage } from './CoursePage';
import { officeCourse } from '../data/office';

export const Office = () => {
  return (
    <CoursePage
      title="办公自动化"
      description="精通Excel和Word操作，学习Excel公式与函数、数据排序与筛选、数据透视表，以及Word文档排版、样式使用、图文混排等技能，提升办公效率，应对职业高考办公自动化考试。"
      chapters={officeCourse}
      courseId="office"
    />
  );
};
