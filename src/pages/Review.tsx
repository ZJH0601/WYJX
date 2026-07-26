import { useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, RotateCcw, Trash2 } from 'lucide-react';
import { useAppStore, WrongAnswerRecord } from '../store/appStore';
import { evaluateAnswer } from '../utils/answerEvaluator';
import { Exercise } from '../data/cLanguage';

const courseNames: Record<string, string> = {
  'c-language': 'C语言',
  vfp: 'VFP数据库',
  network: '计算机网络',
  office: '办公自动化',
};

const asExercise = (item: WrongAnswerRecord): Exercise => ({
  id: item.questionId,
  type: item.type as Exercise['type'],
  question: item.question,
  options: item.options,
  answer: item.correctAnswer,
  explanation: item.explanation,
  score: 1,
});

export const Review = () => {
  const { wrongAnswers, recordWrongAnswer, resolveWrongAnswer, clearWrongAnswers, notes, bookmarks } = useAppStore();
  const [course, setCourse] = useState('all');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const filtered = useMemo(
    () => wrongAnswers.filter((item) => course === 'all' || item.courseId === course),
    [wrongAnswers, course],
  );

  const submit = (item: WrongAnswerRecord) => {
    const evaluation = evaluateAnswer(asExercise(item), answers[item.questionId] || '');
    if (evaluation.correct) {
      resolveWrongAnswer(item.questionId);
      setFeedback({ ...feedback, [item.questionId]: '本次回答正确，已移出错题本。' });
    } else {
      recordWrongAnswer({
        questionId: item.questionId,
        courseId: item.courseId,
        chapterId: item.chapterId,
        lessonId: item.lessonId,
        question: item.question,
        options: item.options,
        type: item.type,
        correctAnswer: item.correctAnswer,
        userAnswer: answers[item.questionId] || '',
        explanation: item.explanation,
      });
      setFeedback({ ...feedback, [item.questionId]: `${evaluation.feedback} 请再次阅读解析后重答。` });
    }
  };

  const selectOption = (item: WrongAnswerRecord, option: string) => {
    if (item.type !== 'multiple') {
      setAnswers({ ...answers, [item.questionId]: option });
      return;
    }
    const selected = (answers[item.questionId] || '').split(',').filter(Boolean);
    const next = selected.includes(option)
      ? selected.filter((value) => value !== option)
      : [...selected, option];
    setAnswers({ ...answers, [item.questionId]: next.sort().join(',') });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-widest text-rose-700">Review & mastery</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">错题复习中心</h1>
        <p className="mt-2 max-w-3xl leading-7 text-slate-600">错误不会被简单清除。重新作答正确后才会移出错题本，形成“错误—解析—重练—掌握”的闭环。</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">待解决错题</p><p className="mt-1 text-3xl font-black text-rose-700">{wrongAnswers.length}</p></div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">学习笔记</p><p className="mt-1 text-3xl font-black text-violet-700">{notes.length}</p></div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">收藏课时</p><p className="mt-1 text-3xl font-black text-blue-700">{bookmarks.length}</p></div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {['all', 'c-language', 'vfp', 'network', 'office'].map((id) => (
            <button key={id} onClick={() => setCourse(id)} className={`rounded-lg px-4 py-2 text-sm font-bold ${course === id ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'}`}>
              {id === 'all' ? '全部' : courseNames[id]}
            </button>
          ))}
          {wrongAnswers.length > 0 && <button onClick={() => clearWrongAnswers(course === 'all' ? undefined : course)} className="ml-auto flex items-center gap-2 rounded-lg border border-rose-300 bg-white px-4 py-2 text-sm font-bold text-rose-700"><Trash2 className="h-4 w-4" />清空当前范围</button>}
        </div>

        <div className="mt-5 space-y-4">
          {filtered.length === 0 && <div className="rounded-2xl bg-white p-10 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" /><h2 className="mt-3 text-xl font-bold">当前没有待解决错题</h2><p className="mt-2 text-slate-500">完成练习或随机测试后，错误题目会自动进入这里。</p></div>}
          {filtered.map((item) => (
            <article key={item.questionId} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">{courseNames[item.courseId]}</span><span className="text-xs text-slate-500">累计错误 {item.attempts} 次</span></div>
              <h2 className="mt-4 font-bold leading-7 text-slate-900">{item.question}</h2>
              {item.options && <div className="mt-3 grid gap-2 sm:grid-cols-2">{item.options.map((option, index) => {
                const label = String.fromCharCode(65 + index);
                const selected = (answers[item.questionId] || '').split(',').includes(label);
                return <button key={option} onClick={() => selectOption(item, label)} aria-pressed={selected} className={`rounded-xl border p-3 text-left text-sm ${selected ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}>{label}. {option}</button>;
              })}</div>}
              {!item.options && <textarea value={answers[item.questionId] || ''} onChange={(event) => setAnswers({ ...answers, [item.questionId]: event.target.value })} className="mt-3 min-h-28 w-full rounded-xl border p-3" placeholder="重新作答……" />}
              <details className="mt-4 rounded-xl bg-amber-50 p-4"><summary className="cursor-pointer font-bold text-amber-900">查看解析后再作答</summary><p className="mt-2 text-sm leading-6 text-amber-900">{item.explanation}</p></details>
              <button onClick={() => submit(item)} disabled={!answers[item.questionId]} className="mt-4 flex min-h-11 items-center gap-2 rounded-xl bg-blue-700 px-5 font-bold text-white disabled:bg-slate-300"><RotateCcw className="h-4 w-4" />提交重练答案</button>
              {feedback[item.questionId] && <p className="mt-3 flex items-center gap-2 text-sm font-bold text-rose-700"><AlertCircle className="h-4 w-4" />{feedback[item.questionId]}</p>}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
