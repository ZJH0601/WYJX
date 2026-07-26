import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, Database, FlaskConical, Play, RotateCcw, Terminal } from 'lucide-react';

type LabCourse = 'c-language' | 'vfp' | 'network' | 'office';

const C_STARTER = `#include <stdio.h>

int main() {
  int score = 78;
  int bonus = 5;
  printf("最终成绩：%d\\n", score + bonus);

  for (int i = 1; i <= 3; i++) {
    printf("第%d次练习\\n", i);
  }
  return 0;
}`;

const transformCToJs = (source: string) => {
  if (source.length > 12000) throw new Error('代码过长：教学实验台最多支持 12000 个字符。');
  const structuralSource = source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, '""');
  const forbidden = structuralSource.match(
    /\b(?:window|document|globalThis|self|fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage|indexedDB|Function|eval|constructor|__proto__|prototype|importScripts|postMessage|location|navigator|alert|confirm|prompt|console|function|class|async|await|new|try|catch|throw|do)\b|=>/,
  );
  if (forbidden) throw new Error(`教学子集不支持或不允许使用“${forbidden[0]}”。`);
  for (const match of structuralSource.matchAll(/\b(?:for|while)\s*\([^)]*\)\s*/g)) {
    const nextCharacter = structuralSource[(match.index || 0) + match[0].length];
    if (nextCharacter !== '{') throw new Error('为保证运行安全，for 和 while 循环体必须使用 { }。');
  }
  const main = source.match(/int\s+main\s*\([^)]*\)\s*\{([\s\S]*)\}\s*$/);
  if (!main) throw new Error('请保留 int main() { ... } 主函数。');
  const transformed = main[1]
    .replace(/return\s+0\s*;/g, '')
    .replace(/\b(?:int|float|double|char)\s+([a-zA-Z_]\w*)\s*=/g, 'let $1 =')
    .replace(/for\s*\(\s*(?:int|float|double|char)\s+/g, 'for (let ')
    .replace(/(for\s*\([^)]*\)\s*\{|while\s*\([^)]*\)\s*\{)/g, '$1 if (++__steps > 10000) throw new Error("循环次数超过教学实验上限（10000）");')
    .replace(/printf\s*\(([\s\S]*?)\)\s*;/g, '__printf($1);');
  return `let __steps = 0;\n${transformed}`;
};

const runCSubset = (source: string) => {
  const js = transformCToJs(source);
  const output: string[] = [];
  const printf = (format: unknown, ...args: unknown[]) => {
    let index = 0;
    const rendered = String(format).replace(/%[dfs]/g, () => String(args[index++] ?? ''));
    output.push(rendered.replace(/\\n/g, '\n'));
  };
  // 代码只运行于本页，实验台明确限制为教学子集。
  const execute = new Function('__printf', `"use strict";\n${js}`);
  execute(printf);
  return output.join('');
};

const students = [
  { id: '202601', name: '林晓', gender: '女', score: 92, major: '计算机' },
  { id: '202602', name: '陈宇', gender: '男', score: 76, major: '电子商务' },
  { id: '202603', name: '周宁', gender: '女', score: 84, major: '计算机' },
  { id: '202604', name: '赵晨', gender: '男', score: 58, major: '网络技术' },
];

const runSql = (sql: string) => {
  const normalized = sql.trim().replace(/;$/, '');
  const match = normalized.match(/^select\s+(.+?)\s+from\s+students(?:\s+where\s+(.+?))?(?:\s+order\s+by\s+(\w+)(?:\s+(asc|desc))?)?$/i);
  if (!match) throw new Error('支持 SELECT 字段 FROM students [WHERE 条件] [ORDER BY 字段]。');
  const [, fieldText, where, orderField, direction] = match;
  let rows = [...students];
  if (where) {
    const condition = where.match(/^(\w+)\s*(=|>=|<=|>|<)\s*['"]?([^'"]+)['"]?$/);
    if (!condition) throw new Error('WHERE 示例：score >= 80 或 gender = "女"');
    const [, field, operator, rawValue] = condition;
    rows = rows.filter((row) => {
      const value = row[field as keyof typeof row];
      const target = typeof value === 'number' ? Number(rawValue) : rawValue;
      if (operator === '=') return value === target;
      if (operator === '>=') return value >= target;
      if (operator === '<=') return value <= target;
      if (operator === '>') return value > target;
      return value < target;
    });
  }
  if (orderField) {
    rows.sort((a, b) => {
      const left = a[orderField as keyof typeof a];
      const right = b[orderField as keyof typeof b];
      const result = left > right ? 1 : left < right ? -1 : 0;
      return direction?.toLowerCase() === 'desc' ? -result : result;
    });
  }
  const fields = fieldText.trim() === '*' ? Object.keys(students[0]) : fieldText.split(',').map((item) => item.trim());
  if (fields.some((field) => !(field in students[0]))) throw new Error('字段可用：id、name、gender、score、major。');
  return { fields, rows };
};

const ipToNumber = (ip: string) => ip.split('.').reduce((total, octet) => (total << 8) + Number(octet), 0) >>> 0;
const numberToIp = (value: number) => [24, 16, 8, 0].map((shift) => (value >>> shift) & 255).join('.');

const subnet = (cidr: string) => {
  const [ip, prefixText] = cidr.trim().split('/');
  const octets = ip?.split('.').map(Number);
  const prefix = Number(prefixText);
  if (!octets || octets.length !== 4 || octets.some((n) => !Number.isInteger(n) || n < 0 || n > 255) || prefix < 1 || prefix > 30) {
    throw new Error('请输入合法地址，例如 192.168.10.37/24（前缀范围 /1～/30）。');
  }
  const mask = (0xffffffff << (32 - prefix)) >>> 0;
  const ipNumber = ipToNumber(ip);
  const network = (ipNumber & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  return {
    mask: numberToIp(mask),
    network: numberToIp(network),
    first: numberToIp(network + 1),
    last: numberToIp(broadcast - 1),
    broadcast: numberToIp(broadcast),
    hosts: 2 ** (32 - prefix) - 2,
  };
};

const parseCells = (text: string) => text.split(',').map((item) => Number(item.trim())).filter(Number.isFinite);
const runFormula = (formula: string, values: string) => {
  const nums = parseCells(values);
  if (!nums.length) throw new Error('请至少输入一个数值。');
  const name = formula.trim().replace(/^=/, '').toUpperCase();
  if (name.startsWith('SUM')) return nums.reduce((a, b) => a + b, 0);
  if (name.startsWith('AVERAGE')) return nums.reduce((a, b) => a + b, 0) / nums.length;
  if (name.startsWith('MAX')) return Math.max(...nums);
  if (name.startsWith('MIN')) return Math.min(...nums);
  if (name.startsWith('COUNT')) return nums.length;
  throw new Error('本实验支持 SUM、AVERAGE、MAX、MIN、COUNT。');
};

const config: Record<LabCourse, { title: string; subtitle: string; icon: typeof Terminal }> = {
  'c-language': { title: 'C 语言运行实验台', subtitle: '支持变量、算术、判断、循环与 printf 的教学子集。', icon: Terminal },
  vfp: { title: 'VFP / SQL 查询实验台', subtitle: '在内置学生表上执行 SELECT、WHERE 与 ORDER BY。', icon: Database },
  network: { title: 'IPv4 子网划分实验台', subtitle: '输入任意 CIDR，立即验证掩码、地址范围与主机数。', icon: Calculator },
  office: { title: 'Excel 公式实验台', subtitle: '修改单元格数据，观察函数结果如何随数据变化。', icon: FlaskConical },
};

type SqlResult = { fields: string[]; rows: typeof students };
const isSqlResult = (value: unknown): value is SqlResult =>
  typeof value === 'object' && value !== null && 'fields' in value && 'rows' in value;

const missionFor = (courseId: LabCourse, lessonTitle?: string) => {
  const focus = lessonTitle ? `围绕“${lessonTitle}”` : '围绕当前课程';
  const missions: Record<LabCourse, string> = {
    'c-language': `${focus}：先预测程序输出；再修改一个变量、运算符或循环边界；运行后解释哪一行导致结果变化。`,
    vfp: `${focus}：观察学生表字段与记录；编写查询缩小结果集；再改变 WHERE 条件并解释筛选顺序。`,
    network: `${focus}：先手算网络地址和可用主机数；再输入 CIDR 验证；最后改变前缀并比较地址空间变化。`,
    office: `${focus}：先根据数据估算结果；输入函数进行验证；改变一个单元格并说明公式如何重新计算。`,
  };
  return missions[courseId];
};

export const InteractiveLab = ({ courseId, compact = false, lessonTitle }: { courseId: LabCourse; compact?: boolean; lessonTitle?: string }) => {
  const [code, setCode] = useState(C_STARTER);
  const [sql, setSql] = useState('SELECT name, score FROM students WHERE score >= 80 ORDER BY score DESC;');
  const [cidr, setCidr] = useState('192.168.10.37/24');
  const [values, setValues] = useState('78, 92, 65, 88, 96');
  const [formula, setFormula] = useState('=AVERAGE(A1:A5)');
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState('');
  const meta = config[courseId];
  const Icon = meta.icon;

  const input = useMemo(() => ({ code, sql, cidr, values, formula }), [code, sql, cidr, values, formula]);
  const run = () => {
    setError('');
    try {
      if (courseId === 'c-language') setResult(runCSubset(input.code));
      if (courseId === 'vfp') setResult(runSql(input.sql));
      if (courseId === 'network') setResult(subnet(input.cidr));
      if (courseId === 'office') setResult(runFormula(input.formula, input.values));
    } catch (reason) {
      setResult(null);
      setError(reason instanceof Error ? reason.message : '运行失败，请检查输入。');
    }
  };

  return (
    <section className={`overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 text-slate-100 ${compact ? 'mt-6' : ''}`}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300"><Icon className="h-5 w-5" /></span>
          <div>
            <h3 className="font-bold">{meta.title}</h3>
            <p className="text-xs text-slate-400">{meta.subtitle}</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">浏览器本地运行 · 不上传代码</span>
      </header>
      <div className="border-b border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-sm leading-6 text-cyan-100 sm:px-6">
        <strong className="text-cyan-300">本节情景任务：</strong>{missionFor(courseId, lessonTitle)}
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="border-b border-slate-800 p-4 lg:border-b-0 lg:border-r sm:p-6">
          {courseId === 'c-language' && (
            <textarea aria-label="C语言代码编辑器" value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false}
              className="min-h-80 w-full resize-y rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm leading-6 text-cyan-50 outline-none focus:border-cyan-400" />
          )}
          {courseId === 'vfp' && (
            <>
              <div className="mb-3 overflow-x-auto rounded-lg border border-slate-700 text-xs">
                <table className="w-full"><thead className="bg-slate-800"><tr>{Object.keys(students[0]).map((key) => <th key={key} className="p-2 text-left">{key}</th>)}</tr></thead>
                  <tbody>{students.map((row) => <tr key={row.id} className="border-t border-slate-800">{Object.values(row).map((value, index) => <td key={index} className="p-2">{value}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <textarea aria-label="SQL编辑器" value={sql} onChange={(e) => setSql(e.target.value)} spellCheck={false}
                className="min-h-32 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-cyan-50 outline-none focus:border-cyan-400" />
            </>
          )}
          {courseId === 'network' && (
            <label className="block text-sm font-semibold text-slate-300">IPv4 地址 / 前缀
              <input value={cidr} onChange={(e) => setCidr(e.target.value)} className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-lg outline-none focus:border-cyan-400" />
            </label>
          )}
          {courseId === 'office' && (
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-slate-300">A1:A5 数据（用逗号分隔）
                <input value={values} onChange={(e) => setValues(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-400" />
              </label>
              <label className="block text-sm font-semibold text-slate-300">公式
                <input value={formula} onChange={(e) => setFormula(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono outline-none focus:border-cyan-400" />
              </label>
            </div>
          )}
          <div className="mt-4 flex gap-3">
            <button onClick={run} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 font-bold text-slate-950 hover:bg-cyan-300">
              <Play className="h-4 w-4" />运行并验证
            </button>
            <button onClick={() => { setResult(null); setError(''); }} title="清空结果" className="min-h-11 rounded-xl border border-slate-700 px-4 text-slate-300 hover:bg-slate-800">
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="min-h-56 p-4 sm:p-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">运行结果 / 验证反馈</p>
          {error && <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">{error}</div>}
          {result === null && !error && <p className="rounded-xl border border-dashed border-slate-700 p-6 text-sm leading-6 text-slate-500">先预测结果，再点击“运行并验证”。修改一个变量或条件后重复实验，并用自己的话解释变化原因。</p>}
          {typeof result === 'string' && <pre className="whitespace-pre-wrap rounded-xl bg-black/30 p-4 font-mono text-sm text-emerald-300">{result || '程序运行完成（无输出）'}</pre>}
          {typeof result === 'number' && <div className="rounded-xl bg-emerald-400/10 p-6 text-center"><p className="text-sm text-emerald-300">计算结果</p><p className="mt-2 text-4xl font-black text-white">{Number(result.toFixed(4))}</p></div>}
          {courseId === 'network' && result && typeof result === 'object' && (
            <dl className="grid gap-3 sm:grid-cols-2">{Object.entries(result as Record<string, string | number>).map(([key, value]) => <div key={key} className="rounded-xl bg-slate-900 p-3"><dt className="text-xs text-slate-500">{key}</dt><dd className="mt-1 font-mono text-cyan-200">{value}</dd></div>)}</dl>
          )}
          {courseId === 'vfp' && isSqlResult(result) && (
            <div className="overflow-x-auto rounded-xl border border-slate-700"><table className="w-full text-sm"><thead className="bg-slate-800"><tr>{result.fields.map((field) => <th key={field} className="p-3 text-left">{field}</th>)}</tr></thead>
              <tbody>{result.rows.map((row) => <tr key={row.id} className="border-t border-slate-800">{result.fields.map((field) => <td key={field} className="p-3">{String(row[field as keyof typeof row])}</td>)}</tr>)}</tbody>
            </table></div>
          )}
          {result !== null && !error && <p className="mt-4 flex items-center gap-2 text-xs text-emerald-300"><CheckCircle2 className="h-4 w-4" />已完成一次主动验证。继续修改条件，尝试制造边界情况。</p>}
        </div>
      </div>
    </section>
  );
};
