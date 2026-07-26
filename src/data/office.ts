import { Chapter } from './cLanguage';

export const officeCourse: Chapter[] = [
  {
    id: 'o1',
    title: '第一章：Excel基础操作',
    lessons: [
      {
        id: 'o1-1',
        title: '1.1 Excel界面介绍',
        description: '了解Excel的界面组成和基本操作',
        content: `<h3>1.1.1 Excel界面组成</h3>
<ul>
<li><strong>标题栏</strong>：显示文件名和程序名</li>
<li><strong>功能区（Ribbon）</strong>：包含开始、插入、公式、数据等选项卡，每个选项卡下包含相关工具按钮</li>
<li><strong>快速访问工具栏</strong>：位于标题栏左侧，包含保存、撤销、重做等常用按钮</li>
<li><strong>名称框</strong>：显示当前单元格地址</li>
<li><strong>编辑栏</strong>：输入和编辑单元格内容</li>
<li><strong>工作表区域</strong>：由行和列组成的表格区域</li>
<li><strong>状态栏</strong>：显示当前状态信息</li>
</ul>

<h3>1.1.2 工作簿、工作表和单元格</h3>
<ul>
<li><strong>工作簿</strong>：一个Excel文件，包含多个工作表</li>
<li><strong>工作表</strong>：工作簿中的一个表格页面</li>
<li><strong>单元格</strong>：工作表中行列交叉的位置</li>
</ul>

<h3>1.1.3 单元格地址</h3>
<p>单元格地址由列字母和行数字组成，如A1、B2、C3等。</p>`,
        exercises: [
          {
            id: 'o1-1-1',
            type: 'fill',
            question: '单元格地址由______和行数字组成。',
            answer: '列字母',
            explanation: '单元格地址由列字母（如A、B、C）和行数字（如1、2、3）组成。',
            score: 2
          }
        ]
      },
      {
        id: 'o1-2',
        title: '1.2 数据输入与编辑',
        description: '学习在Excel中输入和编辑数据',
        content: `<h3>1.2.1 数据类型</h3>
<ul>
<li><strong>文本型数据</strong>：文字、字母、符号等</li>
<li><strong>数值型数据</strong>：数字、日期、时间等</li>
<li><strong>公式</strong>：以等号开头的计算表达式</li>
<li><strong>函数</strong>：内置的计算功能</li>
</ul>

<h3>1.2.2 数据输入技巧</h3>
<ul>
<li><strong>快速填充</strong>：使用填充柄快速填充序列</li>
<li><strong>数据验证</strong>：限制输入数据的类型和范围</li>
<li><strong>批量输入</strong>：选中多个单元格后输入数据</li>
</ul>

<h3>1.2.3 数据编辑</h3>
<ul>
<li><strong>复制粘贴</strong>：复制单元格内容</li>
<li><strong>剪切粘贴</strong>：移动单元格内容</li>
<li><strong>查找替换</strong>：查找和替换特定内容</li>
</ul>`,
        exercises: [
          {
            id: 'o1-2-1',
            type: 'single',
            question: '公式的开头符号是？',
            options: ['#', '$', '=', '@'],
            answer: 'C',
            explanation: 'Excel公式以等号(=)开头。',
            score: 2
          }
        ]
      },
      {
        id: 'o1-3',
        title: '1.3 单元格格式化',
        description: '学习单元格格式的设置',
        content: `<h3>1.3.1 数字格式</h3>
<ul>
<li><strong>常规格式</strong>：默认格式</li>
<li><strong>数值格式</strong>：设置小数位数、千位分隔符等</li>
<li><strong>货币格式</strong>：显示货币符号</li>
<li><strong>日期格式</strong>：设置日期显示方式</li>
<li><strong>百分比格式</strong>：显示百分比</li>
</ul>

<h3>1.3.2 对齐方式</h3>
<ul>
<li><strong>水平对齐</strong>：左对齐、居中、右对齐</li>
<li><strong>垂直对齐</strong>：顶端对齐、居中、底端对齐</li>
<li><strong>合并单元格</strong>：将多个单元格合并为一个</li>
</ul>

<h3>1.3.3 字体和边框</h3>
<ul>
<li><strong>字体设置</strong>：字体、字号、颜色、加粗、斜体等</li>
<li><strong>边框设置</strong>：设置单元格边框样式和颜色</li>
<li><strong>背景色</strong>：设置单元格背景颜色</li>
</ul>`,
        exercises: [
          {
            id: 'o1-3-1',
            type: 'single',
            question: '显示货币符号的数字格式是？',
            options: ['数值格式', '货币格式', '百分比格式', '日期格式'],
            answer: 'B',
            explanation: '货币格式用于显示货币符号和数值。',
            score: 2
          }
        ]
      },
      {
        id: 'o1-4',
        title: '1.4 工作表管理',
        description: '学习工作表的创建、复制、删除和重命名',
        content: `<h3>1.4.1 创建和删除工作表</h3>
<ul>
<li><strong>新建工作表</strong>：点击工作表标签旁的新建按钮</li>
<li><strong>删除工作表</strong>：右键点击工作表标签，选择删除</li>
</ul>

<h3>1.4.2 复制和移动工作表</h3>
<ul>
<li><strong>复制工作表</strong>：右键点击工作表标签，选择移动或复制</li>
<li><strong>移动工作表</strong>：拖拽工作表标签到目标位置</li>
</ul>

<h3>1.4.3 重命名工作表</h3>
<ul>
<li><strong>双击标签</strong>：双击工作表标签进行重命名</li>
<li><strong>右键菜单</strong>：右键点击标签，选择重命名</li>
</ul>`,
        exercises: [
          {
            id: 'o1-4-1',
            type: 'fill',
            question: '新建工作表可以点击工作表标签旁的______按钮。',
            answer: '新建',
            explanation: '点击工作表标签旁的新建按钮可以创建新的工作表。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'o2',
    title: '第二章：Excel公式与函数',
    lessons: [
      {
        id: 'o2-1',
        title: '2.1 基本公式',
        description: '学习Excel的基本公式运算',
        content: `<h3>2.1.1 公式的基本语法</h3>
<p>公式以等号(=)开头，包含运算符和单元格引用：</p>
<pre><code class="code-block">=A1 + B1      && 加法
=A1 - B1      && 减法
=A1 * B1      && 乘法
=A1 / B1      && 除法
=A1 ^ B1      && 幂运算</code></pre>

<h3>2.1.2 单元格引用</h3>
<ul>
<li><strong>相对引用</strong>：如A1，复制时会自动调整</li>
<li><strong>绝对引用</strong>：如$A$1，复制时不改变</li>
<li><strong>混合引用</strong>：如$A1或A$1，部分固定</li>
</ul>

<h3>2.1.3 公式示例</h3>
<pre><code class="code-block">=SUM(A1:A10)       && 求和
=AVERAGE(A1:A10)   && 求平均值
=MAX(A1:A10)       && 求最大值
=MIN(A1:A10)       && 求最小值</code></pre>

<h3>⚠️ 常见错误</h3>
<p><strong>1. 公式错误类型</strong></p>
<ul>
<li><strong>#REF!</strong>：引用了不存在的单元格（如删除被引用的行/列后），检查公式中的引用是否正确</li>
<li><strong>#VALUE!</strong>：使用了错误的数据类型（如对文本进行数学运算），检查参数类型</li>
<li><strong>#DIV/0!</strong>：除数为零或除数为空单元格，检查除数是否为零</li>
<li><strong>#NAME?</strong>：函数名拼写错误或引用了不存在的名称，检查函数名拼写</li>
<li><strong>#N/A</strong>：查找函数找不到匹配值，确认查找值是否存在</li>
</ul>
<p><strong>2. 引用方式混淆</strong></p>
<ul>
<li><strong>忘记使用绝对引用</strong>：公式复制时，相对引用会自动变化，如需固定某个单元格应使用$A$1</li>
<li><strong>滥用绝对引用</strong>：不需要固定时也使用绝对引用，导致公式无法正确复制</li>
<li><strong>混合引用方向错误</strong>：$A1（列固定行变化）和A$1（行固定列变化）混淆使用</li>
</ul>
<p><strong>示例</strong>：</p>
<pre><code class="code-block">=A1*B1        && 复制到下一行变为 =A2*B2（正确）
=A1*$B$1      && 复制到下一行变为 =A2*$B$1（B1固定不变，如需固定税率时使用）
=SUM(A1:A10)  && 删除第5行后自动变为 =SUM(A1:A9)（Excel自动调整）</code></pre>`,
        exercises: [
          {
            id: 'o2-1-1',
            type: 'fill',
            question: '绝对引用的符号是______。',
            answer: '$',
            explanation: '在Excel中，使用$符号表示绝对引用，如$A$1。',
            score: 2
          }
        ]
      },
      {
        id: 'o2-2',
        title: '2.2 常用函数',
        description: '学习Excel中常用的函数',
        content: `<h3>2.2.1 数学函数</h3>
<ul>
<li><strong>SUM</strong>：求和</li>
<li><strong>AVERAGE</strong>：求平均值</li>
<li><strong>MAX</strong>：求最大值</li>
<li><strong>MIN</strong>：求最小值</li>
<li><strong>ABS</strong>：求绝对值 <code>=ABS(数值)</code></li>
<li><strong>ROUND</strong>：四舍五入 <code>=ROUND(数值, 小数位数)</code></li>
</ul>

<h3>2.2.2 统计函数</h3>
<ul>
<li><strong>COUNT</strong>：统计数值单元格数量</li>
<li><strong>COUNTA</strong>：统计非空单元格数量</li>
<li><strong>COUNTIF</strong>：按条件统计</li>
<li><strong>SUMIF</strong>：按条件求和 <code>=SUMIF(条件区域, 条件, 求和区域)</code></li>
</ul>

<h3>2.2.3 文本函数</h3>
<ul>
<li><strong>LEFT</strong>：截取左边字符 <code>=LEFT(文本, 截取字符数)</code></li>
<li><strong>RIGHT</strong>：截取右边字符 <code>=RIGHT(文本, 截取字符数)</code></li>
<li><strong>MID</strong>：截取中间字符 <code>=MID(文本, 起始位置, 截取字符数)</code></li>
<li><strong>LEN</strong>：计算字符串长度 <code>=LEN(文本)</code></li>
<li><strong>CONCATENATE</strong>：拼接字符串 <code>=CONCATENATE(文本1, 文本2, ...)</code>（注：Excel 2016起推荐使用CONCAT和TEXTJOIN函数替代）</li>
</ul>

<h3>2.2.4 日期时间函数</h3>
<ul>
<li><strong>TODAY</strong>：返回当前日期 <code>=TODAY()</code></li>
<li><strong>NOW</strong>：返回当前日期时间 <code>=NOW()</code></li>
<li><strong>YEAR</strong>：提取年份 <code>=YEAR(日期)</code></li>
<li><strong>MONTH</strong>：提取月份 <code>=MONTH(日期)</code></li>
<li><strong>DAY</strong>：提取日期 <code>=DAY(日期)</code></li>
</ul>`,
        exercises: [
          {
            id: 'o2-2-1',
            type: 'single',
            question: '统计非空单元格数量的函数是？',
            options: ['COUNT', 'COUNTA', 'COUNTIF', 'SUM'],
            answer: 'B',
            explanation: 'COUNTA函数用于统计非空单元格的数量。',
            score: 2
          }
        ]
      },
      {
        id: 'o2-3',
        title: '2.3 逻辑函数',
        description: '学习条件判断和逻辑运算',
        content: `<h3>2.3.1 IF函数</h3>
<p>IF函数用于条件判断：</p>
<pre><code class="code-block">=IF(条件, 真值, 假值)</code></pre>
<p>示例：</p>
<pre><code class="code-block">=IF(A1>=60, "及格", "不及格")
=IF(A1>=90, "优秀", IF(A1>=60, "及格", "不及格"))</code></pre>

<h3>2.3.2 AND和OR函数</h3>
<ul>
<li><strong>AND</strong>：所有条件都为真时返回真</li>
<li><strong>OR</strong>：任一条件为真时返回真</li>
</ul>
<p>示例：</p>
<pre><code class="code-block">=AND(A1>=60, B1>=60)   && 两个条件都满足
=OR(A1>=90, B1>=90)     && 任一条件满足</code></pre>

<h3>2.3.3 NOT函数</h3>
<p>NOT函数用于取反：</p>
<pre><code class="code-block">=NOT(A1>=60)   && 当A1<60时返回真</code></pre>

<h3>💡 实战案例：学生成绩等级评定</h3>
<p><strong>场景</strong>：根据学生成绩自动评定等级（优秀/良好/及格/不及格），并判断是否全科通过。</p>
<p><strong>数据表结构</strong>：</p>
<pre><code class="code-block">A列：姓名    B列：语文    C列：数学    D列：英语    E列：等级    F列：是否全科通过</code></pre>
<p><strong>等级评定公式</strong>（E2单元格）：</p>
<pre><code class="code-block">=IF(B2>=90, "优秀", IF(B2>=80, "良好", IF(B2>=60, "及格", "不及格")))</code></pre>
<p>如果总分达到270分且每科均及格，则评为"优秀"：</p>
<pre><code class="code-block">=IF(AND(SUM(B2:D2)>=270, B2>=60, C2>=60, D2>=60), "优秀", IF(AND(B2>=60, C2>=60, D2>=60), "及格", "不及格"))</code></pre>
<p><strong>是否全科通过</strong>（F2单元格）：</p>
<pre><code class="code-block">=IF(AND(B2>=60, C2>=60, D2>=60), "是", "否")</code></pre>
<p><strong>统计各等级人数</strong>：</p>
<pre><code class="code-block">=COUNTIF(E2:E50, "优秀")    && 统计优秀人数
=COUNTIF(E2:E50, "及格")    && 统计及格人数
=COUNTIF(E2:E50, "不及格")  && 统计不及格人数</code></pre>`,
        exercises: [
          {
            id: 'o2-3-1',
            type: 'code',
            question: '写出判断A1单元格成绩是否在60-100之间的公式。',
            answer: '=AND(A1>=60, A1<=100)',
            explanation: '使用AND函数判断两个条件同时满足。',
            score: 5
          }
        ]
      },
      {
        id: 'o2-4',
        title: '2.4 VLOOKUP与查找函数',
        description: '学习VLOOKUP、HLOOKUP及INDEX/MATCH查找函数',
        content: `<h3>2.4.1 VLOOKUP函数</h3>
<p><strong>VLOOKUP</strong>是Excel中最常用的查找函数，用于在数据区域中垂直查找值。</p>
<p><strong>语法</strong>：</p>
<pre><code class="code-block">VLOOKUP(查找值, 查找区域, 返回列号, 匹配方式)</code></pre>
<ul>
<li><strong>查找值</strong>：要查找的内容（必须在查找区域的第一列）</li>
<li><strong>查找区域</strong>：包含查找值和返回值的数据区域</li>
<li><strong>返回列号</strong>：返回值在查找区域中的列序号（从1开始）</li>
<li><strong>匹配方式</strong>：TRUE（模糊匹配）或FALSE（精确匹配）</li>
</ul>

<h3>2.4.2 VLOOKUP实战示例</h3>
<p>假设有学生成绩表，根据学号查找姓名和成绩：</p>
<pre><code class="code-block">=VLOOKUP("S001", A2:C100, 2, FALSE)   && 根据学号查找姓名
=VLOOKUP("S001", A2:C100, 3, FALSE)   && 根据学号查找成绩
=VLOOKUP(E2, A2:C100, 3, FALSE)       && 根据E2单元格的学号查找成绩</code></pre>

<h3>2.4.3 HLOOKUP函数</h3>
<p><strong>HLOOKUP</strong>用于在数据区域中水平查找值，语法与VLOOKUP类似：</p>
<pre><code class="code-block">HLOOKUP(查找值, 查找区域, 返回行号, 匹配方式)</code></pre>
<p>适用于横向排列的数据表，如按月份水平排列的销售数据。</p>

<h3>2.4.4 INDEX/MATCH组合</h3>
<p><strong>INDEX</strong>函数返回指定位置的值：</p>
<pre><code class="code-block">INDEX(数据区域, 行号, 列号)</code></pre>
<p><strong>MATCH</strong>函数返回指定值的位置：</p>
<pre><code class="code-block">MATCH(查找值, 查找区域, 匹配方式)</code></pre>
<p><strong>INDEX+MATCH组合</strong>比VLOOKUP更灵活，可以实现向左查找和多条件查找：</p>
<pre><code class="code-block">=INDEX(B2:B100, MATCH("S001", A2:A100, 0))   && 等价于VLOOKUP的精确查找
=INDEX(C2:C100, MATCH(1, (A2:A100=E2)*(B2:B100=F2), 0))   && 多条件查找（数组公式）</code></pre>

<h3>2.4.5 VLOOKUP常见注意事项</h3>
<ul>
<li><strong>查找值必须在第一列</strong>：VLOOKUP只能在查找区域的第一列中查找</li>
<li><strong>精确匹配用FALSE</strong>：大多数情况下应使用FALSE进行精确匹配</li>
<li><strong>#N/A错误</strong>：当查找值不存在时返回#N/A，可使用IFERROR处理</li>
<li><strong>列号不要越界</strong>：返回列号不能超过查找区域的总列数</li>
</ul>
<pre><code class="code-block">=IFERROR(VLOOKUP(E2, A2:C100, 3, FALSE), "未找到")   && 错误处理</code></pre>`,
        exercises: [
          {
            id: 'o2-4-1',
            type: 'single',
            question: 'VLOOKUP函数的第四个参数FALSE表示？',
            options: ['模糊匹配', '精确匹配', '不匹配', '部分匹配'],
            answer: 'B',
            explanation: 'FALSE表示精确匹配，TRUE表示模糊匹配。精确匹配要求查找值与数据完全一致。',
            score: 2
          },
          {
            id: 'o2-4-2',
            type: 'code',
            question: '写出使用VLOOKUP在A2:D100区域中，根据E2单元格的值查找第3列数据（精确匹配）的公式。',
            answer: '=VLOOKUP(E2, A2:D100, 3, FALSE)',
            explanation: 'VLOOKUP的四个参数：查找值E2，查找区域A2:D100，返回第3列，FALSE精确匹配。',
            score: 5
          },
          {
            id: 'o2-4-3',
            type: 'fill',
            question: '当VLOOKUP找不到查找值时，会返回______错误。',
            answer: '#N/A',
            explanation: '当查找值在查找区域第一列中不存在时，VLOOKUP返回#N/A错误。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'o3',
    title: '第三章：Excel数据处理',
    lessons: [
      {
        id: 'o3-1',
        title: '3.1 数据排序',
        description: '学习数据排序的方法',
        content: `<h3>3.1.1 简单排序</h3>
<p>按单一列排序：</p>
<ul>
<li><strong>升序</strong>：从小到大排列</li>
<li><strong>降序</strong>：从大到小排列</li>
</ul>

<h3>3.1.2 多条件排序</h3>
<p>按多列排序，先按第一列排序，第一列相同时按第二列排序。</p>

<h3>3.1.3 自定义排序</h3>
<p>可以自定义排序顺序，如按星期、月份等排序。</p>

<h3>⚠️ 常见错误</h3>
<p><strong>1. 排序常见错误</strong></p>
<ul>
<li><strong>只选中部分列排序</strong>：如果只选中一列进行排序，会导致该列数据与其他列错位，应选中整个数据区域或使用"扩展选定区域"</li>
<li><strong>合并单元格影响排序</strong>：数据区域中有合并单元格时无法正常排序，需要先取消合并</li>
<li><strong>标题行被排序</strong>：排序时未勾选"数据包含标题"，导致标题行也被排序到数据中间</li>
<li><strong>数字格式不一致</strong>：数字存储为文本格式时，排序结果可能不符合预期（如1、10、11、2、20），应统一格式</li>
</ul>
<p><strong>2. 筛选常见错误</strong></p>
<ul>
<li><strong>筛选后复制粘贴</strong>：筛选状态下直接复制粘贴，隐藏行也会被覆盖，应使用"可见单元格"粘贴</li>
<li><strong>筛选条件冲突</strong>：多个筛选条件同时使用，忘记之前的筛选条件导致数据不全</li>
<li><strong>空行打断数据区域</strong>：数据区域中有空行时，筛选可能只应用到空行之前的部分</li>
<li><strong>筛选后编辑数据</strong>：筛选状态下修改数据，可能意外修改了隐藏行的数据</li>
</ul>
<p><strong>正确做法</strong>：</p>
<pre><code class="code-block">排序前：选中整个数据区域 → 数据 → 排序 → 勾选"数据包含标题" → 选择排序列和顺序
筛选前：确保数据区域连续无空行 → 选中标题行 → 数据 → 筛选 → 设置筛选条件
筛选后复制：选中数据 → Alt+;（定位可见单元格）→ Ctrl+C → 粘贴到目标位置</code></pre>`,
        exercises: [
          {
            id: 'o3-1-1',
            type: 'single',
            question: '从小到大排列称为？',
            options: ['升序', '降序', '乱序', '倒序'],
            answer: 'A',
            explanation: '升序是指从小到大排列。',
            score: 2
          }
        ]
      },
      {
        id: 'o3-2',
        title: '3.2 数据筛选',
        description: '学习数据筛选的方法',
        content: `<h3>3.2.1 自动筛选</h3>
<p>使用自动筛选功能过滤数据：</p>
<ul>
<li><strong>文本筛选</strong>：包含、不包含、等于、不等于等</li>
<li><strong>数字筛选</strong>：大于、小于、等于、介于等</li>
<li><strong>日期筛选</strong>：今天、昨天、本周、本月等</li>
</ul>

<h3>3.2.2 高级筛选</h3>
<p>使用高级筛选功能进行复杂条件筛选：</p>
<ul>
<li>设置条件区域</li>
<li>选择数据区域</li>
<li>选择结果输出位置</li>
</ul>`,
        exercises: [
          {
            id: 'o3-2-1',
            type: 'single',
            question: '筛选出包含特定文本的记录使用哪种筛选？',
            options: ['数字筛选', '文本筛选', '日期筛选', '高级筛选'],
            answer: 'B',
            explanation: '文本筛选用于筛选文本类型的数据。',
            score: 2
          }
        ]
      },
      {
        id: 'o3-3',
        title: '3.3 数据透视表',
        description: '学习数据透视表的创建和使用',
        content: `<h3>3.3.1 数据透视表的概念</h3>
<p><strong>数据透视表</strong>：用于快速汇总和分析大量数据的工具。</p>

<h3>3.3.2 创建数据透视表</h3>
<ol>
<li>选择数据区域</li>
<li>插入数据透视表</li>
<li>设置行标签、列标签、值字段</li>
<li>调整布局和格式</li>
</ol>

<h3>3.3.3 数据透视表的应用</h3>
<ul>
<li><strong>数据汇总</strong>：按类别汇总数据</li>
<li><strong>数据对比</strong>：对比不同类别的数据</li>
<li><strong>数据钻取</strong>：查看详细数据</li>
</ul>

<h3>💡 实战案例：销售数据分析</h3>
<p><strong>场景</strong>：某公司记录了一季度的销售数据，需要使用数据透视表进行分析。</p>
<p><strong>原始数据表结构</strong>：</p>
<pre><code class="code-block">A列：日期      B列：产品名称     C列：销售区域     D列：销售员     E列：销售额</code></pre>
<p><strong>分析需求</strong>：</p>
<ol>
<li>按产品名称汇总销售额，了解各产品的销售表现</li>
<li>按销售区域和产品交叉统计，找出各区域的热销产品</li>
<li>按销售员统计总销售额，进行业绩排名</li>
</ol>
<p><strong>创建数据透视表步骤</strong>：</p>
<pre><code class="code-block">步骤1：选中数据区域 A1:E100
步骤2：插入 → 数据透视表 → 确定
步骤3：将"产品名称"拖入【行标签】区域
步骤4：将"销售额"拖入【值】区域（自动求和）
步骤5：将"销售区域"拖入【列标签】区域（交叉分析）
步骤6：将"销售员"拖入【筛选器】区域（按人筛选）</code></pre>
<p><strong>结果解读</strong>：通过透视表可快速发现：哪些产品销量最高、各区域偏好哪些产品、每位销售员的业绩对比，为决策提供数据支撑。</p>`,
        exercises: [
          {
            id: 'o3-3-1',
            type: 'fill',
            question: '用于快速汇总和分析大量数据的工具是______。',
            answer: '数据透视表',
            explanation: '数据透视表是Excel中用于快速汇总和分析大量数据的工具。',
            score: 2
          }
        ]
      },
      {
        id: 'o3-4',
        title: '3.4 图表制作',
        description: '学习Excel中图表的创建和格式化',
        content: `<h3>3.4.1 常见图表类型</h3>
<ul>
<li><strong>柱状图</strong>：用于比较不同类别的数据大小，适合展示离散数据对比</li>
<li><strong>折线图</strong>：用于展示数据随时间的变化趋势，适合连续数据</li>
<li><strong>饼图</strong>：用于展示各部分占总体的比例关系，适合占比分析</li>
<li><strong>条形图</strong>：柱状图的横向版本，适合类别名称较长的场景</li>
<li><strong>散点图</strong>：用于展示两个变量之间的关系</li>
<li><strong>面积图</strong>：强调数量随时间变化的程度</li>
</ul>

<h3>3.4.2 图表创建步骤</h3>
<ol>
<li><strong>选择数据</strong>：选中需要制作图表的数据区域</li>
<li><strong>插入图表</strong>：点击"插入"选项卡，选择图表类型</li>
<li><strong>调整数据</strong>：右键图表 → 选择数据，调整数据系列和分类轴</li>
<li><strong>设置布局</strong>：添加图表标题、坐标轴标题、数据标签、图例</li>
</ol>

<h3>3.4.3 图表格式化和美化</h3>
<ul>
<li><strong>图表样式</strong>：使用内置样式快速美化图表</li>
<li><strong>颜色方案</strong>：调整图表配色方案</li>
<li><strong>坐标轴设置</strong>：调整坐标轴刻度、单位、范围</li>
<li><strong>数据标签</strong>：在图表上显示具体数值</li>
<li><strong>趋势线</strong>：添加趋势线展示数据走向</li>
</ul>

<h3>3.4.4 图表类型选择指南</h3>
<table>
<tr><th>图表类型</th><th>适用场景</th><th>示例</th></tr>
<tr><td>柱状图</td><td>比较不同类别的大小</td><td>各产品季度销量对比</td></tr>
<tr><td>折线图</td><td>展示变化趋势</td><td>月度销售额走势</td></tr>
<tr><td>饼图</td><td>展示占比关系</td><td>各产品市场份额</td></tr>
<tr><td>条形图</td><td>类别名称较长时</td><td>各部门预算对比</td></tr>
<tr><td>散点图</td><td>两个变量相关性</td><td>广告投入与销售额关系</td></tr>
</table>

<h3>3.4.5 图表制作注意事项</h3>
<ul>
<li><strong>数据源准确</strong>：确保源数据格式正确，无空行空列</li>
<li><strong>标题清晰</strong>：图表标题应简洁明了，说明图表内容</li>
<li><strong>配色合理</strong>：使用对比度适中的配色，避免过于花哨</li>
<li><strong>避免3D效果</strong>：3D效果可能造成视觉误导，建议使用2D图表</li>
</ul>`,
        exercises: [
          {
            id: 'o3-4-1',
            type: 'single',
            question: '展示数据随时间变化趋势最适合使用哪种图表？',
            options: ['柱状图', '折线图', '饼图', '条形图'],
            answer: 'B',
            explanation: '折线图最适合展示数据随时间的变化趋势，因为它能直观地表现数据的上升、下降和波动。',
            score: 2
          },
          {
            id: 'o3-4-2',
            type: 'single',
            question: '展示各部分占总体的比例关系最适合使用哪种图表？',
            options: ['柱状图', '折线图', '饼图', '散点图'],
            answer: 'C',
            explanation: '饼图专门用于展示各部分占总体的比例关系，能直观显示每个部分的占比大小。',
            score: 2
          },
          {
            id: 'o3-4-3',
            type: 'fill',
            question: '在图表上显示具体数值需要添加______。',
            answer: '数据标签',
            explanation: '数据标签可以在图表上直接显示每个数据点的具体数值，方便阅读。',
            score: 2
          }
        ]
      },
      {
        id: 'o3-5',
        title: '3.5 条件格式',
        description: '学习使用条件格式突出显示数据',
        content: `<h3>3.5.1 突出显示单元格规则</h3>
<p>条件格式可以根据单元格的值自动设置格式：</p>
<ul>
<li><strong>大于</strong>：将大于指定值的单元格高亮显示</li>
<li><strong>小于</strong>：将小于指定值的单元格高亮显示</li>
<li><strong>介于</strong>：将介于两个值之间的单元格高亮显示</li>
<li><strong>等于</strong>：将等于指定值的单元格高亮显示</li>
<li><strong>文本包含</strong>：将包含指定文本的单元格高亮显示</li>
<li><strong>重复值</strong>：将重复出现的值高亮显示</li>
</ul>

<h3>3.5.2 数据条、色阶和图标集</h3>
<ul>
<li><strong>数据条</strong>：在单元格内显示条形图，直观展示数据大小</li>
<li><strong>色阶</strong>：使用颜色深浅表示数据大小，形成热力图效果</li>
<li><strong>图标集</strong>：使用箭头、星号、信号灯等图标表示数据等级</li>
</ul>

<h3>3.5.3 自定义条件格式公式</h3>
<p>使用公式创建更灵活的条件格式规则：</p>
<pre><code class="code-block">=A1>AVERAGE($A$1:$A$100)   && 高于平均值时高亮
=AND(A1>=60, A1<80)        && 成绩在60-80之间时高亮
=MOD(ROW(), 2)=0           && 隔行着色（偶数行）
=WEEKDAY(A1, 2)>5          && 日期为周末时高亮
=COUNTIF($A$1:$A$100, A1)>1   && 标记重复值</code></pre>

<h3>3.5.4 实战应用示例</h3>
<p><strong>学生成绩表条件格式应用</strong>：</p>
<ol>
<li>用<strong>数据条</strong>展示各科成绩，直观对比学生表现</li>
<li>用<strong>图标集</strong>（红绿灯）标记等级：绿色=优秀(≥90)，黄色=良好(≥80)，红色=及格以下</li>
<li>用<strong>突出显示</strong>标记不及格成绩（<60分）为红色填充</li>
<li>用<strong>公式规则</strong>将总分排名前10%的学生整行高亮</li>
</ol>

<h3>3.5.5 条件格式管理</h3>
<ul>
<li><strong>规则优先级</strong>：多个规则冲突时，排在上方的规则优先</li>
<li><strong>应用范围</strong>：可以指定条件格式应用的具体区域</li>
<li><strong>清除规则</strong>：可以清除选定单元格或整个工作表的条件格式</li>
</ul>`,
        exercises: [
          {
            id: 'o3-5-1',
            type: 'single',
            question: '在单元格内显示条形图来展示数据大小的功能是？',
            options: ['色阶', '数据条', '图标集', '突出显示'],
            answer: 'B',
            explanation: '数据条可以在单元格内显示条形图，直观展示数据大小对比。',
            score: 2
          },
          {
            id: 'o3-5-2',
            type: 'fill',
            question: '使用条件格式标记重复值时，可以使用______函数配合公式规则实现。',
            answer: 'COUNTIF',
            explanation: 'COUNTIF函数可以统计某个值出现的次数，当次数大于1时即为重复值。',
            score: 2
          },
          {
            id: 'o3-5-3',
            type: 'code',
            question: '写出条件格式公式：当A1的值大于A1:A100区域平均值时高亮显示。',
            answer: '=A1>AVERAGE($A$1:$A$100)',
            explanation: '使用AVERAGE计算平均值，绝对引用确保范围不变，条件格式会自动调整相对引用。',
            score: 5
          }
        ]
      }
    ]
  },
  {
    id: 'o4',
    title: '第四章：Word基础操作',
    lessons: [
      {
        id: 'o4-1',
        title: '4.1 Word界面介绍',
        description: '了解Word的界面组成',
        content: `<h3>4.1.1 Word界面组成</h3>
<ul>
<li><strong>标题栏</strong>：显示文件名和程序名</li>
<li><strong>功能区（Ribbon）</strong>：包含开始、插入、公式、数据等选项卡，每个选项卡下包含相关工具按钮</li>
<li><strong>快速访问工具栏</strong>：位于标题栏左侧，包含保存、撤销、重做等常用按钮</li>
<li><strong>标尺</strong>：显示页面尺寸和缩进</li>
<li><strong>编辑区域</strong>：输入和编辑文档内容</li>
<li><strong>状态栏</strong>：显示当前状态信息</li>
</ul>

<h3>4.1.2 视图模式</h3>
<ul>
<li><strong>页面视图</strong>：所见即所得的视图</li>
<li><strong>大纲视图</strong>：显示文档结构</li>
<li><strong>草稿视图</strong>：简化的编辑视图</li>
<li><strong>Web视图</strong>：网页预览视图</li>
</ul>`,
        exercises: [
          {
            id: 'o4-1-1',
            type: 'single',
            question: '所见即所得的视图模式是？',
            options: ['大纲视图', '草稿视图', '页面视图', 'Web视图'],
            answer: 'C',
            explanation: '页面视图是所见即所得的视图模式。',
            score: 2
          }
        ]
      },
      {
        id: 'o4-2',
        title: '4.2 文本编辑与格式化',
        description: '学习文本的编辑和格式设置',
        content: `<h3>4.2.1 文本编辑</h3>
<ul>
<li><strong>复制粘贴</strong>：复制文本内容</li>
<li><strong>剪切粘贴</strong>：移动文本内容</li>
<li><strong>查找替换</strong>：查找和替换文本</li>
<li><strong>撤销重做</strong>：撤销或重做操作</li>
</ul>

<h3>4.2.2 字体格式化</h3>
<ul>
<li><strong>字体</strong>：设置字体类型</li>
<li><strong>字号</strong>：设置字体大小</li>
<li><strong>颜色</strong>：设置字体颜色</li>
<li><strong>加粗、斜体、下划线</strong>：设置字体样式</li>
</ul>

<h3>4.2.3 段落格式化</h3>
<ul>
<li><strong>对齐方式</strong>：左对齐、居中、右对齐、两端对齐</li>
<li><strong>缩进</strong>：首行缩进、悬挂缩进、左右缩进</li>
<li><strong>行间距</strong>：设置行与行之间的距离</li>
<li><strong>段间距</strong>：设置段落之间的距离</li>
</ul>`,
        exercises: [
          {
            id: 'o4-2-1',
            type: 'single',
            question: '设置段落第一行缩进的方式是？',
            options: ['左缩进', '右缩进', '首行缩进', '悬挂缩进'],
            answer: 'C',
            explanation: '首行缩进用于设置段落第一行的缩进。',
            score: 2
          }
        ]
      },
      {
        id: 'o4-3',
        title: '4.3 文档排版',
        description: '学习文档的页面设置和排版',
        content: `<h3>4.3.1 页面设置</h3>
<ul>
<li><strong>纸张大小</strong>：设置纸张尺寸</li>
<li><strong>页边距</strong>：设置页面四周的空白区域</li>
<li><strong>纸张方向</strong>：纵向或横向</li>
</ul>

<h3>4.3.2 页眉页脚</h3>
<ul>
<li><strong>页眉</strong>：页面顶部的内容</li>
<li><strong>页脚</strong>：页面底部的内容</li>
<li><strong>页码</strong>：添加页码</li>
</ul>

<h3>4.3.3 分节和分栏</h3>
<ul>
<li><strong>分节</strong>：将文档分成多个节，每个节可以有不同的格式</li>
<li><strong>分栏</strong>：将文本分成多栏显示</li>
</ul>`,
        exercises: [
          {
            id: 'o4-3-1',
            type: 'fill',
            question: '页面顶部的内容称为______。',
            answer: '页眉',
            explanation: '页眉是页面顶部的内容，页脚是页面底部的内容。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'o5',
    title: '第五章：Word高级功能',
    lessons: [
      {
        id: 'o5-1',
        title: '5.1 样式的使用',
        description: '学习使用样式统一文档格式',
        content: `<h3>5.1.1 样式的概念</h3>
<p><strong>样式</strong>：一组格式设置的集合，可以快速应用到文本上。</p>

<h3>5.1.2 内置样式</h3>
<ul>
<li><strong>标题样式</strong>：标题1、标题2、标题3等</li>
<li><strong>正文样式</strong>：默认的正文格式</li>
<li><strong>引用样式</strong>：用于引用内容</li>
</ul>

<h3>5.1.3 自定义样式</h3>
<p>可以创建自定义样式，满足特定需求：</p>
<ol>
<li>打开样式面板</li>
<li>新建样式</li>
<li>设置样式格式</li>
<li>应用样式</li>
</ol>`,
        exercises: [
          {
            id: 'o5-1-1',
            type: 'single',
            question: '一组格式设置的集合称为？',
            options: ['模板', '样式', '主题', '格式'],
            answer: 'B',
            explanation: '样式是一组格式设置的集合。',
            score: 2
          }
        ]
      },
      {
        id: 'o5-2',
        title: '5.2 表格操作',
        description: '学习在Word中创建和编辑表格',
        content: `<h3>5.2.1 创建表格</h3>
<ul>
<li><strong>使用工具栏</strong>：点击插入表格按钮</li>
<li><strong>使用菜单</strong>：插入→表格</li>
<li><strong>手动绘制</strong>：使用绘制表格工具</li>
</ul>

<h3>5.2.2 编辑表格</h3>
<ul>
<li><strong>插入行/列</strong>：在表格中插入行或列</li>
<li><strong>删除行/列</strong>：删除表格中的行或列</li>
<li><strong>合并单元格</strong>：将多个单元格合并</li>
<li><strong>拆分单元格</strong>：将一个单元格拆分为多个</li>
</ul>

<h3>5.2.3 表格格式化</h3>
<ul>
<li><strong>边框</strong>：设置表格边框样式和颜色</li>
<li><strong>底纹</strong>：设置表格背景颜色</li>
<li><strong>对齐方式</strong>：设置单元格内容对齐方式</li>
</ul>`,
        exercises: [
          {
            id: 'o5-2-1',
            type: 'fill',
            question: '将多个单元格合并为一个的操作是______。',
            answer: '合并单元格',
            explanation: '合并单元格可以将多个单元格合并为一个。',
            score: 2
          }
        ]
      },
      {
        id: 'o5-3',
        title: '5.3 图文混排',
        description: '学习在Word中插入和编辑图片',
        content: `<h3>5.3.1 插入图片</h3>
<ul>
<li><strong>来自文件</strong>：插入本地图片</li>
<li><strong>来自剪贴板</strong>：粘贴剪贴板中的图片</li>
<li><strong>形状</strong>：插入内置形状</li>
</ul>

<h3>5.3.2 图片格式设置</h3>
<ul>
<li><strong>大小</strong>：调整图片尺寸</li>
<li><strong>位置</strong>：调整图片位置</li>
<li><strong>环绕方式</strong>：设置图片与文本的环绕方式</li>
<li><strong>颜色</strong>：调整图片颜色、亮度、对比度</li>
</ul>

<h3>5.3.3 图文混排技巧</h3>
<ul>
<li><strong>嵌入型</strong>：图片作为字符插入</li>
<li><strong>四周型环绕</strong>：文本环绕在图片四周</li>
<li><strong>紧密型环绕</strong>：文本紧密环绕图片</li>
<li><strong>浮于文字上方</strong>：图片在文字上方</li>
</ul>`,
        exercises: [
          {
            id: 'o5-3-1',
            type: 'single',
            question: '文本环绕在图片四周的环绕方式是？',
            options: ['嵌入型', '四周型环绕', '紧密型环绕', '浮于文字上方'],
            answer: 'B',
            explanation: '四周型环绕使文本环绕在图片四周。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'o6',
    title: '第六章：办公自动化综合应用',
    lessons: [
      {
        id: 'o6-1',
        title: '6.1 Excel与Word的协同',
        description: '学习Excel和Word之间的数据交互',
        content: `<h3>6.1.1 复制粘贴数据</h3>
<p>将Excel中的数据复制到Word中：</p>
<ul>
<li><strong>粘贴为表格</strong>：保持表格格式</li>
<li><strong>粘贴为文本</strong>：转换为纯文本</li>
<li><strong>粘贴为图片</strong>：转换为图片</li>
</ul>

<h3>6.1.2 邮件合并</h3>
<p>使用邮件合并功能批量生成文档：</p>
<ol>
<li>创建Word模板</li>
<li>准备Excel数据源</li>
<li>插入合并域</li>
<li>执行邮件合并</li>
<li><strong>第五步：完成并生成文档</strong>：完成合并后，生成批量文档，可以打印或保存</li>
</ol>`,
        exercises: [
          {
            id: 'o6-1-1',
            type: 'single',
            question: '批量生成文档的功能是？',
            options: ['复制粘贴', '邮件合并', '数据透视', '模板套用'],
            answer: 'B',
            explanation: '邮件合并用于批量生成文档，如批量制作邀请函、成绩单等。',
            score: 2
          }
        ]
      },
      {
        id: 'o6-2',
        title: '6.2 常见办公场景应用',
        description: '学习实际办公场景中的应用技巧',
        content: `<h3>6.2.1 制作表格</h3>
<ul>
<li>员工信息表</li>
<li>销售统计表</li>
<li>考勤表</li>
</ul>

<h3>6.2.2 制作报表</h3>
<ul>
<li>月度销售报表</li>
<li>年度总结报告</li>
<li>财务报表</li>
</ul>

<h3>6.2.3 制作文档</h3>
<ul>
<li>合同模板</li>
<li>会议纪要</li>
<li>通知公告</li>
</ul>`,
        exercises: [
          {
            id: 'o6-2-1',
            type: 'essay',
            question: '简述邮件合并的步骤。',
            answer: '1. 创建Word模板文档；2. 在Excel中准备数据源；3. 在Word中插入合并域；4. 执行邮件合并操作；5. 生成批量文档。',
            explanation: '邮件合并用于将Excel数据批量填充到Word模板中，生成个性化文档。',
            score: 10
          }
        ]
      }
    ]
  },
  {
    id: 'o7',
    title: '第七章：PowerPoint演示文稿',
    lessons: [
      {
        id: 'o7-1',
        title: '7.1 PowerPoint界面与基本操作',
        description: '了解PowerPoint界面组成和基本操作',
        content: `<h3>7.1.1 PowerPoint界面组成</h3>
<ul>
<li><strong>标题栏</strong>：显示文件名和程序名</li>
<li><strong>功能区</strong>：包含开始、插入、设计、切换、动画、幻灯片放映等选项卡</li>
<li><strong>幻灯片缩略图窗格</strong>：左侧显示幻灯片缩略图，方便浏览和排序</li>
<li><strong>编辑区域</strong>：中间区域编辑当前幻灯片内容</li>
<li><strong>备注窗格</strong>：底部区域添加演讲者备注</li>
<li><strong>状态栏</strong>：显示幻灯片编号、视图模式等</li>
</ul>

<h3>7.1.2 创建和管理幻灯片</h3>
<ul>
<li><strong>新建幻灯片</strong>：点击"开始"→"新建幻灯片"或使用快捷键Ctrl+M</li>
<li><strong>选择版式</strong>：标题幻灯片、标题和内容、两栏内容、空白等</li>
<li><strong>复制幻灯片</strong>：右键缩略图→复制幻灯片</li>
<li><strong>删除幻灯片</strong>：选中后按Delete键或右键删除</li>
<li><strong>移动幻灯片</strong>：拖拽缩略图调整顺序</li>
</ul>

<h3>7.1.3 文本编辑与格式化</h3>
<ul>
<li><strong>文本框</strong>：插入文本框输入文字</li>
<li><strong>字体设置</strong>：字体、字号、颜色、加粗、斜体、下划线</li>
<li><strong>段落设置</strong>：对齐方式、行间距、项目符号、编号</li>
<li><strong>艺术字</strong>：使用艺术字样式美化标题文字</li>
</ul>

<h3>7.1.4 插入对象</h3>
<ul>
<li><strong>图片</strong>：插入本地图片或在线图片</li>
<li><strong>形状</strong>：插入矩形、圆形、箭头等基本形状</li>
<li><strong>表格</strong>：在幻灯片中插入表格展示数据</li>
<li><strong>图表</strong>：插入图表直观展示数据</li>
<li><strong>SmartArt</strong>：使用SmartArt图形展示流程和关系</li>
</ul>`,
        exercises: [
          {
            id: 'o7-1-1',
            type: 'single',
            question: '新建幻灯片的快捷键是？',
            options: ['Ctrl+N', 'Ctrl+M', 'Ctrl+S', 'Ctrl+P'],
            answer: 'B',
            explanation: 'Ctrl+M是PowerPoint中新建幻灯片的快捷键，Ctrl+N是新建整个演示文稿。',
            score: 2
          },
          {
            id: 'o7-1-2',
            type: 'fill',
            question: '用于展示流程和关系图的工具是______。',
            answer: 'SmartArt',
            explanation: 'SmartArt是PowerPoint中内置的图形工具，可以快速创建流程图、层次结构图、关系图等。',
            score: 2
          }
        ]
      },
      {
        id: 'o7-2',
        title: '7.2 幻灯片设计',
        description: '学习幻灯片主题、布局、切换和动画',
        content: `<h3>7.2.1 主题和模板</h3>
<ul>
<li><strong>主题</strong>：一组预设的颜色、字体和效果组合，统一演示文稿风格</li>
<li><strong>变体</strong>：同一主题的不同配色方案</li>
<li><strong>模板</strong>：包含版式和内容的预制演示文稿</li>
<li><strong>自定义主题</strong>：修改颜色、字体、效果后保存为自定义主题</li>
</ul>

<h3>7.2.2 幻灯片版式</h3>
<ul>
<li><strong>标题幻灯片版式</strong>：适用于封面页</li>
<li><strong>标题和内容版式</strong>：最常用的版式，标题+正文/图片/表格</li>
<li><strong>节标题版式</strong>：用于分隔不同章节</li>
<li><strong>两栏内容版式</strong>：左右对比展示内容</li>
<li><strong>空白版式</strong>：完全自定义布局</li>
</ul>

<h3>7.2.3 幻灯片切换效果</h3>
<p>切换效果是幻灯片之间的过渡动画：</p>
<ul>
<li><strong>淡入/淡出</strong>：平滑过渡，适合正式场合</li>
<li><strong>推入</strong>：新幻灯片推入画面</li>
<li><strong>擦除</strong>：从某个方向擦除显示</li>
<li><strong>分割</strong>：从中间向两边展开</li>
<li><strong>设置参数</strong>：持续时间、自动换片时间、声音效果</li>
</ul>

<h3>7.2.4 动画效果</h3>
<p>动画效果是幻灯片内部元素的动态效果：</p>
<ul>
<li><strong>进入动画</strong>：元素出现时的动画（飞入、浮入、劈裂等）</li>
<li><strong>强调动画</strong>：元素已显示时的强调效果（脉冲、旋转、放大等）</li>
<li><strong>退出动画</strong>：元素消失时的动画（飞出、淡出、收缩等）</li>
<li><strong>动作路径</strong>：元素沿指定路径移动</li>
<li><strong>动画窗格</strong>：管理动画顺序、触发方式和持续时间</li>
</ul>
<p><strong>动画使用原则</strong>：</p>
<ul>
<li>动画不宜过多，避免分散观众注意力</li>
<li>同一类型内容使用统一的动画效果</li>
<li>演示重点内容可适当使用强调动画</li>
</ul>`,
        exercises: [
          {
            id: 'o7-2-1',
            type: 'single',
            question: '幻灯片之间的过渡动画称为？',
            options: ['动画效果', '切换效果', '过渡效果', '转场效果'],
            answer: 'B',
            explanation: '切换效果是幻灯片之间的过渡动画，而动画效果是单张幻灯片内元素的动态效果。',
            score: 2
          },
          {
            id: 'o7-2-2',
            type: 'single',
            question: '用于分隔不同章节的版式是？',
            options: ['标题幻灯片', '标题和内容', '节标题', '空白'],
            answer: 'C',
            explanation: '节标题版式专门用于分隔演示文稿中的不同章节，使结构更清晰。',
            score: 2
          },
          {
            id: 'o7-2-3',
            type: 'fill',
            question: '一组预设的颜色、字体和效果组合称为______。',
            answer: '主题',
            explanation: '主题是PowerPoint中预设的颜色、字体和效果组合，可以快速统一演示文稿风格。',
            score: 2
          }
        ]
      },
      {
        id: 'o7-3',
        title: '7.3 演示技巧',
        description: '学习幻灯片母版、演示技巧和打印设置',
        content: `<h3>7.3.1 幻灯片母版</h3>
<p><strong>幻灯片母版</strong>是控制所有幻灯片格式的模板：</p>
<ul>
<li><strong>统一格式</strong>：在母版中设置字体、颜色、背景，所有幻灯片自动应用</li>
<li><strong>添加Logo</strong>：在母版中添加公司Logo，每页都会显示</li>
<li><strong>页码和日期</strong>：在母版中插入页码和日期占位符</li>
<li><strong>编辑方法</strong>：视图 → 幻灯片母版 → 编辑 → 关闭母版视图</li>
</ul>

<h3>7.3.2 演示技巧</h3>
<ul>
<li><strong>内容精简</strong>：每张幻灯片不要超过6-7行文字，避免大段文字</li>
<li><strong>图文并茂</strong>：使用图片、图表辅助说明，增强视觉效果</li>
<li><strong>配色协调</strong>：使用对比度高的配色，背景与文字颜色要有明显区分</li>
<li><strong>字体选择</strong>：使用无衬线字体（如微软雅黑），字号不小于24pt</li>
<li><strong>演讲者视图</strong>：使用演示者视图查看备注和时间，观众只看幻灯片</li>
<li><strong>排练计时</strong>：使用排练计时功能预演，控制演讲节奏</li>
</ul>

<h3>7.3.3 备注和讲义</h3>
<ul>
<li><strong>演讲者备注</strong>：在幻灯片下方添加备注，演讲时只有自己能看到</li>
<li><strong>备注页视图</strong>：查看和编辑备注的专用视图</li>
<li><strong>讲义母版</strong>：设置打印讲义的版式（每页几张幻灯片）</li>
</ul>

<h3>7.3.4 打印设置</h3>
<ul>
<li><strong>打印幻灯片</strong>：每页打印一张幻灯片</li>
<li><strong>打印讲义</strong>：每页打印多张幻灯片（2/3/4/6/9张）</li>
<li><strong>打印备注页</strong>：打印幻灯片及其备注</li>
<li><strong>打印大纲</strong>：打印演示文稿的文字大纲</li>
<li><strong>颜色模式</strong>：彩色、灰度、纯黑白</li>
</ul>

<h3>7.3.5 幻灯片放映设置</h3>
<ul>
<li><strong>从头开始</strong>：F5键，从第一张开始放映</li>
<li><strong>从当前开始</strong>：Shift+F5，从当前幻灯片开始放映</li>
<li><strong>自定义放映</strong>：选择部分幻灯片组成自定义放映序列</li>
<li><strong>隐藏幻灯片</strong>：隐藏不需要放映的幻灯片</li>
<li><strong>放映类型</strong>：演讲者放映（全屏）、观众自行浏览（窗口）、展台浏览（全屏自动）</li>
</ul>`,
        exercises: [
          {
            id: 'o7-3-1',
            type: 'single',
            question: '控制所有幻灯片格式的模板称为？',
            options: ['主题', '模板', '幻灯片母版', '版式'],
            answer: 'C',
            explanation: '幻灯片母版是控制所有幻灯片格式的模板，在母版中修改格式会应用到所有幻灯片。',
            score: 2
          },
          {
            id: 'o7-3-2',
            type: 'fill',
            question: '从当前幻灯片开始放映的快捷键是______。',
            answer: 'Shift+F5',
            explanation: 'Shift+F5从当前幻灯片开始放映，F5则从头开始放映。',
            score: 2
          },
          {
            id: 'o7-3-3',
            type: 'single',
            question: '每张幻灯片建议不超过多少行文字？',
            options: ['3-4行', '6-7行', '10-12行', '15行以上'],
            answer: 'B',
            explanation: '每张幻灯片建议不超过6-7行文字，保持内容精简，避免观众阅读疲劳。',
            score: 2
          }
        ]
      }
    ]
  }
];
