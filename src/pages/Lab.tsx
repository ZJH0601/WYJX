import { useState } from 'react';
import { Code2, Database, FileSpreadsheet, Network } from 'lucide-react';
import { InteractiveLab } from '../components/InteractiveLab';

type CourseId = 'c-language' | 'vfp' | 'network' | 'office';

const labs: { id: CourseId; label: string; description: string; icon: typeof Code2 }[] = [
  { id: 'c-language', label: 'C语言', description: '变量、分支、循环与输出', icon: Code2 },
  { id: 'vfp', label: 'VFP / SQL', description: '真实表结构上的查询训练', icon: Database },
  { id: 'network', label: '计算机网络', description: 'IPv4与子网划分验证', icon: Network },
  { id: 'office', label: 'Excel', description: '公式、函数与数据变化', icon: FileSpreadsheet },
];

export const Lab = () => {
  const [active, setActive] = useState<CourseId>('c-language');
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">Practice before confidence</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">跨课程实训中心</h1>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">知识不是“看懂了”就掌握了。选择实验，先写下预测，再修改输入、运行、观察结果，最后解释为什么。全部实验在当前设备本地运行。</p>
        </div>
        <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="实验课程">
          {labs.map(({ id, label, description, icon: Icon }) => (
            <button key={id} role="tab" aria-selected={active === id} onClick={() => setActive(id)}
              className={`min-h-24 rounded-2xl border p-4 text-left transition ${active === id ? 'border-cyan-500 bg-slate-900 text-white shadow-lg' : 'border-slate-200 bg-white text-slate-800 hover:border-cyan-300'}`}>
              <div className="flex items-center gap-3"><Icon className={`h-5 w-5 ${active === id ? 'text-cyan-300' : 'text-cyan-700'}`} /><span className="font-bold">{label}</span></div>
              <p className={`mt-2 text-xs ${active === id ? 'text-slate-300' : 'text-slate-500'}`}>{description}</p>
            </button>
          ))}
        </div>
        <InteractiveLab courseId={active} />
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ['1. 先预测', '运行前写下你认为会得到的结果，以及判断依据。'],
            ['2. 做对照', '每次只修改一个条件，区分究竟是哪项变化影响结果。'],
            ['3. 能解释', '不看答案，用自己的话说明规则、过程与边界情况。'],
          ].map(([title, text]) => <div key={title} className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
        </section>
      </div>
    </div>
  );
};
