import { BookOpenCheck, Eye, FlaskConical, Brain, Target } from 'lucide-react';

const steps = [
  { icon: Target, title: '明确目标', text: '先知道本节必须能解释、能操作、能解决什么问题。' },
  { icon: BookOpenCheck, title: '建立理解', text: '阅读原理、术语、步骤和完整示例，不只记结论。' },
  { icon: Eye, title: '观察演示', text: '用流程、内存、表格或网络模型把抽象知识变得可见。' },
  { icon: FlaskConical, title: '亲手验证', text: '修改数据和代码，运行后比较预期与真实结果。' },
  { icon: Brain, title: '迁移掌握', text: '完成变式题并说出原因，才能标记为真正掌握。' },
];

export const LearningCycle = () => (
  <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-5">
    <div className="mb-4">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Mastery learning</p>
      <h3 className="mt-1 text-xl font-bold text-slate-900">本节学习闭环</h3>
      <p className="mt-1 text-sm text-slate-600">按顺序完成五步，比“看完一遍”更接近真正掌握。</p>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {steps.map(({ icon: Icon, title, text }, index) => (
        <div key={title} className="rounded-xl border border-white bg-white/90 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold text-indigo-500">0{index + 1}</span>
          </div>
          <h4 className="font-bold text-slate-800">{title}</h4>
          <p className="mt-1 text-xs leading-5 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  </section>
);
