import { CoursePage } from './CoursePage';
import { vfpCourse } from '../data/vfp';

export const VFP = () => {
  return (
    <CoursePage
      title="VFP数据库应用"
      description="深入学习数据库原理，掌握Visual FoxPro操作和SQL查询语言，包括数据表的创建与操作、索引与查询、表单设计、报表设计等内容，全面覆盖职业高考数据库考点。"
      chapters={vfpCourse}
      courseId="vfp"
    />
  );
};
