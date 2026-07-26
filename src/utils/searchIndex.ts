import Fuse from 'fuse.js';
import { SearchableContent } from '../data/cLanguage';
import { cLanguageCourse } from '../data/cLanguage';
import { vfpCourse } from '../data/vfp';
import { networkCourse } from '../data/network';
import { officeCourse } from '../data/office';

/** 课程配置 - 用于构建搜索索引 */
const COURSE_CONFIGS = [
  { course: cLanguageCourse, courseId: 'c-language', courseName: 'C语言' },
  { course: vfpCourse, courseId: 'vfp', courseName: 'VFP数据库' },
  { course: networkCourse, courseId: 'network', courseName: '网络知识' },
  { course: officeCourse, courseId: 'office', courseName: '办公自动化' },
];

/** 构建全站搜索索引 */
export const buildSearchIndex = () => {
  const contents: SearchableContent[] = [];

  for (const config of COURSE_CONFIGS) {
    for (const chapter of config.course) {
      for (const lesson of chapter.lessons) {
        // 添加课程内容
        contents.push({
          id: `${config.courseId}-${lesson.id}`,
          courseId: config.courseId,
          courseName: config.courseName,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          content: stripHtml(lesson.content),
          type: 'lesson',
        });

        // 添加练习题
        if (lesson.exercises) {
          for (const exercise of lesson.exercises) {
            contents.push({
              id: `exercise-${exercise.id}`,
              courseId: config.courseId,
              courseName: config.courseName,
              chapterId: chapter.id,
              chapterTitle: chapter.title,
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              content: `${exercise.question} ${exercise.explanation}`,
              type: 'exercise',
            });
          }
        }
      }
    }
  }

  const fuse = new Fuse(contents, {
    keys: [
      { name: 'lessonTitle', weight: 0.4 },
      { name: 'content', weight: 0.3 },
      { name: 'chapterTitle', weight: 0.2 },
      { name: 'courseName', weight: 0.1 },
    ],
    threshold: 0.4,
    distance: 100,
    minMatchCharLength: 1,
    includeScore: true,
  });

  return { fuse, contents };
};

/** 去除HTML标签提取纯文本 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}