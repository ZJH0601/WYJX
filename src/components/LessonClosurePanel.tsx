import { useState } from 'react';
import { Bookmark, BookmarkCheck, BookOpenCheck, CheckCircle2, FlaskConical, NotebookPen, Target } from 'lucide-react';
import { useAppStore } from '../store/appStore';

interface Props {
  courseId: string;
  chapterId: string;
  lessonId: string;
  lessonTitle: string;
}

export const LessonClosurePanel = ({ courseId, chapterId, lessonId, lessonTitle }: Props) => {
  const {
    getProgress,
    markLessonStage,
    getLessonNote,
    setLessonNote,
    bookmarks,
    toggleBookmark,
  } = useAppStore();
  const progress = getProgress(courseId, chapterId, lessonId);
  const savedNote = getLessonNote(courseId, chapterId, lessonId);
  const [note, setNote] = useState(savedNote?.content || '');
  const [saved, setSaved] = useState(false);
  const lessonKey = `${courseId}:${chapterId}:${lessonId}`;
  const bookmarked = bookmarks.includes(lessonKey);

  const stages = [
    { label: '阅读理解', done: progress?.readCompleted, icon: BookOpenCheck },
    { label: '实验验证', done: progress?.experimentCompleted, icon: FlaskConical },
    { label: '练习完成', done: progress?.practiceCompleted, icon: Target },
    { label: '达到掌握', done: progress?.completed, icon: CheckCircle2 },
  ];

  return (
    <section className="mt-6 rounded-2xl border border-violet-200 bg-violet-50/50 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Lesson closure</p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">本课时闭环检查</h3>
          <p className="mt-1 text-sm text-slate-600">四个环节全部完成且练习达到80%，课时才标记为掌握。</p>
        </div>
        <button onClick={() => toggleBookmark(lessonKey)} className="flex min-h-11 items-center gap-2 rounded-xl border border-violet-300 bg-white px-4 text-sm font-bold text-violet-800">
          {bookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          {bookmarked ? '已收藏' : '收藏课时'}
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stages.map(({ label, done, icon: Icon }) => (
          <div key={label} className={`rounded-xl border p-4 ${done ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-500'}`}>
            <Icon className="h-5 w-5" />
            <p className="mt-2 font-bold">{label}</p>
            <p className="mt-1 text-xs">{done ? '已完成' : '尚未完成'}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button onClick={() => markLessonStage(courseId, chapterId, lessonId, 'read')} disabled={progress?.readCompleted}
          className="min-h-11 rounded-xl bg-blue-700 px-4 font-bold text-white disabled:bg-emerald-600">
          {progress?.readCompleted ? '✓ 已完成阅读并能复述' : '我已阅读，并能复述核心知识'}
        </button>
        <button onClick={() => markLessonStage(courseId, chapterId, lessonId, 'experiment')} disabled={progress?.experimentCompleted}
          className="min-h-11 rounded-xl bg-cyan-700 px-4 font-bold text-white disabled:bg-emerald-600">
          {progress?.experimentCompleted ? '✓ 已完成实验验证' : '我已修改参数并验证结果'}
        </button>
      </div>

      <div className="mt-5 rounded-xl border border-violet-100 bg-white p-4">
        <label className="flex items-center gap-2 font-bold text-slate-800"><NotebookPen className="h-4 w-4 text-violet-700" />我的知识转化笔记</label>
        <p className="mt-1 text-xs text-slate-500">建议写下：核心规则、一个自己的例子、最容易犯的错误。</p>
        <textarea value={note} onChange={(event) => { setNote(event.target.value); setSaved(false); }}
          placeholder={`用自己的话总结“${lessonTitle}”……`}
          className="mt-3 min-h-28 w-full rounded-xl border border-slate-200 p-3 leading-6 outline-none focus:border-violet-500" />
        <button onClick={() => { setLessonNote({ courseId, chapterId, lessonId, content: note }); setSaved(true); }}
          className="mt-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-bold text-white">
          {saved ? '已保存' : '保存笔记'}
        </button>
      </div>
    </section>
  );
};
