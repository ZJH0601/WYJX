import { Exercise } from './cLanguage';
import { Exam } from './questions';

type CourseId = 'c-language' | 'vfp' | 'network' | 'office';
type Difficulty = 'basic' | 'improve' | 'exam';

const difficultyFor = (seed: number): Difficulty => seed % 5 < 2 ? 'basic' : seed % 5 < 4 ? 'improve' : 'exam';
const choice = (id: string, question: string, options: string[], answer: number, explanation: string, difficulty: Difficulty): Exercise => ({
  id, type: 'single', question, options, answer: String.fromCharCode(65 + answer), explanation, score: 5, difficulty,
});

const cQuestions = (): Exercise[] => Array.from({ length: 250 }, (_, index) => {
  const seed = index + 1;
  const a = 6 + (seed * 7) % 41;
  const b = 2 + (seed * 11) % 13;
  const n = 3 + seed % 15;
  const d = difficultyFor(seed);
  const remainder = a % b;
  const loopSum = n * (n + 1) / 2;
  return [
    choice(`c-arithmetic-${seed}`, `执行 int a=${a}, b=${b}; printf("%d", a % b); 输出是什么？`,
      [String(remainder), String(Math.floor(a / b)), String(a + b), String(a * b)], 0,
      `% 是求余运算符，${a} = ${Math.floor(a / b)} × ${b} + ${remainder}，所以余数为 ${remainder}。`, d),
    choice(`c-loop-${seed}`, `下面循环结束后 sum 的值是多少？int sum=0; for(int i=1;i<=${n};i++) sum+=i;`,
      [String(loopSum), String(loopSum - n), String(n * n), String(n)], 0,
      `循环累加 1 到 ${n}，等差数列和为 ${n}×(${n}+1)÷2=${loopSum}。注意条件 i<=${n} 包含终点。`, d),
    choice(`c-condition-${seed}`, `int x=${a}, y=${b}; 执行 if(x>y) x=x-y; else x=x+y; 最终 x 是多少？`,
      [String(a - b), String(a + b), String(b - a), String(a)], 0,
      `${a}>${b} 为真，执行 if 分支 x=x-y，得到 ${a}-${b}=${a - b}。else 分支不会执行。`, d),
    choice(`c-array-${seed}`, `int a[5]={${a},${b},${a + b},${a - b},${a * b}}; 表达式 a[2] 的值是？`,
      [String(a + b), String(b), String(a - b), String(a * b)], 0,
      `C 数组下标从 0 开始：a[0]=${a}，a[1]=${b}，a[2]=${a + b}。`, d),
  ];
}).flat();

const vfpQuestions = (): Exercise[] => Array.from({ length: 250 }, (_, index) => {
  const seed = index + 1;
  const threshold = 55 + seed % 36;
  const count = 3 + seed % 20;
  const width = 6 + seed % 15;
  const d = difficultyFor(seed);
  return [
    choice(`v-select-${seed}`, `查询“成绩”表中分数大于等于 ${threshold} 的全部记录，正确命令是？`,
      [`SELECT * FROM 成绩 WHERE 分数>=${threshold}`, `SELECT 成绩 WHERE 分数>=${threshold}`, `LIST * FOR ${threshold}`, `SELECT * FROM 成绩 ORDER BY ${threshold}`], 0,
      `SELECT * 表示全部字段，FROM 指定数据表，WHERE 分数>=${threshold} 才是筛选条件。`, d),
    choice(`v-field-${seed}`, `字段“学号”固定保存 ${width} 位数字且可能以 0 开头，最合适的字段类型是？`,
      [`字符型 C(${width})`, `数值型 N(${width})`, '日期型 D', '逻辑型 L'], 0,
      `学号不参与算术且可能有前导 0，应使用字符型；数值型会丢失前导 0。`, d),
    choice(`v-record-${seed}`, `当前表有 ${count} 条记录，执行 APPEND BLANK 后记录数通常变为？`,
      [String(count + 1), String(count), String(count - 1), '0'], 0,
      `APPEND BLANK 在表尾追加一条空记录，因此记录总数从 ${count} 增为 ${count + 1}。`, d),
    choice(`v-index-${seed}`, `要按“学号”快速定位记录，建立索引后最适合使用哪条命令？`,
      ['SEEK 学号值', 'GO BOTTOM ALL', 'PACK 学号', 'ZAP 学号'], 0,
      'SEEK 利用当前索引键快速查找；PACK 清理删除标记，ZAP 删除全部记录，都不是查询命令。', d),
  ];
}).flat();

const prefixToMask = (prefix: number) => {
  const mask = (0xffffffff << (32 - prefix)) >>> 0;
  return [24, 16, 8, 0].map((shift) => (mask >>> shift) & 255).join('.');
};

const networkQuestions = (): Exercise[] => Array.from({ length: 250 }, (_, index) => {
  const seed = index + 1;
  const prefix = 20 + seed % 11;
  const hosts = 2 ** (32 - prefix) - 2;
  const third = seed % 200;
  const d = difficultyFor(seed);
  const layers = [
    ['交换机', '数据链路层', '根据 MAC 地址转发帧'],
    ['路由器', '网络层', '根据 IP 地址选择路径'],
    ['TCP', '传输层', '提供可靠的端到端传输'],
    ['HTTP', '应用层', '为网页提供请求与响应规则'],
  ];
  const [device, layer, reason] = layers[seed % layers.length];
  return [
    choice(`n-host-${seed}`, `IPv4 网络 /${prefix}（传统可用主机计算）最多可分配多少个主机地址？`,
      [String(hosts), String(hosts + 2), String(2 ** (32 - prefix - 1)), String(prefix)], 0,
      `主机位有 32-${prefix}=${32 - prefix} 位，共 ${2 ** (32 - prefix)} 个地址，扣除网络地址和广播地址后为 ${hosts}。`, d),
    choice(`n-mask-${seed}`, `前缀长度 /${prefix} 对应的子网掩码是？`,
      [prefixToMask(prefix), '255.255.255.0', '255.0.0.0', '0.0.0.0'], 0,
      `/${prefix} 表示掩码前 ${prefix} 位为 1，换算为点分十进制是 ${prefixToMask(prefix)}。`, d),
    choice(`n-private-${seed}`, `地址 192.168.${third}.10 属于哪一类地址？`,
      ['私有 IPv4 地址', '公网 IPv4 地址', '组播地址', '环回地址'], 0,
      '192.168.0.0/16 是 RFC 1918 私有地址范围，不能直接在公网路由。', d),
    choice(`n-layer-${seed}`, `${device}主要工作在哪一层？`,
      [layer, '物理层', '会话层', '表示层'], 0,
      `${device}对应${layer}，核心原因是：${reason}。`, d),
  ];
}).flat();

const officeQuestions = (): Exercise[] => Array.from({ length: 250 }, (_, index) => {
  const seed = index + 1;
  const a = 40 + seed % 50;
  const b = 50 + (seed * 3) % 45;
  const c = 60 + (seed * 7) % 39;
  const average = Number(((a + b + c) / 3).toFixed(2));
  const d = difficultyFor(seed);
  return [
    choice(`o-sum-${seed}`, `A1:A3 分别为 ${a}、${b}、${c}，公式 =SUM(A1:A3) 的结果是？`,
      [String(a + b + c), String(average), String(Math.max(a, b, c)), '3'], 0,
      `SUM 对区域内数值求和：${a}+${b}+${c}=${a + b + c}。`, d),
    choice(`o-average-${seed}`, `A1:A3 分别为 ${a}、${b}、${c}，=AVERAGE(A1:A3) 的结果（保留两位）是？`,
      [String(average), String(a + b + c), String(Math.min(a, b, c)), '3'], 0,
      `AVERAGE=总和÷个数=(${a}+${b}+${c})÷3=${average}。`, d),
    choice(`o-if-${seed}`, `A1=${a}，公式 =IF(A1>=60,"及格","不及格") 返回？`,
      [a >= 60 ? '及格' : '不及格', a >= 60 ? '不及格' : '及格', String(a), '#VALUE!'], 0,
      `${a}>=60 的逻辑结果为${a >= 60 ? '真' : '假'}，IF 返回对应的${a >= 60 ? '第二' : '第三'}参数。`, d),
    choice(`o-reference-${seed}`, `把公式 =$A1+B$1 从第1行向下复制到第${2 + seed % 8}行，哪部分始终不变？`,
      ['A列与第1行', 'A1整体', 'B列与当前行', '所有引用都会变化'], 0,
      '$A1 锁定 A 列但行可变；B$1 锁定第 1 行但列可变。这是混合引用。', d),
  ];
}).flat();

export const massiveQuestionBanks: Record<CourseId, Exercise[]> = {
  'c-language': cQuestions(),
  vfp: vfpQuestions(),
  network: networkQuestions(),
  office: officeQuestions(),
};

export const MASSIVE_BANK_META = [
  { courseId: 'c-language' as const, courseName: 'C语言', count: massiveQuestionBanks['c-language'].length },
  { courseId: 'vfp' as const, courseName: 'VFP数据库', count: massiveQuestionBanks.vfp.length },
  { courseId: 'network' as const, courseName: '计算机网络', count: massiveQuestionBanks.network.length },
  { courseId: 'office' as const, courseName: '办公自动化', count: massiveQuestionBanks.office.length },
];

const hash = (text: string) => [...text].reduce((value, char) => ((value * 31) + char.charCodeAt(0)) >>> 0, 2166136261);
export const createMassivePracticeExam = (courseId: CourseId, difficulty: Difficulty | 'all' = 'all', size = 20): Exam => {
  const source = massiveQuestionBanks[courseId].filter((question) => difficulty === 'all' || question.difficulty === difficulty);
  const offset = hash(`${courseId}-${difficulty}-${Date.now()}`) % source.length;
  const questions = Array.from({ length: Math.min(size, source.length) }, (_, index) => source[(offset + index * 37) % source.length]);
  const meta = MASSIVE_BANK_META.find((item) => item.courseId === courseId)!;
  return {
    id: `massive-${courseId}-${Date.now()}`,
    title: `${meta.courseName} · 20题随机强化`,
    courseId,
    courseName: meta.courseName,
    difficulty: difficulty === 'all' ? 'improve' : difficulty,
    totalScore: questions.reduce((sum, question) => sum + question.score, 0),
    questions,
  };
};
