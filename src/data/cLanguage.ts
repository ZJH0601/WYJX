export interface Exercise {
  id: string;
  type: 'single' | 'multiple' | 'fill' | 'code' | 'essay';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  score: number;
  difficulty?: 'basic' | 'improve' | 'exam';
  keywords?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  code?: string;
  exercises?: Exercise[];
  visualType?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface SearchableContent {
  id: string;
  courseId: string;
  courseName: string;
  chapterId: string;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  content: string;
  type: 'lesson' | 'exercise';
}

export const cLanguageCourse: Chapter[] = [
  {
    id: 'c1',
    title: '第一章：C语言概述',
    lessons: [
      {
        id: 'c1-1',
        title: '1.1 什么是C语言',
        description: '了解C语言的历史、特点和应用领域',
        content: `<h3>1.1.1 C语言的起源</h3>
<p>C语言是由美国贝尔实验室的丹尼斯·里奇(Dennis Ritchie)在1972年为开发UNIX操作系统而设计的。它是在B语言的基础上发展起来的，因此被命名为C语言。</p>

<h3>1.1.2 C语言的特点</h3>
<ul>
<li><strong>简洁紧凑</strong>：C语言（C89/C90标准）有32个关键字，9种控制语句，程序书写形式自由</li>
<li><strong>功能强大</strong>：支持指针、结构体、联合体等复杂数据结构</li>
<li><strong>高效灵活</strong>：可以直接操作内存，执行效率高</li>
<li><strong>可移植性好</strong>：代码可以在不同操作系统间移植</li>
<li><strong>面向过程</strong>：采用结构化编程思想</li>
</ul>

<h3>1.1.3 C语言的应用领域</h3>
<ul>
<li>操作系统开发（如UNIX、Linux）</li>
<li>嵌入式系统开发</li>
<li>编译器和解释器开发</li>
<li>图形图像处理</li>
<li>游戏开发</li>
</ul>`,
        exercises: [
          {
            id: 'c1-1-1',
            type: 'single',
            question: 'C语言是由谁发明的？',
            options: ['比尔·盖茨', '丹尼斯·里奇', '史蒂夫·乔布斯', '马克·扎克伯格'],
            answer: 'B',
            explanation: 'C语言是由美国贝尔实验室的丹尼斯·里奇(Dennis Ritchie)在1972年发明的。',
            score: 2
          },
          {
            id: 'c1-1-2',
            type: 'single',
            question: 'C语言共有多少个关键字？',
            options: ['16', '32', '64', '128'],
            answer: 'B',
            explanation: 'C语言标准规定共有32个关键字，如int、float、if、else等。',
            score: 2
          }
        ]
      },
      {
        id: 'c1-2',
        title: '1.2 C语言程序的基本结构',
        description: '学习C语言程序的组成部分和基本格式',
        content: `<h3>1.2.1 简单的C程序示例</h3>
<p>下面是一个最简单的C语言程序：</p>
<pre><code class="code-block">#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>

<h3>1.2.2 程序结构解析</h3>
<ul>
<li><strong>#include &lt;stdio.h&gt;</strong>：预处理指令，包含标准输入输出头文件</li>
<li><strong>int main()</strong>：主函数，程序的入口点</li>
<li><strong>{ ... }</strong>：函数体，包含执行语句</li>
<li><strong>printf()</strong>：输出函数，用于打印信息</li>
<li><strong>return 0</strong>：返回值，表示程序正常结束</li>
</ul>

<h3>1.2.3 C程序的执行过程</h3>
<ol>
<li>编辑：使用编辑器编写源代码（.c文件）</li>
<li>编译：使用编译器将源代码编译成目标代码（.obj文件）</li>
<li>链接：将目标代码与库函数链接生成可执行文件（.exe文件）</li>
<li>运行：执行可执行文件</li>
</ol>`,
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        exercises: [
          {
            id: 'c1-2-1',
            type: 'fill',
            question: 'C程序的入口函数是______。',
            answer: 'main',
            explanation: 'main()函数是C程序的入口点，程序从这里开始执行。',
            score: 2
          },
          {
            id: 'c1-2-2',
            type: 'code',
            question: '编写一个C程序，输出"欢迎学习C语言！"',
            answer: '#include <stdio.h>\n\nint main() {\n    printf("欢迎学习C语言！\\n");\n    return 0;\n}',
            explanation: '使用printf函数输出字符串，注意包含stdio.h头文件。',
            score: 5
          }
        ]
      },
      {
        id: 'c1-3',
        title: '1.3 开发环境搭建',
        description: '了解常用的C语言开发工具',
        content: `<h3>1.3.1 常用开发环境</h3>
<ul>
<li><strong>Turbo C</strong>：经典的C语言编译器，界面简洁</li>
<li><strong>Dev-C++</strong>：基于MinGW的集成开发环境</li>
<li><strong>Code::Blocks</strong>：跨平台的开源IDE</li>
<li><strong>Visual Studio</strong>：微软的强大开发工具</li>
<li><strong>VS Code</strong>：轻量级编辑器，配合MinGW使用</li>
</ul>

<h3>1.3.2 环境配置步骤</h3>
<ol>
<li>下载并安装编译器（如MinGW）</li>
<li>配置环境变量PATH</li>
<li>验证安装是否成功：在命令行输入<code>gcc -v</code></li>
<li>编写并运行第一个程序</li>
</ol>`,
        exercises: [
          {
            id: 'c1-3-1',
            type: 'single',
            question: '验证gcc编译器安装成功的命令是？',
            options: ['gcc --help', 'gcc -v', 'gcc install', 'gcc test'],
            answer: 'B',
            explanation: 'gcc -v命令可以查看编译器的版本信息，验证安装成功。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: '第二章：数据类型与运算符',
    lessons: [
      {
        id: 'c2-1',
        title: '2.1 基本数据类型',
        description: '学习C语言的基本数据类型：整型、实型、字符型',
        content: `<h3>2.1.1 整型数据</h3>
<p>整型用于表示整数，包括以下几种：</p>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">类型</th><th class="border px-4 py-2">关键字</th><th class="border px-4 py-2">占字节数</th><th class="border px-4 py-2">取值范围</th></tr>
<tr><td class="border px-4 py-2">短整型</td><td class="border px-4 py-2">short</td><td class="border px-4 py-2">2</td><td class="border px-4 py-2">-32768 ~ 32767</td></tr>
<tr><td class="border px-4 py-2">整型</td><td class="border px-4 py-2">int</td><td class="border px-4 py-2">4</td><td class="border px-4 py-2">-2147483648 ~ 2147483647</td></tr>
<tr><td class="border px-4 py-2">长整型</td><td class="border px-4 py-2">long</td><td class="border px-4 py-2">4</td><td class="border px-4 py-2">-2147483648 ~ 2147483647</td></tr>
<tr><td class="border px-4 py-2">无符号整型</td><td class="border px-4 py-2">unsigned int</td><td class="border px-4 py-2">4</td><td class="border px-4 py-2">0 ~ 4294967295</td></tr>
</table>

<h3>2.1.2 实型数据</h3>
<p>实型用于表示小数，包括：</p>
<ul>
<li><strong>float</strong>：单精度浮点型，占4字节，有效数字6~7位</li>
<li><strong>double</strong>：双精度浮点型，占8字节，有效数字15~16位</li>
<li><strong>long double</strong>：长双精度浮点型，占16字节</li>
</ul>

<h3>2.1.3 字符型数据</h3>
<p>字符型用于表示单个字符，关键字为<strong>char</strong>，占1字节。</p>
<p>字符常量用单引号括起来，如<code>'A'</code>、<code>'b'</code>、<code>'1'</code>。</p>
<p>字符串常量用双引号括起来，如<code>"Hello"</code>。</p>`,
        exercises: [
          {
            id: 'c2-1-1',
            type: 'single',
            question: 'int类型在32位系统中占多少字节？',
            options: ['1', '2', '4', '8'],
            answer: 'C',
            explanation: '在32位和64位系统中，int类型通常都占4个字节。',
            score: 2
          },
          {
            id: 'c2-1-2',
            type: 'fill',
            question: '字符型数据的关键字是______。',
            answer: 'char',
            explanation: 'char是字符型数据的关键字，用于存储单个字符。',
            score: 2
          }
        ]
      },
      {
        id: 'c2-2',
        title: '2.2 变量与常量',
        description: '学习变量的定义、初始化和常量的使用',
        content: `<h3>2.2.1 变量的定义</h3>
<p>变量是程序中用于存储数据的内存单元，定义格式：</p>
<pre><code class="code-block">类型名 变量名;</code></pre>
<p>示例：</p>
<pre><code class="code-block">int age;           // 定义整型变量age
float score;       // 定义浮点型变量score
char grade;        // 定义字符型变量grade</code></pre>

<h3>2.2.2 变量的初始化</h3>
<p>变量可以在定义时赋初值：</p>
<pre><code class="code-block">int age = 18;           // 直接初始化
float score = 95.5;      // 直接初始化
char grade = 'A';        // 直接初始化
int a = 10, b = 20;      // 同时定义多个变量</code></pre>

<h3>2.2.3 常量</h3>
<p>常量是在程序运行过程中值不改变的量：</p>
<ul>
<li><strong>字面常量</strong>：直接写出的数值或字符，如100、3.14、'A'</li>
<li><strong>符号常量</strong>：用#define定义的常量</li>
</ul>
<pre><code class="code-block">#define PI 3.14159   // 定义符号常量PI
#define MAX 100      // 定义符号常量MAX</code></pre>`,
        code: `#include <stdio.h>
#define PI 3.14159

int main() {
    int age = 18;
    float score = 95.5;
    char grade = 'A';
    
    printf("年龄：%d\\n", age);
    printf("分数：%.2f\\n", score);
    printf("等级：%c\\n", grade);
    printf("圆周率：%f\\n", PI);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c2-2-1',
            type: 'fill',
            question: '使用______关键字定义符号常量。',
            answer: '#define',
            explanation: '#define是预处理指令，用于定义符号常量。',
            score: 2
          },
          {
            id: 'c2-2-2',
            type: 'code',
            question: '定义三个变量：name（字符数组）、age（整型）、height（浮点型），并初始化赋值。',
            answer: 'char name[20] = "张三";\nint age = 20;\nfloat height = 1.75;',
            explanation: '字符数组用于存储字符串，需要指定数组大小。',
            score: 5
          }
        ]
      },
      {
        id: 'c2-3',
        title: '2.3 运算符',
        description: '学习算术运算符、关系运算符、逻辑运算符等',
        content: `<h3>2.3.1 算术运算符</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">运算符</th><th class="border px-4 py-2">含义</th><th class="border px-4 py-2">示例</th></tr>
<tr><td class="border px-4 py-2">+</td><td class="border px-4 py-2">加法</td><td class="border px-4 py-2">a + b</td></tr>
<tr><td class="border px-4 py-2">-</td><td class="border px-4 py-2">减法</td><td class="border px-4 py-2">a - b</td></tr>
<tr><td class="border px-4 py-2">*</td><td class="border px-4 py-2">乘法</td><td class="border px-4 py-2">a * b</td></tr>
<tr><td class="border px-4 py-2">/</td><td class="border px-4 py-2">除法</td><td class="border px-4 py-2">a / b</td></tr>
<tr><td class="border px-4 py-2">%</td><td class="border px-4 py-2">取余</td><td class="border px-4 py-2">a % b</td></tr>
<tr><td class="border px-4 py-2">++</td><td class="border px-4 py-2">自增</td><td class="border px-4 py-2">a++ 或 ++a</td></tr>
<tr><td class="border px-4 py-2">--</td><td class="border px-4 py-2">自减</td><td class="border px-4 py-2">a-- 或 --a</td></tr>
</table>

<h3>2.3.2 关系运算符</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">运算符</th><th class="border px-4 py-2">含义</th><th class="border px-4 py-2">示例</th></tr>
<tr><td class="border px-4 py-2">></td><td class="border px-4 py-2">大于</td><td class="border px-4 py-2">a > b</td></tr>
<tr><td class="border px-4 py-2"><</td><td class="border px-4 py-2">小于</td><td class="border px-4 py-2">a < b</td></tr>
<tr><td class="border px-4 py-2">>=</td><td class="border px-4 py-2">大于等于</td><td class="border px-4 py-2">a >= b</td></tr>
<tr><td class="border px-4 py-2"><=</td><td class="border px-4 py-2">小于等于</td><td class="border px-4 py-2">a <= b</td></tr>
<tr><td class="border px-4 py-2">==</td><td class="border px-4 py-2">等于</td><td class="border px-4 py-2">a == b</td></tr>
<tr><td class="border px-4 py-2">!=</td><td class="border px-4 py-2">不等于</td><td class="border px-4 py-2">a != b</td></tr>
</table>

<h3>2.3.3 逻辑运算符</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">运算符</th><th class="border px-4 py-2">含义</th><th class="border px-4 py-2">示例</th></tr>
<tr><td class="border px-4 py-2">&&</td><td class="border px-4 py-2">逻辑与</td><td class="border px-4 py-2">a && b</td></tr>
<tr><td class="border px-4 py-2">||</td><td class="border px-4 py-2">逻辑或</td><td class="border px-4 py-2">a || b</td></tr>
<tr><td class="border px-4 py-2">!</td><td class="border px-4 py-2">逻辑非</td><td class="border px-4 py-2">!a</td></tr>
</table>

<h3>2.3.4 运算符优先级</h3>
<p>运算符优先级从高到低：</p>
<ol>
<li>() 括号</li>
<li>++ -- ! 单目运算符</li>
<li>* / % 算术运算符</li>
<li>+ - 算术运算符</li>
<li>> < >= <= 关系运算符</li>
<li>== != 关系运算符</li>
<li>&& 逻辑与</li>
<li>|| 逻辑或</li>
<li>= 赋值运算符</li>
</ol>`,
        code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    // 算术运算
    printf("a + b = %d\\n", a + b);
    printf("a * b = %d\\n", a * b);
    printf("a / b = %d\\n", a / b);
    printf("a %% b = %d\\n", a % b);
    
    // 自增自减
    printf("a++ = %d\\n", a++);
    printf("++a = %d\\n", ++a);
    
    // 关系运算
    printf("a > b: %d\\n", a > b);
    
    // 逻辑运算
    printf("a > 0 && b > 0: %d\\n", a > 0 && b > 0);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c2-3-1',
            type: 'single',
            question: '表达式 5 / 2 的结果是？',
            options: ['2.5', '2', '3', '0'],
            answer: 'B',
            explanation: '整型除法会舍去小数部分，5 / 2 = 2。',
            score: 2
          },
          {
            id: 'c2-3-2',
            type: 'single',
            question: '表达式 3 > 2 && 5 < 4 的结果是？',
            options: ['1', '0', 'true', 'false'],
            answer: 'B',
            explanation: '逻辑与运算要求两边都为真，5 < 4为假，所以结果为0。',
            score: 2
          }
        ]
      },
      {
        id: 'c2-4',
        title: '2.4 位运算符与枚举',
        description: '学习位运算符和枚举类型的定义与使用',
        content: `<h3>2.4.1 位运算符</h3>
<p>位运算符直接对整数的二进制位进行操作：</p>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">运算符</th><th class="border px-4 py-2">含义</th><th class="border px-4 py-2">示例</th><th class="border px-4 py-2">说明</th></tr>
<tr><td class="border px-4 py-2">&</td><td class="border px-4 py-2">按位与</td><td class="border px-4 py-2">a & b</td><td class="border px-4 py-2">对应位都为1则为1</td></tr>
<tr><td class="border px-4 py-2">|</td><td class="border px-4 py-2">按位或</td><td class="border px-4 py-2">a | b</td><td class="border px-4 py-2">对应位有一个为1则为1</td></tr>
<tr><td class="border px-4 py-2">^</td><td class="border px-4 py-2">按位异或</td><td class="border px-4 py-2">a ^ b</td><td class="border px-4 py-2">对应位不同则为1</td></tr>
<tr><td class="border px-4 py-2">~</td><td class="border px-4 py-2">按位取反</td><td class="border px-4 py-2">~a</td><td class="border px-4 py-2">所有位取反</td></tr>
<tr><td class="border px-4 py-2"><<</td><td class="border px-4 py-2">左移</td><td class="border px-4 py-2">a << n</td><td class="border px-4 py-2">向左移动n位，右边补0</td></tr>
<tr><td class="border px-4 py-2">>></td><td class="border px-4 py-2">右移</td><td class="border px-4 py-2">a >> n</td><td class="border px-4 py-2">向右移动n位，左边补符号位</td></tr>
</table>

<h3>2.4.2 位运算的应用</h3>
<p>位运算常用于以下场景：</p>
<ul>
<li><strong>权限控制</strong>：使用位掩码管理多个权限，如READ=1, WRITE=2, EXECUTE=4</li>
<li><strong>状态标志</strong>：用一个整数表示多个布尔状态</li>
<li><strong>高效运算</strong>：左移n位相当于乘以2的n次方，右移n位相当于除以2的n次方</li>
<li><strong>数据压缩</strong>：将多个小数据打包到一个整数中</li>
</ul>

<h3>2.4.3 枚举类型</h3>
<p>枚举（enum）用于定义一组命名的整数常量，提高代码可读性：</p>
<pre><code class="code-block">enum 枚举名 {
    标识符1 = 值1,
    标识符2 = 值2,
    // ...
};</code></pre>
<p>示例：</p>
<pre><code class="code-block">enum Weekday {
    MONDAY = 1,    // 值为1
    TUESDAY,       // 值为2（自动递增）
    WEDNESDAY,     // 值为3
    THURSDAY,      // 值为4
    FRIDAY,        // 值为5
    SATURDAY,      // 值为6
    SUNDAY         // 值为7
};</code></pre>

<h3>2.4.4 枚举的特点</h3>
<ul>
<li>枚举值默认从0开始，依次递增</li>
<li>可以手动指定枚举值，后续值自动递增</li>
<li>枚举类型提高代码可读性和可维护性</li>
<li>枚举常量可以代替魔法数字，使代码更清晰</li>
</ul>`,
        code: `#include <stdio.h>

// 定义枚举类型
enum Weekday {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

// 定义权限枚举
enum Permission {
    READ = 1,      // 001
    WRITE = 2,     // 010
    EXECUTE = 4    // 100
};

int main() {
    // 枚举的使用
    enum Weekday today = WEDNESDAY;
    printf("今天是星期%d\\n", today);
    
    // 位运算示例
    int a = 5;   // 二进制：0101
    int b = 3;   // 二进制：0011
    
    printf("a = %d, b = %d\\n", a, b);
    printf("a & b = %d (按位与)\\n", a & b);    // 0001 = 1
    printf("a | b = %d (按位或)\\n", a | b);    // 0111 = 7
    printf("a ^ b = %d (按位异或)\\n", a ^ b);   // 0110 = 6
    printf("~a = %d (按位取反)\\n", ~a);         // ~0101 = ...1010 = -6
    printf("a << 1 = %d (左移1位)\\n", a << 1);  // 1010 = 10
    printf("a >> 1 = %d (右移1位)\\n", a >> 1);  // 0010 = 2
    
    // 权限控制示例
    int permission = READ | WRITE;  // 具有读和写权限
    printf("\\n权限管理：\\n");
    if (permission & READ) {
        printf("有读权限\\n");
    }
    if (permission & WRITE) {
        printf("有写权限\\n");
    }
    if (permission & EXECUTE) {
        printf("有执行权限\\n");
    } else {
        printf("没有执行权限\\n");
    }
    
    return 0;
}`,
        exercises: [
          {
            id: 'c2-4-1',
            type: 'single',
            question: '表达式 5 & 3 的结果是？',
            options: ['7', '1', '6', '0'],
            answer: 'B',
            explanation: '5的二进制是0101，3的二进制是0011，按位与结果为0001，即1。',
            score: 2
          },
          {
            id: 'c2-4-2',
            type: 'single',
            question: '左移运算符 << 相当于进行什么运算？',
            options: ['加法', '减法', '乘法', '除法'],
            answer: 'C',
            explanation: '左移1位相当于乘以2，左移n位相当于乘以2的n次方。',
            score: 2
          },
          {
            id: 'c2-4-3',
            type: 'code',
            question: '定义一个枚举类型Season，包含SPRING、SUMMER、AUTUMN、WINTER四个季节，并输出当前季节。',
            answer: 'enum Season {\n    SPRING = 1,\n    SUMMER,\n    AUTUMN,\n    WINTER\n};\n\nenum Season current = SUMMER;\nprintf("当前季节：%d\\n", current);',
            explanation: '枚举值默认从0开始，手动指定SPRING=1后，后续值依次递增。',
            score: 5
          }
        ]
      }
    ]
  },
  {
    id: 'c3',
    title: '第三章：流程控制',
    lessons: [
      {
        id: 'c3-1',
        title: '3.1 if语句',
        description: '学习条件判断语句if-else的使用',
        content: `<h3>3.1.1 简单if语句</h3>
<p>语法格式：</p>
<pre><code class="code-block">if (条件表达式) {
    // 条件为真时执行的语句
}</code></pre>

<h3>3.1.2 if-else语句</h3>
<p>语法格式：</p>
<pre><code class="code-block">if (条件表达式) {
    // 条件为真时执行
} else {
    // 条件为假时执行
}</code></pre>

<h3>3.1.3 if-else if-else语句</h3>
<p>用于多条件判断：</p>
<pre><code class="code-block">if (条件1) {
    // 条件1为真时执行
} else if (条件2) {
    // 条件2为真时执行
} else {
    // 所有条件都为假时执行
}</code></pre>`,
        code: `#include <stdio.h>

int main() {
    int score;
    printf("请输入成绩：");
    scanf("%d", &score);
    
    if (score >= 90) {
        printf("优秀\\n");
    } else if (score >= 80) {
        printf("良好\\n");
    } else if (score >= 60) {
        printf("及格\\n");
    } else {
        printf("不及格\\n");
    }
    
    return 0;
}`,
        exercises: [
          {
            id: 'c3-1-1',
            type: 'code',
            question: '编写程序，判断一个整数是正数、负数还是零。',
            answer: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("请输入一个整数：");\n    scanf("%d", &num);\n    \n    if (num > 0) {\n        printf("正数\\n");\n    } else if (num < 0) {\n        printf("负数\\n");\n    } else {\n        printf("零\\n");\n    }\n    \n    return 0;\n}',
            explanation: '使用if-else if-else结构进行多条件判断。',
            score: 5
          }
        ]
      },
      {
        id: 'c3-2',
        title: '3.2 switch语句',
        description: '学习多分支选择语句switch',
        content: `<h3>3.2.1 switch语句语法</h3>
<p>语法格式：</p>
<pre><code class="code-block">switch (表达式) {
    case 常量1:
        // 语句1
        break;
    case 常量2:
        // 语句2
        break;
    default:
        // 默认语句
        break;
}</code></pre>

<h3>3.2.2 switch语句特点</h3>
<ul>
<li>表达式必须是整型或字符型</li>
<li>每个case后的常量必须互不相同</li>
<li>break语句用于跳出switch结构</li>
<li>default处理所有未匹配的情况</li>
</ul>

<h3>3.2.3 switch与if的区别</h3>
<ul>
<li>if适合判断范围条件</li>
<li>switch适合判断离散值</li>
<li>switch效率更高</li>
</ul>`,
        code: `#include <stdio.h>

int main() {
    int day;
    printf("请输入星期(1-7)：");
    scanf("%d", &day);
    
    switch (day) {
        case 1:
            printf("星期一\\n");
            break;
        case 2:
            printf("星期二\\n");
            break;
        case 3:
            printf("星期三\\n");
            break;
        case 4:
            printf("星期四\\n");
            break;
        case 5:
            printf("星期五\\n");
            break;
        case 6:
            printf("星期六\\n");
            break;
        case 7:
            printf("星期日\\n");
            break;
        default:
            printf("输入错误\\n");
            break;
    }
    
    return 0;
}`,
        exercises: [
          {
            id: 'c3-2-1',
            type: 'single',
            question: 'switch语句中，用于跳出switch结构的关键字是？',
            options: ['exit', 'break', 'continue', 'return'],
            answer: 'B',
            explanation: 'break语句用于跳出switch结构，避免执行后续case。',
            score: 2
          }
        ]
      },
      {
        id: 'c3-3',
        title: '3.3 循环语句',
        description: '学习for、while、do-while循环',
        content: `<h3>3.3.1 for循环</h3>
<p>语法格式：</p>
<pre><code class="code-block">for (初始化表达式; 条件表达式; 更新表达式) {
    // 循环体
}</code></pre>

<h3>3.3.2 while循环</h3>
<p>语法格式：</p>
<pre><code class="code-block">while (条件表达式) {
    // 循环体
}</code></pre>

<h3>3.3.3 do-while循环</h3>
<p>语法格式：</p>
<pre><code class="code-block">do {
    // 循环体
} while (条件表达式);</code></pre>

<h3>3.3.4 三种循环的区别</h3>
<ul>
<li>for循环：适合已知循环次数的情况</li>
<li>while循环：适合未知循环次数的情况</li>
<li>do-while循环：至少执行一次循环体</li>
</ul>

<h3>3.3.5 break和continue</h3>
<ul>
<li><strong>break</strong>：跳出整个循环</li>
<li><strong>continue</strong>：跳过当前迭代，继续下一次循环</li>
</ul>

<h3>💡 实战案例：成绩统计分析</h3>
<p>使用循环语句实现一个成绩统计分析程序，计算班级学生的平均分、最高分、最低分和及格率：</p>
<pre><code class="code-block">#include <stdio.h>

int main() {
    int n;
    printf("请输入学生人数：");
    scanf("%d", &n);
    
    int score, sum = 0, max = 0, min = 100, passCount = 0;
    for (int i = 0; i < n; i++) {
        printf("请输入第%d个学生的成绩：", i + 1);
        scanf("%d", &score);
        sum += score;
        if (score > max) max = score;
        if (score < min) min = score;
        if (score >= 60) passCount++;
    }
    
    printf("\\n====== 成绩统计 ======\\n");
    printf("平均分：%.2f\\n", (float)sum / n);
    printf("最高分：%d\\n", max);
    printf("最低分：%d\\n", min);
    printf("及格率：%.2f%%\\n", (float)passCount / n * 100);
    
    return 0;
}</code></pre>
<p>通过这个案例，可以深入理解for循环、if条件判断和累加统计的综合运用，掌握循环在实际数据处理中的使用技巧。</p>

<h3>⚠️ 常见错误</h3>
<p><strong>1. if条件中混淆 = 和 ==</strong></p>
<pre><code class="code-block">// 错误写法
if (a = 10) {  // 这是赋值，不是比较！
    printf("a等于10\\n");
}
// 正确写法
if (a == 10) {  // 这才是比较
    printf("a等于10\\n");
}</code></pre>
<p>将if(a==10)误写为if(a=10)是初学者最常见的错误，赋值表达式的结果就是被赋的值，因此if(a=10)永远为真。</p>

<p><strong>2. 循环条件错误导致无限循环</strong></p>
<pre><code class="code-block">// 错误：循环变量未更新
int i = 0;
while (i < 10) {
    printf("%d ", i);
    // 忘记写 i++;  导致无限循环！
}

// 错误：for循环分号错误
for (int i = 0; i < 10; i++);  // 多了一个分号，循环体为空
    printf("%d ", i);  // 这条语句只执行一次</code></pre>

<p><strong>3. switch漏写break导致穿透</strong></p>
<pre><code class="code-block">switch (day) {
    case 1:
        printf("星期一");
        // 忘记break，会继续执行case 2
    case 2:
        printf("星期二");
        break;
}</code></pre>
<p>switch语句中每个case末尾都要写break，否则会继续执行下一个case的代码（穿透现象）。</p>`,
        code: `#include <stdio.h>

int main() {
    // for循环：输出1-10
    printf("for循环：");
    for (int i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    // while循环：输出1-10
    printf("while循环：");
    int j = 1;
    while (j <= 10) {
        printf("%d ", j);
        j++;
    }
    printf("\\n");
    
    // do-while循环：输出1-10
    printf("do-while循环：");
    int k = 1;
    do {
        printf("%d ", k);
        k++;
    } while (k <= 10);
    printf("\\n");
    
    return 0;
}`,
        exercises: [
          {
            id: 'c3-3-1',
            type: 'code',
            question: '使用for循环计算1到100的累加和。',
            answer: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("1到100的和：%d\\n", sum);\n    return 0;\n}',
            explanation: '初始化sum为0，在循环中累加每个数。',
            score: 5
          },
          {
            id: 'c3-3-2',
            type: 'single',
            question: 'do-while循环和while循环的主要区别是？',
            options: ['语法不同', 'do-while至少执行一次', '效率不同', '用途不同'],
            answer: 'B',
            explanation: 'do-while循环先执行循环体再判断条件，所以至少执行一次。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'c4',
    title: '第四章：数组与字符串',
    lessons: [
      {
        id: 'c4-1',
        title: '4.1 一维数组',
        description: '学习一维数组的定义、初始化和使用',
        content: `<h3>4.1.1 数组的定义</h3>
<p>语法格式：</p>
<pre><code class="code-block">类型名 数组名[数组大小];</code></pre>
<p>示例：</p>
<pre><code class="code-block">int arr[10];        // 定义整型数组，10个元素
float score[5];     // 定义浮点型数组，5个元素
char name[20];      // 定义字符数组，20个元素</code></pre>

<h3>4.1.2 数组的初始化</h3>
<p>数组可以在定义时初始化：</p>
<pre><code class="code-block">int arr[5] = {1, 2, 3, 4, 5};   // 完全初始化
int arr[5] = {1, 2};             // 部分初始化，未初始化的元素为0
int arr[] = {1, 2, 3};           // 省略大小，由初始化列表决定</code></pre>

<h3>4.1.3 数组的访问</h3>
<p>通过下标访问数组元素，下标从0开始：</p>
<pre><code class="code-block">arr[0] = 10;   // 设置第一个元素
int x = arr[2]; // 获取第三个元素</code></pre>`,
        code: `#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    
    // 遍历数组
    printf("数组元素：");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    // 计算数组元素之和
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    printf("数组元素之和：%d\\n", sum);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c4-1-1',
            type: 'fill',
            question: '数组的下标从______开始。',
            answer: '0',
            explanation: 'C语言中数组下标从0开始，arr[0]是第一个元素。',
            score: 2
          },
          {
            id: 'c4-1-2',
            type: 'code',
            question: '定义一个包含10个整数的数组，初始化值为1-10，然后逆序输出。',
            answer: '#include <stdio.h>\n\nint main() {\n    int arr[10] = {1,2,3,4,5,6,7,8,9,10};\n    printf("逆序输出：");\n    for (int i = 9; i >= 0; i--) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
            explanation: '从最后一个元素开始，使用递减的循环变量。',
            score: 5
          }
        ]
      },
      {
        id: 'c4-2',
        title: '4.2 二维数组',
        description: '学习二维数组的定义和使用',
        content: `<h3>4.2.1 二维数组的定义</h3>
<p>语法格式：</p>
<pre><code class="code-block">类型名 数组名[行数][列数];</code></pre>
<p>示例：</p>
<pre><code class="code-block">int matrix[3][4];   // 3行4列的二维数组
float score[5][3];  // 5行3列的二维数组</code></pre>

<h3>4.2.2 二维数组的初始化</h3>
<p>可以按行初始化：</p>
<pre><code class="code-block">int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

int matrix[2][3] = {1, 2, 3, 4, 5, 6};  // 按顺序初始化</code></pre>

<h3>4.2.3 二维数组的访问</h3>
<p>通过行下标和列下标访问：</p>
<pre><code class="code-block">matrix[0][0] = 10;   // 设置第一行第一列
int x = matrix[1][2]; // 获取第二行第三列</code></pre>`,
        code: `#include <stdio.h>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // 输出二维数组
    printf("二维数组：\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    // 计算对角线元素之和
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += matrix[i][i];
    }
    printf("对角线元素之和：%d\\n", sum);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c4-2-1',
            type: 'single',
            question: 'int arr[3][4]表示什么？',
            options: ['3个元素的一维数组', '4个元素的一维数组', '3行4列的二维数组', '4行3列的二维数组'],
            answer: 'C',
            explanation: 'arr[3][4]表示3行4列的二维数组，共12个元素。',
            score: 2
          }
        ]
      },
      {
        id: 'c4-3',
        title: '4.3 字符串',
        description: '学习字符串的存储和常用处理函数',
        content: `<h3>4.3.1 字符串的存储</h3>
<p>字符串在C语言中以字符数组形式存储，以'\\0'（空字符）结尾：</p>
<pre><code class="code-block">char str[20] = "Hello";   // 自动在末尾添加'\0'
char str[] = "World";     // 数组大小为6（5个字符+1个'\0'）</code></pre>

<h3>4.3.2 常用字符串处理函数</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">函数</th><th class="border px-4 py-2">功能</th><th class="border px-4 py-2">示例</th></tr>
<tr><td class="border px-4 py-2">strlen()</td><td class="border px-4 py-2">计算字符串长度</td><td class="border px-4 py-2">strlen("abc") → 3</td></tr>
<tr><td class="border px-4 py-2">strcpy()</td><td class="border px-4 py-2">复制字符串</td><td class="border px-4 py-2">strcpy(str1, str2)</td></tr>
<tr><td class="border px-4 py-2">strcat()</td><td class="border px-4 py-2">拼接字符串</td><td class="border px-4 py-2">strcat(str1, str2)</td></tr>
<tr><td class="border px-4 py-2">strcmp()</td><td class="border px-4 py-2">比较字符串</td><td class="border px-4 py-2">strcmp(str1, str2)</td></tr>
<tr><td class="border px-4 py-2">strstr()</td><td class="border px-4 py-2">查找子字符串</td><td class="border px-4 py-2">strstr(str, substr)</td></tr>
</table>

<h3>4.3.3 字符串输入输出</h3>
<ul>
<li><strong>scanf("%s", str)</strong>：输入字符串，遇到空格或换行结束</li>
<li><strong>gets(str)</strong>：输入字符串，包含空格（已废弃）</li>
<li><strong>fgets(str, n, stdin)</strong>：安全的字符串输入</li>
<li><strong>printf("%s", str)</strong>：输出字符串</li>
</ul>`,
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20] = "World";
    
    // 字符串长度
    printf("str1长度：%zu\\n", strlen(str1));
    
    // 字符串复制
    char str3[20];
    strcpy(str3, str1);
    printf("str3 = %s\\n", str3);
    
    // 字符串拼接
    strcat(str1, " ");
    strcat(str1, str2);
    printf("拼接后：%s\\n", str1);
    
    // 字符串比较
    int result = strcmp("apple", "banana");
    printf("比较结果：%d\\n", result);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c4-3-1',
            type: 'fill',
            question: '字符串在C语言中以______字符结尾。',
            answer: '\\0',
            explanation: '字符串以\\0（空字符）结尾，表示字符串结束。',
            score: 2
          },
          {
            id: 'c4-3-2',
            type: 'single',
            question: '计算字符串长度的函数是？',
            options: ['strcpy', 'strcat', 'strlen', 'strcmp'],
            answer: 'C',
            explanation: 'strlen()函数用于计算字符串长度，不包括\\0。',
            score: 2
          }
        ]
      },
      {
        id: 'c4-4',
        title: '4.4 动态内存分配',
        description: '学习malloc、calloc、realloc、free等动态内存管理函数',
        content: `<h3>4.4.1 动态内存分配的概念</h3>
<p>动态内存分配允许程序在运行时根据需要申请和释放内存，与静态数组不同，大小可以在运行时确定：</p>
<ul>
<li><strong>静态内存</strong>：编译时分配，大小固定，存储在栈区</li>
<li><strong>动态内存</strong>：运行时分配，大小可变，存储在堆区</li>
<li>动态内存需要手动管理（申请和释放）</li>
</ul>

<h3>4.4.2 malloc()函数</h3>
<p>malloc()用于分配指定字节数的内存空间：</p>
<pre><code class="code-block">void* malloc(size_t size);</code></pre>
<p>示例：</p>
<pre><code class="code-block">int *arr = (int*)malloc(10 * sizeof(int));  // 分配10个整数的空间
if (arr == NULL) {
    printf("内存分配失败！\\n");
    return 1;
}</code></pre>
<ul>
<li>参数是要分配的字节数</li>
<li>返回void*指针，需要强制类型转换</li>
<li>分配失败返回NULL</li>
<li>分配的内存不初始化，内容为随机值</li>
</ul>

<h3>4.4.3 calloc()函数</h3>
<p>calloc()用于分配并初始化内存空间：</p>
<pre><code class="code-block">void* calloc(size_t count, size_t size);</code></pre>
<p>示例：</p>
<pre><code class="code-block">int *arr = (int*)calloc(10, sizeof(int));  // 分配10个整数并初始化为0</code></pre>
<ul>
<li>第一个参数是元素个数，第二个参数是每个元素大小</li>
<li>分配的内存会自动初始化为0</li>
<li>比malloc()稍慢，但更安全</li>
</ul>

<h3>4.4.4 realloc()函数</h3>
<p>realloc()用于调整已分配内存的大小：</p>
<pre><code class="code-block">void* realloc(void* ptr, size_t new_size);</code></pre>
<p>示例：</p>
<pre><code class="code-block">int *arr = (int*)malloc(5 * sizeof(int));
arr = (int*)realloc(arr, 10 * sizeof(int));  // 扩展到10个整数</code></pre>
<ul>
<li>如果ptr为NULL，相当于malloc(new_size)</li>
<li>如果new_size为0，相当于free(ptr)</li>
<li>扩展时可能移动数据到新位置</li>
</ul>

<h3>4.4.5 free()函数</h3>
<p>free()用于释放动态分配的内存：</p>
<pre><code class="code-block">void free(void* ptr);</code></pre>
<p>示例：</p>
<pre><code class="code-block">free(arr);   // 释放内存
arr = NULL;  // 避免野指针</code></pre>

<h3>4.4.6 内存泄漏及其预防</h3>
<p><strong>内存泄漏</strong>是指动态分配的内存没有被释放，导致内存浪费：</p>
<ul>
<li><strong>常见原因</strong>：忘记调用free()、指针丢失、循环中重复分配</li>
<li><strong>预防措施</strong>：</li>
<li>每次malloc()/calloc()必须对应一个free()</li>
<li>释放后将指针置为NULL</li>
<li>在函数退出前确保释放所有动态内存</li>
<li>使用valgrind等工具检测内存泄漏</li>
</ul>

<h3>⚠️ 常见错误</h3>
<p><strong>1. 数组下标越界</strong></p>
<pre><code class="code-block">int arr[5] = {1, 2, 3, 4, 5};
// 错误：arr[5]访问了第6个元素，越界！
printf("%d", arr[5]);  // 下标范围是0~4
// 正确
for (int i = 0; i < 5; i++) {  // i < 5 而不是 i <= 5
    printf("%d ", arr[i]);
}</code></pre>
<p>C语言不检查数组下标越界，越界访问会导致程序崩溃或数据损坏，是最危险的错误之一。</p>

<p><strong>2. 字符串缓冲区溢出</strong></p>
<pre><code class="code-block">char str[5];
// 错误：字符串长度超过缓冲区大小
strcpy(str, "Hello World!");  // 11个字符+\\0=12字节，超出5字节
// 正确：确保目标缓冲区足够大
char str[20];
strcpy(str, "Hello World!");</code></pre>
<p>使用strcpy、strcat、sprintf等函数时，必须确保目标缓冲区足够大，否则会覆盖相邻内存。</p>

<p><strong>3. 忘记字符串结尾符\\0</strong></p>
<pre><code class="code-block">char str[5] = {'H', 'e', 'l', 'l', 'o'};  // 没有\\0，不是合法字符串
printf("%s", str);  // 输出可能异常
// 正确：留出\\0的空间
char str[6] = "Hello";  // 自动添加\\0</code></pre>
<p>字符串必须以\\0结尾，否则字符串处理函数（strlen、printf等）无法正常工作。</p>`,
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("请输入学生人数：");
    scanf("%d", &n);
    
    // 使用malloc动态分配数组
    int *scores = (int*)malloc(n * sizeof(int));
    if (scores == NULL) {
        printf("内存分配失败！\\n");
        return 1;
    }
    
    // 输入学生成绩
    printf("请输入%d个学生的成绩：\\n", n);
    for (int i = 0; i < n; i++) {
        printf("第%d个学生：", i + 1);
        scanf("%d", &scores[i]);
    }
    
    // 计算平均分
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += scores[i];
    }
    printf("平均分：%.2f\\n", (float)sum / n);
    
    // 释放内存
    free(scores);
    scores = NULL;  // 避免野指针
    
    return 0;
}`,
        exercises: [
          {
            id: 'c4-4-1',
            type: 'single',
            question: 'malloc()函数分配的内存位于哪个区域？',
            options: ['栈区', '堆区', '全局区', '代码区'],
            answer: 'B',
            explanation: 'malloc()函数在堆区（heap）分配动态内存，需要手动释放。',
            score: 2
          },
          {
            id: 'c4-4-2',
            type: 'single',
            question: '释放动态内存后，最好将指针设为？',
            options: ['0', 'NULL', '不操作', '1'],
            answer: 'B',
            explanation: '释放后应将指针设为NULL，避免野指针导致的安全问题。',
            score: 2
          },
          {
            id: 'c4-4-3',
            type: 'code',
            question: '使用动态内存分配创建一个整型数组，存储5个整数，计算并输出它们的和。',
            answer: 'int *arr = (int*)malloc(5 * sizeof(int));\nif (arr == NULL) {\n    printf("分配失败\\n");\n    return 1;\n}\nint sum = 0;\nfor (int i = 0; i < 5; i++) {\n    arr[i] = i + 1;\n    sum += arr[i];\n}\nprintf("和：%d\\n", sum);\nfree(arr);',
            explanation: '使用malloc分配5个整数空间，遍历赋值并累加，最后释放内存。',
            score: 5
          }
        ]
      }
    ]
  },
  {
    id: 'c5',
    title: '第五章：函数',
    lessons: [
      {
        id: 'c5-1',
        title: '5.1 函数的定义和调用',
        description: '学习函数的定义、声明和调用方法',
        content: `<h3>5.1.1 函数的定义</h3>
<p>语法格式：</p>
<pre><code class="code-block">返回值类型 函数名(参数列表) {
    // 函数体
    return 返回值;
}</code></pre>

<h3>5.1.2 函数的分类</h3>
<ul>
<li><strong>无参函数</strong>：没有参数的函数</li>
<li><strong>有参函数</strong>：带有参数的函数</li>
<li><strong>无返回值函数</strong>：返回值类型为void</li>
<li><strong>有返回值函数</strong>：返回指定类型的值</li>
</ul>

<h3>5.1.3 函数的声明</h3>
<p>函数声明告诉编译器函数的名称、返回类型和参数：</p>
<pre><code class="code-block">int add(int a, int b);   // 函数声明</code></pre>

<h3>5.1.4 函数的调用</h3>
<p>语法格式：</p>
<pre><code class="code-block">函数名(实参列表);</code></pre>`,
        code: `#include <stdio.h>

// 函数声明
int add(int a, int b);
void printHello();

int main() {
    // 调用无参函数
    printHello();
    
    // 调用有参函数
    int result = add(10, 20);
    printf("10 + 20 = %d\\n", result);
    
    return 0;
}

// 函数定义：加法
int add(int a, int b) {
    return a + b;
}

// 函数定义：打印Hello
void printHello() {
    printf("Hello, World!\\n");
}`,
        exercises: [
          {
            id: 'c5-1-1',
            type: 'single',
            question: '没有返回值的函数，返回类型应该声明为？',
            options: ['int', 'float', 'void', 'char'],
            answer: 'C',
            explanation: 'void表示无返回值，用于不需要返回结果的函数。',
            score: 2
          },
          {
            id: 'c5-1-2',
            type: 'code',
            question: '定义一个函数，计算两个整数的乘积并返回结果。',
            answer: 'int multiply(int a, int b) {\n    return a * b;\n}',
            explanation: '函数接收两个整型参数，返回它们的乘积。',
            score: 5
          }
        ]
      },
      {
        id: 'c5-2',
        title: '5.2 函数参数传递',
        description: '学习值传递和地址传递的区别',
        content: `<h3>5.2.1 值传递</h3>
<p>值传递是将实参的值复制一份传递给形参：</p>
<ul>
<li>形参的改变不影响实参</li>
<li>适合传递基本数据类型</li>
</ul>

<h3>5.2.2 地址传递</h3>
<p>地址传递是将实参的地址传递给形参：</p>
<ul>
<li>形参的改变会影响实参</li>
<li>适合传递数组或需要修改的变量</li>
<li>使用指针实现</li>
</ul>

<h3>5.2.3 数组作为函数参数</h3>
<p>数组名本身就是地址，所以数组作为参数时自动进行地址传递：</p>
<pre><code class="code-block">void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}</code></pre>`,
        code: `#include <stdio.h>

// 值传递
void swap1(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

// 地址传递（指针）
void swap2(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 数组作为参数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int x = 10, y = 20;
    
    // 值传递：不会交换
    swap1(x, y);
    printf("值传递后：x=%d, y=%d\\n", x, y);
    
    // 地址传递：会交换
    swap2(&x, &y);
    printf("地址传递后：x=%d, y=%d\\n", x, y);
    
    // 数组作为参数
    int arr[] = {1, 2, 3, 4, 5};
    printf("数组元素：");
    printArray(arr, 5);
    printf("\\n");
    
    return 0;
}`,
        exercises: [
          {
            id: 'c5-2-1',
            type: 'single',
            question: '值传递和地址传递的主要区别是？',
            options: ['语法不同', '地址传递会影响实参', '效率不同', '返回值不同'],
            answer: 'B',
            explanation: '值传递是复制值，不影响实参；地址传递是传递地址，会影响实参。',
            score: 2
          }
        ]
      },
      {
        id: 'c5-3',
        title: '5.3 递归函数',
        description: '学习递归函数的定义和使用',
        content: `<h3>5.3.1 递归的概念</h3>
<p>递归是指函数调用自身的编程技巧：</p>
<ul>
<li>递归必须有终止条件</li>
<li>递归会不断调用自身，直到满足终止条件</li>
<li>递归会占用栈空间，深度过大会导致栈溢出</li>
</ul>

<h3>5.3.2 递归的例子：阶乘</h3>
<p>n! = n × (n-1) × (n-2) × ... × 1</p>
<p>递归公式：n! = n × (n-1)!</p>
<p>终止条件：0! = 1, 1! = 1</p>

<h3>5.3.3 递归的例子：斐波那契数列</h3>
<p>斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, ...</p>
<p>递归公式：F(n) = F(n-1) + F(n-2)</p>
<p>终止条件：F(0) = 0, F(1) = 1</p>

<h3>⚠️ 常见错误</h3>
<p><strong>1. 缺少return语句</strong></p>
<pre><code class="code-block">// 错误：有返回类型的函数没有return语句
int add(int a, int b) {
    int result = a + b;
    // 忘记 return result;  编译器可能警告，运行结果未定义
}
// 正确
int add(int a, int b) {
    return a + b;
}</code></pre>
<p>非void函数必须在所有执行路径上都有return语句，否则返回值未定义。</p>

<p><strong>2. 值传递与地址传递混淆</strong></p>
<pre><code class="code-block">// 错误：试图通过值传递修改实参
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // a和b是局部变量，不会影响实参
}
// 正确：使用地址传递
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}</code></pre>
<p>值传递是将实参复制一份给形参，函数内修改形参不会影响实参。要修改实参，必须使用指针（地址传递）。</p>

<p><strong>3. 递归缺少终止条件</strong></p>
<pre><code class="code-block">// 错误：无限递归，没有终止条件
int endless(int n) {
    return n * endless(n - 1);  // 永远不会停止！
}
// 正确：必须有终止条件
int factorial(int n) {
    if (n == 0 || n == 1) return 1;  // 终止条件
    return n * factorial(n - 1);
}</code></pre>
<p>递归函数必须包含终止条件（基线条件），否则会导致栈溢出（Stack Overflow）。</p>`,
        code: `#include <stdio.h>

// 递归计算阶乘
int factorial(int n) {
    if (n == 0 || n == 1) {  // 终止条件
        return 1;
    }
    return n * factorial(n - 1);  // 递归调用
}

// 递归计算斐波那契数列
int fibonacci(int n) {
    if (n == 0) {  // 终止条件
        return 0;
    } else if (n == 1) {  // 终止条件
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // 递归调用
}

int main() {
    printf("5的阶乘：%d\\n", factorial(5));
    printf("斐波那契第10项：%d\\n", fibonacci(10));
    
    return 0;
}`,
        exercises: [
          {
            id: 'c5-3-1',
            type: 'single',
            question: '递归函数必须具备的条件是？',
            options: ['返回值', '参数', '终止条件', '循环'],
            answer: 'C',
            explanation: '递归函数必须有终止条件，否则会无限递归导致栈溢出。',
            score: 2
          },
          {
            id: 'c5-3-2',
            type: 'code',
            question: '使用递归计算1到n的累加和。',
            answer: 'int sum(int n) {\n    if (n == 1) {\n        return 1;\n    }\n    return n + sum(n - 1);\n}',
            explanation: '终止条件：n=1时返回1；递归公式：sum(n) = n + sum(n-1)。',
            score: 5
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    title: '第六章：指针',
    lessons: [
      {
        id: 'c6-1',
        title: '6.1 指针的概念',
        description: '学习指针的定义、初始化和基本操作',
        content: `<h3>6.1.1 什么是指针</h3>
<p>指针是一个变量，用于存储另一个变量的内存地址：</p>
<ul>
<li>指针变量的值是内存地址</li>
<li>通过指针可以间接访问和修改变量的值</li>
<li>指针类型必须与指向的变量类型一致</li>
</ul>

<h3>6.1.2 指针的定义</h3>
<p>语法格式：</p>
<pre><code class="code-block">类型名 *指针变量名;</code></pre>
<p>示例：</p>
<pre><code class="code-block">int *p;      // 指向整型的指针
float *q;    // 指向浮点型的指针
char *r;     // 指向字符型的指针</code></pre>

<h3>6.1.3 指针的操作符</h3>
<ul>
<li><strong>&amp;</strong>：取地址符，获取变量的地址</li>
<li><strong>*</strong>：解引用符，访问指针指向的变量</li>
</ul>

<h3>6.1.4 指针的初始化和使用</h3>
<pre><code class="code-block">int a = 10;
int *p = &amp;a;   // 指针p指向变量a

printf("%d", *p);  // 输出10，访问指针指向的值
*p = 20;           // 修改指针指向的变量的值</code></pre>`,
        code: `#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;   // p指向a的地址
    
    printf("a的值：%d\\n", a);
    printf("a的地址：%p\\n", &a);
    printf("p的值：%p\\n", p);
    printf("*p的值：%d\\n", *p);
    
    // 通过指针修改a的值
    *p = 20;
    printf("修改后a的值：%d\\n", a);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c6-1-1',
            type: 'single',
            question: '用于获取变量地址的操作符是？',
            options: ['*', '&', '%', '#'],
            answer: 'B',
            explanation: '&amp;是取地址符，用于获取变量的内存地址。',
            score: 2
          },
          {
            id: 'c6-1-2',
            type: 'fill',
            question: 'int *p; 表示p是一个指向______类型的指针。',
            answer: '整型',
            explanation: 'int *p表示p是指向整型变量的指针。',
            score: 2
          }
        ]
      },
      {
        id: 'c6-2',
        title: '6.2 指针与数组',
        description: '学习指针在数组中的应用',
        content: `<h3>6.2.1 数组名与指针</h3>
<p>数组名本身就是指向数组第一个元素的指针：</p>
<pre><code class="code-block">int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;   // p指向arr[0]

*p = 10;        // 修改arr[0]
*(p + 1) = 20;  // 修改arr[1]</code></pre>

<h3>6.2.2 指针的算术运算</h3>
<ul>
<li><strong>p + n</strong>：指针向后移动n个元素</li>
<li><strong>p - n</strong>：指针向前移动n个元素</li>
<li><strong>p++</strong>：指针自增，指向下一个元素</li>
<li><strong>p--</strong>：指针自减，指向上一个元素</li>
</ul>

<h3>6.2.3 指针与字符串</h3>
<p>字符串是字符数组，可以用指针操作：</p>
<pre><code class="code-block">char str[] = "Hello";
char *p = str;

while (*p != '\\0') {
    printf("%c", *p);
    p++;
}</code></pre>`,
        code: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr;
    
    // 使用指针遍历数组
    printf("数组元素：");
    for (int i = 0; i < 5; i++) {
        printf("%d ", *(p + i));
    }
    printf("\\n");
    
    // 使用指针遍历字符串
    char str[] = "Hello, World!";
    char *q = str;
    printf("字符串：");
    while (*q != '\\0') {
        printf("%c", *q);
        q++;
    }
    printf("\\n");
    
    return 0;
}`,
        exercises: [
          {
            id: 'c6-2-1',
            type: 'single',
            question: '数组名arr和&arr[0]的关系是？',
            options: ['相等', 'arr更大', '&arr[0]更大', '无关'],
            answer: 'A',
            explanation: '数组名本身就是指向第一个元素的指针，arr等价于&amp;arr[0]。',
            score: 2
          }
        ]
      },
      {
        id: 'c6-3',
        title: '6.3 指针与函数',
        description: '学习指针作为函数参数和返回值',
        content: `<h3>6.3.1 指针作为函数参数</h3>
<p>指针作为函数参数可以实现地址传递：</p>
<pre><code class="code-block">void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}</code></pre>

<h3>6.3.2 指针作为函数返回值</h3>
<p>函数可以返回指针类型：</p>
<pre><code class="code-block">int* findMax(int arr[], int size) {
    int *max = &amp;arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > *max) {
            max = &amp;arr[i];
        }
    }
    return max;
}</code></pre>

<h3>6.3.3 指向函数的指针</h3>
<p>函数指针指向函数的入口地址：</p>
<pre><code class="code-block">int add(int a, int b);
int (*fp)(int, int) = add;  // fp指向add函数
int result = (*fp)(10, 20); // 通过函数指针调用</code></pre>

<h3>⚠️ 常见错误</h3>
<p><strong>1. 空指针（NULL指针）</strong></p>
<pre><code class="code-block">int *p = NULL;
// 错误：解引用空指针，程序崩溃
*p = 10;  // 段错误！
// 正确：使用前检查指针是否为空
if (p != NULL) {
    *p = 10;
}</code></pre>
<p>空指针指向地址0，解引用空指针会导致程序崩溃（段错误）。使用指针前必须检查是否为NULL。</p>

<p><strong>2. 野指针（悬空指针）</strong></p>
<pre><code class="code-block">// 错误：返回局部变量的地址
int* getPointer() {
    int x = 10;
    return &x;  // x在函数返回后被销毁，指针悬空
}

// 错误：释放后继续使用
int *p = (int*)malloc(sizeof(int));
free(p);
*p = 100;  // p已被释放，是野指针
// 正确：释放后设为NULL
free(p);
p = NULL;</code></pre>
<p>野指针指向已释放或无效的内存，使用野指针会导致不可预期的行为甚至程序崩溃。</p>

<p><strong>3. 内存泄漏</strong></p>
<pre><code class="code-block">// 错误：动态分配的内存未释放
void func() {
    int *p = (int*)malloc(100 * sizeof(int));
    // 使用p...
    // 忘记free(p);  内存泄漏！
}
// 正确：每次malloc都要有对应的free
void func() {
    int *p = (int*)malloc(100 * sizeof(int));
    if (p == NULL) return;
    // 使用p...
    free(p);
}</code></pre>
<p>动态分配的内存（malloc/calloc/realloc）必须使用free()释放，否则会造成内存泄漏，长期运行会导致系统内存耗尽。</p>`,
        code: `#include <stdio.h>

// 指针作为参数：交换两个数
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 返回指针：查找最大值
int* findMax(int arr[], int size) {
    int *max = &arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > *max) {
            max = &arr[i];
        }
    }
    return max;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("交换后：x=%d, y=%d\\n", x, y);
    
    int arr[] = {5, 2, 9, 1, 7};
    int *maxPtr = findMax(arr, 5);
    printf("最大值：%d\\n", *maxPtr);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c6-3-1',
            type: 'single',
            question: '使用指针作为函数参数的主要目的是？',
            options: ['节省内存', '实现地址传递', '简化代码', '提高效率'],
            answer: 'B',
            explanation: '指针作为函数参数可以实现地址传递，从而修改实参的值。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'c7',
    title: '第七章：结构体与联合体',
    lessons: [
      {
        id: 'c7-1',
        title: '7.1 结构体的定义和使用',
        description: '学习结构体的定义、初始化和访问',
        content: `<h3>7.1.1 结构体的定义</h3>
<p>结构体用于组合不同类型的数据：</p>
<pre><code class="code-block">struct 结构体名 {
    类型1 成员1;
    类型2 成员2;
    // ...
};</code></pre>

<h3>7.1.2 结构体变量的定义</h3>
<p>方式一：先定义结构体，再定义变量</p>
<pre><code class="code-block">struct Student {
    char name[20];
    int age;
    float score;
};

struct Student s1;</code></pre>

<p>方式二：定义结构体的同时定义变量</p>
<pre><code class="code-block">struct Student {
    char name[20];
    int age;
    float score;
} s1, s2;</code></pre>

<p>方式三：使用typedef简化</p>
<pre><code class="code-block">typedef struct {
    char name[20];
    int age;
    float score;
} Student;

Student s1;</code></pre>

<h3>7.1.3 结构体成员的访问</h3>
<ul>
<li><strong>结构体变量.成员名</strong>：通过变量访问成员</li>
<li><strong>结构体指针-&gt;成员名</strong>：通过指针访问成员</li>
</ul>`,
        code: `#include <stdio.h>

// 定义结构体
typedef struct {
    char name[20];
    int age;
    float score;
} Student;

int main() {
    // 结构体变量初始化
    Student s1 = {"张三", 18, 95.5};
    
    // 访问结构体成员
    printf("姓名：%s\\n", s1.name);
    printf("年龄：%d\\n", s1.age);
    printf("分数：%.2f\\n", s1.score);
    
    // 通过指针访问
    Student *p = &s1;
    printf("通过指针访问：%s\\n", p->name);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c7-1-1',
            type: 'fill',
            question: '访问结构体成员使用______运算符。',
            answer: '.',
            explanation: '结构体变量使用.运算符访问成员，结构体指针使用-&gt;运算符。',
            score: 2
          }
        ]
      },
      {
        id: 'c7-2',
        title: '7.2 结构体数组',
        description: '学习结构体数组的定义和使用',
        content: `<h3>7.2.1 结构体数组的定义</h3>
<p>结构体数组是元素为结构体的数组：</p>
<pre><code class="code-block">Student students[5];   // 包含5个Student结构体的数组</code></pre>

<h3>7.2.2 结构体数组的初始化</h3>
<pre><code class="code-block">Student students[3] = {
    {"张三", 18, 95.5},
    {"李四", 19, 88.0},
    {"王五", 17, 92.3}
};</code></pre>

<h3>7.2.3 结构体数组的访问</h3>
<pre><code class="code-block">students[0].name;      // 第一个学生的姓名
students[1].score;     // 第二个学生的分数</code></pre>

<h3>💡 实战案例：学生信息管理</h3>
<p>使用结构体数组实现一个简单的学生信息管理系统，支持录入、查找和统计功能：</p>
<pre><code class="code-block">#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[20];
    float math;
    float english;
    float average;
} Student;

int main() {
    Student students[50];
    int count = 0;
    int choice;
    
    while (1) {
        printf("\\n1.录入学生 2.显示全部 3.查找学生 4.统计 0.退出\\n");
        scanf("%d", &choice);
        if (choice == 0) break;
        
        switch (choice) {
            case 1:
                printf("姓名："); scanf("%s", students[count].name);
                printf("数学："); scanf("%f", &students[count].math);
                printf("英语："); scanf("%f", &students[count].english);
                students[count].id = count + 1;
                students[count].average = (students[count].math + students[count].english) / 2;
                count++;
                break;
            case 2:
                for (int i = 0; i < count; i++) {
                    printf("%d %s 数学%.1f 英语%.1f 平均%.1f\\n",
                           students[i].id, students[i].name,
                           students[i].math, students[i].english,
                           students[i].average);
                }
                break;
            case 3: {
                char name[20];
                printf("输入姓名："); scanf("%s", name);
                for (int i = 0; i < count; i++) {
                    if (strcmp(students[i].name, name) == 0) {
                        printf("找到：%s 平均分%.1f\\n", name, students[i].average);
                        break;
                    }
                }
                break;
            }
            case 4: {
                float sum = 0, max = 0;
                for (int i = 0; i < count; i++) {
                    sum += students[i].average;
                    if (students[i].average > max) max = students[i].average;
                }
                printf("平均分：%.1f 最高平均分：%.1f\\n", sum / count, max);
                break;
            }
        }
    }
    return 0;
}</code></pre>
<p>这个案例展示了结构体数组在实际信息管理系统中的应用，涵盖录入、遍历、查找和统计等核心操作。</p>`,
        code: `#include <stdio.h>

typedef struct {
    char name[20];
    int age;
    float score;
} Student;

int main() {
    // 结构体数组初始化
    Student students[3] = {
        {"张三", 18, 95.5},
        {"李四", 19, 88.0},
        {"王五", 17, 92.3}
    };
    
    // 遍历结构体数组
    printf("学生信息：\\n");
    for (int i = 0; i < 3; i++) {
        printf("第%d个学生：%s，%d岁，%.2f分\\n", 
               i + 1, students[i].name, students[i].age, students[i].score);
    }
    
    return 0;
}`,
        exercises: [
          {
            id: 'c7-2-1',
            type: 'code',
            question: '定义一个包含5个学生的结构体数组，计算平均分。',
            answer: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    float score;\n} Student;\n\nint main() {\n    Student students[5] = {\n        {"张三", 95.5},\n        {"李四", 88.0},\n        {"王五", 92.3},\n        {"赵六", 85.0},\n        {"钱七", 90.0}\n    };\n    \n    float sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += students[i].score;\n    }\n    printf("平均分：%.2f\\n", sum / 5);\n    return 0;\n}',
            explanation: '遍历结构体数组，累加所有学生的分数，再除以人数得到平均分。',
            score: 5
          }
        ]
      },
      {
        id: 'c7-3',
        title: '7.3 联合体',
        description: '学习联合体的定义和使用',
        content: `<h3>7.3.1 联合体的定义</h3>
<p>联合体（Union）与结构体类似，但所有成员共享同一块内存空间：</p>
<pre><code class="code-block">union 联合体名 {
    类型1 成员1;
    类型2 成员2;
    // ...
};</code></pre>

<h3>7.3.2 联合体的特点</h3>
<ul>
<li>所有成员共享同一块内存</li>
<li>联合体的大小等于最大成员的大小</li>
<li>同一时间只能存储一个成员的值</li>
<li>修改一个成员会影响其他成员</li>
</ul>

<h3>7.3.3 结构体与联合体的区别</h3>
<ul>
<li>结构体：各成员独立存储，总大小为各成员大小之和</li>
<li>联合体：各成员共享存储，总大小为最大成员大小</li>
</ul>`,
        code: `#include <stdio.h>

// 定义联合体
union Data {
    int i;
    float f;
    char c;
};

int main() {
    union Data d;
    
    // 设置整型值
    d.i = 100;
    printf("d.i = %d\\n", d.i);
    printf("d.f = %f\\n", d.f);  // 值被破坏
    printf("d.c = %c\\n", d.c);  // 值被破坏
    
    // 设置浮点值
    d.f = 3.14;
    printf("d.i = %d\\n", d.i);  // 值被破坏
    printf("d.f = %f\\n", d.f);
    printf("d.c = %c\\n", d.c);  // 值被破坏
    
    // 联合体大小
    printf("联合体大小：%zu字节\\n", sizeof(union Data));
    
    return 0;
}`,
        exercises: [
          {
            id: 'c7-3-1',
            type: 'single',
            question: '联合体和结构体的主要区别是？',
            options: ['语法不同', '成员共享内存', '效率不同', '用途不同'],
            answer: 'B',
            explanation: '联合体的成员共享同一块内存空间，而结构体的成员各自独立存储。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'c8',
    title: '第八章：文件操作',
    lessons: [
      {
        id: 'c8-1',
        title: '8.1 文件的打开和关闭',
        description: '学习文件指针和文件操作的基本流程',
        content: `<h3>8.1.1 文件指针</h3>
<p>文件指针是指向文件结构体的指针：</p>
<pre><code class="code-block">FILE *fp;   // 定义文件指针</code></pre>

<h3>8.1.2 文件的打开</h3>
<p>使用fopen()函数打开文件：</p>
<pre><code class="code-block">FILE *fopen(const char *filename, const char *mode);</code></pre>

<p>打开模式：</p>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">模式</th><th class="border px-4 py-2">含义</th><th class="border px-4 py-2">说明</th></tr>
<tr><td class="border px-4 py-2">r</td><td class="border px-4 py-2">只读</td><td class="border px-4 py-2">文件必须存在</td></tr>
<tr><td class="border px-4 py-2">w</td><td class="border px-4 py-2">只写</td><td class="border px-4 py-2">文件不存在则创建，存在则清空</td></tr>
<tr><td class="border px-4 py-2">a</td><td class="border px-4 py-2">追加</td><td class="border px-4 py-2">文件不存在则创建，从末尾写入</td></tr>
<tr><td class="border px-4 py-2">r+</td><td class="border px-4 py-2">读写</td><td class="border px-4 py-2">文件必须存在</td></tr>
<tr><td class="border px-4 py-2">w+</td><td class="border px-4 py-2">读写</td><td class="border px-4 py-2">文件不存在则创建，存在则清空</td></tr>
<tr><td class="border px-4 py-2">a+</td><td class="border px-4 py-2">读写</td><td class="border px-4 py-2">文件不存在则创建，从末尾写入</td></tr>
</table>

<h3>8.1.3 文件的关闭</h3>
<p>使用fclose()函数关闭文件：</p>
<pre><code class="code-block">int fclose(FILE *fp);</code></pre>`,
        code: `#include <stdio.h>

int main() {
    // 打开文件
    FILE *fp = fopen("example.txt", "w");
    if (fp == NULL) {
        printf("文件打开失败！\\n");
        return 1;
    }
    
    printf("文件打开成功！\\n");
    
    // 关闭文件
    fclose(fp);
    printf("文件已关闭！\\n");
    
    return 0;
}`,
        exercises: [
          {
            id: 'c8-1-1',
            type: 'single',
            question: '使用fopen()打开文件时，若文件不存在会创建文件的模式是？',
            options: ['r', 'w', 'r+', 'rb'],
            answer: 'B',
            explanation: 'w模式表示只写，如果文件不存在则创建，存在则清空内容。',
            score: 2
          }
        ]
      },
      {
        id: 'c8-2',
        title: '8.2 文件的读写操作',
        description: '学习文件的顺序读写和随机读写',
        content: `<h3>8.2.1 字符读写</h3>
<ul>
<li><strong>fgetc(fp)</strong>：从文件读取一个字符</li>
<li><strong>fputc(ch, fp)</strong>：向文件写入一个字符</li>
</ul>

<h3>8.2.2 字符串读写</h3>
<ul>
<li><strong>fgets(str, n, fp)</strong>：从文件读取一行字符串</li>
<li><strong>fputs(str, fp)</strong>：向文件写入一个字符串</li>
</ul>

<h3>8.2.3 格式化读写</h3>
<ul>
<li><strong>fscanf(fp, format, &amp;var)</strong>：格式化读取</li>
<li><strong>fprintf(fp, format, var)</strong>：格式化写入</li>
</ul>

<h3>8.2.4 二进制读写</h3>
<ul>
<li><strong>fread(buffer, size, count, fp)</strong>：二进制读取</li>
<li><strong>fwrite(buffer, size, count, fp)</strong>：二进制写入</li>
</ul>`,
        code: `#include <stdio.h>

int main() {
    FILE *fp;
    char str[100];
    
    // 写入文件
    fp = fopen("test.txt", "w");
    fprintf(fp, "姓名：张三\\n");
    fprintf(fp, "年龄：18\\n");
    fprintf(fp, "分数：95.5\\n");
    fclose(fp);
    
    // 读取文件
    fp = fopen("test.txt", "r");
    printf("文件内容：\\n");
    while (fgets(str, 100, fp) != NULL) {
        printf("%s", str);
    }
    fclose(fp);
    
    return 0;
}`,
        exercises: [
          {
            id: 'c8-2-1',
            type: 'single',
            question: '从文件读取一行字符串的函数是？',
            options: ['fgetc', 'fgets', 'fscanf', 'fread'],
            answer: 'B',
            explanation: 'fgets()函数用于从文件读取一行字符串。',
            score: 2
          }
        ]
      },
      {
        id: 'c8-3',
        title: '8.3 文件的定位操作',
        description: '学习文件指针的定位和移动',
        content: `<h3>8.3.1 文件指针</h3>
<p>文件指针指向当前读写位置，可以通过以下函数移动：</p>
<ul>
<li><strong>ftell(fp)</strong>：获取当前文件指针位置</li>
<li><strong>fseek(fp, offset, origin)</strong>：移动文件指针</li>
<li><strong>rewind(fp)</strong>：将文件指针移到文件开头</li>
</ul>

<h3>8.3.2 fseek()函数</h3>
<p>origin参数：</p>
<ul>
<li><strong>SEEK_SET</strong>：从文件开头开始</li>
<li><strong>SEEK_CUR</strong>：从当前位置开始</li>
<li><strong>SEEK_END</strong>：从文件末尾开始</li>
</ul>`,
        code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "r");
    if (fp == NULL) {
        printf("文件打开失败！\\n");
        return 1;
    }
    
    // 获取当前位置
    printf("当前位置：%ld\\n", ftell(fp));
    
    // 移动到第10个字节
    fseek(fp, 10, SEEK_SET);
    printf("移动后位置：%ld\\n", ftell(fp));
    
    // 向后移动5个字节
    fseek(fp, 5, SEEK_CUR);
    printf("当前位置：%ld\\n", ftell(fp));
    
    // 移到文件开头
    rewind(fp);
    printf("回到开头：%ld\\n", ftell(fp));
    
    fclose(fp);
    return 0;
}`,
        exercises: [
          {
            id: 'c8-3-1',
            type: 'single',
            question: '将文件指针移到文件开头的函数是？',
            options: ['fseek', 'ftell', 'rewind', 'feof'],
            answer: 'C',
            explanation: 'rewind()函数用于将文件指针移到文件开头。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'c9',
    title: '第九章：综合实战项目',
    lessons: [
      {
        id: 'c9-1',
        title: '9.1 学生成绩管理系统',
        description: '综合运用C语言知识，开发一个完整的学生成绩管理系统',
        content: `<h3>9.1.1 项目简介</h3>
<p>本项目是一个完整的<strong>学生成绩管理系统</strong>，综合运用了结构体、数组、函数、指针和文件I/O等C语言核心知识：</p>
<ul>
<li><strong>功能模块</strong>：添加学生、删除学生、修改成绩、查询成绩、显示所有学生、统计分数、数据持久化存储</li>
<li><strong>技术栈</strong>：结构体数组、函数模块化、文件读写、指针操作、动态内存管理</li>
<li><strong>适用场景</strong>：课程设计、期末项目、C语言综合练习</li>
</ul>

<h3>9.1.2 系统设计</h3>
<p><strong>数据结构设计：</strong></p>
<pre><code class="code-block">typedef struct {
    int id;              // 学号
    char name[20];       // 姓名
    float math;          // 数学成绩
    float english;       // 英语成绩
    float cLanguage;     // C语言成绩
    float average;       // 平均分
} Student;</code></pre>

<p><strong>功能模块划分：</strong></p>
<ol>
<li><strong>学生信息录入</strong>：输入学号、姓名和各科成绩</li>
<li><strong>学生信息查询</strong>：按学号或姓名查找学生</li>
<li><strong>成绩修改</strong>：修改指定学生的成绩</li>
<li><strong>成绩删除</strong>：删除指定学生的记录</li>
<li><strong>成绩统计</strong>：计算平均分、最高分、最低分</li>
<li><strong>数据持久化</strong>：将数据保存到文件，下次启动时加载</li>
</ol>

<h3>9.1.3 核心代码解析</h3>
<p><strong>1. 主菜单函数：</strong></p>
<pre><code class="code-block">void showMenu() {
    printf("\\n========== 学生成绩管理系统 ==========\\n");
    printf("1. 添加学生\\n");
    printf("2. 显示所有学生\\n");
    printf("3. 查询学生\\n");
    printf("4. 修改成绩\\n");
    printf("5. 删除学生\\n");
    printf("6. 成绩统计\\n");
    printf("7. 保存到文件\\n");
    printf("8. 从文件加载\\n");
    printf("0. 退出系统\\n");
    printf("=======================================\\n");
}</code></pre>

<p><strong>2. 添加学生函数：</strong></p>
<pre><code class="code-block">void addStudent(Student students[], int *count) {
    if (*count >= MAX_STUDENTS) {
        printf("学生数量已达上限！\\n");
        return;
    }
    Student *s = &students[*count];
    s->id = *count + 1;
    printf("请输入姓名："); scanf("%s", s->name);
    printf("请输入数学成绩："); scanf("%f", &s->math);
    printf("请输入英语成绩："); scanf("%f", &s->english);
    printf("请输入C语言成绩："); scanf("%f", &s->cLanguage);
    s->average = (s->math + s->english + s->cLanguage) / 3;
    (*count)++;
    printf("添加成功！\\n");
}</code></pre>

<p><strong>3. 文件保存与加载：</strong></p>
<p>使用fwrite()和fread()实现结构体的二进制读写，保证数据持久化。</p>

<h3>9.1.4 项目总结</h3>
<ul>
<li>本项目综合运用了C语言的核心知识点</li>
<li>通过模块化设计提高了代码的可维护性</li>
<li>文件操作实现了数据的持久化存储</li>
<li>适合作为C语言课程的结课项目</li>
</ul>`,
        code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_STUDENTS 100

// 学生结构体
typedef struct {
    int id;
    char name[20];
    float math;
    float english;
    float cLanguage;
    float average;
} Student;

// 函数声明
void showMenu();
void addStudent(Student students[], int *count);
void showAllStudents(Student students[], int count);
void searchStudent(Student students[], int count);
void modifyStudent(Student students[], int count);
void deleteStudent(Student students[], int *count);
void showStatistics(Student students[], int count);
void saveToFile(Student students[], int count);
void loadFromFile(Student students[], int *count);

int main() {
    Student students[MAX_STUDENTS];
    int count = 0;
    int choice;
    
    while (1) {
        showMenu();
        printf("请选择操作：");
        scanf("%d", &choice);
        
        switch (choice) {
            case 1: addStudent(students, &count); break;
            case 2: showAllStudents(students, count); break;
            case 3: searchStudent(students, count); break;
            case 4: modifyStudent(students, count); break;
            case 5: deleteStudent(students, &count); break;
            case 6: showStatistics(students, count); break;
            case 7: saveToFile(students, count); break;
            case 8: loadFromFile(students, &count); break;
            case 0:
                printf("感谢使用！\\n");
                return 0;
            default:
                printf("无效选择，请重试！\\n");
        }
    }
    return 0;
}

void showMenu() {
    printf("\\n========== 学生成绩管理系统 ==========\\n");
    printf("1. 添加学生\\n");
    printf("2. 显示所有学生\\n");
    printf("3. 查询学生\\n");
    printf("4. 修改成绩\\n");
    printf("5. 删除学生\\n");
    printf("6. 成绩统计\\n");
    printf("7. 保存到文件\\n");
    printf("8. 从文件加载\\n");
    printf("0. 退出系统\\n");
    printf("=======================================\\n");
}

void addStudent(Student students[], int *count) {
    if (*count >= MAX_STUDENTS) {
        printf("学生数量已达上限！\\n");
        return;
    }
    Student *s = &students[*count];
    s->id = *count + 1;
    printf("请输入姓名："); scanf("%s", s->name);
    printf("请输入数学成绩："); scanf("%f", &s->math);
    printf("请输入英语成绩："); scanf("%f", &s->english);
    printf("请输入C语言成绩："); scanf("%f", &s->cLanguage);
    s->average = (s->math + s->english + s->cLanguage) / 3;
    (*count)++;
    printf("添加成功！\\n");
}

void showAllStudents(Student students[], int count) {
    if (count == 0) {
        printf("暂无学生信息！\\n");
        return;
    }
    printf("\\n学号\\t姓名\\t数学\\t英语\\tC语言\\t平均分\\n");
    for (int i = 0; i < count; i++) {
        printf("%d\\t%s\\t%.1f\\t%.1f\\t%.1f\\t%.1f\\n",
               students[i].id, students[i].name,
               students[i].math, students[i].english,
               students[i].cLanguage, students[i].average);
    }
}

void searchStudent(Student students[], int count) {
    char name[20];
    printf("请输入要查询的学生姓名：");
    scanf("%s", name);
    int found = 0;
    for (int i = 0; i < count; i++) {
        if (strcmp(students[i].name, name) == 0) {
            printf("学号：%d, 姓名：%s\\n", students[i].id, students[i].name);
            printf("数学：%.1f, 英语：%.1f, C语言：%.1f\\n",
                   students[i].math, students[i].english, students[i].cLanguage);
            printf("平均分：%.1f\\n", students[i].average);
            found = 1;
        }
    }
    if (!found) printf("未找到该学生！\\n");
}

void modifyStudent(Student students[], int count) {
    int id;
    printf("请输入要修改的学生学号：");
    scanf("%d", &id);
    for (int i = 0; i < count; i++) {
        if (students[i].id == id) {
            printf("请输入新的数学成绩："); scanf("%f", &students[i].math);
            printf("请输入新的英语成绩："); scanf("%f", &students[i].english);
            printf("请输入新的C语言成绩："); scanf("%f", &students[i].cLanguage);
            students[i].average = (students[i].math + students[i].english + students[i].cLanguage) / 3;
            printf("修改成功！\\n");
            return;
        }
    }
    printf("未找到该学生！\\n");
}

void deleteStudent(Student students[], int *count) {
    int id;
    printf("请输入要删除的学生学号：");
    scanf("%d", &id);
    for (int i = 0; i < *count; i++) {
        if (students[i].id == id) {
            for (int j = i; j < *count - 1; j++) {
                students[j] = students[j + 1];
            }
            (*count)--;
            printf("删除成功！\\n");
            return;
        }
    }
    printf("未找到该学生！\\n");
}

void showStatistics(Student students[], int count) {
    if (count == 0) {
        printf("暂无学生信息！\\n");
        return;
    }
    float sumMath = 0, sumEnglish = 0, sumCLang = 0;
    float maxMath = students[0].math, minMath = students[0].math;
    float maxEnglish = students[0].english, minEnglish = students[0].english;
    float maxCLang = students[0].cLanguage, minCLang = students[0].cLanguage;
    for (int i = 0; i < count; i++) {
        sumMath += students[i].math;
        sumEnglish += students[i].english;
        sumCLang += students[i].cLanguage;
        if (students[i].math > maxMath) maxMath = students[i].math;
        if (students[i].math < minMath) minMath = students[i].math;
        if (students[i].english > maxEnglish) maxEnglish = students[i].english;
        if (students[i].english < minEnglish) minEnglish = students[i].english;
        if (students[i].cLanguage > maxCLang) maxCLang = students[i].cLanguage;
        if (students[i].cLanguage < minCLang) minCLang = students[i].cLanguage;
    }
    printf("\\n====== 成绩统计 ======\\n");
    printf("数学平均分：%.1f\\n", sumMath / count);
    printf("英语平均分：%.1f\\n", sumEnglish / count);
    printf("C语言平均分：%.1f\\n", sumCLang / count);
    printf("数学最高分：%.1f，最低分：%.1f\\n", maxMath, minMath);
    printf("英语最高分：%.1f，最低分：%.1f\\n", maxEnglish, minEnglish);
    printf("C语言最高分：%.1f，最低分：%.1f\\n", maxCLang, minCLang);
}

void saveToFile(Student students[], int count) {
    FILE *fp = fopen("students.dat", "wb");
    if (fp == NULL) {
        printf("文件打开失败！\\n");
        return;
    }
    fwrite(&count, sizeof(int), 1, fp);
    fwrite(students, sizeof(Student), count, fp);
    fclose(fp);
    printf("数据保存成功！\\n");
}

void loadFromFile(Student students[], int *count) {
    FILE *fp = fopen("students.dat", "rb");
    if (fp == NULL) {
        printf("文件不存在，请先添加学生数据！\\n");
        return;
    }
    fread(count, sizeof(int), 1, fp);
    fread(students, sizeof(Student), *count, fp);
    fclose(fp);
    printf("数据加载成功！共加载%d条记录。\\n", *count);
}`,
        exercises: [
          {
            id: 'c9-1-1',
            type: 'single',
            question: '学生成绩管理系统中，数据持久化使用的文件操作模式是？',
            options: ['文本读写', '二进制读写', '只读模式', '追加模式'],
            answer: 'B',
            explanation: '系统使用fwrite()和fread()进行二进制读写，效率更高，适合结构体数据的存储。',
            score: 2
          },
          {
            id: 'c9-1-2',
            type: 'code',
            question: '在学生成绩管理系统中，添加一个按平均分排序的功能函数。',
            answer: 'void sortByAverage(Student students[], int count) {\n    for (int i = 0; i < count - 1; i++) {\n        for (int j = 0; j < count - 1 - i; j++) {\n            if (students[j].average < students[j + 1].average) {\n                Student temp = students[j];\n                students[j] = students[j + 1];\n                students[j + 1] = temp;\n            }\n        }\n    }\n    printf("排序完成！\\n");\n}',
            explanation: '使用冒泡排序算法，按平均分从高到低排序，需要交换整个结构体。',
            score: 5
          },
          {
            id: 'c9-1-3',
            type: 'essay',
            question: '请简述学生成绩管理系统中各模块之间的关系，以及如何保证数据的一致性。',
            answer: '系统通过结构体数组统一管理数据，各模块通过函数参数传递数组指针和计数器，实现数据共享。添加、修改、删除操作都会更新数组，保存操作将数据持久化到文件，加载操作从文件恢复数据。',
            explanation: '模块化设计使得每个函数职责单一，通过指针传递实现数据共享，文件操作保证数据持久化。',
            score: 8
          }
        ]
      },
      {
        id: 'c9-2',
        title: '9.2 项目优化与调试',
        description: '学习代码优化技巧和调试方法，提升程序质量',
        content: `<h3>9.2.1 代码优化技巧</h3>
<p><strong>1. 使用动态内存分配</strong></p>
<p>将固定大小的数组改为动态分配，适应不同规模的数据：</p>
<pre><code class="code-block">Student *students = (Student*)malloc(MAX_STUDENTS * sizeof(Student));
if (students == NULL) {
    printf("内存分配失败！\\n");
    return 1;
}
// 使用完毕后释放
free(students);</code></pre>

<p><strong>2. 函数指针优化菜单</strong></p>
<p>使用函数指针数组简化switch-case结构：</p>
<pre><code class="code-block">typedef void (*MenuFunc)(Student[], int*);
MenuFunc menu[] = {NULL, addStudent, showAllStudents, searchStudent,
                   modifyStudent, deleteStudent, showStatistics,
                   saveToFile, loadFromFile};
// 调用：menu[choice](students, &count);</code></pre>

<p><strong>3. 输入验证</strong></p>
<p>添加输入合法性检查，防止无效数据：</p>
<pre><code class="code-block">printf("请输入成绩(0-100)：");
scanf("%f", &score);
if (score < 0 || score > 100) {
    printf("成绩无效，请重新输入！\\n");
    continue;
}</code></pre>

<h3>9.2.2 调试技巧</h3>
<p><strong>1. 使用printf调试</strong></p>
<p>在关键位置添加打印语句，观察程序执行流程和变量值：</p>
<pre><code class="code-block">printf("[DEBUG] 当前count=%d\\n", count);
printf("[DEBUG] 进入addStudent函数\\n");</code></pre>

<p><strong>2. 使用断言(assert)</strong></p>
<p>assert用于验证程序中的假设条件：</p>
<pre><code class="code-block">#include <assert.h>
void addStudent(Student students[], int *count) {
    assert(students != NULL);  // 确保指针不为空
    assert(*count < MAX_STUDENTS);  // 确保不越界
    // ...
}</code></pre>

<p><strong>3. 边界条件测试</strong></p>
<ul>
<li>测试空数组（count=0）的情况</li>
<li>测试数组满（count=MAX_STUDENTS）的情况</li>
<li>测试查找不存在的数据</li>
<li>测试文件读写失败的情况</li>
</ul>

<h3>9.2.3 常见Bug及修复</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">问题</th><th class="border px-4 py-2">原因</th><th class="border px-4 py-2">解决方案</th></tr>
<tr><td class="border px-4 py-2">数组越界</td><td class="border px-4 py-2">未检查count边界</td><td class="border px-4 py-2">添加边界判断</td></tr>
<tr><td class="border px-4 py-2">文件打开失败</td><td class="border px-4 py-2">路径错误或权限不足</td><td class="border px-4 py-2">检查返回值，提示用户</td></tr>
<tr><td class="border px-4 py-2">数据丢失</td><td class="border px-4 py-2">未及时保存</td><td class="border px-4 py-2">添加自动保存功能</td></tr>
<tr><td class="border px-4 py-2">内存泄漏</td><td class="border px-4 py-2">未释放动态内存</td><td class="border px-4 py-2">确保每个malloc都有free</td></tr>
</table>

<h3>9.2.4 性能优化建议</h3>
<ul>
<li><strong>排序优化</strong>：使用qsort()替代冒泡排序</li>
<li><strong>查找优化</strong>：对已排序数据使用二分查找</li>
<li><strong>I/O优化</strong>：批量读写替代逐条读写</li>
<li><strong>内存优化</strong>：按需分配，及时释放</li>
</ul>`,
        code: `#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

// 使用动态内存的优化版本
int main() {
    int maxStudents = 10;
    int *scores = (int*)malloc(maxStudents * sizeof(int));
    assert(scores != NULL);  // 调试断言
    
    int count = 0;
    int choice;
    
    while (1) {
        printf("\\n1.添加成绩 2.显示 3.统计 0.退出\\n");
        printf("选择：");
        scanf("%d", &choice);
        
        if (choice == 0) break;
        
        switch (choice) {
            case 1:
                if (count >= maxStudents) {
                    // 动态扩容
                    maxStudents *= 2;
                    int *temp = (int*)realloc(scores, maxStudents * sizeof(int));
                    assert(temp != NULL);
                    scores = temp;
                    printf("数组已扩容到%d\\n", maxStudents);
                }
                printf("输入成绩(0-100)：");
                scanf("%d", &scores[count]);
                if (scores[count] >= 0 && scores[count] <= 100) {
                    count++;
                    printf("添加成功！\\n");
                } else {
                    printf("成绩无效！\\n");
                }
                break;
            case 2:
                for (int i = 0; i < count; i++) {
                    printf("%d ", scores[i]);
                }
                printf("\\n");
                break;
            case 3: {
                if (count == 0) {
                    printf("没有学生数据，请先添加学生记录！\n");
                    break;
                }
                int sum = 0, max = scores[0], min = scores[0];
                for (int i = 0; i < count; i++) {
                    sum += scores[i];
                    if (scores[i] > max) max = scores[i];
                    if (scores[i] < min) min = scores[i];
                }
                printf("平均分：%.2f，最高分：%d，最低分：%d\\n",
                       (float)sum / count, max, min);
                break;
            }
        }
    }
    
    free(scores);
    return 0;
}`,
        exercises: [
          {
            id: 'c9-2-1',
            type: 'single',
            question: '以下哪个不是常见的调试方法？',
            options: ['printf调试', 'assert断言', '自动生成代码', '断点调试'],
            answer: 'C',
            explanation: '自动生成代码是开发工具的功能，不是调试方法。printf、assert和断点调试是常用的调试手段。',
            score: 2
          },
          {
            id: 'c9-2-2',
            type: 'single',
            question: '使用动态数组时，当数组满了应该如何处理？',
            options: ['提示错误', '使用realloc扩容', '删除旧数据', '忽略新数据'],
            answer: 'B',
            explanation: 'realloc()函数可以重新分配内存大小，实现动态扩容，适用于数据量不确定的场景。',
            score: 2
          },
          {
            id: 'c9-2-3',
            type: 'code',
            question: '为学生成绩管理系统添加输入验证功能，确保成绩在0-100之间。',
            answer: 'float inputScore(const char *subject) {\n    float score;\n    while (1) {\n        printf("请输入%s成绩(0-100)：", subject);\n        scanf("%f", &score);\n        if (score >= 0 && score <= 100) {\n            return score;\n        }\n        printf("成绩无效，请重新输入！\\n");\n    }\n}',
            explanation: '封装一个输入验证函数，循环读取直到用户输入合法值，提高代码健壮性。',
            score: 5
          }
        ]
      }
    ]
  }
];