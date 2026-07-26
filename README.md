# 职业高考学习平台

一个面向中国职业高中学生的在线学习平台，涵盖C语言、VFP数据库、网络知识和办公自动化四大核心课程，提供从零基础到高考水平的系统化教学。

## 功能特点

- 📚 **系统课程**：从零基础到精通的完整教学体系
- 🎯 **高考标准**：符合职业高考考试大纲要求
- ✅ **实战练习**：配套大量练习题和模拟考试
- 📱 **响应式设计**：支持桌面端和移动端访问

## 课程内容

### C语言程序设计
- C语言概述与开发环境
- 数据类型与运算符
- 流程控制语句
- 数组与字符串
- 函数与递归
- 指针操作
- 结构体与联合体
- 文件操作

### VFP数据库应用
- 数据库基础概念
- 数据表的创建与操作
- 索引与查询
- SQL语言
- 表单设计
- 报表设计

### 计算机网络基础
- 网络概述与拓扑结构
- OSI参考模型
- TCP/IP协议
- IP地址与子网掩码
- 常用网络服务（HTTP、FTP、DNS）
- 网络安全与防火墙

### 办公自动化
- Excel基础操作与格式化
- Excel公式与函数
- Excel数据处理（排序、筛选、数据透视表）
- Word基础操作与格式化
- Word文档排版与样式
- Word图文混排
- Excel与Word协同应用

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 3
- **状态管理**: Zustand
- **路由**: React Router DOM（Hash模式）
- **图标**: Lucide React

## 项目结构

```
src/
├── components/           # 通用组件
│   ├── Header.tsx       # 顶部导航栏
│   ├── Sidebar.tsx      # 侧边章节导航
│   ├── CourseCard.tsx   # 课程卡片组件
│   ├── CodeBlock.tsx    # 代码块组件
│   └── PracticeArea.tsx # 练习区域组件
├── pages/               # 页面组件
│   ├── Home.tsx         # 首页
│   ├── CLanguage.tsx    # C语言课程
│   ├── VFP.tsx          # VFP数据库课程
│   ├── Network.tsx      # 网络知识课程
│   ├── Office.tsx       # 办公自动化课程
│   ├── CoursePage.tsx   # 课程页面模板
│   └── Exams.tsx        # 题库系统
├── data/                # 课程数据
│   ├── cLanguage.ts     # C语言课程内容
│   ├── vfp.ts           # VFP课程内容
│   ├── network.ts       # 网络知识内容
│   ├── office.ts        # 办公自动化内容
│   └── questions.ts     # 题库数据
├── store/               # 状态管理
│   └── appStore.ts      # 应用状态
├── App.tsx              # 主应用组件
├── main.tsx             # 入口文件
└── index.css            # 全局样式
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署到 GitHub Pages

### 方法一：自动部署（推荐）

项目已配置 GitHub Actions，每次推送到 `main` 分支会自动部署到 GitHub Pages。

### 方法二：手动部署

1. 构建项目：

```bash
npm run build
```

2. 安装 gh-pages：

```bash
npm install -g gh-pages
```

3. 部署：

```bash
gh-pages -d dist
```

### 配置步骤

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择 `gh-pages` 分支作为源
3. 等待部署完成后访问 `https://<username>.github.io/<repo-name>`

## 学习进度

学习进度会自动保存到浏览器的 localStorage 中，包括：
- 已学习的章节和课时
- 练习得分
- 模拟考试成绩

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

---

🎓 助力每一位职高学子实现升学梦想！
