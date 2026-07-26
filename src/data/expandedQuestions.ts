import { Exercise } from './cLanguage';

/**
 * 扩展题库 - 按课程和难度分类
 * 每门课程包含基础(basic)、提高(improve)、真题(exam)三个难度等级
 * 总计每门课程50+题，覆盖职业高考全部考点
 */

/** C语言扩展题库 */
export const cLanguageExpandedQuestions: Record<string, Exercise[]> = {
  /** 基础题 - 覆盖基本概念和语法 */
  basic: [
    // 第1章：C语言概述
    { id: 'cl-b-1', type: 'single', question: 'C语言是由谁发明的？', options: ['比尔·盖茨', '丹尼斯·里奇', '史蒂夫·乔布斯', '马克·扎克伯格'], answer: 'B', explanation: 'C语言由贝尔实验室的丹尼斯·里奇(Dennis Ritchie)于1972年发明。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-2', type: 'single', question: 'C语言共有多少个关键字？', options: ['16', '32', '64', '128'], answer: 'B', explanation: 'C语言标准规定共有32个关键字。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-3', type: 'fill', question: 'C程序的入口函数是______。', answer: 'main', explanation: 'main()函数是C程序的入口点。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-4', type: 'single', question: 'C语言属于哪种编程语言？', options: ['面向对象', '面向过程', '函数式', '逻辑式'], answer: 'B', explanation: 'C语言采用结构化编程思想，是面向过程的语言。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-5', type: 'single', question: '以下哪个不是C语言的特点？', options: ['简洁紧凑', '可移植性好', '自动垃圾回收', '高效灵活'], answer: 'C', explanation: 'C语言没有自动垃圾回收机制，需要手动管理内存。', score: 2, difficulty: 'basic' },

    // 第2章：数据类型与运算符
    { id: 'cl-b-6', type: 'single', question: 'int类型在32位系统中占多少字节？', options: ['1', '2', '4', '8'], answer: 'C', explanation: 'int类型在32位和64位系统中通常占4个字节。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-7', type: 'fill', question: '字符型数据的关键字是______。', answer: 'char', explanation: 'char用于存储单个字符，占1个字节。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-8', type: 'single', question: 'float类型占多少字节？', options: ['2', '4', '8', '16'], answer: 'B', explanation: 'float单精度浮点型占4个字节。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-9', type: 'single', question: '表达式 5 / 2 的结果是？', options: ['2.5', '2', '3', '0'], answer: 'B', explanation: '整型除法会舍去小数部分，5/2=2。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-10', type: 'fill', question: '使用______关键字定义符号常量。', answer: '#define', explanation: '#define是预处理指令，用于定义符号常量。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-11', type: 'single', question: '以下哪个是合法的变量名？', options: ['2x', 'int', '_name', 'float'], answer: 'C', explanation: '变量名不能以数字开头，不能是关键字。_name是合法的。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-12', type: 'single', question: '取余运算符是？', options: ['/', '\\', '%', '&'], answer: 'C', explanation: '%是取余（模）运算符。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-13', type: 'single', question: 'a++和++a的区别是？', options: ['没有区别', 'a++先使用后自增，++a先自增后使用', 'a++先自增后使用', '只是语法不同'], answer: 'B', explanation: 'a++是后缀自增，先使用当前值再自增；++a是前缀自增，先自增再使用。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-14', type: 'single', question: 'double类型占多少字节？', options: ['2', '4', '8', '16'], answer: 'C', explanation: 'double双精度浮点型占8个字节。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-15', type: 'single', question: '以下哪个不是C语言的数据类型？', options: ['int', 'float', 'string', 'char'], answer: 'C', explanation: 'C语言没有string类型，字符串以字符数组形式存储。', score: 2, difficulty: 'basic' },

    // 第3章：流程控制
    { id: 'cl-b-16', type: 'single', question: 'if语句的条件表达式的结果应该是？', options: ['整型', '浮点型', '逻辑值', '任意类型'], answer: 'C', explanation: 'if语句的条件表达式得出逻辑值（真或假）。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-17', type: 'single', question: 'switch语句中用于跳出switch结构的关键字是？', options: ['exit', 'break', 'continue', 'return'], answer: 'B', explanation: 'break语句用于跳出switch结构。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-18', type: 'single', question: 'do-while循环和while循环的主要区别是？', options: ['语法不同', 'do-while至少执行一次', '效率不同', '没有区别'], answer: 'B', explanation: 'do-while先执行循环体再判断条件，至少执行一次。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-19', type: 'single', question: 'break语句在循环中的作用是？', options: ['跳过当前迭代', '跳出整个循环', '继续下一次循环', '终止程序'], answer: 'B', explanation: 'break跳出整个循环。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-20', type: 'single', question: 'continue语句在循环中的作用是？', options: ['跳过当前迭代', '跳出整个循环', '终止程序', '重新开始循环'], answer: 'A', explanation: 'continue跳过当前迭代，继续下一次循环。', score: 2, difficulty: 'basic' },

    // 第4章：数组与字符串
    { id: 'cl-b-21', type: 'fill', question: '数组的下标从______开始。', answer: '0', explanation: 'C语言中数组下标从0开始。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-22', type: 'single', question: 'int arr[3][4]表示什么？', options: ['3个元素的一维数组', '4个元素的一维数组', '3行4列的二维数组', '4行3列的二维数组'], answer: 'C', explanation: 'arr[3][4]表示3行4列的二维数组。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-23', type: 'fill', question: '字符串在C语言中以______字符结尾。', answer: '\\0', explanation: '字符串以空字符\\0结尾。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-24', type: 'single', question: '计算字符串长度的函数是？', options: ['strcpy', 'strcat', 'strlen', 'strcmp'], answer: 'C', explanation: 'strlen()用于计算字符串长度。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-25', type: 'single', question: 'strcmp()函数的作用是？', options: ['复制字符串', '拼接字符串', '比较字符串', '计算长度'], answer: 'C', explanation: 'strcmp()用于比较两个字符串。', score: 2, difficulty: 'basic' },

    // 第5章：函数
    { id: 'cl-b-26', type: 'single', question: '没有返回值的函数，返回类型应声明为？', options: ['int', 'float', 'void', 'char'], answer: 'C', explanation: 'void表示无返回值。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-27', type: 'single', question: '递归函数必须具备的条件是？', options: ['返回值', '参数', '终止条件', '循环'], answer: 'C', explanation: '递归函数必须有终止条件，否则会无限递归。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-28', type: 'single', question: '值传递和地址传递的主要区别是？', options: ['语法不同', '地址传递会影响实参', '效率不同', '没有区别'], answer: 'B', explanation: '值传递是复制值，不影响实参；地址传递会影响实参。', score: 2, difficulty: 'basic' },

    // 第6章：指针
    { id: 'cl-b-29', type: 'single', question: '用于获取变量地址的操作符是？', options: ['*', '&', '%', '#'], answer: 'B', explanation: '&是取地址符。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-30', type: 'fill', question: 'int *p; 表示p是一个指向______类型的指针。', answer: '整型', explanation: 'int *p表示p是指向整型变量的指针。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-31', type: 'single', question: '数组名arr和&arr[0]的关系是？', options: ['相等', 'arr更大', '&arr[0]更大', '不相等'], answer: 'A', explanation: '数组名本身就是指向第一个元素的指针。', score: 2, difficulty: 'basic' },

    // 第7章：结构体与联合体
    { id: 'cl-b-32', type: 'fill', question: '访问结构体成员使用______运算符。', answer: '.', explanation: '结构体变量使用.访问成员，结构体指针使用->。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-33', type: 'single', question: '结构体和联合体的主要区别是？', options: ['语法不同', '成员共享内存', '效率不同', '没有区别'], answer: 'B', explanation: '联合体成员共享同一块内存空间。', score: 2, difficulty: 'basic' },

    // 第8章：文件操作
    { id: 'cl-b-34', type: 'single', question: '打开文件时使用"w"模式，如果文件不存在会？', options: ['报错', '创建文件', '跳过', '覆盖'], answer: 'B', explanation: 'w模式会创建不存在的文件。', score: 2, difficulty: 'basic' },
    { id: 'cl-b-35', type: 'single', question: '将文件指针移到文件开头的函数是？', options: ['fseek', 'ftell', 'rewind', 'feof'], answer: 'C', explanation: 'rewind()将文件指针移到开头。', score: 2, difficulty: 'basic' },
  ],

  /** 提高题 - 需要理解和分析能力 */
  improve: [
    { id: 'cl-i-1', type: 'single', question: '以下程序的输出结果是什么？\nint a=5; printf("%d", a++);', options: ['5', '6', '4', '编译错误'], answer: 'A', explanation: 'a++是先使用当前值5再自增，所以输出5。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-2', type: 'single', question: '表达式 3>2 && 5<4 的结果是？', options: ['1', '0', 'true', 'false'], answer: 'B', explanation: '逻辑与要求两边都为真，5<4为假，结果为0。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-3', type: 'single', question: '以下关于switch语句的描述，正确的是？', options: ['表达式可以是任意类型', '每个case必须使用break', 'default是可选的', 'case后可以跟变量'], answer: 'C', explanation: 'default是可选的，用于处理未匹配的情况。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-4', type: 'single', question: '以下程序的输出是？\nint a=10,b=20; printf("%d", a>b?a:b);', options: ['10', '20', '0', '1'], answer: 'B', explanation: '条件运算符返回较大值，20>10所以输出20。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-5', type: 'single', question: 'int arr[5]={1,2}; 未初始化的元素值是？', options: ['随机值', '0', '1', '空'], answer: 'B', explanation: '部分初始化时，未指定值的元素自动初始化为0。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-6', type: 'single', question: '以下哪个不是C语言的合法常量？', options: ['0x1A', '012', '3.14e2', '0978'], answer: 'D', explanation: '0开头的数是八进制，八进制不能有8和9。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-7', type: 'single', question: 'puts()和printf()的主要区别是？', options: ['puts()自动换行', 'puts()格式化输出', 'puts()输出到文件', '没有区别'], answer: 'A', explanation: 'puts()输出字符串后自动添加换行符。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-8', type: 'single', question: '以下关于for循环的描述，正确的是？', options: ['三个表达式都可以省略', '只能有一个表达式', '必须写初始化表达式', '不能使用break'], answer: 'A', explanation: 'for循环的初始化、条件、更新表达式都可以省略。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-9', type: 'single', question: '以下程序的输出是？\nint a=5; printf("%d", sizeof(a++));', options: ['5', '6', '4', '2'], answer: 'C', explanation: 'sizeof是编译时运算符，a++不会实际执行，输出int的大小4。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-10', type: 'single', question: '以下关于指针的描述，错误的是？', options: ['指针存储地址', '指针可以指向指针', '不同类型的指针可以随意赋值', '空指针可以赋值为NULL'], answer: 'C', explanation: '不同类型的指针之间赋值需要强制类型转换。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-11', type: 'code', question: '编写程序：输入一个整数n，计算1到n的阶乘之和。', answer: '#include <stdio.h>\n\nint main() {\n    int n, i, j;\n    long sum = 0, fact;\n    scanf("%d", &n);\n    for (i = 1; i <= n; i++) {\n        fact = 1;\n        for (j = 1; j <= i; j++) fact *= j;\n        sum += fact;\n    }\n    printf("%ld", sum);\n    return 0;\n}', explanation: '使用嵌套循环计算阶乘再累加。', score: 10, difficulty: 'improve' },
    { id: 'cl-i-12', type: 'code', question: '编写程序：输入10个整数，找出最大值和最小值。', answer: '#include <stdio.h>\n\nint main() {\n    int arr[10], max, min, i;\n    for (i = 0; i < 10; i++) scanf("%d", &arr[i]);\n    max = min = arr[0];\n    for (i = 1; i < 10; i++) {\n        if (arr[i] > max) max = arr[i];\n        if (arr[i] < min) min = arr[i];\n    }\n    printf("Max=%d, Min=%d", max, min);\n    return 0;\n}', explanation: '遍历数组，比较更新最大值和最小值。', score: 10, difficulty: 'improve' },
    { id: 'cl-i-13', type: 'single', question: '静态变量(static)的特点不包括？', options: ['生命周期是整个程序', '存储在静态存储区', '每次调用函数都会重新初始化', '默认初始化为0'], answer: 'C', explanation: '静态变量只初始化一次，不会重新初始化。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-14', type: 'single', question: '以下关于宏定义的描述，错误的是？', options: ['宏定义在预处理阶段处理', '宏定义可以带参数', '宏定义会进行类型检查', '宏定义可以提高代码可读性'], answer: 'C', explanation: '宏定义是简单的文本替换，不进行类型检查。', score: 3, difficulty: 'improve' },
    { id: 'cl-i-15', type: 'single', question: '以下程序的输出是？\nint a[3]={1,2,3}; int *p=a; printf("%d", *(p+2));', options: ['1', '2', '3', '地址值'], answer: 'C', explanation: 'p指向a[0]，p+2指向a[2]，值为3。', score: 3, difficulty: 'improve' },
  ],

  /** 真题难度 - 模拟职业高考真题 */
  exam: [
    { id: 'cl-e-1', type: 'single', question: '以下程序段运行后，s的值是？\nint i=1, s=0;\nwhile(i<=10) { s+=i; i++; }', options: ['45', '55', '50', '60'], answer: 'B', explanation: '计算1+2+...+10=55。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-2', type: 'single', question: '以下程序的输出是？\nint a=1,b=2,c=3;\nif(a>b) if(a>c) printf("%d",a);\nelse printf("%d",c);', options: ['1', '2', '3', '无输出'], answer: 'D', explanation: 'else与最近的if配对，a>b为假，整个if语句不执行，无输出。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-3', type: 'single', question: '以下程序段运行后，a的值是？\nint a=0;\nfor(int i=0;i<5;i++) {\n  switch(i) {\n    case 0: case 2: a+=i; break;\n    case 1: case 3: a-=i; break;\n  }\n}', options: ['0', '2', '4', '-2'], answer: 'A', explanation: 'i=0:a+=0=0; i=1:a-=1=-1; i=2:a+=2=1; i=3:a-=3=-2; i=4:不匹配不执行。a=-2。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-4', type: 'code', question: '编写程序：找出100-200之间的所有素数并输出。', answer: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int i, j, flag;\n    for (i = 100; i <= 200; i++) {\n        flag = 1;\n        for (j = 2; j <= sqrt(i); j++) {\n            if (i % j == 0) { flag = 0; break; }\n        }\n        if (flag) printf("%d ", i);\n    }\n    return 0;\n}', explanation: '判断素数的关键是检查到sqrt(i)即可。', score: 10, difficulty: 'exam' },
    { id: 'cl-e-5', type: 'code', question: '编写程序：使用冒泡排序对10个整数从小到大排序。', answer: '#include <stdio.h>\n\nint main() {\n    int arr[10], i, j, temp;\n    for (i = 0; i < 10; i++) scanf("%d", &arr[i]);\n    for (i = 0; i < 9; i++)\n        for (j = 0; j < 9-i; j++)\n            if (arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n    for (i = 0; i < 10; i++) printf("%d ", arr[i]);\n    return 0;\n}', explanation: '冒泡排序通过相邻比较交换实现排序。', score: 10, difficulty: 'exam' },
    { id: 'cl-e-6', type: 'single', question: 'C语言中，二维数组在内存中的存储方式是？', options: ['按行存储', '按列存储', '随机存储', '以上都不对'], answer: 'A', explanation: 'C语言中二维数组按行优先存储，即先存储第一行，再存储第二行。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-7', type: 'single', question: '以下程序的输出是？\nchar s[]="abcde"; s[2]=0; printf("%s",s);', options: ['abcde', 'ab', 'abc', 'ab0de'], answer: 'B', explanation: 's[2]=0相当于s[2]=\'\\0\'，字符串在索引2处截断，只输出ab。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-8', type: 'single', question: '以下关于结构体的描述，正确的是？', options: ['结构体可以包含自身类型的成员', '结构体不能作为函数参数', '结构体变量可以整体赋值', '结构体成员不能是数组'], answer: 'C', explanation: '同一类型的结构体变量可以整体赋值。结构体不能包含自身类型但可以包含自身指针。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-9', type: 'single', question: '以下程序的输出是？\nint a=5; int *p=&a; *p=10; printf("%d",a);', options: ['5', '10', '地址', '错误'], answer: 'B', explanation: '通过指针p修改了a的值，输出10。', score: 5, difficulty: 'exam' },
    { id: 'cl-e-10', type: 'code', question: '编写程序：输入一个字符串，统计其中大写字母、小写字母和数字的个数。', answer: '#include <stdio.h>\n\nint main() {\n    char str[100];\n    int i, upper=0, lower=0, digit=0;\n    gets(str);\n    for (i = 0; str[i] != \'\\0\'; i++) {\n        if (str[i] >= \'A\' && str[i] <= \'Z\') upper++;\n        else if (str[i] >= \'a\' && str[i] <= \'z\') lower++;\n        else if (str[i] >= \'0\' && str[i] <= \'9\') digit++;\n    }\n    printf("Upper:%d Lower:%d Digit:%d", upper, lower, digit);\n    return 0;\n}', explanation: '通过ASCII码范围判断字符类型。', score: 10, difficulty: 'exam' },
  ],
};

/** VFP数据库扩展题库 */
export const vfpExpandedQuestions: Record<string, Exercise[]> = {
  basic: [
    { id: 'vf-b-1', type: 'single', question: '以下哪个是数据库管理系统？', options: ['Windows', 'VFP', 'Word', 'Excel'], answer: 'B', explanation: 'VFP是Visual FoxPro的简称，是一种数据库管理系统。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-2', type: 'single', question: '创建数据表的命令是？', options: ['CREATE', 'CREATE TABLE', 'NEW TABLE', 'MAKE TABLE'], answer: 'B', explanation: 'CREATE TABLE用于创建数据表。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-3', type: 'fill', question: '浏览数据表的命令是______。', answer: 'BROWSE', explanation: 'BROWSE用于浏览数据表。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-4', type: 'single', question: 'DELETE命令执行的是哪种删除？', options: ['物理删除', '逻辑删除', '永久删除', '彻底删除'], answer: 'B', explanation: 'DELETE是逻辑删除，可以恢复。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-5', type: 'single', question: 'RECALL命令的作用是？', options: ['删除记录', '恢复已删除记录', '修改记录', '查询记录'], answer: 'B', explanation: 'RECALL用于恢复被逻辑删除的记录。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-6', type: 'single', question: '一个数据表可以有几个主索引？', options: ['1个', '2个', '多个', '没有限制'], answer: 'A', explanation: '一个数据表只能有一个主索引。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-7', type: 'fill', question: 'VFP中输入命令的地方是______窗口。', answer: '命令', explanation: '命令窗口是VFP中输入和执行命令的地方。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-8', type: 'single', question: 'SQL中用于查询数据的语句是？', options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'], answer: 'C', explanation: 'SELECT用于查询数据。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-9', type: 'fill', question: '创建表单的命令是______。', answer: 'CREATE FORM', explanation: 'CREATE FORM用于打开表单设计器。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-10', type: 'single', question: '关闭表单的方法是？', options: ['Close', 'Release', 'Hide', 'Quit'], answer: 'B', explanation: 'Release方法用于释放表单。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-11', type: 'fill', question: '创建报表的命令是______。', answer: 'CREATE REPORT', explanation: 'CREATE REPORT用于打开报表设计器。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-12', type: 'single', question: '用于显示数据表内容的控件是？', options: ['Label', 'TextBox', 'Grid', 'CommandButton'], answer: 'C', explanation: 'Grid控件用于显示数据表内容。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-13', type: 'single', question: '定位到第一条记录的命令是？', options: ['GO TOP', 'GO BOTTOM', 'GO 1', 'FIRST'], answer: 'A', explanation: 'GO TOP定位到第一条记录。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-14', type: 'single', question: 'PACK命令的作用是？', options: ['逻辑删除', '物理删除', '添加记录', '修改记录'], answer: 'B', explanation: 'PACK用于物理删除已标记删除的记录。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-15', type: 'single', question: 'ZAP命令的作用是？', options: ['删除一条记录', '删除所有记录', '修改记录', '查询记录'], answer: 'B', explanation: 'ZAP用于删除表中所有记录。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-16', type: 'fill', question: '报表设计器中显示每条记录内容的区域是______带区。', answer: '细节', explanation: '细节带区显示每条记录的内容。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-17', type: 'single', question: 'VFP最新的版本是？', options: ['6.0', '7.0', '8.0', '9.0'], answer: 'D', explanation: 'Visual FoxPro 9.0是2004年发布的最新版本。', score: 2, difficulty: 'basic' },
    { id: 'vf-b-18', type: 'single', question: '以下哪个不是VFP的数据类型？', options: ['字符型', '数值型', '日期型', '对象型'], answer: 'D', explanation: 'VFP中字符型表示为C，数值型为N，日期型为D，没有对象型。', score: 2, difficulty: 'basic' },
  ],

  improve: [
    { id: 'vf-i-1', type: 'single', question: '用于统计记录数的函数是？', options: ['SUM', 'AVG', 'COUNT', 'MAX'], answer: 'C', explanation: 'COUNT用于统计记录数。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-2', type: 'single', question: '只返回两表中匹配记录的连接是？', options: ['左连接', '右连接', '内连接', '全连接'], answer: 'C', explanation: '内连接只返回匹配的记录。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-3', type: 'single', question: '用于连接不同表的查询是？', options: ['单表查询', '连接查询', '子查询', '联合查询'], answer: 'B', explanation: '连接查询用于连接多个表。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-4', type: 'single', question: '以下关于索引的描述，正确的是？', options: ['索引可以加快查询速度', '每个表必须有一个主索引', '索引越多越好', '索引不能删除'], answer: 'A', explanation: '索引的主要作用是加快查询速度。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-5', type: 'single', question: 'SQL中，INSERT语句的作用是？', options: ['查询数据', '更新数据', '插入数据', '删除数据'], answer: 'C', explanation: 'INSERT用于插入新记录。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-6', type: 'single', question: 'SQL中，UPDATE语句的作用是？', options: ['查询数据', '更新数据', '插入数据', '删除数据'], answer: 'B', explanation: 'UPDATE用于修改记录。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-7', type: 'single', question: '表单的Init事件在什么时候触发？', options: ['表单加载时', '对象初始化时', '单击时', '关闭时'], answer: 'B', explanation: 'Init事件在对象初始化时触发。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-8', type: 'code', question: '写出查询学生表中所有男生且年龄大于18岁的SQL语句。', answer: 'SELECT * FROM 学生 WHERE 性别="男" AND 年龄>18', explanation: '使用AND连接多个条件。', score: 5, difficulty: 'improve' },
    { id: 'vf-i-9', type: 'code', question: '写出统计学生表中男生人数的SQL语句。', answer: 'SELECT COUNT(*) FROM 学生 WHERE 性别="男"', explanation: 'COUNT(*)统计记录数，WHERE筛选条件。', score: 5, difficulty: 'improve' },
    { id: 'vf-i-10', type: 'single', question: '以下关于候选索引的描述，正确的是？', options: ['一个表只能有一个', '可以有多个', '与主索引完全不同', '不能用于排序'], answer: 'B', explanation: '候选索引与主索引类似但可以有多个。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-11', type: 'single', question: 'APPEND BLANK命令的作用是？', options: ['添加一条空记录', '删除所有记录', '修改记录', '查询记录'], answer: 'A', explanation: 'APPEND BLANK在表末尾添加一条空记录。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-12', type: 'single', question: 'REPLACE命令的作用是？', options: ['添加记录', '替换字段值', '删除记录', '查询记录'], answer: 'B', explanation: 'REPLACE用于替换字段的值。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-13', type: 'single', question: '以下哪个不是SQL的聚合函数？', options: ['SUM', 'AVG', 'COUNT', 'SORT'], answer: 'D', explanation: 'SORT不是聚合函数，是排序命令。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-14', type: 'single', question: 'ORDER BY的作用是？', options: ['筛选数据', '排序数据', '分组数据', '插入数据'], answer: 'B', explanation: 'ORDER BY用于对查询结果排序。', score: 3, difficulty: 'improve' },
    { id: 'vf-i-15', type: 'single', question: 'SKIP命令的作用是？', options: ['删除记录', '移动记录指针', '修改记录', '添加记录'], answer: 'B', explanation: 'SKIP用于移动记录指针。', score: 3, difficulty: 'improve' },
  ],

  exam: [
    { id: 'vf-e-1', type: 'code', question: '写出创建学生表的SQL语句，包含学号、姓名、性别、年龄字段。', answer: 'CREATE TABLE 学生 (\n    学号 C(10),\n    姓名 C(8),\n    性别 C(2),\n    年龄 N(2)\n)', explanation: '使用CREATE TABLE创建数据表，C表示字符型，N表示数值型。', score: 10, difficulty: 'exam' },
    { id: 'vf-e-2', type: 'code', question: '写出查询学生表中所有女生记录的SQL语句。', answer: 'SELECT * FROM 学生 WHERE 性别="女"', explanation: '使用WHERE子句筛选。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-3', type: 'single', question: '以下关于VFP操作方式的描述，错误的是？', options: ['支持菜单方式', '支持命令方式', '支持程序方式', '不支持可视化操作'], answer: 'D', explanation: 'VFP支持可视化操作，提供表单设计器等工具。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-4', type: 'single', question: '表单的Load事件和Init事件的区别是？', options: ['没有区别', 'Load先于Init触发', 'Init先于Load触发', '不会同时触发'], answer: 'B', explanation: 'Load事件在表单加载时触发，早于Init事件。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-5', type: 'code', question: '写出查询成绩表中分数大于80分的学生的学号和姓名的SQL语句（需要连接学生表和成绩表）。', answer: 'SELECT 学生.学号, 学生.姓名 FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号 WHERE 成绩.分数>80', explanation: '使用JOIN连接两个表，WHERE筛选分数条件。', score: 10, difficulty: 'exam' },
    { id: 'vf-e-6', type: 'single', question: '在VFP中，哪个命令用于以独占方式打开数据表？', options: ['USE 表名', 'USE 表名 EXCLUSIVE', 'OPEN 表名', 'USE 表名 SHARED'], answer: 'B', explanation: 'USE EXCLUSIVE以独占方式打开，防止其他用户同时访问。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-7', type: 'single', question: '在VFP中，SEEK命令和FIND命令的区别是？', options: ['没有区别', 'SEEK可以查找表达式', 'FIND可以查找表达式', 'SEEK只能查找字符型'], answer: 'B', explanation: 'SEEK可以查找表达式，而FIND只能查找常量。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-8', type: 'single', question: '以下关于数据模型的描述，错误的是？', options: ['层次模型是树形结构', '网状模型是图形结构', '关系模型是表格结构', 'VFP使用的是层次模型'], answer: 'D', explanation: 'VFP使用的是关系模型。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-9', type: 'single', question: '在报表设计器中，哪一带区的内容只在报表第一页显示？', options: ['页标头', '报表标题', '细节', '页注脚'], answer: 'B', explanation: '报表标题带区的内容只在报表第一页显示。', score: 5, difficulty: 'exam' },
    { id: 'vf-e-10', type: 'single', question: '以下关于表单控件的描述，正确的是？', options: ['Label用于输入文本', 'TextBox用于显示数据表', 'Grid用于显示数据表', 'CommandButton用于显示图片'], answer: 'C', explanation: 'Grid控件用于以表格形式显示数据表内容。', score: 5, difficulty: 'exam' },
  ],
};

/** 网络知识扩展题库 */
export const networkExpandedQuestions: Record<string, Exercise[]> = {
  basic: [
    { id: 'nw-b-1', type: 'single', question: '局域网的英文缩写是？', options: ['WAN', 'LAN', 'MAN', 'PAN'], answer: 'B', explanation: 'LAN是Local Area Network的缩写。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-2', type: 'fill', question: 'OSI模型共有______层。', answer: '7', explanation: 'OSI参考模型将网络通信分为7层。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-3', type: 'single', question: '负责路由选择的是哪一层？', options: ['数据链路层', '网络层', '传输层', '应用层'], answer: 'B', explanation: '网络层负责路由选择和分组转发。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-4', type: 'single', question: '192.168.1.1属于哪类IP地址？', options: ['A类', 'B类', 'C类', 'D类'], answer: 'C', explanation: '192开头的是C类地址。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-5', type: 'single', question: '面向连接的可靠传输协议是？', options: ['IP', 'TCP', 'UDP', 'HTTP'], answer: 'B', explanation: 'TCP是面向连接的可靠协议。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-6', type: 'single', question: 'TCP/IP模型分为几层？', options: ['4层', '5层', '6层', '7层'], answer: 'A', explanation: 'TCP/IP模型分为4层。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-7', type: 'fill', question: 'HTTP状态码404表示______。', answer: '资源未找到', explanation: '404表示请求的资源未找到。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-8', type: 'single', question: 'DNS的作用是？', options: ['文件传输', '域名解析', '邮件发送', '网页浏览'], answer: 'B', explanation: 'DNS用于域名解析。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-9', type: 'fill', question: 'FTP的控制连接端口是______。', answer: '21', explanation: 'FTP使用21端口作为控制连接。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-10', type: 'single', question: '网络安全的三大原则不包括？', options: ['保密性', '完整性', '可用性', '开放性'], answer: 'D', explanation: '三大原则是保密性、完整性、可用性。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-11', type: 'single', question: '根据IP地址和端口过滤数据包的防火墙是？', options: ['应用层防火墙', '状态检测防火墙', '包过滤防火墙', '代理防火墙'], answer: 'C', explanation: '包过滤防火墙根据IP和端口过滤。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-12', type: 'single', question: '加密和解密使用相同密钥的加密方式是？', options: ['对称加密', '非对称加密', '哈希加密', '数字签名'], answer: 'A', explanation: '对称加密使用相同密钥。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-13', type: 'single', question: '所有节点通过中央节点连接的拓扑结构是？', options: ['总线型', '星型', '环型', '网状型'], answer: 'B', explanation: '星型拓扑通过中央节点连接。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-14', type: 'single', question: '用于连接不同网络的设备是？', options: ['交换机', '集线器', '路由器', '网卡'], answer: 'C', explanation: '路由器连接不同网络。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-15', type: 'single', question: 'TCP三次握手的目的是？', options: ['加密数据', '建立连接', '传输数据', '断开连接'], answer: 'B', explanation: '三次握手用于建立连接。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-16', type: 'single', question: 'UDP适合哪种场景？', options: ['文件传输', '网页浏览', '视频会议', '邮件发送'], answer: 'C', explanation: 'UDP速度快，适合实时应用。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-17', type: 'fill', question: '子网掩码255.255.255.0对应的是______类地址。', answer: 'C', explanation: '255.255.255.0是C类地址的默认子网掩码。', score: 2, difficulty: 'basic' },
    { id: 'nw-b-18', type: 'single', question: 'HTTP协议工作在哪一层？', options: ['网络层', '传输层', '应用层', '数据链路层'], answer: 'C', explanation: 'HTTP是应用层协议。', score: 2, difficulty: 'basic' },
  ],

  improve: [
    { id: 'nw-i-1', type: 'single', question: '10.0.0.1属于哪类IP地址？', options: ['A类', 'B类', 'C类', 'D类'], answer: 'A', explanation: '10开头的是A类私有地址。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-2', type: 'single', question: '127.0.0.1是什么地址？', options: ['广播地址', '环回地址', '私有地址', '公网地址'], answer: 'B', explanation: '127.0.0.1是环回地址，用于本地测试。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-3', type: 'single', question: '以下关于交换机和路由器的区别，正确的是？', options: ['交换机连接不同网络', '路由器在同一网络内转发', '交换机基于MAC地址转发', '路由器不需要IP地址'], answer: 'C', explanation: '交换机基于MAC地址在同一网络内转发，路由器基于IP地址连接不同网络。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-4', type: 'single', question: 'TCP四次挥手的目的是？', options: ['建立连接', '传输数据', '断开连接', '加密数据'], answer: 'C', explanation: '四次挥手用于断开TCP连接。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-5', type: 'single', question: '以下哪个不是应用层协议？', options: ['HTTP', 'FTP', 'TCP', 'SMTP'], answer: 'C', explanation: 'TCP是传输层协议，不是应用层协议。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-6', type: 'single', question: 'AES加密属于哪种类型？', options: ['对称加密', '非对称加密', '哈希算法', '数字签名'], answer: 'A', explanation: 'AES是对称加密算法。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-7', type: 'single', question: 'RSA加密属于哪种类型？', options: ['对称加密', '非对称加密', '哈希算法', '数字签名'], answer: 'B', explanation: 'RSA是非对称加密算法，使用公钥和私钥。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-8', type: 'single', question: '以下关于广域网的描述，正确的是？', options: ['覆盖范围小', '一般在一个建筑内', '可以覆盖城市或国家', '一定是无线网络'], answer: 'C', explanation: '广域网(WAN)覆盖范围广，可以跨城市、国家。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-9', type: 'single', question: 'OSI模型中，哪一层负责数据加密？', options: ['应用层', '传输层', '表示层', '会话层'], answer: 'C', explanation: '表示层负责数据加密、解密、压缩和解压。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-10', type: 'single', question: '以下关于DDoS攻击的描述，正确的是？', options: ['单台计算机攻击', '分布式拒绝服务攻击', '窃取数据', '修改数据'], answer: 'B', explanation: 'DDoS是分布式拒绝服务攻击，通过多台计算机同时攻击。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-11', type: 'single', question: 'IPv4地址由多少位二进制组成？', options: ['16位', '32位', '64位', '128位'], answer: 'B', explanation: 'IPv4地址由32位二进制组成。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-12', type: 'single', question: 'CNAME记录的作用是？', options: ['域名→IP', '域名→域名', '邮件服务器', '域名服务器'], answer: 'B', explanation: 'CNAME记录用于域名到域名的别名映射。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-13', type: 'single', question: '以下关于FTP的描述，正确的是？', options: ['使用单端口', '控制连接和数据连接使用不同端口', '只能上传文件', '不区分主动和被动模式'], answer: 'B', explanation: 'FTP使用21端口控制连接，20端口数据连接。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-14', type: 'single', question: 'MD5是一种什么算法？', options: ['加密算法', '哈希算法', '压缩算法', '排序算法'], answer: 'B', explanation: 'MD5是哈希算法，用于验证数据完整性。', score: 3, difficulty: 'improve' },
    { id: 'nw-i-15', type: 'single', question: 'HTTP和HTTPS的主要区别是？', options: ['HTTPS使用加密传输', 'HTTPS速度更快', 'HTTPS端口不同', '没有区别'], answer: 'A', explanation: 'HTTPS在HTTP基础上增加了SSL/TLS加密。', score: 3, difficulty: 'improve' },
  ],

  exam: [
    { id: 'nw-e-1', type: 'single', question: '在OSI模型中，交换机工作在？', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 'B', explanation: '交换机工作在数据链路层，基于MAC地址转发。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-2', type: 'single', question: '在OSI模型中，路由器工作在？', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 'C', explanation: '路由器工作在网络层，基于IP地址转发。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-3', type: 'single', question: '以下关于TCP和UDP的区别，错误的是？', options: ['TCP面向连接，UDP无连接', 'TCP可靠，UDP不可靠', 'UDP有流量控制', 'TCP速度较慢，UDP速度较快'], answer: 'C', explanation: 'UDP没有流量控制和拥塞控制机制。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-4', type: 'single', question: '以下哪个是私有IP地址？', options: ['8.8.8.8', '192.168.1.1', '223.5.5.5', '114.114.114.114'], answer: 'B', explanation: '192.168.x.x是私有地址范围。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-5', type: 'single', question: '以下关于星型拓扑的描述，错误的是？', options: ['所有节点通过中央节点连接', '故障诊断容易', '中央节点故障不影响整个网络', '扩展性好'], answer: 'C', explanation: '中央节点故障会影响整个网络。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-6', type: 'single', question: 'SSL/TLS协议工作在OSI模型的哪一层？', options: ['网络层', '传输层', '会话层', '表示层'], answer: 'C', explanation: 'SSL/TLS工作在会话层，位于传输层和应用层之间。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-7', type: 'single', question: '以下关于网络安全的描述，正确的是？', options: ['防火墙可以防止所有攻击', '加密可以保证数据不被窃取', '只用防火墙就够了', '杀毒软件可以替代防火墙'], answer: 'B', explanation: '加密可以保证数据即使被窃取也无法被读取。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-8', type: 'single', question: 'SMTP协议使用的端口是？', options: ['21', '25', '80', '443'], answer: 'B', explanation: 'SMTP使用25端口发送邮件。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-9', type: 'single', question: 'POP3协议使用的端口是？', options: ['25', '80', '110', '443'], answer: 'C', explanation: 'POP3使用110端口接收邮件。', score: 5, difficulty: 'exam' },
    { id: 'nw-e-10', type: 'single', question: '以下关于网络分类的描述，错误的是？', options: ['LAN是局域网', 'MAN是城域网', 'WAN是广域网', 'PAN是公共网络'], answer: 'D', explanation: 'PAN是Personal Area Network，个人局域网。', score: 5, difficulty: 'exam' },
  ],
};

/** 办公自动化扩展题库 */
export const officeExpandedQuestions: Record<string, Exercise[]> = {
  basic: [
    { id: 'of-b-1', type: 'fill', question: 'Excel公式的开头符号是______。', answer: '=', explanation: '公式以等号开头。', score: 2, difficulty: 'basic' },
    { id: 'of-b-2', type: 'single', question: '统计非空单元格数量的函数是？', options: ['COUNT', 'COUNTA', 'COUNTIF', 'SUM'], answer: 'B', explanation: 'COUNTA统计非空单元格。', score: 2, difficulty: 'basic' },
    { id: 'of-b-3', type: 'single', question: '绝对引用的符号是？', options: ['#', '$', '%', '&'], answer: 'B', explanation: '$表示绝对引用。', score: 2, difficulty: 'basic' },
    { id: 'of-b-4', type: 'single', question: 'IF函数的语法是？', options: ['IF(真值, 条件, 假值)', 'IF(条件, 真值, 假值)', 'IF(真值, 假值, 条件)', 'IF(条件, 假值, 真值)'], answer: 'B', explanation: 'IF(条件, 真值, 假值)。', score: 2, difficulty: 'basic' },
    { id: 'of-b-5', type: 'single', question: '从小到大排列称为？', options: ['升序', '降序', '乱序', '倒序'], answer: 'A', explanation: '升序是从小到大排列。', score: 2, difficulty: 'basic' },
    { id: 'of-b-6', type: 'single', question: '页面视图的特点是？', options: ['显示文档结构', '所见即所得', '简化编辑', '网页预览'], answer: 'B', explanation: '页面视图所见即所得。', score: 2, difficulty: 'basic' },
    { id: 'of-b-7', type: 'single', question: '设置段落第一行缩进的方式是？', options: ['左缩进', '右缩进', '首行缩进', '悬挂缩进'], answer: 'C', explanation: '首行缩进设置第一行缩进。', score: 2, difficulty: 'basic' },
    { id: 'of-b-8', type: 'fill', question: '页面顶部的内容称为______。', answer: '页眉', explanation: '页眉在页面顶部。', score: 2, difficulty: 'basic' },
    { id: 'of-b-9', type: 'single', question: '一组格式设置的集合称为？', options: ['模板', '样式', '主题', '格式'], answer: 'B', explanation: '样式是格式集合。', score: 2, difficulty: 'basic' },
    { id: 'of-b-10', type: 'single', question: '文本环绕在图片四周的环绕方式是？', options: ['嵌入型', '四周型环绕', '紧密型环绕', '浮于文字上方'], answer: 'B', explanation: '四周型环绕使文本环绕图片。', score: 2, difficulty: 'basic' },
    { id: 'of-b-11', type: 'single', question: '批量生成文档的功能是？', options: ['复制粘贴', '邮件合并', '数据透视', '模板套用'], answer: 'B', explanation: '邮件合并用于批量生成文档。', score: 2, difficulty: 'basic' },
    { id: 'of-b-12', type: 'single', question: '显示货币符号的数字格式是？', options: ['数值格式', '货币格式', '百分比格式', '日期格式'], answer: 'B', explanation: '货币格式显示货币符号。', score: 2, difficulty: 'basic' },
    { id: 'of-b-13', type: 'single', question: 'COUNTA函数的作用是？', options: ['统计数值单元格', '统计非空单元格', '按条件统计', '求和'], answer: 'B', explanation: 'COUNTA统计非空单元格。', score: 2, difficulty: 'basic' },
    { id: 'of-b-14', type: 'single', question: 'AND函数的返回值是？', options: ['所有条件都为真时返回真', '任一条件为真时返回真', '条件为假时返回真', '条件为真时返回假'], answer: 'A', explanation: 'AND函数要求所有条件都为真。', score: 2, difficulty: 'basic' },
    { id: 'of-b-15', type: 'single', question: '在Excel中，$A$1表示什么引用？', options: ['相对引用', '绝对引用', '混合引用', '外部引用'], answer: 'B', explanation: '$A$1是绝对引用，行和列都固定。', score: 2, difficulty: 'basic' },
    { id: 'of-b-16', type: 'fill', question: '单元格地址由______和行数字组成。', answer: '列字母', explanation: '单元格地址由列字母和行数字组成。', score: 2, difficulty: 'basic' },
    { id: 'of-b-17', type: 'fill', question: '用于快速汇总和分析大量数据的工具是______。', answer: '数据透视表', explanation: '数据透视表用于数据汇总分析。', score: 2, difficulty: 'basic' },
    { id: 'of-b-18', type: 'single', question: '筛选出包含特定文本的记录使用哪种筛选？', options: ['数字筛选', '文本筛选', '日期筛选', '高级筛选'], answer: 'B', explanation: '文本筛选用于筛选文本类型的数据。', score: 2, difficulty: 'basic' },
  ],

  improve: [
    { id: 'of-i-1', type: 'code', question: '写出计算A1到A10单元格平均值的公式。', answer: '=AVERAGE(A1:A10)', explanation: 'AVERAGE函数计算平均值。', score: 5, difficulty: 'improve' },
    { id: 'of-i-2', type: 'code', question: '写出判断A1单元格成绩是否及格的公式（60分为及格线）。', answer: '=IF(A1>=60, "及格", "不及格")', explanation: '使用IF函数进行条件判断。', score: 5, difficulty: 'improve' },
    { id: 'of-i-3', type: 'single', question: '在Excel中，A$1表示什么引用？', options: ['相对引用', '绝对引用', '混合引用', '外部引用'], answer: 'C', explanation: 'A$1是混合引用，列相对行绝对。', score: 3, difficulty: 'improve' },
    { id: 'of-i-4', type: 'single', question: 'OR函数的作用是？', options: ['所有条件都为真时返回真', '任一条件为真时返回真', '条件为假时返回真', '条件为真时返回假'], answer: 'B', explanation: 'OR函数任一条件为真时返回真。', score: 3, difficulty: 'improve' },
    { id: 'of-i-5', type: 'single', question: 'VLOOKUP函数的作用是？', options: ['求和', '垂直查找', '水平查找', '统计'], answer: 'B', explanation: 'VLOOKUP用于在表格中垂直查找数据。', score: 3, difficulty: 'improve' },
    { id: 'of-i-6', type: 'single', question: '在Word中，将文档分成多个节的主要目的是？', options: ['美化文档', '每个节可以有不同的页面设置', '方便打印', '提高加载速度'], answer: 'B', explanation: '分节可以让每个节有独立的页面设置、页眉页脚等。', score: 3, difficulty: 'improve' },
    { id: 'of-i-7', type: 'single', question: 'Excel中，COUNTIF函数的作用是？', options: ['统计所有单元格', '按条件统计', '求和', '求平均值'], answer: 'B', explanation: 'COUNTIF按条件统计满足条件的单元格数量。', score: 3, difficulty: 'improve' },
    { id: 'of-i-8', type: 'code', question: '写出判断A1单元格成绩等级（>=90优秀，>=80良好，>=60及格，<60不及格）的公式。', answer: '=IF(A1>=90,"优秀",IF(A1>=80,"良好",IF(A1>=60,"及格","不及格")))', explanation: '使用嵌套IF函数进行多条件判断。', score: 5, difficulty: 'improve' },
    { id: 'of-i-9', type: 'single', question: '在Word中，制表位的作用是？', options: ['创建表格', '精确对齐文本', '设置页边距', '插入图片'], answer: 'B', explanation: '制表位用于精确对齐文本位置。', score: 3, difficulty: 'improve' },
    { id: 'of-i-10', type: 'single', question: 'Excel中，SUMIF函数的作用是？', options: ['无条件求和', '按条件求和', '统计', '求平均值'], answer: 'B', explanation: 'SUMIF按条件对满足条件的单元格求和。', score: 3, difficulty: 'improve' },
    { id: 'of-i-11', type: 'single', question: '在Word中，目录的自动生成依赖于？', options: ['手动输入', '标题样式', '页码', '分页符'], answer: 'B', explanation: '自动目录基于标题样式生成。', score: 3, difficulty: 'improve' },
    { id: 'of-i-12', type: 'single', question: 'Excel中，数据有效性（数据验证）的作用是？', options: ['美化表格', '限制输入数据', '计算公式', '排序数据'], answer: 'B', explanation: '数据验证用于限制单元格输入的数据类型和范围。', score: 3, difficulty: 'improve' },
    { id: 'of-i-13', type: 'single', question: '在Word中，分栏排版最多可以分为几栏？', options: ['2栏', '3栏', '4栏', '多栏（可自定义）'], answer: 'D', explanation: 'Word支持多栏排版，可以自定义栏数。', score: 3, difficulty: 'improve' },
    { id: 'of-i-14', type: 'single', question: 'Excel中，相对引用和绝对引用的区别是？', options: ['没有区别', '相对引用复制时会调整', '绝对引用会出错', '只有绝对引用能计算'], answer: 'B', explanation: '相对引用在复制公式时会自动调整引用位置。', score: 3, difficulty: 'improve' },
    { id: 'of-i-15', type: 'single', question: '在Word中，邮件合并的数据源可以来自？', options: ['只能来自Word', '只能来自Excel', 'Excel或数据库', '只能手动输入'], answer: 'C', explanation: '邮件合并数据源可以来自Excel、Access等多种数据源。', score: 3, difficulty: 'improve' },
  ],

  exam: [
    { id: 'of-e-1', type: 'code', question: '写出计算A1到A10中大于60的单元格数量的公式。', answer: '=COUNTIF(A1:A10,">60")', explanation: 'COUNTIF函数按条件统计。', score: 5, difficulty: 'exam' },
    { id: 'of-e-2', type: 'single', question: '在Excel中，以下关于数据透视表的描述，错误的是？', options: ['可以快速汇总数据', '可以动态调整布局', '数据源变化后自动更新', '不能进行数据钻取'], answer: 'D', explanation: '数据透视表支持数据钻取，可以查看详细数据。', score: 5, difficulty: 'exam' },
    { id: 'of-e-3', type: 'single', question: '在Word中，以下关于样式的描述，错误的是？', options: ['样式是一组格式的集合', '修改样式后应用该样式的文本自动更新', '只能使用内置样式', '可以创建自定义样式'], answer: 'C', explanation: '可以创建自定义样式，不只限于内置样式。', score: 5, difficulty: 'exam' },
    { id: 'of-e-4', type: 'single', question: '在Word中，节的作用是？', options: ['只用于分页', '每个节可以有不同的页面设置', '只用于分栏', '没有实际作用'], answer: 'B', explanation: '分节后每个节可以独立设置页边距、纸张方向、页眉页脚等。', score: 5, difficulty: 'exam' },
    { id: 'of-e-5', type: 'single', question: 'Excel中，ROUND函数的作用是？', options: ['求和', '四舍五入', '求绝对值', '求平方根'], answer: 'B', explanation: 'ROUND函数用于四舍五入。', score: 5, difficulty: 'exam' },
    { id: 'of-e-6', type: 'single', question: '在Word中，交叉引用的作用是什么？', options: ['插入图片', '引用文档中其他位置的内容', '创建超链接', '插入表格'], answer: 'B', explanation: '交叉引用可以在文档中引用标题、图表、页码等内容。', score: 5, difficulty: 'exam' },
    { id: 'of-e-7', type: 'single', question: 'Excel中，TODAY()函数的作用是？', options: ['返回当前时间', '返回当前日期', '返回当前日期和时间', '计算日期差'], answer: 'B', explanation: 'TODAY()返回当前日期。', score: 5, difficulty: 'exam' },
    { id: 'of-e-8', type: 'single', question: '在Word中，以下哪个不是页面设置的内容？', options: ['纸张大小', '页边距', '纸张方向', '字体颜色'], answer: 'D', explanation: '字体颜色属于文字格式，不是页面设置的内容。', score: 5, difficulty: 'exam' },
    { id: 'of-e-9', type: 'single', question: 'Excel中，以下关于排序的描述，正确的是？', options: ['只能按一列排序', '可以按多列排序', '只能升序排列', '排序后不能恢复'], answer: 'B', explanation: 'Excel支持多条件排序，可以按多列依次排序。', score: 5, difficulty: 'exam' },
    { id: 'of-e-10', type: 'essay', question: '简述邮件合并的步骤。', answer: '1. 创建Word模板文档；2. 在Excel中准备数据源；3. 在Word中插入合并域；4. 预览合并结果；5. 执行邮件合并操作；6. 生成批量文档。', explanation: '邮件合并用于将Excel数据批量填充到Word模板中生成个性化文档。', score: 10, difficulty: 'exam' },
  ],
};