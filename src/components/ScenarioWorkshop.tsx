import { useMemo, useState } from 'react';
import { Cable, CheckCircle2, Database, FileSpreadsheet, MemoryStick, RotateCcw, StepForward, XCircle } from 'lucide-react';

type CourseId = 'c-language' | 'vfp' | 'network' | 'office';

const wireColors = [
  { id: 'wg', name: '白绿', css: 'linear-gradient(90deg,#fff 50%,#22c55e 50%)' },
  { id: 'g', name: '绿', css: '#22c55e' },
  { id: 'wo', name: '白橙', css: 'linear-gradient(90deg,#fff 50%,#f97316 50%)' },
  { id: 'b', name: '蓝', css: '#3b82f6' },
  { id: 'wb', name: '白蓝', css: 'linear-gradient(90deg,#fff 50%,#3b82f6 50%)' },
  { id: 'o', name: '橙', css: '#f97316' },
  { id: 'wbr', name: '白棕', css: 'linear-gradient(90deg,#fff 50%,#92400e 50%)' },
  { id: 'br', name: '棕', css: '#92400e' },
];
const T568A = ['wg', 'g', 'wo', 'b', 'wb', 'o', 'wbr', 'br'];
const T568B = ['wo', 'o', 'wg', 'b', 'wb', 'g', 'wbr', 'br'];
const wire = (id: string) => wireColors.find((item) => item.id === id)!;

const Plug = ({ title, pins, onRemove }: { title: string; pins: string[]; onRemove: (index: number) => void }) => (
  <div>
    <p className="mb-2 text-sm font-bold text-slate-700">{title}（卡扣朝下、金属片朝上）</p>
    <div className="grid grid-cols-8 gap-1 rounded-xl border-4 border-slate-300 bg-slate-100 p-2">
      {Array.from({ length: 8 }, (_, index) => {
        const item = pins[index] ? wire(pins[index]) : null;
        return (
          <button key={index} onClick={() => item && onRemove(index)}
            className="flex min-h-24 flex-col items-center justify-end overflow-hidden rounded border border-slate-400 bg-white text-[10px] font-bold text-slate-700">
            <span className="mb-auto mt-1">{index + 1}</span>
            <span className="h-14 w-full border-t border-slate-400" style={{ background: item?.css || '#e2e8f0' }} />
            <span className="h-6 px-0.5">{item?.name || '空'}</span>
          </button>
        );
      })}
    </div>
  </div>
);

const CableWorkshop = () => {
  const [endA, setEndA] = useState<string[]>([]);
  const [endB, setEndB] = useState<string[]>([]);
  const [activeEnd, setActiveEnd] = useState<'A' | 'B'>('A');
  const [checked, setChecked] = useState(false);
  const selected = activeEnd === 'A' ? endA : endB;
  const setSelected = activeEnd === 'A' ? setEndA : setEndB;
  const addWire = (id: string) => {
    if (selected.length >= 8 || selected.includes(id)) return;
    setSelected([...selected, id]);
    setChecked(false);
  };
  const standard = (pins: string[]) => pins.join(',') === T568A.join(',') ? 'T568A' : pins.join(',') === T568B.join(',') ? 'T568B' : '非标准';
  const result = useMemo(() => {
    if (endA.length !== 8 || endB.length !== 8) return null;
    const a = standard(endA);
    const b = standard(endB);
    if (a === '非标准' || b === '非标准') return { ok: false, title: '线序不符合标准', detail: '至少有一端不是T568A或T568B，请检查1～8号针脚。' };
    if (a === b) return { ok: true, title: `${a}—${b}：直通线`, detail: '传统场景用于不同类型设备，如电脑—交换机、交换机—路由器。现代设备常支持Auto MDI-X。' };
    return { ok: true, title: `${a}—${b}：交叉线`, detail: '传统场景用于同类设备，如电脑—电脑、交换机—交换机。现代设备通常可自动适配。' };
  }, [endA, endB]);

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        <strong>施工情景：</strong>你正在制作一根以太网双绞线。剥开外皮后应尽量少拆散线对，按标准排线、剪齐，插到底后再用压线钳压接。本模拟器训练线序与用途判断。
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        <Plug title="水晶头A端" pins={endA} onRemove={(index) => { setEndA(endA.filter((_, i) => i !== index)); setChecked(false); }} />
        <Plug title="水晶头B端" pins={endB} onRemove={(index) => { setEndB(endB.filter((_, i) => i !== index)); setChecked(false); }} />
      </div>
      <div className="rounded-xl bg-slate-100 p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {(['A', 'B'] as const).map((end) => <button key={end} onClick={() => setActiveEnd(end)} className={`rounded-lg px-4 py-2 text-sm font-bold ${activeEnd === end ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'}`}>正在接{end}端</button>)}
          <button onClick={() => setSelected(T568A)} className="rounded-lg bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-800">填入T568A</button>
          <button onClick={() => setSelected(T568B)} className="rounded-lg bg-blue-100 px-3 py-2 text-xs font-bold text-blue-800">填入T568B</button>
        </div>
        <p className="mb-2 text-xs text-slate-500">依次点击颜色放入当前水晶头；点击已放入的针脚可撤回。</p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {wireColors.map((item) => <button key={item.id} disabled={selected.includes(item.id)} onClick={() => addWire(item.id)}
            className="min-h-12 rounded-lg border border-slate-300 px-1 text-xs font-bold text-slate-800 disabled:opacity-30" style={{ background: item.css }}>{item.name}</button>)}
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={() => setChecked(true)} disabled={!result} className="min-h-11 flex-1 rounded-xl bg-cyan-600 px-4 font-bold text-white disabled:bg-slate-300">使用测线仪检查</button>
        <button onClick={() => { setEndA([]); setEndB([]); setChecked(false); }} className="rounded-xl border border-slate-300 px-4"><RotateCcw className="h-4 w-4" /></button>
      </div>
      {checked && result && <div className={`rounded-xl border p-4 ${result.ok ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
        <div className="flex items-center gap-2 font-bold">{result.ok ? <CheckCircle2 className="text-emerald-600" /> : <XCircle className="text-red-600" />}{result.title}</div>
        <p className="mt-2 text-sm leading-6 text-slate-700">{result.detail}</p>
      </div>}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border p-4 text-sm"><strong>T568A：</strong>白绿、绿、白橙、蓝、白蓝、橙、白棕、棕</div>
        <div className="rounded-xl border p-4 text-sm"><strong>T568B：</strong>白橙、橙、白绿、蓝、白蓝、绿、白棕、棕</div>
      </div>
    </div>
  );
};

const OsiWorkshop = () => {
  const layers = [
    ['应用层', 'HTTP请求：GET /lesson', '用户数据'],
    ['表示层', '编码、压缩与加密表示', '数据'],
    ['会话层', '建立并维护应用会话', '数据'],
    ['传输层', 'TCP加入源/目的端口与序号', '报文段'],
    ['网络层', 'IP加入源/目的IP并选择路径', '数据包'],
    ['数据链路层', '以太网加入MAC地址与校验', '帧'],
    ['物理层', '转换为电/光/无线信号', '比特'],
  ];
  const [step, setStep] = useState(0);
  return <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
    <div className="rounded-xl border bg-slate-50 p-4">
      <p className="text-sm font-bold text-slate-800">情景：手机访问学习网站</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">点击“下一层”，观察同一份学习请求如何逐层添加控制信息，最后变成可在介质上传输的比特。</p>
      <button onClick={() => setStep((step + 1) % layers.length)} className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 font-bold text-white"><StepForward className="h-4 w-4" />下一层</button>
    </div>
    <div className="space-y-2">
      {layers.map(([name, action, unit], index) => <div key={name} className={`rounded-xl border p-3 transition ${index === step ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-slate-200 bg-white opacity-60'}`}>
        <div className="flex items-center justify-between"><strong>{7 - index}. {name}</strong><span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{unit}</span></div>
        <p className="mt-1 text-xs text-slate-600">{action}</p>
      </div>)}
    </div>
  </div>;
};

const CTraceWorkshop = () => {
  const [limit, setLimit] = useState(5);
  const [i, setI] = useState(0);
  const [sum, setSum] = useState(0);
  const next = () => {
    if (i >= limit) return;
    const nextI = i + 1;
    setI(nextI);
    setSum(sum + nextI);
  };
  return <div className="grid gap-5 lg:grid-cols-2">
    <div className="rounded-xl bg-slate-950 p-5 font-mono text-sm text-cyan-100">
      <p>int sum = <mark className="bg-amber-300 px-1">{sum}</mark>;</p>
      <p>for (int i = 1; i &lt;= {limit}; i++) {'{'}</p>
      <p className="pl-5">sum = sum + i;</p><p>{'}'}</p>
      <button onClick={next} disabled={i >= limit} className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 font-sans font-bold text-slate-950 disabled:bg-slate-700"><StepForward className="h-4 w-4" />单步执行</button>
    </div>
    <div>
      <label className="text-sm font-bold">循环终点 n：{limit}<input type="range" min="2" max="10" value={limit} onChange={(e) => { setLimit(Number(e.target.value)); setI(0); setSum(0); }} className="mt-2 w-full" /></label>
      <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl border bg-blue-50 p-5 text-center"><p className="text-xs">变量 i</p><p className="text-3xl font-black">{i}</p></div><div className="rounded-xl border bg-emerald-50 p-5 text-center"><p className="text-xs">累加器 sum</p><p className="text-3xl font-black">{sum}</p></div></div>
      <p className="mt-4 text-sm leading-6 text-slate-600">每一步先让 i 取新值，再执行 sum=sum+i。结束条件是 i 超过 {limit}。最终应得到 {limit * (limit + 1) / 2}。</p>
    </div>
  </div>;
};

const VfpWorkshop = () => {
  const [rows, setRows] = useState([{ id: '001', name: '林晓', score: 92 }, { id: '002', name: '陈宇', score: 76 }]);
  const [name, setName] = useState('');
  const [score, setScore] = useState(60);
  const [sorted, setSorted] = useState(false);
  const shown = sorted ? [...rows].sort((a, b) => b.score - a.score) : rows;
  return <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
    <div className="overflow-x-auto rounded-xl border"><table className="w-full text-sm"><thead className="bg-emerald-800 text-white"><tr><th className="p-3">学号 C(3)</th><th>姓名 C(20)</th><th>成绩 N(5,1)</th></tr></thead><tbody>{shown.map((row) => <tr key={row.id} className="border-t"><td className="p-3 font-mono">{row.id}</td><td>{row.name}</td><td>{row.score}</td></tr>)}</tbody></table></div>
    <div className="rounded-xl bg-slate-50 p-4"><p className="font-bold">记录操作情景</p><input value={name} onChange={(e) => setName(e.target.value)} placeholder="学生姓名" className="mt-3 w-full rounded-lg border p-3" /><input type="number" value={score} onChange={(e) => setScore(Number(e.target.value))} className="mt-2 w-full rounded-lg border p-3" />
      <button onClick={() => { if(name.trim()) { setRows([...rows, { id: String(rows.length + 1).padStart(3, '0'), name: name.trim(), score }]); setName(''); } }} className="mt-3 w-full rounded-lg bg-emerald-700 p-3 font-bold text-white">APPEND BLANK + REPLACE</button>
      <button onClick={() => setSorted(!sorted)} className="mt-2 w-full rounded-lg border border-emerald-700 p-3 font-bold text-emerald-800">{sorted ? '恢复物理顺序' : 'INDEX ON 成绩 DESCENDING'}</button>
    </div>
  </div>;
};

const OfficeWorkshop = () => {
  const initial = [{ name: '键盘', category: '设备', amount: 180 }, { name: '网线', category: '耗材', amount: 65 }, { name: '交换机', category: '设备', amount: 560 }, { name: '水晶头', category: '耗材', amount: 30 }];
  const [filter, setFilter] = useState('全部');
  const [descending, setDescending] = useState(false);
  const rows = initial.filter((row) => filter === '全部' || row.category === filter).sort((a, b) => descending ? b.amount - a.amount : a.amount - b.amount);
  return <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
    <div className="rounded-xl bg-blue-50 p-4"><p className="font-bold">数据处理任务</p><label className="mt-3 block text-sm">筛选类别<select value={filter} onChange={(e) => setFilter(e.target.value)} className="mt-1 w-full rounded-lg border p-3"><option>全部</option><option>设备</option><option>耗材</option></select></label>
      <button onClick={() => setDescending(!descending)} className="mt-3 w-full rounded-lg bg-blue-700 p-3 font-bold text-white">金额{descending ? '降序' : '升序'}排列</button>
      <p className="mt-3 text-sm">当前可见记录：{rows.length}；SUM(金额)={rows.reduce((s, r) => s + r.amount, 0)}</p>
    </div>
    <div className="overflow-x-auto rounded-xl border"><table className="w-full text-sm"><thead className="bg-blue-800 text-white"><tr><th className="p-3">名称</th><th>类别</th><th>金额</th></tr></thead><tbody>{rows.map((row) => <tr key={row.name} className="border-t"><td className="p-3">{row.name}</td><td>{row.category}</td><td>{row.amount}</td></tr>)}</tbody></table></div>
  </div>;
};

export const ScenarioWorkshop = ({ courseId }: { courseId: CourseId }) => {
  const [networkMode, setNetworkMode] = useState<'cable' | 'osi'>('cable');
  const meta = {
    'c-language': { icon: MemoryStick, title: 'C语言单步执行与内存观察' },
    vfp: { icon: Database, title: 'VFP数据表与记录操作模拟' },
    network: { icon: Cable, title: '网络工程手动模拟' },
    office: { icon: FileSpreadsheet, title: '办公数据处理模拟' },
  }[courseId];
  const Icon = meta.icon;
  return <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <header className="flex flex-wrap items-center justify-between gap-3 border-b bg-slate-50 p-5"><div className="flex items-center gap-3"><span className="rounded-xl bg-indigo-100 p-2 text-indigo-700"><Icon className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Scenario workshop</p><h3 className="font-bold text-slate-900">{meta.title}</h3></div></div>
      {courseId === 'network' && <div className="flex gap-2"><button onClick={() => setNetworkMode('cable')} className={`rounded-lg px-3 py-2 text-xs font-bold ${networkMode === 'cable' ? 'bg-slate-900 text-white' : 'bg-white'}`}>水晶头接线</button><button onClick={() => setNetworkMode('osi')} className={`rounded-lg px-3 py-2 text-xs font-bold ${networkMode === 'osi' ? 'bg-slate-900 text-white' : 'bg-white'}`}>OSI封装</button></div>}
    </header>
    <div className="p-4 sm:p-6">
      {courseId === 'c-language' && <CTraceWorkshop />}
      {courseId === 'vfp' && <VfpWorkshop />}
      {courseId === 'network' && (networkMode === 'cable' ? <CableWorkshop /> : <OsiWorkshop />)}
      {courseId === 'office' && <OfficeWorkshop />}
    </div>
  </section>;
};
