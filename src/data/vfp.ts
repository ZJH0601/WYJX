import { Chapter } from './cLanguage';

export const vfpCourse: Chapter[] = [
  {
    id: 'v1',
    title: '第一章：VFP概述',
    lessons: [
      {
        id: 'v1-1',
        title: '1.1 数据库基础概念',
        description: '了解数据库、数据表、字段等基本概念',
        content: `<h3>1.1.1 数据与信息</h3>
<p><strong>数据</strong>：描述事物的符号记录，包括数字、文字、图像等。</p>
<p><strong>信息</strong>：经过加工处理后具有一定意义的数据。</p>

<h3>1.1.2 数据库相关概念</h3>
<ul>
<li><strong>数据库(DB)</strong>：长期存储在计算机内的、有组织的、可共享的数据集合</li>
<li><strong>数据库管理系统(DBMS)</strong>：管理数据库的软件，如VFP、Access、MySQL等</li>
<li><strong>数据库系统(DBS)</strong>：数据库、DBMS和用户的总称</li>
</ul>

<h3>1.1.3 数据模型</h3>
<ul>
<li><strong>层次模型</strong>：树形结构</li>
<li><strong>网状模型</strong>：图形结构</li>
<li><strong>关系模型</strong>：表格结构（最常用）</li>
</ul>`,
        exercises: [
          {
            id: 'v1-1-1',
            type: 'single',
            question: '以下哪个是数据库管理系统？',
            options: ['Windows', 'VFP', 'Word', 'Excel'],
            answer: 'B',
            explanation: 'VFP是Visual FoxPro的简称，是一种数据库管理系统。',
            score: 2
          }
        ]
      },
      {
        id: 'v1-2',
        title: '1.2 VFP的发展与特点',
        description: '了解VFP的发展历程和主要特点',
        content: `<h3>1.2.1 VFP的发展</h3>
<ul>
<li>1985年：FoxBASE</li>
<li>1989年：FoxPro 1.0</li>
<li>1995年：Visual FoxPro 3.0</li>
<li>2000年：Visual FoxPro 7.0</li>
<li>2004年：Visual FoxPro 9.0（最新版本）</li>
</ul>

<h3>1.2.2 VFP的特点</h3>
<ul>
<li><strong>可视化操作</strong>：提供可视化设计工具</li>
<li><strong>面向对象</strong>：支持面向对象编程</li>
<li><strong>快速开发</strong>：提供向导和生成器</li>
<li><strong>兼容性好</strong>：支持多种数据格式</li>
<li><strong>网络支持</strong>：支持客户端/服务器模式</li>
</ul>`,
        exercises: [
          {
            id: 'v1-2-1',
            type: 'single',
            question: 'VFP最新的版本是？',
            options: ['6.0', '7.0', '8.0', '9.0'],
            answer: 'D',
            explanation: 'Visual FoxPro 9.0是2004年发布的最新版本。',
            score: 2
          }
        ]
      },
      {
        id: 'v1-3',
        title: '1.3 VFP的工作环境',
        description: '了解VFP的界面组成和操作方式',
        content: `<h3>1.3.1 VFP界面组成</h3>
<ul>
<li><strong>菜单栏</strong>：包含文件、编辑、显示等菜单</li>
<li><strong>工具栏</strong>：常用工具按钮</li>
<li><strong>命令窗口</strong>：输入命令的地方</li>
<li><strong>工作区</strong>：显示各种窗口</li>
<li><strong>状态栏</strong>：显示当前状态信息</li>
</ul>

<h3>1.3.2 VFP的操作方式</h3>
<ul>
<li><strong>菜单方式</strong>：通过菜单执行操作</li>
<li><strong>命令方式</strong>：在命令窗口输入命令</li>
<li><strong>程序方式</strong>：编写程序自动执行</li>
</ul>`,
        exercises: [
          {
            id: 'v1-3-1',
            type: 'fill',
            question: 'VFP中输入命令的地方是______窗口。',
            answer: '命令',
            explanation: '命令窗口是VFP中输入和执行命令的地方。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'v2',
    title: '第二章：数据表的创建与操作',
    lessons: [
      {
        id: 'v2-1',
        title: '2.1 数据表的创建',
        description: '学习使用向导和命令创建数据表',
        content: `<h3>2.1.1 数据表的结构</h3>
<p>数据表由字段组成，每个字段包含：</p>
<ul>
<li><strong>字段名</strong>：字段的名称</li>
<li><strong>类型</strong>：数据类型（字符型、数值型、日期型等）</li>
<li><strong>宽度</strong>：字段的宽度</li>
<li><strong>小数位数</strong>：数值型字段的小数位数</li>
</ul>

<h3>2.1.2 创建数据表的方法</h3>
<p><strong>方法一：使用表设计器</strong></p>
<pre><code class="code-block">CREATE TABLE 表名</code></pre>

<p><strong>方法二：使用命令</strong></p>
<pre><code class="code-block">CREATE TABLE 学生 (
    学号 C(10),
    姓名 C(8),
    性别 C(2),
    年龄 N(2),
    出生日期 D
)</code></pre>`,
        exercises: [
          {
            id: 'v2-1-1',
            type: 'single',
            question: '创建数据表的命令是？',
            options: ['CREATE', 'CREATE TABLE', 'NEW TABLE', 'MAKE TABLE'],
            answer: 'B',
            explanation: 'CREATE TABLE命令用于创建数据表。',
            score: 2
          }
        ]
      },
      {
        id: 'v2-2',
        title: '2.2 数据表的基本操作',
        description: '学习数据表的打开、关闭和浏览',
        content: `<h3>2.2.1 打开数据表</h3>
<pre><code class="code-block">USE 表名          && 打开数据表
USE 表名 EXCLUSIVE && 以独占方式打开
USE 表名 SHARED    && 以共享方式打开</code></pre>

<h3>2.2.2 关闭数据表</h3>
<pre><code class="code-block">USE              && 关闭当前数据表
CLOSE ALL        && 关闭所有文件
CLEAR ALL        && 关闭所有文件并清除内存变量</code></pre>

<h3>2.2.3 浏览数据表</h3>
<pre><code class="code-block">BROWSE          && 浏览数据表
EDIT            && 编辑数据表
LIST            && 显示所有记录
DISPLAY         && 显示当前记录</code></pre>`,
        exercises: [
          {
            id: 'v2-2-1',
            type: 'fill',
            question: '浏览数据表的命令是______。',
            answer: 'BROWSE',
            explanation: 'BROWSE命令用于打开浏览窗口查看数据表内容。',
            score: 2
          }
        ]
      },
      {
        id: 'v2-3',
        title: '2.3 记录的操作',
        description: '学习记录的添加、修改和删除',
        content: `<h3>2.3.1 添加记录</h3>
<pre><code class="code-block">APPEND          && 在表末尾添加记录
* INSERT BEFORE 和 INSERT AFTER 是交互式命令，会打开编辑窗口
* 程序化插入应使用 INSERT INTO ... VALUES ...
INSERT BEFORE   && 在当前记录前插入（交互式，会打开编辑窗口）
INSERT AFTER    && 在当前记录后插入（交互式，会打开编辑窗口）</code></pre>

<h3>2.3.2 修改记录</h3>
<pre><code class="code-block">EDIT            && 编辑当前记录
CHANGE          && 修改记录
REPLACE 字段名 WITH 值 && 替换字段值</code></pre>

<h3>2.3.3 删除记录</h3>
<pre><code class="code-block">DELETE          && 逻辑删除（加删除标记）
RECALL          && 恢复已删除记录
PACK            && 物理删除（永久删除）
ZAP             && 删除所有记录</code></pre>`,
        exercises: [
          {
            id: 'v2-3-1',
            type: 'single',
            question: 'DELETE命令执行的是哪种删除？',
            options: ['物理删除', '逻辑删除', '永久删除', '彻底删除'],
            answer: 'B',
            explanation: 'DELETE命令只是给记录加删除标记，属于逻辑删除，可以用RECALL恢复。',
            score: 2
          }
        ]
      },
      {
        id: 'v2-4',
        title: '2.4 数据完整性约束',
        description: '学习实体完整性、参照完整性和域完整性约束',
        content: `<h3>2.4.1 数据完整性的概念</h3>
<p><strong>数据完整性</strong>是指数据的正确性和相容性。数据库系统通过完整性约束来保证数据的正确性，防止不符合规则的数据进入数据库。</p>
<p>数据完整性分为三类：</p>
<ul>
<li><strong>实体完整性</strong>：保证表中每一行数据是唯一的</li>
<li><strong>参照完整性</strong>：保证相关表之间数据的一致性</li>
<li><strong>域完整性</strong>：保证字段取值在有效范围内</li>
</ul>

<h3>2.4.2 实体完整性（PRIMARY KEY）</h3>
<p>实体完整性通过<strong>主键（PRIMARY KEY）</strong>来实现，确保表中每条记录都有一个唯一的标识。</p>
<p><strong>主键的特点：</strong></p>
<ul>
<li>每个表只能有一个主键</li>
<li>主键的值不能为空（NOT NULL）</li>
<li>主键的值不能重复</li>
</ul>
<pre><code class="code-block">CREATE TABLE 学生 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8),
    性别 C(2),
    年龄 N(2)
)

ALTER TABLE 学生 ADD PRIMARY KEY 学号 TAG 学号  && 为已有表添加主键</code></pre>

<h3>2.4.3 参照完整性（FOREIGN KEY）</h3>
<p>参照完整性通过<strong>外键（FOREIGN KEY）</strong>来保证相关表之间的数据一致性。</p>
<p><strong>外键的作用：</strong></p>
<ul>
<li>确保子表中的外键值必须在父表的主键中存在</li>
<li>防止删除被引用的父表记录</li>
<li>维护表与表之间的关联关系</li>
</ul>
<pre><code class="code-block">CREATE TABLE 成绩 (
    学号 C(10),
    课程号 C(5),
    分数 N(5,1),
    FOREIGN KEY 学号 TAG 学号 REFERENCES 学生
)

ALTER TABLE 成绩 ADD FOREIGN KEY 学号 TAG 学号 REFERENCES 学生</code></pre>
<p><strong>参照完整性规则：</strong></p>
<ul>
<li><strong>插入规则</strong>：子表插入时外键值必须在父表主键中存在</li>
<li><strong>删除规则</strong>：删除父表记录时，对应子表记录的处理方式（级联删除、限制删除等）</li>
<li><strong>更新规则</strong>：更新父表主键时，对应子表外键的处理方式</li>
</ul>

<h3>2.4.4 域完整性（CHECK 约束）</h3>
<p>域完整性通过<strong>CHECK约束</strong>来限制字段的取值范围，确保数据的有效性。</p>
<pre><code class="code-block">CREATE TABLE 学生 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8),
    性别 C(2) CHECK 性别="男" OR 性别="女",
    年龄 N(2) CHECK 年龄>=0 AND 年龄<=120,
    成绩 N(5,1) CHECK 成绩>=0 AND 成绩<=100
)</code></pre>
<p>也可以使用ALTER TABLE命令添加CHECK约束：</p>
<pre><code class="code-block">ALTER TABLE 学生 ADD CHECK 年龄>=0 AND 年龄<=120</code></pre>

<h3>2.4.5 默认值（DEFAULT）</h3>
<p>默认值是指在插入新记录时，如果某个字段没有指定值，系统自动填入的预设值。</p>
<pre><code class="code-block">CREATE TABLE 学生 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8),
    性别 C(2) DEFAULT "男",
    年龄 N(2) DEFAULT 18,
    班级 C(10) DEFAULT "计算机1班"
)

ALTER TABLE 学生 ALTER COLUMN 性别 SET DEFAULT "男"</code></pre>
<p>使用默认值的好处：</p>
<ul>
<li>减少数据录入工作量</li>
<li>保证数据一致性</li>
<li>避免空值带来的问题</li>
</ul>

<h3>2.4.6 NULL 与 NOT NULL</h3>
<p><strong>NULL</strong>表示未知或未定义的值，与空字符串或0是不同的概念。</p>
<p><strong>NOT NULL</strong>约束要求字段必须填写值，不允许为空。</p>
<pre><code class="code-block">CREATE TABLE 学生 (
    学号 C(10) NOT NULL,     && 学号不能为空
    姓名 C(8) NOT NULL,      && 姓名不能为空
    性别 C(2) NULL,           && 性别可以为空
    备注 M NULL               && 备注可以为空
)</code></pre>
<p><strong>NULL值的注意事项：</strong></p>
<ul>
<li>NULL与任何值比较结果都是NULL（不是TRUE也不是FALSE）</li>
<li>判断是否为NULL需要使用IS NULL或IS NOT NULL</li>
<li>聚合函数（如SUM、AVG）会忽略NULL值</li>
<li>主键字段自动为NOT NULL</li>
</ul>
<pre><code class="code-block">SELECT * FROM 学生 WHERE 备注 IS NULL      && 查询备注为空的记录
SELECT * FROM 学生 WHERE 备注 IS NOT NULL  && 查询备注不为空的记录</code></pre>`,
        exercises: [
          {
            id: 'v2-4-1',
            type: 'single',
            question: '保证表中每一行数据唯一性的约束是？',
            options: ['域完整性', '参照完整性', '实体完整性', '用户定义完整性'],
            answer: 'C',
            explanation: '实体完整性通过主键PRIMARY KEY保证表中每条记录的唯一性。',
            score: 2
          },
          {
            id: 'v2-4-2',
            type: 'single',
            question: '以下关于外键的说法，正确的是？',
            options: ['一个表只能有一个外键', '外键的值可以为任意值', '外键用于保证表间数据的参照完整性', '外键不能为NULL'],
            answer: 'C',
            explanation: '外键（FOREIGN KEY）用于保证相关表之间的参照完整性，确保子表中的外键值在父表主键中存在。',
            score: 2
          },
          {
            id: 'v2-4-3',
            type: 'code',
            question: '写出创建学生表时，添加性别字段只能为"男"或"女"的CHECK约束的SQL语句。',
            answer: '性别 C(2) CHECK 性别="男" OR 性别="女"',
            explanation: '使用CHECK约束限制字段的取值范围，确保数据有效性。',
            score: 5
          }
        ]
      },
      {
        id: 'v2-5',
        title: '⚠️ 常见错误与注意事项',
        description: '总结数据表操作中的常见错误及解决方法',
        content: `<h3>⚠️ 常见错误一：表未正确打开/关闭</h3>
<p><strong>错误现象：</strong></p>
<ul>
<li>执行操作时提示"没有打开表"（No table is open in the current work area）</li>
<li>打开表时提示"文件正在使用"（File is in use）</li>
<li>关闭表后数据丢失</li>
</ul>
<p><strong>错误原因及解决方法：</strong></p>
<pre><code class="code-block">* 错误示例1：忘记切换到正确的工作区
SELECT 2
BROWSE    && 在工作区2中浏览，但表可能在工作区1中打开

* 正确做法：先确认工作区
SELECT 1
USE 学生
BROWSE

* 错误示例2：忘记关闭已打开的表
USE 学生
USE 成绩    && 学生表被自动关闭，但可能不是期望的行为

* 正确做法：在不同工作区打开
SELECT 1
USE 学生
SELECT 2
USE 成绩</code></pre>

<h3>⚠️ 常见错误二：记录锁定问题</h3>
<p><strong>错误现象：</strong></p>
<ul>
<li>修改记录时提示"记录被其他用户锁定"</li>
<li>PACK命令执行失败</li>
<li>多人同时操作时数据冲突</li>
</ul>
<p><strong>错误原因及解决方法：</strong></p>
<pre><code class="code-block">* 错误示例：以独占方式打开后无法共享
USE 学生 EXCLUSIVE    && 其他用户无法访问

* 正确做法：根据需求选择打开方式
USE 学生 SHARED       && 共享方式，允许多人同时访问

* 错误示例：直接PACK而不检查独占模式
USE 学生
PACK    && 错误！PACK需要独占方式

* 正确做法：先以独占方式打开
USE 学生 EXCLUSIVE
PACK</code></pre>
<p><strong>记录锁定策略：</strong></p>
<pre><code class="code-block">* 使用RLOCK()锁定当前记录
IF RLOCK()
    REPLACE 姓名 WITH "新名字"
    UNLOCK
ELSE
    MESSAGEBOX("记录被锁定，无法修改")
ENDIF

* 使用FLOCK()锁定整个表
IF FLOCK()
    REPLACE ALL 班级 WITH "新班级"
    UNLOCK
ELSE
    MESSAGEBOX("表被锁定，无法修改")
ENDIF</code></pre>

<h3>⚠️ 常见错误三：索引与表操作冲突</h3>
<p><strong>错误现象：</strong></p>
<ul>
<li>INSERT操作后表记录顺序混乱</li>
<li>使用PACK后索引文件损坏</li>
<li>SEEK查找失败</li>
</ul>
<p><strong>解决方法：</strong></p>
<pre><code class="code-block">* 修改数据后重建索引
USE 学生
INDEX ON 学号 TAG 学号
INDEX ON 姓名 TAG 姓名
* 修改数据后
REINDEX    && 重建所有索引

* 插入数据前设置正确的索引顺序
USE 学生 ORDER 学号
INSERT INTO 学生 VALUES ("2024001", "张三", "男", 20)
* 插入后索引仍然有效</code></pre>

<h3>⚠️ 常见错误四：删除操作误用</h3>
<p><strong>错误现象：</strong></p>
<ul>
<li>误用ZAP清空整个表</li>
<li>DELETE后忘记RECALL恢复</li>
<li>PACK后数据无法恢复</li>
</ul>
<p><strong>安全操作建议：</strong></p>
<pre><code class="code-block">* 删除前先备份
COPY TO 学生备份

* 使用DELETE前先确认
BROWSE    && 查看要删除的记录
DELETE FOR 年龄<0    && 小心条件表达式

* PACK前确认
IF MESSAGEBOX("确定要永久删除带删除标记的记录吗？", 4+32, "警告") = 6
    USE 学生 EXCLUSIVE
    PACK
ENDIF

* 定期检查删除标记
DISPLAY ALL FOR DELETED()    && 查看所有带删除标记的记录</code></pre>`,
        exercises: [
          {
            id: 'v2-5-1',
            type: 'single',
            question: '执行PACK命令删除记录时，需要以什么方式打开表？',
            options: ['共享方式', '独占方式', '只读方式', '任何方式'],
            answer: 'B',
            explanation: 'PACK命令需要以独占方式（EXCLUSIVE）打开表，因为物理删除需要对表进行独占访问。',
            score: 2
          },
          {
            id: 'v2-5-2',
            type: 'single',
            question: '当记录被锁定无法修改时，应使用什么函数检查锁定状态？',
            options: ['DELETE()', 'FOUND()', 'RLOCK()', 'EOF()'],
            answer: 'C',
            explanation: 'RLOCK()函数用于尝试锁定当前记录，返回.T.表示锁定成功，返回.F.表示锁定失败。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'v3',
    title: '第三章：索引与查询',
    lessons: [
      {
        id: 'v3-1',
        title: '3.1 索引的概念与创建',
        description: '学习索引的概念和创建方法',
        content: `<h3>3.1.1 索引的概念</h3>
<p><strong>索引</strong>：按某个字段或表达式对记录进行排序的一种机制。</p>
<p>索引的作用：</p>
<ul>
<li>加快查询速度</li>
<li>实现记录排序</li>
<li>保证数据唯一性</li>
</ul>

<h3>3.1.2 索引的类型</h3>
<ul>
<li><strong>主索引</strong>：唯一标识每条记录，一个表只能有一个</li>
<li><strong>候选索引</strong>：与主索引类似，可以有多个</li>
<li><strong>普通索引</strong>：允许重复值，用于排序</li>
<li><strong>唯一索引</strong>：索引关键字相同的记录只保留一条</li>
</ul>

<h3>3.1.3 创建索引</h3>
<pre><code class="code-block">INDEX ON 学号 TAG 学号 && 创建普通索引
INDEX ON 学号 TAG 学号 UNIQUE && 创建唯一索引
ALTER TABLE 学生 ADD PRIMARY KEY 学号 TAG 学号 && 创建主索引</code></pre>`,
        exercises: [
          {
            id: 'v3-1-1',
            type: 'single',
            question: '一个数据表可以有几个主索引？',
            options: ['1个', '2个', '多个', '没有限制'],
            answer: 'A',
            explanation: '一个数据表只能有一个主索引，用于唯一标识记录。',
            score: 2
          }
        ]
      },
      {
        id: 'v3-2',
        title: '3.2 查询与筛选',
        description: '学习使用命令和查询设计器进行查询',
        content: `<h3>3.2.1 记录的定位</h3>
<pre><code class="code-block">GO TOP          && 定位到第一条记录
GO BOTTOM       && 定位到最后一条记录
GO 5            && 定位到第5条记录
SKIP            && 向下移动一条
SKIP -1         && 向上移动一条</code></pre>

<h3>3.2.2 条件筛选</h3>
<pre><code class="code-block">LIST FOR 性别="男"        && 显示所有男生
LIST FOR 年龄>18          && 显示年龄大于18的记录
LIST FOR "张"$姓名         && 显示姓名中包含"张"的记录
LIST FOR LEFT(姓名,2)="张" && 显示姓"张"的记录（以"张"开头）</code></pre>

<h3>3.2.3 索引查找</h3>
<pre><code class="code-block">SEEK "001" ORDER 学号    && 查找学号为"001"的记录
FIND "001"               && 查找学号为"001"的记录</code></pre>`,
        exercises: [
          {
            id: 'v3-2-1',
            type: 'fill',
            question: '定位到第一条记录的命令是______。',
            answer: 'GO TOP',
            explanation: 'GO TOP命令用于将记录指针定位到第一条记录。',
            score: 2
          }
        ]
      },
      {
        id: 'v3-3',
        title: '3.3 数据表之间的关系',
        description: '学习表之间的关系类型和建立关联的方法',
        content: `<h3>3.3.1 表关系的概念</h3>
<p>在关系数据库中，表与表之间通过<strong>公共字段</strong>建立联系，这种联系称为<strong>表关系</strong>。合理设计表关系是数据库设计的重要环节。</p>
<p>表关系的作用：</p>
<ul>
<li>减少数据冗余</li>
<li>保证数据一致性</li>
<li>方便数据查询和管理</li>
</ul>

<h3>3.3.2 一对一关系</h3>
<p>在一对一关系中，表A中的每条记录在表B中最多只有一条对应记录，反之亦然。</p>
<p><strong>示例：</strong>学生基本信息表与学生详细信息表</p>
<pre><code class="code-block">* 学生基本信息表
CREATE TABLE 学生基本信息 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8),
    性别 C(2)
)

* 学生详细信息表
CREATE TABLE 学生详细信息 (
    学号 C(10) PRIMARY KEY,
    家庭地址 C(50),
    联系电话 C(15),
    身份证号 C(18),
    FOREIGN KEY 学号 TAG 学号 REFERENCES 学生基本信息
)</code></pre>
<p><strong>适用场景：</strong></p>
<ul>
<li>将不常用的字段分离到扩展表中</li>
<li>安全需求：敏感信息单独存放</li>
<li>性能优化：减少主表宽度</li>
</ul>

<h3>3.3.3 一对多关系</h3>
<p>在一对多关系中，表A中的一条记录可以对应表B中的多条记录，但表B中的每条记录只能对应表A中的一条记录。这是<strong>最常用</strong>的表关系。</p>
<p><strong>示例：</strong>学生表与成绩表（一个学生可以有多条成绩记录）</p>
<pre><code class="code-block">* 学生表（"一"方）
CREATE TABLE 学生 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8),
    班级 C(10)
)

* 成绩表（"多"方）
CREATE TABLE 成绩 (
    记录编号 N(6) PRIMARY KEY,
    学号 C(10),
    课程 C(20),
    分数 N(5,1),
    FOREIGN KEY 学号 TAG 学号 REFERENCES 学生
)</code></pre>
<p><strong>一对多关系的实现方式：</strong></p>
<ul>
<li>在"多"方表中添加外键字段，引用"一"方表的主键</li>
<li>使用SET RELATION TO命令建立临时关联</li>
</ul>

<h3>3.3.4 多对多关系</h3>
<p>在多对多关系中，表A中的一条记录可以对应表B中的多条记录，表B中的一条记录也可以对应表A中的多条记录。</p>
<p><strong>示例：</strong>学生与课程（一个学生选多门课程，一门课程有多个学生）</p>
<p><strong>实现方式：</strong>通过一张<strong>中间表（关联表）</strong>将多对多关系拆分为两个一对多关系。</p>
<pre><code class="code-block">* 学生表
CREATE TABLE 学生 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8)
)

* 课程表
CREATE TABLE 课程 (
    课程号 C(5) PRIMARY KEY,
    课程名 C(20),
    学分 N(2)
)

* 选课表（中间表，将多对多拆分为两个一对多）
CREATE TABLE 选课 (
    学号 C(10),
    课程号 C(5),
    成绩 N(5,1),
    FOREIGN KEY 学号 TAG 学号 REFERENCES 学生,
    FOREIGN KEY 课程号 TAG 课程号 REFERENCES 课程
)</code></pre>

<h3>3.3.5 SET RELATION TO 命令建立关系</h3>
<p>SET RELATION TO命令用于在VFP中建立两个打开表之间的<strong>临时关联</strong>。</p>
<p><strong>基本语法：</strong></p>
<pre><code class="code-block">SET RELATION TO 关联表达式 INTO 工作区号|别名</code></pre>
<p><strong>使用步骤：</strong></p>
<pre><code class="code-block">* 步骤1：在不同工作区打开两个表
SELECT 1
USE 学生
INDEX ON 学号 TAG 学号

SELECT 2
USE 成绩

* 步骤2：建立关联（成绩表关联到学生表）
SET RELATION TO 学号 INTO 学生

* 现在浏览成绩表时，学生表的指针会自动移动
BROWSE FIELDS 学号, 学生.姓名, 课程, 分数</code></pre>
<p><strong>注意事项：</strong></p>
<ul>
<li>被关联的表（父表）必须建立索引</li>
<li>关联是临时的，关闭表后自动失效</li>
<li>可以使用SET RELATION OFF取消关联</li>
<li>一个表可以同时关联多个表</li>
</ul>
<pre><code class="code-block">* 取消关联
SET RELATION OFF INTO 学生

* 同时关联多个表
SET RELATION TO 学号 INTO 学生, 课程号 INTO 课程</code></pre>`,
        exercises: [
          {
            id: 'v3-3-1',
            type: 'single',
            question: '学生表和成绩表之间通常是什么关系？',
            options: ['一对一', '一对多', '多对多', '没有关系'],
            answer: 'B',
            explanation: '一个学生可以有多条成绩记录，所以学生表与成绩表是一对多关系。',
            score: 2
          },
          {
            id: 'v3-3-2',
            type: 'single',
            question: '实现多对多关系需要借助什么？',
            options: ['主键', '外键', '中间表', '索引'],
            answer: 'C',
            explanation: '多对多关系需要通过中间表（关联表）拆分为两个一对多关系来实现。',
            score: 2
          },
          {
            id: 'v3-3-3',
            type: 'code',
            question: '写出SET RELATION TO命令建立关联的语法。',
            answer: 'SET RELATION TO 关联表达式 INTO 别名',
            explanation: 'SET RELATION TO命令用于建立两个表之间的临时关联，关联表达式通常是公共字段。',
            score: 5
          }
        ]
      }
    ]
  },
  {
    id: 'v4',
    title: '第四章：SQL语言',
    lessons: [
      {
        id: 'v4-1',
        title: '4.1 SQL概述',
        description: '了解SQL语言的基本概念和特点',
        content: `<h3>4.1.1 SQL的概念</h3>
<p><strong>SQL</strong>：Structured Query Language，结构化查询语言。</p>
<p>SQL是关系数据库的标准语言，用于管理和操作数据库。</p>

<h3>4.1.2 SQL的特点</h3>
<ul>
<li><strong>非过程化</strong>：只需说明做什么，不必说明怎么做</li>
<li><strong>统一语言</strong>：集数据定义、查询、操纵、控制于一体</li>
<li><strong>语法简洁</strong>：使用接近自然语言的语法</li>
<li><strong>面向集合</strong>：操作对象和结果都是集合</li>
</ul>

<h3>4.1.3 SQL的分类</h3>
<ul>
<li><strong>DDL</strong>：数据定义语言（CREATE、ALTER、DROP）</li>
<li><strong>DML</strong>：数据操纵语言（SELECT、INSERT、UPDATE、DELETE）</li>
<li><strong>DCL</strong>：数据控制语言（GRANT、REVOKE）</li>
</ul>`,
        exercises: [
          {
            id: 'v4-1-1',
            type: 'single',
            question: 'SQL中用于查询数据的语句是？',
            options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
            answer: 'C',
            explanation: 'SELECT语句用于从数据库中查询数据。',
            score: 2
          }
        ]
      },
      {
        id: 'v4-2',
        title: '4.2 SELECT语句',
        description: '学习SQL查询语句的使用',
        content: `<h3>4.2.1 基本语法</h3>
<pre><code class="code-block">SELECT 字段列表 FROM 表名
[WHERE 条件]
[ORDER BY 字段名]</code></pre>

<h3>4.2.2 查询示例</h3>
<pre><code class="code-block">SELECT * FROM 学生              && 查询所有字段
SELECT 姓名, 年龄 FROM 学生       && 查询指定字段
SELECT * FROM 学生 WHERE 性别="男" && 条件查询
SELECT * FROM 学生 ORDER BY 年龄 DESC && 排序查询</code></pre>

<h3>4.2.3 聚合函数</h3>
<pre><code class="code-block">SELECT COUNT(*) FROM 学生         && 统计记录数
SELECT AVG(年龄) FROM 学生        && 计算平均年龄
SELECT MAX(成绩) FROM 学生        && 查询最高分
SELECT MIN(成绩) FROM 学生        && 查询最低分
SELECT SUM(成绩) FROM 学生        && 计算总分</code></pre>

<h3>💡 实战案例：书店销售查询</h3>
<p>假设有一个书店数据库，包含以下三张表，请使用SELECT语句完成各类查询需求：</p>
<pre><code class="code-block">* 图书表（Books）
* 书号 C(10), 书名 C(50), 作者 C(20), 出版社 C(30), 单价 N(8,2), 库存 N(5)

* 会员表（Members）
* 会员号 C(10), 姓名 C(8), 等级 C(4), 注册日期 D, 积分 N(6)

* 销售表（Sales）
* 销售编号 N(8), 书号 C(10), 会员号 C(10), 数量 N(3), 销售日期 D, 金额 N(10,2)</code></pre>
<p><strong>查询1：查询所有库存不足10本的图书</strong></p>
<pre><code class="code-block">SELECT 书名, 作者, 库存 FROM Books WHERE 库存<10 ORDER BY 库存</code></pre>
<p><strong>查询2：查询2024年每月销售额统计</strong></p>
<pre><code class="code-block">SELECT MONTH(销售日期) AS 月份, SUM(金额) AS 月销售额, COUNT(*) AS 订单数
FROM Sales WHERE YEAR(销售日期)=2024
GROUP BY MONTH(销售日期) ORDER BY 月份</code></pre>
<p><strong>查询3：查询销售排行榜TOP10</strong></p>
<pre><code class="code-block">SELECT TOP 10 Books.书名, SUM(Sales.数量) AS 总销量, SUM(Sales.金额) AS 总销售额
FROM Books JOIN Sales ON Books.书号=Sales.书号
GROUP BY Books.书名 ORDER BY 总销量 DESC</code></pre>
<p><strong>查询4：查询每个会员的购书情况</strong></p>
<pre><code class="code-block">SELECT Members.姓名, Members.等级, COUNT(*) AS 购书次数, SUM(Sales.金额) AS 消费总额
FROM Members JOIN Sales ON Members.会员号=Sales.会员号
GROUP BY Members.姓名, Members.等级 ORDER BY 消费总额 DESC</code></pre>`,
        exercises: [
          {
            id: 'v4-2-1',
            type: 'code',
            question: '写出查询学生表中所有女生记录的SQL语句。',
            answer: 'SELECT * FROM 学生 WHERE 性别="女"',
            explanation: '使用WHERE子句筛选性别为"女"的记录。',
            score: 5
          }
        ]
      },
      {
        id: 'v4-3',
        title: '4.3 多表查询',
        description: '学习连接查询和子查询',
        content: `<h3>4.3.1 连接查询</h3>
<p>当需要查询多个表的数据时，需要使用连接：</p>
<pre><code class="code-block">SELECT 学生.姓名, 成绩.分数
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号</code></pre>

<h3>4.3.2 连接类型</h3>
<ul>
<li><strong>内连接(INNER JOIN)</strong>：只返回两表中匹配的记录</li>
<li><strong>左连接(LEFT JOIN)</strong>：返回左表所有记录和右表匹配的记录</li>
<li><strong>右连接(RIGHT JOIN)</strong>：返回右表所有记录和左表匹配的记录</li>
<li><strong>全连接(FULL JOIN)</strong>：返回两表所有记录</li>
</ul>

<h3>4.3.3 子查询</h3>
<p>子查询是嵌套在另一个查询中的查询：</p>
<pre><code class="code-block">SELECT * FROM 学生 
WHERE 学号 IN (SELECT 学号 FROM 成绩 WHERE 分数>60)</code></pre>`,
        exercises: [
          {
            id: 'v4-3-1',
            type: 'single',
            question: '只返回两表中匹配记录的连接是？',
            options: ['左连接', '右连接', '内连接', '全连接'],
            answer: 'C',
            explanation: '内连接(INNER JOIN)只返回两表中匹配的记录。',
            score: 2
          }
        ]
      },
      {
        id: 'v4-4',
        title: '4.4 视图与事务',
        description: '学习视图的创建使用和事务处理',
        content: `<h3>4.4.1 视图的概念</h3>
<p><strong>视图（View）</strong>是一个虚拟表，它基于SQL查询的结果集。视图本身不存储数据，数据仍存储在原始表中。</p>
<p>视图的作用：</p>
<ul>
<li><strong>简化查询</strong>：将复杂的SQL查询封装为视图，方便重复使用</li>
<li><strong>数据安全</strong>：隐藏敏感字段，只暴露需要的数据</li>
<li><strong>数据独立性</strong>：应用程序通过视图访问数据，底层表结构变化不影响应用</li>
<li><strong>数据整合</strong>：将多个表的数据整合到一个视图中</li>
</ul>

<h3>4.4.2 创建视图</h3>
<p>在VFP中，创建视图使用CREATE VIEW命令：</p>
<pre><code class="code-block">CREATE VIEW 视图名 AS SELECT语句</code></pre>
<p><strong>示例1：创建简单视图</strong></p>
<pre><code class="code-block">* 创建只包含男生信息的视图
CREATE VIEW 男生信息 AS ;
    SELECT 学号, 姓名, 年龄, 班级 FROM 学生 WHERE 性别="男"</code></pre>
<p><strong>示例2：创建多表视图</strong></p>
<pre><code class="code-block">* 创建学生成绩视图（关联学生表和成绩表）
CREATE VIEW 学生成绩总览 AS ;
    SELECT 学生.学号, 学生.姓名, 成绩.课程, 成绩.分数 ;
    FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号</code></pre>
<p><strong>示例3：创建带聚合函数的视图</strong></p>
<pre><code class="code-block">* 创建班级统计视图
CREATE VIEW 班级统计 AS ;
    SELECT 班级, COUNT(*) AS 人数, ;
    AVG(年龄) AS 平均年龄 ;
    FROM 学生 GROUP BY 班级</code></pre>

<h3>4.4.3 使用视图</h3>
<p>视图创建后，可以像普通表一样使用：</p>
<pre><code class="code-block">* 打开视图
USE 男生信息
BROWSE

* 查询视图
SELECT * FROM 男生信息 WHERE 年龄>18

* 修改视图（VFP不支持ALTER VIEW，需先删除再重建）
DROP VIEW 男生信息
CREATE VIEW 男生信息 AS ;
    SELECT 学号, 姓名, 年龄, 班级, 出生日期 ;
    FROM 学生 WHERE 性别="男"

* 删除视图
DROP VIEW 男生信息</code></pre>
<p><strong>视图与表的区别：</strong></p>
<ul>
<li>视图不存储数据，表存储数据</li>
<li>视图是虚拟表，表是实体表</li>
<li>视图的数据来源于基础表</li>
<li>对视图的更新最终会反映到基础表</li>
</ul>

<h3>4.4.4 事务的概念</h3>
<p><strong>事务（Transaction）</strong>是一组不可分割的数据库操作单元，这些操作要么全部成功执行，要么全部不执行（回滚）。</p>
<p>事务具有<strong>ACID</strong>特性：</p>
<ul>
<li><strong>原子性（Atomicity）</strong>：事务中的所有操作是一个整体，要么全部完成，要么全部不完成</li>
<li><strong>一致性（Consistency）</strong>：事务执行前后，数据库必须保持一致性状态</li>
<li><strong>隔离性（Isolation）</strong>：并发事务之间相互隔离，互不干扰</li>
<li><strong>持久性（Durability）</strong>：事务一旦提交，对数据库的修改是永久性的</li>
</ul>
<p><strong>事务的应用场景：</strong></p>
<ul>
<li>银行转账：A账户扣款和B账户入账必须同时成功或同时失败</li>
<li>库存管理：减少库存和生成订单必须同步完成</li>
<li>批量数据更新：多条记录更新，要么全部成功，要么全部回滚</li>
</ul>

<h3>4.4.5 事务处理命令</h3>
<p>VFP提供了三个事务处理命令：</p>
<pre><code class="code-block">BEGIN TRANSACTION   && 开始事务
END TRANSACTION     && 提交事务（确认所有修改）
ROLLBACK            && 回滚事务（撤销所有修改）</code></pre>
<p><strong>事务处理示例：银行转账</strong></p>
<pre><code class="code-block">* 从张三账户转1000元到李四账户
BEGIN TRANSACTION
    UPDATE 账户 SET 余额=余额-1000 WHERE 账号="001"
    UPDATE 账户 SET 余额=余额+1000 WHERE 账号="002"
    
    * 检查余额是否充足（使用INTO ARRAY捕获查询结果）
    SELECT 余额 FROM 账户 WHERE 账号="001" INTO ARRAY aBalance
    IF aBalance(1) < 0
        ROLLBACK  && 余额不足，回滚
        MESSAGEBOX("转账失败：余额不足")
    ELSE
        END TRANSACTION  && 提交事务
        MESSAGEBOX("转账成功")
    ENDIF</code></pre>
<p><strong>事务处理示例：批量数据维护</strong></p>
<pre><code class="code-block">BEGIN TRANSACTION
    * 执行一系列数据操作
    DELETE FROM 成绩 WHERE 分数<0
    UPDATE 成绩 SET 分数=100 WHERE 分数>100
    UPDATE 学生 SET 班级="毕业班" WHERE 年级=4
    
    * 确认无误后提交
    IF MESSAGEBOX("确认提交修改？", 4+32, "确认") = 6
        END TRANSACTION
    ELSE
        ROLLBACK
    ENDIF</code></pre>
<p><strong>使用事务的注意事项：</strong></p>
<ul>
<li>事务只对数据库表有效，对自由表不适用</li>
<li>事务嵌套层级最多为5层</li>
<li>事务中修改的表在事务结束前会被锁定</li>
<li>事务应尽量简短，避免长时间锁定</li>
<li>ROLLBACK只能回滚到最近一个BEGIN TRANSACTION处</li>
</ul>`,
        exercises: [
          {
            id: 'v4-4-1',
            type: 'single',
            question: '关于视图，以下说法正确的是？',
            options: ['视图存储实际数据', '视图是虚拟表，不存储数据', '视图只能从一个表创建', '视图创建后不能修改'],
            answer: 'B',
            explanation: '视图是虚拟表，它基于SQL查询结果集，本身不存储实际数据。',
            score: 2
          },
          {
            id: 'v4-4-2',
            type: 'single',
            question: '事务的ACID特性中，A代表什么？',
            options: ['自动化', '原子性', '关联性', '可访问性'],
            answer: 'B',
            explanation: 'ACID中的A代表Atomicity（原子性），即事务中的所有操作是一个不可分割的整体。',
            score: 2
          },
          {
            id: 'v4-4-3',
            type: 'code',
            question: '写出创建视图的基本语法格式。',
            answer: 'CREATE VIEW 视图名 AS SELECT语句',
            explanation: '使用CREATE VIEW命令创建视图，后面跟AS和SELECT查询语句。',
            score: 5
          }
        ]
      },
      {
        id: 'v4-5',
        title: '⚠️ 常见错误与注意事项',
        description: '总结SQL语言中的常见错误及解决方法',
        content: `<h3>⚠️ 常见错误一：SQL语法错误</h3>
<p><strong>错误1：忘记FROM子句</strong></p>
<pre><code class="code-block">* 错误写法
SELECT * WHERE 性别="男"    && 缺少FROM子句

* 正确写法
SELECT * FROM 学生 WHERE 性别="男"</code></pre>
<p><strong>错误2：字段名与表名混淆</strong></p>
<pre><code class="code-block">* 错误写法
SELECT 学生 FROM 学生    && 选择了整个表而非字段

* 正确写法
SELECT * FROM 学生       && 选择所有字段
SELECT 学号, 姓名 FROM 学生  && 选择指定字段</code></pre>
<p><strong>错误3：字符串与数值混淆</strong></p>
<pre><code class="code-block">* 错误写法
SELECT * FROM 学生 WHERE 学号=2024001    && 数字型与字符型不匹配

* 正确写法
SELECT * FROM 学生 WHERE 学号="2024001"  && 字符型用引号

* 错误写法
SELECT * FROM 学生 WHERE 年龄="20"       && 数值型用了引号

* 正确写法
SELECT * FROM 学生 WHERE 年龄=20         && 数值型不用引号</code></pre>
<p><strong>错误4：聚合函数与WHERE混用</strong></p>
<pre><code class="code-block">* 错误写法
SELECT 班级, COUNT(*) FROM 学生 WHERE COUNT(*)>10 GROUP BY 班级  && 聚合函数不能用在WHERE中

* 正确写法
SELECT 班级, COUNT(*) AS 人数 FROM 学生 GROUP BY 班级 HAVING COUNT(*)>10</code></pre>

<h3>⚠️ 常见错误二：JOIN条件错误</h3>
<p><strong>错误1：忘记ON条件导致笛卡尔积</strong></p>
<pre><code class="code-block">* 错误写法：缺少ON条件，产生笛卡尔积
SELECT 学生.姓名, 成绩.分数 FROM 学生 JOIN 成绩
* 结果：学生表每条记录与成绩表每条记录都组合，产生大量无用数据

* 正确写法：指定连接条件
SELECT 学生.姓名, 成绩.分数 FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号</code></pre>
<p><strong>错误2：JOIN条件字段类型不匹配</strong></p>
<pre><code class="code-block">* 错误写法：字段类型不一致
* 假设学生.学号是C(10)，成绩.学号是N(10)
SELECT * FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号
* 可能出现类型不匹配错误

* 正确做法：确保连接字段类型一致
* 使用VAL()或STR()函数转换
SELECT * FROM 学生 JOIN 成绩 ON 学生.学号=STR(成绩.学号)</code></pre>
<p><strong>错误3：混淆LEFT JOIN和RIGHT JOIN</strong></p>
<pre><code class="code-block">* 需求：查询所有学生及其成绩（包括没有成绩的学生）
* 错误写法：使用INNER JOIN
SELECT 学生.姓名, 成绩.分数 FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号
* 结果：没有成绩的学生不会显示

* 正确写法：使用LEFT JOIN
SELECT 学生.姓名, 成绩.分数 FROM 学生 LEFT JOIN 成绩 ON 学生.学号=成绩.学号
* 结果：所有学生都显示，没有成绩的显示NULL</code></pre>
<p><strong>错误4：多表连接时表别名混乱</strong></p>
<pre><code class="code-block">* 错误写法：字段名歧义
SELECT 学号, 姓名, 课程名, 分数
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号
    JOIN 课程 ON 成绩.课程号=课程.课程号
* 错误：学号字段在多个表中存在，不明确

* 正确写法：使用表名前缀
SELECT 学生.学号, 学生.姓名, 课程.课程名, 成绩.分数
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号
    JOIN 课程 ON 成绩.课程号=课程.课程号</code></pre>

<h3>⚠️ 常见错误三：子查询使用不当</h3>
<p><strong>错误1：子查询返回多行时使用=号</strong></p>
<pre><code class="code-block">* 错误写法：子查询返回多行
SELECT * FROM 学生 WHERE 学号=(SELECT 学号 FROM 成绩 WHERE 分数>60)
* 如果成绩表中有多个学生分数>60，子查询返回多行，用=号会报错

* 正确写法：使用IN
SELECT * FROM 学生 WHERE 学号 IN (SELECT 学号 FROM 成绩 WHERE 分数>60)</code></pre>
<p><strong>错误2：子查询中没有使用表别名</strong></p>
<pre><code class="code-block">* 错误写法：字段引用不明确
SELECT * FROM 学生 WHERE 学号 IN (SELECT 学号 FROM 成绩 WHERE 学生.学号=成绩.学号)
* 在子查询中，外层表的字段引用可能不清晰

* 正确写法：使用表别名
SELECT * FROM 学生 s WHERE EXISTS (SELECT 1 FROM 成绩 g WHERE s.学号=g.学号)</code></pre>

<h3>⚠️ 常见错误四：数据更新错误</h3>
<p><strong>错误1：UPDATE忘记WHERE条件</strong></p>
<pre><code class="code-block">* 极度危险！会更新所有记录
UPDATE 学生 SET 班级="毕业班"    && 忘记WHERE条件，所有学生都被改了！

* 正确写法：添加WHERE条件
UPDATE 学生 SET 班级="毕业班" WHERE 年级=4</code></pre>
<p><strong>错误2：DELETE忘记WHERE条件</strong></p>
<pre><code class="code-block">* 极度危险！会删除所有记录
DELETE FROM 成绩    && 忘记WHERE条件，所有成绩被删除！

* 正确写法：添加WHERE条件
DELETE FROM 成绩 WHERE 分数<0</code></pre>`,
        exercises: [
          {
            id: 'v4-5-1',
            type: 'single',
            question: '在SELECT语句中，使用聚合函数作为条件筛选时，应使用什么子句？',
            options: ['WHERE', 'HAVING', 'ON', 'FILTER'],
            answer: 'B',
            explanation: '聚合函数不能用在WHERE子句中，应使用HAVING子句对分组后的结果进行筛选。',
            score: 2
          },
          {
            id: 'v4-5-2',
            type: 'single',
            question: '查询所有学生及其成绩（包括没有成绩的学生），应使用什么连接？',
            options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'],
            answer: 'B',
            explanation: 'LEFT JOIN以左表（学生表）为主，返回所有学生记录，即使没有匹配的成绩记录也会显示NULL。',
            score: 2
          },
          {
            id: 'v4-5-3',
            type: 'single',
            question: '执行UPDATE语句忘记WHERE条件会导致什么后果？',
            options: ['语法错误', '更新所有记录', '没有任何影响', '只更新第一条记录'],
            answer: 'B',
            explanation: 'UPDATE语句不带WHERE条件会更新表中所有记录，这是非常危险的操作。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'v5',
    title: '第五章：表单设计',
    lessons: [
      {
        id: 'v5-1',
        title: '5.1 表单的创建',
        description: '学习使用表单设计器创建表单',
        content: `<h3>5.1.1 表单的概念</h3>
<p><strong>表单</strong>：用户与数据库交互的界面，包含各种控件。</p>

<h3>5.1.2 创建表单的方法</h3>
<ul>
<li><strong>表单设计器</strong>：可视化设计表单</li>
<li><strong>表单向导</strong>：通过向导快速创建</li>
<li><strong>命令方式</strong>：使用CREATE FORM命令</li>
</ul>

<h3>5.1.3 表单设计器界面</h3>
<ul>
<li><strong>表单窗口</strong>：设计表单的区域</li>
<li><strong>控件工具栏</strong>：提供各种控件</li>
<li><strong>属性窗口</strong>：设置控件属性</li>
<li><strong>代码窗口</strong>：编写事件代码</li>
</ul>`,
        exercises: [
          {
            id: 'v5-1-1',
            type: 'fill',
            question: '创建表单的命令是______。',
            answer: 'CREATE FORM',
            explanation: 'CREATE FORM命令用于打开表单设计器创建表单。',
            score: 2
          }
        ]
      },
      {
        id: 'v5-2',
        title: '5.2 常用控件',
        description: '学习表单中常用控件的使用',
        content: `<h3>5.2.1 标签控件(Label)</h3>
<p>用于显示文本，如标题、说明等。</p>

<h3>5.2.2 文本框控件(TextBox)</h3>
<p>用于输入和显示文本数据。</p>

<h3>5.2.3 命令按钮控件(CommandButton)</h3>
<p>用于触发事件，如确定、取消等。</p>

<h3>5.2.4 列表框控件(ListBox)</h3>
<p>用于显示选项列表，用户可以选择。</p>

<h3>5.2.5 表格控件(Grid)</h3>
<p>用于显示数据表内容。</p>

<h3>5.2.6 组合框控件(ComboBox)</h3>
<p>结合文本框和列表框的功能。</p>

<h3>💡 实战案例：登录表单设计</h3>
<p>设计一个完整的用户登录表单，综合运用标签、文本框、组合框和命令按钮控件。</p>
<p><strong>表单布局：</strong></p>
<ul>
<li>标签：显示"用户名"、"密码"、"角色选择"</li>
<li>文本框：用户名输入框、密码输入框（PasswordChar属性设为"*"）</li>
<li>组合框：角色选择（管理员/教师/学生）</li>
<li>命令按钮：登录按钮、取消按钮</li>
</ul>
<p><strong>控件属性设置：</strong></p>
<pre><code class="code-block">* 表单属性
THISFORM.Caption = "用户登录"
THISFORM.Width = 400
THISFORM.Height = 300
THISFORM.AutoCenter = .T.
THISFORM.BorderStyle = 2  && 固定对话框

* 密码文本框属性
THISFORM.Text2.PasswordChar = "*"
THISFORM.Text2.MaxLength = 20

* 组合框属性
THISFORM.Combo1.RowSourceType = 1  && 值
THISFORM.Combo1.RowSource = "管理员,教师,学生"
THISFORM.Combo1.Value = "教师"</code></pre>
<p><strong>事件代码编写：</strong></p>
<pre><code class="code-block">* "登录"按钮的Click事件代码
LOCAL cUser, cPassword, cRole
cUser = ALLTRIM(THISFORM.Text1.Value)
cPassword = ALLTRIM(THISFORM.Text2.Value)
cRole = THISFORM.Combo1.Value

* 验证输入是否为空
IF EMPTY(cUser) OR EMPTY(cPassword)
    MESSAGEBOX("用户名和密码不能为空！", 48, "登录提示")
    RETURN
ENDIF

* 查询用户表验证登录
SELECT 用户
LOCATE FOR 用户名=cUser AND 密码=cPassword AND 角色=cRole
IF FOUND()
    MESSAGEBOX("欢迎使用系统，" + cUser + "！", 64, "登录成功")
    THISFORM.Release
    DO FORM 主界面
ELSE
    MESSAGEBOX("用户名或密码错误，请重试！", 16, "登录失败")
    THISFORM.Text2.Value = ""
    THISFORM.Text2.SetFocus()
ENDIF

* "取消"按钮的Click事件代码
IF MESSAGEBOX("确定要退出系统吗？", 4+32, "退出确认") = 6
    THISFORM.Release
    CLEAR EVENTS
ENDIF</code></pre>`,
        exercises: [
          {
            id: 'v5-2-1',
            type: 'single',
            question: '用于显示数据表内容的控件是？',
            options: ['Label', 'TextBox', 'Grid', 'CommandButton'],
            answer: 'C',
            explanation: 'Grid控件（表格控件）用于显示数据表内容。',
            score: 2
          }
        ]
      },
      {
        id: 'v5-3',
        title: '5.3 表单的事件与方法',
        description: '学习表单和控件的事件处理',
        content: `<h3>5.3.1 常见事件</h3>
<ul>
<li><strong>Load</strong>：表单加载时触发</li>
<li><strong>Init</strong>：对象初始化时触发</li>
<li><strong>Click</strong>：单击对象时触发</li>
<li><strong>DblClick</strong>：双击对象时触发</li>
<li><strong>Unload</strong>：表单卸载时触发</li>
</ul>

<h3>5.3.2 常见方法</h3>
<ul>
<li><strong>Show</strong>：显示表单</li>
<li><strong>Hide</strong>：隐藏表单</li>
<li><strong>Release</strong>：释放表单</li>
<li><strong>Refresh</strong>：刷新表单</li>
</ul>

<h3>5.3.3 编写事件代码</h3>
<p>在代码窗口中为控件编写事件处理代码：</p>
<pre><code class="code-block">THISFORM.Release   && 关闭表单
THISFORM.Refresh   && 刷新表单</code></pre>`,
        exercises: [
          {
            id: 'v5-3-1',
            type: 'single',
            question: '关闭表单的方法是？',
            options: ['Close', 'Release', 'Hide', 'Quit'],
            answer: 'B',
            explanation: 'Release方法用于释放表单，关闭表单窗口。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'v6',
    title: '第六章：报表设计',
    lessons: [
      {
        id: 'v6-1',
        title: '6.1 报表的创建',
        description: '学习使用报表设计器创建报表',
        content: `<h3>6.1.1 报表的概念</h3>
<p><strong>报表</strong>：将数据库中的数据以格式化的方式打印输出。</p>

<h3>6.1.2 创建报表的方法</h3>
<ul>
<li><strong>报表设计器</strong>：可视化设计报表</li>
<li><strong>报表向导</strong>：通过向导快速创建</li>
<li><strong>命令方式</strong>：使用CREATE REPORT命令</li>
</ul>

<h3>6.1.3 报表设计器界面</h3>
<ul>
<li><strong>报表标题带区</strong>：报表标题</li>
<li><strong>页标头带区</strong>：每页的标题</li>
<li><strong>细节带区</strong>：每条记录的内容</li>
<li><strong>页注脚带区</strong>：每页的脚注</li>
<li><strong>报表注脚带区</strong>：报表末尾</li>
</ul>`,
        exercises: [
          {
            id: 'v6-1-1',
            type: 'fill',
            question: '创建报表的命令是______。',
            answer: 'CREATE REPORT',
            explanation: 'CREATE REPORT命令用于打开报表设计器创建报表。',
            score: 2
          }
        ]
      },
      {
        id: 'v6-2',
        title: '6.2 报表的预览与打印',
        description: '学习报表的预览和打印操作',
        content: `<h3>6.2.1 预览报表</h3>
<pre><code class="code-block">REPORT FORM 报表名 PREVIEW && 预览报表</code></pre>

<h3>6.2.2 打印报表</h3>
<pre><code class="code-block">REPORT FORM 报表名 TO PRINT && 打印报表
REPORT FORM 报表名 TO FILE 文件名 && 导出到文件</code></pre>

<h3>6.2.3 报表的数据环境</h3>
<p>设置报表的数据环境，指定报表使用的数据表。</p>`,
        exercises: [
          {
            id: 'v6-2-1',
            type: 'single',
            question: '预览报表的命令是？',
            options: ['VIEW REPORT', 'REPORT PREVIEW', 'REPORT FORM 报表名 PREVIEW', 'PRINT REPORT'],
            answer: 'C',
            explanation: 'REPORT FORM命令加上PREVIEW子句用于预览报表。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'v7',
    title: '第七章：综合实战项目',
    lessons: [
      {
        id: 'v7-1',
        title: '7.1 学生成绩管理系统',
        description: '综合运用VFP知识开发完整的学生成绩管理系统',
        content: `<h3>7.1.1 项目概述</h3>
<p><strong>学生成绩管理系统</strong>是一个综合性的VFP应用项目，通过本项目您将综合运用前面各章所学知识，包括数据表设计、SQL查询、表单设计、报表设计、索引与关系等，完成一个完整的数据库应用系统。</p>
<p><strong>系统功能模块：</strong></p>
<ul>
<li><strong>学生信息管理</strong>：学生基本信息录入、修改、查询和删除</li>
<li><strong>课程信息管理</strong>：课程信息维护</li>
<li><strong>成绩录入与管理</strong>：学生成绩录入、修改和统计分析</li>
<li><strong>查询统计</strong>：按班级、课程、学生等维度查询和统计</li>
<li><strong>报表打印</strong>：成绩单、统计报表等打印输出</li>
</ul>

<h3>7.1.2 数据库设计</h3>
<p>首先创建项目数据库和所需的数据表：</p>
<pre><code class="code-block">* 创建数据库
CREATE DATABASE 学生成绩管理系统

* 创建学生表
CREATE TABLE 学生 (
    学号 C(10) PRIMARY KEY,
    姓名 C(8) NOT NULL,
    性别 C(2) CHECK 性别="男" OR 性别="女" DEFAULT "男",
    出生日期 D,
    班级 C(20),
    联系电话 C(15),
    家庭地址 C(50)
)

* 创建课程表
CREATE TABLE 课程 (
    课程号 C(5) PRIMARY KEY,
    课程名 C(30) NOT NULL,
    学分 N(2) CHECK 学分>0 AND 学分<=10,
    任课教师 C(8),
    学期 C(2)
)

* 创建成绩表
CREATE TABLE 成绩 (
    记录编号 N(6) PRIMARY KEY,
    学号 C(10),
    课程号 C(5),
    平时成绩 N(5,1) CHECK 平时成绩>=0 AND 平时成绩<=100,
    期末成绩 N(5,1) CHECK 期末成绩>=0 AND 期末成绩<=100,
    总评成绩 N(5,1),
    FOREIGN KEY 学号 TAG 学号 REFERENCES 学生,
    FOREIGN KEY 课程号 TAG 课程号 REFERENCES 课程
)

* 创建用户表（用于登录验证）
CREATE TABLE 用户 (
    用户名 C(10) PRIMARY KEY,
    密码 C(20) NOT NULL,
    角色 C(6) CHECK 角色="管理员" OR 角色="教师" OR 角色="学生" DEFAULT "教师"
)</code></pre>

<h3>7.1.3 建立索引</h3>
<p>为各表建立必要的索引，提高查询效率：</p>
<pre><code class="code-block">* 学生表索引
INDEX ON 班级 TAG 班级
INDEX ON 姓名 TAG 姓名

* 成绩表索引
INDEX ON 学号 TAG 学号
INDEX ON 课程号 TAG 课程号
INDEX ON 学号+课程号 TAG 学号课程  && 复合索引

* 课程表索引
INDEX ON 课程名 TAG 课程名</code></pre>

<h3>7.1.4 建立表间关系</h3>
<pre><code class="code-block">* 使用SET RELATION建立关联
SELECT 1
USE 学生
INDEX ON 学号 TAG 学号

SELECT 2
USE 课程
INDEX ON 课程号 TAG 课程号

SELECT 3
USE 成绩
SET RELATION TO 学号 INTO 学生, 课程号 INTO 课程

* 现在可以跨表浏览数据
BROWSE FIELDS 学号, 学生.姓名, 课程.课程名, 平时成绩, 期末成绩, 总评成绩</code></pre>

<h3>7.1.5 核心SQL查询</h3>
<p><strong>查询1：查询某个学生的所有成绩</strong></p>
<pre><code class="code-block">SELECT 学生.学号, 学生.姓名, 课程.课程名, ;
    成绩.平时成绩, 成绩.期末成绩, 成绩.总评成绩 ;
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号 ;
    JOIN 课程 ON 成绩.课程号=课程.课程号 ;
WHERE 学生.学号="2024001"</code></pre>

<p><strong>查询2：统计各班级平均成绩</strong></p>
<pre><code class="code-block">SELECT 学生.班级, ;
    COUNT(DISTINCT 学生.学号) AS 学生人数, ;
    AVG(成绩.总评成绩) AS 平均分, ;
    MAX(成绩.总评成绩) AS 最高分, ;
    MIN(成绩.总评成绩) AS 最低分 ;
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号 ;
GROUP BY 学生.班级 ;
ORDER BY 平均分 DESC</code></pre>

<p><strong>查询3：查询各分数段人数统计</strong></p>
<pre><code class="code-block">SELECT 课程.课程名, ;
    COUNT(*) AS 总人数, ;
    SUM(IIF(成绩.总评成绩>=90, 1, 0)) AS 优秀, ;
    SUM(IIF(成绩.总评成绩>=80 AND 成绩.总评成绩<90, 1, 0)) AS 良好, ;
    SUM(IIF(成绩.总评成绩>=70 AND 成绩.总评成绩<80, 1, 0)) AS 中等, ;
    SUM(IIF(成绩.总评成绩>=60 AND 成绩.总评成绩<70, 1, 0)) AS 及格, ;
    SUM(IIF(成绩.总评成绩<60, 1, 0)) AS 不及格 ;
FROM 成绩 JOIN 课程 ON 成绩.课程号=课程.课程号 ;
GROUP BY 课程.课程名</code></pre>

<p><strong>查询4：查询不及格学生名单</strong></p>
<pre><code class="code-block">SELECT 学生.班级, 学生.学号, 学生.姓名, ;
    课程.课程名, 成绩.总评成绩 ;
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号 ;
    JOIN 课程 ON 成绩.课程号=课程.课程号 ;
WHERE 成绩.总评成绩<60 ;
ORDER BY 学生.班级, 成绩.总评成绩</code></pre>

<h3>7.1.6 表单设计</h3>
<p><strong>主界面表单（MainForm.scx）</strong></p>
<p>创建主界面表单，包含菜单导航和功能按钮：</p>
<pre><code class="code-block">* 主界面表单的Init事件代码
THIS.Caption = "学生成绩管理系统 v1.0"
THIS.WindowState = 2  && 最大化显示
THIS.AutoCenter = .T.

* 设置背景色
THIS.BackColor = RGB(240, 240, 240)</code></pre>
<p><strong>学生信息录入表单（StuInput.scx）</strong></p>
<p>包含以下控件：</p>
<ul>
<li>标签控件：学号、姓名、性别、出生日期、班级、电话、地址</li>
<li>文本框控件：对应各字段的输入框</li>
<li>组合框控件：性别选择（男/女）</li>
<li>命令按钮：添加、修改、删除、保存、取消、退出</li>
</ul>
<pre><code class="code-block">* "添加"按钮的Click事件代码
APPEND BLANK
THISFORM.Text1.SetFocus()
THISFORM.Refresh

* "保存"按钮的Click事件代码
REPLACE 学号 WITH THISFORM.Text1.Value, ;
        姓名 WITH THISFORM.Text2.Value, ;
        性别 WITH THISFORM.Combo1.Value, ;
        班级 WITH THISFORM.Text3.Value
TABLEUPDATE(.T.)
MESSAGEBOX("保存成功！", 64, "提示")
THISFORM.Refresh</code></pre>
<p><strong>成绩录入表单（ScoreInput.scx）</strong></p>
<p>包含表格控件Grid显示成绩数据，以及查询和统计功能：</p>
<pre><code class="code-block">* "计算总评成绩"按钮的Click事件代码
* 总评成绩 = 平时成绩*40% + 期末成绩*60%
REPLACE ALL 总评成绩 WITH 平时成绩*0.4 + 期末成绩*0.6
MESSAGEBOX("总评成绩计算完成！", 64, "提示")
THISFORM.Grid1.Refresh</code></pre>

<h3>7.1.7 报表设计</h3>
<p><strong>学生成绩单报表</strong></p>
<pre><code class="code-block">* 创建成绩单报表
CREATE REPORT 成绩单报表

* 数据环境设置
* 在报表设计器中添加学生表、课程表、成绩表
* 建立关联关系

* 报表预览
REPORT FORM 成绩单报表 PREVIEW

* 报表打印
REPORT FORM 成绩单报表 TO PRINT</code></pre>
<p><strong>班级成绩统计报表</strong></p>
<pre><code class="code-block">* 创建统计报表的数据源
SELECT 学生.班级, COUNT(*) AS 人数, ;
    AVG(成绩.总评成绩) AS 平均分 ;
FROM 学生 JOIN 成绩 ON 学生.学号=成绩.学号 ;
GROUP BY 学生.班级 ;
INTO CURSOR 班级统计

* 基于游标创建报表
CREATE REPORT 班级统计报表
REPORT FORM 班级统计报表 PREVIEW</code></pre>

<h3>7.1.8 程序主文件</h3>
<p>创建系统的主程序文件（main.prg）：</p>
<pre><code class="code-block">* 主程序 main.prg
SET TALK OFF
SET SAFETY OFF
SET DATE TO YMD
SET CENTURY ON

* 打开数据库
OPEN DATABASE 学生成绩管理系统

* 设置系统环境
_SCREEN.Caption = "学生成绩管理系统 v1.0"
_SCREEN.WindowState = 2

* 显示登录表单
DO FORM 登录表单

* 进入事件循环
READ EVENTS

* 清理
CLOSE DATABASE ALL
SET TALK ON
SET SAFETY ON</code></pre>`,
        exercises: [
          {
            id: 'v7-1-1',
            type: 'single',
            question: '学生成绩管理系统中，学生表和成绩表之间是什么关系？',
            options: ['一对一', '一对多', '多对多', '没有关系'],
            answer: 'B',
            explanation: '一个学生可以有多条成绩记录，所以学生表与成绩表是一对多关系。',
            score: 2
          },
          {
            id: 'v7-1-2',
            type: 'code',
            question: '在VFP中，如何计算总评成绩（平时成绩占40%，期末成绩占60%）？写出REPLACE命令。',
            answer: 'REPLACE ALL 总评成绩 WITH 平时成绩*0.4 + 期末成绩*0.6',
            explanation: '使用REPLACE ALL命令批量更新所有记录的总评成绩字段。',
            score: 5
          },
          {
            id: 'v7-1-3',
            type: 'single',
            question: '在系统主程序中，READ EVENTS命令的作用是？',
            options: ['读取系统事件', '启动事件循环', '读取表单数据', '退出程序'],
            answer: 'B',
            explanation: 'READ EVENTS命令启动事件循环，使程序保持运行状态等待用户操作。',
            score: 2
          }
        ]
      },
      {
        id: 'v7-2',
        title: '7.2 系统测试与发布',
        description: '学习系统测试方法和应用程序发布流程',
        content: `<h3>7.2.1 系统测试的重要性</h3>
<p>系统测试是软件开发的关键环节，目的是发现和修复系统中的错误，确保软件质量。测试应贯穿整个开发过程。</p>
<p><strong>测试的基本原则：</strong></p>
<ul>
<li>测试应尽早开始，贯穿开发全过程</li>
<li>测试用例应包含合理的输入和不合理的输入</li>
<li>充分注意测试中的群集现象（错误集中的模块）</li>
<li>避免测试自己的程序，测试需要客观性</li>
</ul>

<h3>7.2.2 功能测试</h3>
<p>逐项测试系统的各项功能是否正常：</p>
<pre><code class="code-block">* 测试数据表创建
? DBUSED("学生成绩管理系统")  && 检查数据库是否打开
? USED("学生")               && 检查学生表是否打开
? USED("成绩")               && 检查成绩表是否打开

* 测试数据完整性约束
INSERT INTO 学生 (学号, 姓名, 性别) VALUES ("001", "张三", "男")  && 应有重复主键错误
INSERT INTO 学生 (学号, 姓名, 性别) VALUES ("002", "李四", "未知") && 应有CHECK约束错误

* 测试参照完整性
INSERT INTO 成绩 (记录编号, 学号, 课程号) VALUES (1, "999", "C01")  && 应有外键约束错误（学号999不存在）</code></pre>
<p><strong>手动测试清单：</strong></p>
<ul>
<li>学生信息录入：正常添加、修改、删除</li>
<li>数据验证：输入非法数据（空值、超长、错误类型）</li>
<li>成绩录入：边界值测试（0分、100分、负分、超过100分）</li>
<li>查询功能：精确查询、模糊查询、条件组合查询</li>
<li>报表预览和打印：数据正确性、格式美观度</li>
<li>用户登录：正确密码、错误密码、空密码</li>
</ul>

<h3>7.2.3 性能测试</h3>
<p>测试系统在大量数据下的响应速度：</p>
<pre><code class="code-block">* 生成测试数据（10000条学生记录）
FOR i = 1 TO 10000
    INSERT INTO 学生 (学号, 姓名, 性别, 班级) ;
        VALUES (PADL(i, 10, "0"), "学生"+ALLTRIM(STR(i)), ;
        IIF(MOD(i,2)=0, "男", "女"), "计算机"+ALLTRIM(STR(MOD(i,5)+1))+"班")
ENDFOR

* 测试查询性能
nStart = SECONDS()
SELECT * FROM 学生 WHERE 班级="计算机1班"
? "查询耗时：", SECONDS() - nStart, "秒"

* 测试索引效果
nStart = SECONDS()
SEEK "计算机1班" ORDER 班级
? "索引查找耗时：", SECONDS() - nStart, "秒"</code></pre>
<p><strong>性能优化建议：</strong></p>
<ul>
<li>为常用查询字段建立索引</li>
<li>避免使用SELECT *，只查询需要的字段</li>
<li>使用RUSHMORE优化技术（VFP自动优化）</li>
<li>合理使用视图减少重复查询</li>
</ul>

<h3>7.2.4 错误处理</h3>
<p>在程序中添加错误处理机制，提高系统健壮性：</p>
<pre><code class="code-block">* 设置错误处理例程
ON ERROR DO 错误处理 WITH ERROR(), MESSAGE(), PROGRAM(), LINENO()

* 错误处理过程
PROCEDURE 错误处理
    PARAMETERS nError, cMessage, cProgram, nLine
    LOCAL cErrorMsg
    cErrorMsg = "程序发生错误：" + CHR(13) + ;
                "错误号：" + ALLTRIM(STR(nError)) + CHR(13) + ;
                "错误信息：" + cMessage + CHR(13) + ;
                "程序：" + cProgram + CHR(13) + ;
                "行号：" + ALLTRIM(STR(nLine))
    MESSAGEBOX(cErrorMsg, 16, "错误提示")
    * 记录错误日志
    SET ALTERNATE TO 错误日志.txt ADDITIVE
    SET ALTERNATE ON
    ? DATETIME(), cErrorMsg
    SET ALTERNATE OFF
    SET ALTERNATE TO
ENDPROC</code></pre>

<h3>7.2.5 应用程序发布</h3>
<p><strong>步骤1：编译项目</strong></p>
<pre><code class="code-block">* 创建项目文件
CREATE PROJECT 学生成绩管理系统

* 添加文件到项目
* 在主菜单选择"项目"→"添加文件"
* 添加所有程序文件(.prg)、表单文件(.scx)、报表文件(.frx)、数据库文件(.dbc)

* 设置主文件
* 在项目管理器中右键main.prg，选择"设置主文件"

* 编译项目
BUILD PROJECT 学生成绩管理系统 FROM 学生成绩管理系统

* 生成可执行文件
BUILD EXE 学生成绩管理系统 FROM 学生成绩管理系统</code></pre>
<p><strong>步骤2：准备发布文件</strong></p>
<p>需要随应用程序一起分发的文件：</p>
<ul>
<li><strong>可执行文件(.exe)</strong>：编译后的应用程序主文件</li>
<li><strong>数据库文件(.dbc, .dct, .dcx)</strong>：数据库相关文件</li>
<li><strong>数据表文件(.dbf, .fpt, .cdx)</strong>：数据表文件</li>
<li><strong>VFP运行库</strong>：vfp9r.dll, vfp9renu.dll等</li>
</ul>
<p><strong>步骤3：创建安装包</strong></p>
<pre><code class="code-block">* 使用VFP的安装向导（InstallShield）
* 在VFP中选择"工具"→"向导"→"安装"
* 按向导提示完成安装包制作

* 或者使用第三方工具（如Inno Setup）创建安装程序</code></pre>
<p><strong>步骤4：部署注意事项</strong></p>
<ul>
<li>确保目标计算机有VFP运行库支持</li>
<li>配置ODBC数据源（如需要）</li>
<li>设置文件夹权限，确保数据文件可读写</li>
<li>提供用户使用手册和技术支持文档</li>
<li>定期备份数据文件</li>
</ul>

<h3>7.2.6 系统维护</h3>
<p><strong>数据备份与恢复：</strong></p>
<pre><code class="code-block">* 备份数据库
COPY FILE 学生成绩管理系统.DBC TO 备份\学生成绩管理系统.DBC
COPY FILE 学生.DBF TO 备份\学生.DBF
COPY FILE 成绩.DBF TO 备份\成绩.DBF
COPY FILE 课程.DBF TO 备份\课程.DBF

* 恢复数据库
COPY FILE 备份\学生成绩管理系统.DBC TO 学生成绩管理系统.DBC
COPY FILE 备份\学生.DBF TO 学生.DBF
COPY FILE 备份\成绩.DBF TO 成绩.DBF</code></pre>
<p><strong>日常维护任务：</strong></p>
<ul>
<li>定期备份数据库和数据表</li>
<li>清理过期数据（如往届毕业生记录）</li>
<li>重建索引文件（REINDEX命令）</li>
<li>检查数据完整性</li>
<li>更新系统功能以适应用户需求变化</li>
</ul>`,
        exercises: [
          {
            id: 'v7-2-1',
            type: 'single',
            question: '测试中，使用边界值（如0分、100分）进行测试属于什么测试方法？',
            options: ['单元测试', '边界值测试', '集成测试', '压力测试'],
            answer: 'B',
            explanation: '边界值测试是测试输入数据的边界值情况，如最小值0、最大值100，确保程序在边界条件下正常工作。',
            score: 2
          },
          {
            id: 'v7-2-2',
            type: 'fill',
            question: 'VFP中编译可执行文件的命令是______。',
            answer: 'BUILD EXE',
            explanation: 'BUILD EXE命令用于将项目编译为可执行文件(.exe)。',
            score: 2
          },
          {
            id: 'v7-2-3',
            type: 'single',
            question: '以下哪个不是VFP项目发布时需要包含的文件？',
            options: ['可执行文件(.exe)', '数据库文件(.dbc)', 'VFP源代码文件(.prg)', '数据表文件(.dbf)'],
            answer: 'C',
            explanation: '编译后的可执行文件已包含源代码逻辑，不需要分发源代码文件(.prg)给最终用户。',
            score: 2
          }
        ]
      }
    ]
  }
];
