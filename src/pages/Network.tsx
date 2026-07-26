import { CoursePage } from './CoursePage';
import { networkCourse } from '../data/network';

export const Network = () => {
  return (
    <CoursePage
      title="计算机网络基础"
      description="系统学习计算机网络基础知识，包括OSI参考模型、TCP/IP协议、IP地址、HTTP协议、网络安全等内容，掌握职业高考网络技术考点，提升网络配置和故障排查能力。"
      chapters={networkCourse}
      courseId="network"
    />
  );
};
