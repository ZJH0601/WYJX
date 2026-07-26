import { Exercise } from './cLanguage';
import {
  cLanguageExpandedQuestions,
  vfpExpandedQuestions,
  networkExpandedQuestions,
  officeExpandedQuestions,
} from './expandedQuestions';

/**
 * 考试/试卷数据结构
 * 支持难度分级：basic(基础)、improve(提高)、exam(真题)
 */
export interface Exam {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  /** 难度等级 */
  difficulty: 'basic' | 'improve' | 'exam';
  /** 满分 */
  totalScore: number;
  /** 题目列表 */
  questions: Exercise[];
}

/** 考试名称映射表 - 用于仪表盘显示可读的考试名称 */
export const EXAM_NAME_MAP: Record<string, string> = {
  'exam-c1': 'C语言基础测试',
  'exam-c2': 'C语言提高测试',
  'exam-c3': 'C语言真题模拟',
  'exam-v1': 'VFP数据库基础测试',
  'exam-v2': 'VFP数据库提高测试',
  'exam-v3': 'VFP数据库真题模拟',
  'exam-n1': '网络知识基础测试',
  'exam-n2': '网络知识提高测试',
  'exam-n3': '网络知识真题模拟',
  'exam-o1': '办公自动化基础测试',
  'exam-o2': '办公自动化提高测试',
  'exam-o3': '办公自动化真题模拟',
};

export const exams: Exam[] = [
  {
    id: 'exam-c1',
    title: 'C语言基础测试',
    courseId: 'c-language',
    courseName: 'C语言',
    difficulty: 'basic' as const,
    totalScore: 100,
    questions: [
      {
        id: 'ec1-1',
        type: 'single',
        question: 'C语言的基本数据类型不包括以下哪一项？',
        options: ['int', 'float', 'char', 'string'],
        answer: 'D',
        explanation: 'C语言中没有string类型，字符串是以字符数组形式存储的。',
        score: 5
      },
      {
        id: 'ec1-2',
        type: 'single',
        question: '以下哪个不是C语言的关键字？',
        options: ['int', 'float', 'main', 'char'],
        answer: 'C',
        explanation: 'main是函数名，不是关键字。',
        score: 5
      },
      {
        id: 'ec1-3',
        type: 'fill',
        question: '表达式 5 / 2 的结果是______。',
        answer: '2',
        explanation: '整型除法会舍去小数部分。',
        score: 5
      },
      {
        id: 'ec1-4',
        type: 'single',
        question: 'if语句的条件表达式的值应该是？',
        options: ['整型', '浮点型', '逻辑型', '任意类型'],
        answer: 'C',
        explanation: 'if语句的条件表达式应该是逻辑值（真或假）。',
        score: 5
      },
      {
        id: 'ec1-5',
        type: 'code',
        question: '编写一个C程序，输出"Hello, World!"',
        answer: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
        explanation: '使用printf函数输出字符串，注意包含stdio.h头文件。',
        score: 15
      },
      {
        id: 'ec1-6',
        type: 'single',
        question: '数组名arr和&arr[0]的关系是？',
        options: ['相等', 'arr更大', '&arr[0]更大', '无关'],
        answer: 'A',
        explanation: '数组名本身就是指向第一个元素的指针。',
        score: 5
      },
      {
        id: 'ec1-7',
        type: 'single',
        question: '用于获取变量地址的操作符是？',
        options: ['*', '&', '%', '#'],
        answer: 'B',
        explanation: '&是取地址符。',
        score: 5
      },
      {
        id: 'ec1-8',
        type: 'fill',
        question: '字符串在C语言中以______字符结尾。',
        answer: '\\0',
        explanation: '字符串以\\0结尾。',
        score: 5
      },
      {
        id: 'ec1-9',
        type: 'single',
        question: '递归函数必须具备的条件是？',
        options: ['返回值', '参数', '终止条件', '循环'],
        answer: 'C',
        explanation: '递归函数必须有终止条件。',
        score: 5
      },
      {
        id: 'ec1-10',
        type: 'code',
        question: '使用for循环计算1到100的累加和。',
        answer: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("1到100的和：%d\\n", sum);\n    return 0;\n}',
        explanation: '初始化sum为0，在循环中累加每个数。',
        score: 15
      },
      {
        id: 'ec1-11',
        type: 'single',
        question: '打开文件时使用"w"模式，如果文件不存在会？',
        options: ['报错', '创建文件', '跳过', '覆盖'],
        answer: 'B',
        explanation: 'w模式会创建不存在的文件。',
        score: 5
      },
      {
        id: 'ec1-12',
        type: 'single',
        question: '结构体和联合体的主要区别是？',
        options: ['语法不同', '成员共享内存', '效率不同', '用途不同'],
        answer: 'B',
        explanation: '联合体成员共享内存。',
        score: 5
      },
      {
        id: 'ec1-13',
        type: 'fill',
        question: '定义符号常量使用______指令。',
        answer: '#define',
        explanation: '#define用于定义符号常量。',
        score: 5
      },
      {
        id: 'ec1-14',
        type: 'single',
        question: 'break语句在循环中的作用是？',
        options: ['跳过当前迭代', '跳出整个循环', '继续下一次循环', '终止程序'],
        answer: 'B',
        explanation: 'break语句用于跳出整个循环。',
        score: 5
      },
      {
        id: 'ec1-15',
        type: 'single',
        question: 'sizeof(int)在32位系统中的值是？',
        options: ['2', '4', '8', '16'],
        answer: 'B',
        explanation: 'int在32位系统中占4个字节。',
        score: 5
      }
    ]
  },
  {
    id: 'exam-v1',
    title: 'VFP数据库基础测试',
    courseId: 'vfp',
    courseName: 'VFP数据库',
    difficulty: 'basic' as const,
    totalScore: 100,
    questions: [
      {
        id: 'ev1-1',
        type: 'single',
        question: '以下哪个是数据库管理系统？',
        options: ['Windows', 'VFP', 'Word', 'Excel'],
        answer: 'B',
        explanation: 'VFP是数据库管理系统。',
        score: 5
      },
      {
        id: 'ev1-2',
        type: 'fill',
        question: '创建数据表的命令是______。',
        answer: 'CREATE TABLE',
        explanation: 'CREATE TABLE用于创建数据表。',
        score: 5
      },
      {
        id: 'ev1-3',
        type: 'single',
        question: 'DELETE命令执行的是哪种删除？',
        options: ['物理删除', '逻辑删除', '永久删除', '彻底删除'],
        answer: 'B',
        explanation: 'DELETE是逻辑删除，可以恢复。',
        score: 5
      },
      {
        id: 'ev1-4',
        type: 'single',
        question: '一个数据表可以有几个主索引？',
        options: ['1个', '2个', '多个', '没有限制'],
        answer: 'A',
        explanation: '一个数据表只能有一个主索引。',
        score: 5
      },
      {
        id: 'ev1-5',
        type: 'code',
        question: '写出创建学生表的SQL语句，包含学号、姓名、性别、年龄字段。',
        answer: 'CREATE TABLE 学生 (\n    学号 C(10),\n    姓名 C(8),\n    性别 C(2),\n    年龄 N(2)\n)',
        explanation: '使用CREATE TABLE创建数据表。',
        score: 15
      },
      {
        id: 'ev1-6',
        type: 'single',
        question: 'SQL中用于查询数据的语句是？',
        options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
        answer: 'C',
        explanation: 'SELECT用于查询数据。',
        score: 5
      },
      {
        id: 'ev1-7',
        type: 'code',
        question: '写出查询学生表中所有女生记录的SQL语句。',
        answer: 'SELECT * FROM 学生 WHERE 性别="女"',
        explanation: '使用WHERE子句筛选。',
        score: 15
      },
      {
        id: 'ev1-8',
        type: 'single',
        question: '关闭表单的方法是？',
        options: ['Close', 'Release', 'Hide', 'Quit'],
        answer: 'B',
        explanation: 'Release方法关闭表单。',
        score: 5
      },
      {
        id: 'ev1-9',
        type: 'fill',
        question: '浏览数据表的命令是______。',
        answer: 'BROWSE',
        explanation: 'BROWSE用于浏览数据表。',
        score: 5
      },
      {
        id: 'ev1-10',
        type: 'single',
        question: '用于连接不同表的查询是？',
        options: ['单表查询', '连接查询', '子查询', '联合查询'],
        answer: 'B',
        explanation: '连接查询用于连接多个表。',
        score: 5
      },
      {
        id: 'ev1-11',
        type: 'single',
        question: '只返回两表中匹配记录的连接是？',
        options: ['左连接', '右连接', '内连接', '全连接'],
        answer: 'C',
        explanation: '内连接只返回匹配的记录。',
        score: 5
      },
      {
        id: 'ev1-12',
        type: 'fill',
        question: '报表设计器中显示每条记录内容的区域是______带区。',
        answer: '细节',
        explanation: '细节带区显示每条记录的内容。',
        score: 5
      },
      {
        id: 'ev1-13',
        type: 'single',
        question: '用于统计记录数的函数是？',
        options: ['SUM', 'AVG', 'COUNT', 'MAX'],
        answer: 'C',
        explanation: 'COUNT用于统计记录数。',
        score: 5
      },
      {
        id: 'ev1-14',
        type: 'single',
        question: '定位到第一条记录的命令是？',
        options: ['GO TOP', 'GO BOTTOM', 'GO 1', 'FIRST'],
        answer: 'A',
        explanation: 'GO TOP定位到第一条记录。',
        score: 5
      },
      {
        id: 'ev1-15',
        type: 'single',
        question: '用于创建表单的命令是？',
        options: ['CREATE FORM', 'NEW FORM', 'MAKE FORM', 'BUILD FORM'],
        answer: 'A',
        explanation: 'CREATE FORM用于创建表单。',
        score: 5
      }
    ]
  },
  {
    id: 'exam-n1',
    title: '网络知识基础测试',
    courseId: 'network',
    courseName: '网络知识',
    difficulty: 'basic' as const,
    totalScore: 100,
    questions: [
      {
        id: 'en1-1',
        type: 'single',
        question: '局域网的英文缩写是？',
        options: ['WAN', 'LAN', 'MAN', 'PAN'],
        answer: 'B',
        explanation: 'LAN是局域网的缩写。',
        score: 5
      },
      {
        id: 'en1-2',
        type: 'fill',
        question: 'OSI模型共有______层。',
        answer: '7',
        explanation: 'OSI模型分为7层。',
        score: 5
      },
      {
        id: 'en1-3',
        type: 'single',
        question: '负责路由选择的是哪一层？',
        options: ['数据链路层', '网络层', '传输层', '应用层'],
        answer: 'B',
        explanation: '网络层负责路由选择。',
        score: 5
      },
      {
        id: 'en1-4',
        type: 'single',
        question: '192.168.1.1属于哪类IP地址？',
        options: ['A类', 'B类', 'C类', 'D类'],
        answer: 'C',
        explanation: '192开头的是C类地址。',
        score: 5
      },
      {
        id: 'en1-5',
        type: 'single',
        question: '面向连接的可靠传输协议是？',
        options: ['IP', 'TCP', 'UDP', 'HTTP'],
        answer: 'B',
        explanation: 'TCP是面向连接的可靠协议。',
        score: 5
      },
      {
        id: 'en1-6',
        type: 'single',
        question: 'TCP/IP模型分为几层？',
        options: ['4层', '5层', '6层', '7层'],
        answer: 'A',
        explanation: 'TCP/IP模型分为4层。',
        score: 5
      },
      {
        id: 'en1-7',
        type: 'fill',
        question: 'HTTP状态码404表示______。',
        answer: '资源未找到',
        explanation: '404表示资源未找到。',
        score: 5
      },
      {
        id: 'en1-8',
        type: 'single',
        question: 'DNS的作用是？',
        options: ['文件传输', '域名解析', '邮件发送', '网页浏览'],
        answer: 'B',
        explanation: 'DNS用于域名解析。',
        score: 5
      },
      {
        id: 'en1-9',
        type: 'fill',
        question: 'FTP的控制连接端口是______。',
        answer: '21',
        explanation: 'FTP使用21端口。',
        score: 5
      },
      {
        id: 'en1-10',
        type: 'single',
        question: '网络安全的三大原则不包括？',
        options: ['保密性', '完整性', '可用性', '开放性'],
        answer: 'D',
        explanation: '三大原则是保密性、完整性、可用性。',
        score: 5
      },
      {
        id: 'en1-11',
        type: 'single',
        question: '根据IP地址和端口过滤数据包的防火墙是？',
        options: ['应用层防火墙', '状态检测防火墙', '包过滤防火墙', '代理防火墙'],
        answer: 'C',
        explanation: '包过滤防火墙根据IP和端口过滤。',
        score: 5
      },
      {
        id: 'en1-12',
        type: 'single',
        question: '加密和解密使用相同密钥的加密方式是？',
        options: ['对称加密', '非对称加密', '哈希加密', '数字签名'],
        answer: 'A',
        explanation: '对称加密使用相同密钥。',
        score: 5
      },
      {
        id: 'en1-13',
        type: 'single',
        question: '所有节点通过中央节点连接的拓扑结构是？',
        options: ['总线型', '星型', '环型', '网状型'],
        answer: 'B',
        explanation: '星型拓扑通过中央节点连接。',
        score: 5
      },
      {
        id: 'en1-14',
        type: 'single',
        question: '用于连接不同网络的设备是？',
        options: ['交换机', '集线器', '路由器', '网卡'],
        answer: 'C',
        explanation: '路由器连接不同网络。',
        score: 5
      },
      {
        id: 'en1-15',
        type: 'single',
        question: 'TCP三次握手的目的是？',
        options: ['加密数据', '建立连接', '传输数据', '断开连接'],
        answer: 'B',
        explanation: '三次握手用于建立连接。',
        score: 5
      },
      {
        id: 'en1-16',
        type: 'single',
        question: 'UDP适合哪种场景？',
        options: ['文件传输', '网页浏览', '视频会议', '邮件发送'],
        answer: 'C',
        explanation: 'UDP速度快，适合实时应用。',
        score: 5
      },
      {
        id: 'en1-17',
        type: 'fill',
        question: '子网掩码255.255.255.0对应的是______类地址。',
        answer: 'C',
        explanation: '255.255.255.0是C类地址的默认子网掩码。',
        score: 5
      },
      {
        id: 'en1-18',
        type: 'single',
        question: 'HTTP协议工作在哪一层？',
        options: ['网络层', '传输层', '应用层', '数据链路层'],
        answer: 'C',
        explanation: 'HTTP是应用层协议。',
        score: 5
      }
    ]
  },
  {
    id: 'exam-o1',
    title: '办公自动化基础测试',
    courseId: 'office',
    courseName: '办公自动化',
    difficulty: 'basic' as const,
    totalScore: 100,
    questions: [
      {
        id: 'eo1-1',
        type: 'fill',
        question: 'Excel公式的开头符号是______。',
        answer: '=',
        explanation: '公式以等号开头。',
        score: 5
      },
      {
        id: 'eo1-2',
        type: 'single',
        question: '统计非空单元格数量的函数是？',
        options: ['COUNT', 'COUNTA', 'COUNTIF', 'SUM'],
        answer: 'B',
        explanation: 'COUNTA统计非空单元格。',
        score: 5
      },
      {
        id: 'eo1-3',
        type: 'single',
        question: '绝对引用的符号是？',
        options: ['#', '$', '%', '&'],
        answer: 'B',
        explanation: '$表示绝对引用。',
        score: 5
      },
      {
        id: 'eo1-4',
        type: 'code',
        question: '写出计算A1到A10单元格平均值的公式。',
        answer: '=AVERAGE(A1:A10)',
        explanation: 'AVERAGE函数计算平均值。',
        score: 10
      },
      {
        id: 'eo1-5',
        type: 'single',
        question: 'IF函数的语法是？',
        options: ['IF(真值, 条件, 假值)', 'IF(条件, 真值, 假值)', 'IF(真值, 假值, 条件)', 'IF(条件, 假值, 真值)'],
        answer: 'B',
        explanation: 'IF(条件, 真值, 假值)。',
        score: 5
      },
      {
        id: 'eo1-6',
        type: 'code',
        question: '写出判断A1单元格成绩是否及格的公式（60分为及格线）。',
        answer: '=IF(A1>=60, "及格", "不及格")',
        explanation: '使用IF函数进行条件判断。',
        score: 10
      },
      {
        id: 'eo1-7',
        type: 'single',
        question: '从小到大排列称为？',
        options: ['升序', '降序', '乱序', '倒序'],
        answer: 'A',
        explanation: '升序是从小到大排列。',
        score: 5
      },
      {
        id: 'eo1-8',
        type: 'fill',
        question: '用于快速汇总和分析大量数据的工具是______。',
        answer: '数据透视表',
        explanation: '数据透视表用于数据汇总分析。',
        score: 5
      },
      {
        id: 'eo1-9',
        type: 'single',
        question: '页面视图的特点是？',
        options: ['显示文档结构', '所见即所得', '简化编辑', '网页预览'],
        answer: 'B',
        explanation: '页面视图所见即所得。',
        score: 5
      },
      {
        id: 'eo1-10',
        type: 'single',
        question: '设置段落第一行缩进的方式是？',
        options: ['左缩进', '右缩进', '首行缩进', '悬挂缩进'],
        answer: 'C',
        explanation: '首行缩进设置第一行缩进。',
        score: 5
      },
      {
        id: 'eo1-11',
        type: 'fill',
        question: '页面顶部的内容称为______。',
        answer: '页眉',
        explanation: '页眉在页面顶部。',
        score: 5
      },
      {
        id: 'eo1-12',
        type: 'single',
        question: '一组格式设置的集合称为？',
        options: ['模板', '样式', '主题', '格式'],
        answer: 'B',
        explanation: '样式是格式集合。',
        score: 5
      },
      {
        id: 'eo1-13',
        type: 'single',
        question: '文本环绕在图片四周的环绕方式是？',
        options: ['嵌入型', '四周型环绕', '紧密型环绕', '浮于文字上方'],
        answer: 'B',
        explanation: '四周型环绕使文本环绕图片。',
        score: 5
      },
      {
        id: 'eo1-14',
        type: 'single',
        question: '批量生成文档的功能是？',
        options: ['复制粘贴', '邮件合并', '数据透视', '模板套用'],
        answer: 'B',
        explanation: '邮件合并用于批量生成文档。',
        score: 5
      },
      {
        id: 'eo1-15',
        type: 'single',
        question: '显示货币符号的数字格式是？',
        options: ['数值格式', '货币格式', '百分比格式', '日期格式'],
        answer: 'B',
        explanation: '货币格式显示货币符号。',
        score: 5
      },
      {
        id: 'eo1-16',
        type: 'single',
        question: 'COUNTA函数的作用是？',
        options: ['统计数值单元格', '统计非空单元格', '按条件统计', '求和'],
        answer: 'B',
        explanation: 'COUNTA统计非空单元格。',
        score: 5
      },
      {
        id: 'eo1-17',
        type: 'single',
        question: 'AND函数的返回值是？',
        options: ['所有条件都为真时返回真', '任一条件为真时返回真', '条件为假时返回真', '条件为真时返回假'],
        answer: 'A',
        explanation: 'AND函数要求所有条件都为真。',
        score: 5
      },
      {
        id: 'eo1-18',
        type: 'single',
        question: '在Excel中，$A$1表示什么引用？',
        options: ['相对引用', '绝对引用', '混合引用', '外部引用'],
        answer: 'B',
        explanation: '$A$1是绝对引用。',
        score: 5
      }
    ]
  },
  /** === 扩展题库试卷 === */

  /** C语言 - 提高难度 */
  {
    id: 'exam-c2',
    title: 'C语言提高测试',
    courseId: 'c-language',
    courseName: 'C语言',
    difficulty: 'improve' as const,
    totalScore: cLanguageExpandedQuestions.improve.reduce((s, q) => s + q.score, 0),
    questions: cLanguageExpandedQuestions.improve,
  },
  /** C语言 - 真题难度 */
  {
    id: 'exam-c3',
    title: 'C语言真题模拟',
    courseId: 'c-language',
    courseName: 'C语言',
    difficulty: 'exam' as const,
    totalScore: cLanguageExpandedQuestions.exam.reduce((s, q) => s + q.score, 0),
    questions: cLanguageExpandedQuestions.exam,
  },

  /** VFP数据库 - 提高难度 */
  {
    id: 'exam-v2',
    title: 'VFP数据库提高测试',
    courseId: 'vfp',
    courseName: 'VFP数据库',
    difficulty: 'improve' as const,
    totalScore: vfpExpandedQuestions.improve.reduce((s, q) => s + q.score, 0),
    questions: vfpExpandedQuestions.improve,
  },
  /** VFP数据库 - 真题难度 */
  {
    id: 'exam-v3',
    title: 'VFP数据库真题模拟',
    courseId: 'vfp',
    courseName: 'VFP数据库',
    difficulty: 'exam' as const,
    totalScore: vfpExpandedQuestions.exam.reduce((s, q) => s + q.score, 0),
    questions: vfpExpandedQuestions.exam,
  },

  /** 网络知识 - 提高难度 */
  {
    id: 'exam-n2',
    title: '网络知识提高测试',
    courseId: 'network',
    courseName: '网络知识',
    difficulty: 'improve' as const,
    totalScore: networkExpandedQuestions.improve.reduce((s, q) => s + q.score, 0),
    questions: networkExpandedQuestions.improve,
  },
  /** 网络知识 - 真题难度 */
  {
    id: 'exam-n3',
    title: '网络知识真题模拟',
    courseId: 'network',
    courseName: '网络知识',
    difficulty: 'exam' as const,
    totalScore: networkExpandedQuestions.exam.reduce((s, q) => s + q.score, 0),
    questions: networkExpandedQuestions.exam,
  },

  /** 办公自动化 - 提高难度 */
  {
    id: 'exam-o2',
    title: '办公自动化提高测试',
    courseId: 'office',
    courseName: '办公自动化',
    difficulty: 'improve' as const,
    totalScore: officeExpandedQuestions.improve.reduce((s, q) => s + q.score, 0),
    questions: officeExpandedQuestions.improve,
  },
  /** 办公自动化 - 真题难度 */
  {
    id: 'exam-o3',
    title: '办公自动化真题模拟',
    courseId: 'office',
    courseName: '办公自动化',
    difficulty: 'exam' as const,
    totalScore: officeExpandedQuestions.exam.reduce((s, q) => s + q.score, 0),
    questions: officeExpandedQuestions.exam,
  },
];

export const getExamsByCourse = (courseId: string): Exam[] => {
  return exams.filter(exam => exam.courseId === courseId);
};

export const getExamById = (examId: string): Exam | undefined => {
  return exams.find(exam => exam.id === examId);
};
