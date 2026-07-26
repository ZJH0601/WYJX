const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CLanguage-CJqUuLrf.js","./CoursePage-BvtHI0sS.js","./react-vendor-DyJc3qc1.js","./ui-vendor-CGXHmXdo.js","./search-vendor-t_7AcMTv.js","./VFP-ObctUmZi.js","./Network-DzFBENuA.js","./Office-LKOIqodb.js","./Exams-DaX_DvPY.js","./questions-DvOPgkD0.js","./Dashboard-CFtezBs_.js","./NotFound-BR7XmBcw.js"])))=>i.map(i=>d[i]);
var X=Object.defineProperty;var $=(e,i,s)=>i in e?X(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s;var B=(e,i,s)=>$(e,typeof i!="symbol"?i+"":i,s);import{a as z,b as J,r as m,u as R,c as k,H as Q,d as Z,e as S}from"./react-vendor-DyJc3qc1.js";import{c as tt,S as L,X as K,C as st,F as M,G as _,D as U,B as A,M as et,a as G,b as rt,T as nt,R as ot,A as it,d as lt,U as ct,e as pt}from"./ui-vendor-CGXHmXdo.js";import{e as dt}from"./search-vendor-t_7AcMTv.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();var D={exports:{}},C={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function at(){if(H)return C;H=1;var e=z(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(l,c,x){var p,E={},h=null,a=null;x!==void 0&&(h=""+x),c.key!==void 0&&(h=""+c.key),c.ref!==void 0&&(a=c.ref);for(p in c)n.call(c,p)&&!r.hasOwnProperty(p)&&(E[p]=c[p]);if(l&&l.defaultProps)for(p in c=l.defaultProps,c)E[p]===void 0&&(E[p]=c[p]);return{$$typeof:i,type:l,key:h,ref:a,props:E,_owner:o.current}}return C.Fragment=s,C.jsx=d,C.jsxs=d,C}var q;function gt(){return q||(q=1,D.exports=at()),D.exports}var t=gt(),O={},W;function ut(){if(W)return O;W=1;var e=J();return O.createRoot=e.createRoot,O.hydrateRoot=e.hydrateRoot,O}var ht=ut();const xt="modulepreload",Et=function(e,i){return new URL(e,i).href},V={},T=function(i,s,n){let o=Promise.resolve();if(s&&s.length>0){let d=function(p){return Promise.all(p.map(E=>Promise.resolve(E).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),x=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=d(s.map(p=>{if(p=Et(p,n),p in V)return;V[p]=!0;const E=p.endsWith(".css"),h=E?'[rel="stylesheet"]':"";if(!!n)for(let f=l.length-1;f>=0;f--){const u=l[f];if(u.href===p&&(!E||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${h}`))return;const g=document.createElement("link");if(g.rel=E?"stylesheet":xt,E||(g.as="script"),g.crossOrigin="",g.href=p,x&&g.setAttribute("nonce",x),document.head.appendChild(g),E)return new Promise((f,u)=>{g.addEventListener("load",f),g.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return o.then(d=>{for(const l of d||[])l.status==="rejected"&&r(l.reason);return i().catch(r)})};function ft(e,i){let s;try{s=e()}catch{return}return{getItem:o=>{var r;const d=c=>c===null?null:JSON.parse(c,void 0),l=(r=s.getItem(o))!=null?r:null;return l instanceof Promise?l.then(d):d(l)},setItem:(o,r)=>s.setItem(o,JSON.stringify(r,void 0)),removeItem:o=>s.removeItem(o)}}const F=e=>i=>{try{const s=e(i);return s instanceof Promise?s:{then(n){return F(n)(s)},catch(n){return this}}}catch(s){return{then(n){return this},catch(n){return F(n)(s)}}}},mt=(e,i)=>(s,n,o)=>{let r={storage:ft(()=>window.localStorage),partialize:u=>u,version:0,merge:(u,y)=>({...y,...u}),...i},d=!1,l=0;const c=new Set,x=new Set;let p=r.storage;if(!p)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),s(...u)},n,o);const E=()=>{const u=r.partialize({...n()});return p.setItem(r.name,{state:u,version:r.version})},h=o.setState;o.setState=(u,y)=>(h(u,y),E());const a=e((...u)=>(s(...u),E()),n,o);o.getInitialState=()=>a;let g;const f=()=>{var u,y;if(!p)return;const P=++l;d=!1,c.forEach(b=>{var N;return b((N=n())!=null?N:a)});const I=((y=r.onRehydrateStorage)==null?void 0:y.call(r,(u=n())!=null?u:a))||void 0;return F(p.getItem.bind(p))(r.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==r.version){if(r.migrate){const N=r.migrate(b.state,b.version);return N instanceof Promise?N.then(w=>[!0,w]):[!0,N]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,b.state];return[!1,void 0]}).then(b=>{var N;if(P!==l)return;const[w,Y]=b;if(g=r.merge(Y,(N=n())!=null?N:a),s(g,!0),w)return E()}).then(()=>{P===l&&(I==null||I(n(),void 0),g=n(),d=!0,x.forEach(b=>b(g)))}).catch(b=>{P===l&&(I==null||I(void 0,b))})};return o.persist={setOptions:u=>{r={...r,...u},u.storage&&(p=u.storage)},clearStorage:()=>{p==null||p.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>f(),hasHydrated:()=>d,onHydrate:u=>(c.add(u),()=>{c.delete(u)}),onFinishHydration:u=>(x.add(u),()=>{x.delete(u)})},r.skipHydration||f(),g||a},bt=mt,v={"c-language":28,vfp:22,network:18,office:24},j=tt()(bt((e,i)=>({progress:[],examResults:[],currentCourse:"",currentChapter:"",currentLesson:"",sidebarOpen:!0,setProgress:s=>{e(n=>{const o=n.progress.findIndex(r=>r.courseId===s.courseId&&r.chapterId===s.chapterId&&r.lessonId===s.lessonId);if(o>=0){const r=[...n.progress];return r[o]={...s,timestamp:Date.now()},{progress:r}}return{progress:[...n.progress,{...s,timestamp:Date.now()}]}})},getProgress:(s,n,o)=>i().progress.find(r=>r.courseId===s&&r.chapterId===n&&r.lessonId===o),getCourseProgress:s=>{const n=i(),o=v[s]||0;if(o===0)return 0;const d=n.progress.filter(l=>l.courseId===s).filter(l=>l.completed).length;return Math.round(d/o*100)},getCourseStats:s=>{const n=i(),o=v[s]||0,r=n.progress.filter(h=>h.courseId===s),d=r.filter(h=>h.completed).length,l=n.examResults.filter(h=>h.courseId===s),c=l.length,x=c>0?Math.round(l.reduce((h,a)=>h+a.score/a.totalScore*100,0)/c):0,p=r.filter(h=>h.exerciseMaxScore>0),E=p.length>0?Math.round(p.reduce((h,a)=>h+a.exerciseScore/a.exerciseMaxScore*100,0)/p.length):0;return{courseId:s,totalLessons:o,completedLessons:d,averageScore:E,examCount:c,examAverageScore:x}},getOverallStats:()=>{const s=i(),n=Object.values(v).reduce((l,c)=>l+c,0),o=s.progress.filter(l=>l.completed).length,r=s.examResults.length,d=r>0?Math.round(s.examResults.reduce((l,c)=>l+c.score/c.totalScore*100,0)/r):0;return{totalLessons:n,completedLessons:o,totalExams:r,averageScore:d}},setExamResult:s=>{e(n=>({examResults:[...n.examResults,{...s,timestamp:Date.now()}]}))},getExamResults:s=>i().examResults.filter(n=>n.courseId===s),setCurrentCourse:s=>e({currentCourse:s}),setCurrentChapter:s=>e({currentChapter:s}),setCurrentLesson:s=>e({currentLesson:s}),toggleSidebar:()=>e(s=>({sidebarOpen:!s.sidebarOpen})),setSidebarOpen:s=>e({sidebarOpen:s}),resetProgress:s=>{e(s?n=>({progress:n.progress.filter(o=>o.courseId!==s),examResults:n.examResults.filter(o=>o.courseId!==s)}):{progress:[],examResults:[]})}}),{name:"vocational-exam-app"})),Nt=[{id:"c1",title:"第一章：C语言概述",lessons:[{id:"c1-1",title:"1.1 什么是C语言",description:"了解C语言的历史、特点和应用领域",content:`<h3>1.1.1 C语言的起源</h3>
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
</ul>`,exercises:[{id:"c1-1-1",type:"single",question:"C语言是由谁发明的？",options:["比尔·盖茨","丹尼斯·里奇","史蒂夫·乔布斯","马克·扎克伯格"],answer:"B",explanation:"C语言是由美国贝尔实验室的丹尼斯·里奇(Dennis Ritchie)在1972年发明的。",score:2},{id:"c1-1-2",type:"single",question:"C语言共有多少个关键字？",options:["16","32","64","128"],answer:"B",explanation:"C语言标准规定共有32个关键字，如int、float、if、else等。",score:2}]},{id:"c1-2",title:"1.2 C语言程序的基本结构",description:"学习C语言程序的组成部分和基本格式",content:`<h3>1.2.1 简单的C程序示例</h3>
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
</ol>`,code:`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,exercises:[{id:"c1-2-1",type:"fill",question:"C程序的入口函数是______。",answer:"main",explanation:"main()函数是C程序的入口点，程序从这里开始执行。",score:2},{id:"c1-2-2",type:"code",question:'编写一个C程序，输出"欢迎学习C语言！"',answer:`#include <stdio.h>

int main() {
    printf("欢迎学习C语言！\\n");
    return 0;
}`,explanation:"使用printf函数输出字符串，注意包含stdio.h头文件。",score:5}]},{id:"c1-3",title:"1.3 开发环境搭建",description:"了解常用的C语言开发工具",content:`<h3>1.3.1 常用开发环境</h3>
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
</ol>`,exercises:[{id:"c1-3-1",type:"single",question:"验证gcc编译器安装成功的命令是？",options:["gcc --help","gcc -v","gcc install","gcc test"],answer:"B",explanation:"gcc -v命令可以查看编译器的版本信息，验证安装成功。",score:2}]}]},{id:"c2",title:"第二章：数据类型与运算符",lessons:[{id:"c2-1",title:"2.1 基本数据类型",description:"学习C语言的基本数据类型：整型、实型、字符型",content:`<h3>2.1.1 整型数据</h3>
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
<p>字符串常量用双引号括起来，如<code>"Hello"</code>。</p>`,exercises:[{id:"c2-1-1",type:"single",question:"int类型在32位系统中占多少字节？",options:["1","2","4","8"],answer:"C",explanation:"在32位和64位系统中，int类型通常都占4个字节。",score:2},{id:"c2-1-2",type:"fill",question:"字符型数据的关键字是______。",answer:"char",explanation:"char是字符型数据的关键字，用于存储单个字符。",score:2}]},{id:"c2-2",title:"2.2 变量与常量",description:"学习变量的定义、初始化和常量的使用",content:`<h3>2.2.1 变量的定义</h3>
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
#define MAX 100      // 定义符号常量MAX</code></pre>`,code:`#include <stdio.h>
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
}`,exercises:[{id:"c2-2-1",type:"fill",question:"使用______关键字定义符号常量。",answer:"#define",explanation:"#define是预处理指令，用于定义符号常量。",score:2},{id:"c2-2-2",type:"code",question:"定义三个变量：name（字符数组）、age（整型）、height（浮点型），并初始化赋值。",answer:`char name[20] = "张三";
int age = 20;
float height = 1.75;`,explanation:"字符数组用于存储字符串，需要指定数组大小。",score:5}]},{id:"c2-3",title:"2.3 运算符",description:"学习算术运算符、关系运算符、逻辑运算符等",content:`<h3>2.3.1 算术运算符</h3>
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
</ol>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c2-3-1",type:"single",question:"表达式 5 / 2 的结果是？",options:["2.5","2","3","0"],answer:"B",explanation:"整型除法会舍去小数部分，5 / 2 = 2。",score:2},{id:"c2-3-2",type:"single",question:"表达式 3 > 2 && 5 < 4 的结果是？",options:["1","0","true","false"],answer:"B",explanation:"逻辑与运算要求两边都为真，5 < 4为假，所以结果为0。",score:2}]},{id:"c2-4",title:"2.4 位运算符与枚举",description:"学习位运算符和枚举类型的定义与使用",content:`<h3>2.4.1 位运算符</h3>
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
</ul>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c2-4-1",type:"single",question:"表达式 5 & 3 的结果是？",options:["7","1","6","0"],answer:"B",explanation:"5的二进制是0101，3的二进制是0011，按位与结果为0001，即1。",score:2},{id:"c2-4-2",type:"single",question:"左移运算符 << 相当于进行什么运算？",options:["加法","减法","乘法","除法"],answer:"C",explanation:"左移1位相当于乘以2，左移n位相当于乘以2的n次方。",score:2},{id:"c2-4-3",type:"code",question:"定义一个枚举类型Season，包含SPRING、SUMMER、AUTUMN、WINTER四个季节，并输出当前季节。",answer:`enum Season {
    SPRING = 1,
    SUMMER,
    AUTUMN,
    WINTER
};

enum Season current = SUMMER;
printf("当前季节：%d\\n", current);`,explanation:"枚举值默认从0开始，手动指定SPRING=1后，后续值依次递增。",score:5}]}]},{id:"c3",title:"第三章：流程控制",lessons:[{id:"c3-1",title:"3.1 if语句",description:"学习条件判断语句if-else的使用",content:`<h3>3.1.1 简单if语句</h3>
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
}</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c3-1-1",type:"code",question:"编写程序，判断一个整数是正数、负数还是零。",answer:`#include <stdio.h>

int main() {
    int num;
    printf("请输入一个整数：");
    scanf("%d", &num);
    
    if (num > 0) {
        printf("正数\\n");
    } else if (num < 0) {
        printf("负数\\n");
    } else {
        printf("零\\n");
    }
    
    return 0;
}`,explanation:"使用if-else if-else结构进行多条件判断。",score:5}]},{id:"c3-2",title:"3.2 switch语句",description:"学习多分支选择语句switch",content:`<h3>3.2.1 switch语句语法</h3>
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
</ul>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c3-2-1",type:"single",question:"switch语句中，用于跳出switch结构的关键字是？",options:["exit","break","continue","return"],answer:"B",explanation:"break语句用于跳出switch结构，避免执行后续case。",score:2}]},{id:"c3-3",title:"3.3 循环语句",description:"学习for、while、do-while循环",content:`<h3>3.3.1 for循环</h3>
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
<p>switch语句中每个case末尾都要写break，否则会继续执行下一个case的代码（穿透现象）。</p>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c3-3-1",type:"code",question:"使用for循环计算1到100的累加和。",answer:`#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    printf("1到100的和：%d\\n", sum);
    return 0;
}`,explanation:"初始化sum为0，在循环中累加每个数。",score:5},{id:"c3-3-2",type:"single",question:"do-while循环和while循环的主要区别是？",options:["语法不同","do-while至少执行一次","效率不同","用途不同"],answer:"B",explanation:"do-while循环先执行循环体再判断条件，所以至少执行一次。",score:2}]}]},{id:"c4",title:"第四章：数组与字符串",lessons:[{id:"c4-1",title:"4.1 一维数组",description:"学习一维数组的定义、初始化和使用",content:`<h3>4.1.1 数组的定义</h3>
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
int x = arr[2]; // 获取第三个元素</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c4-1-1",type:"fill",question:"数组的下标从______开始。",answer:"0",explanation:"C语言中数组下标从0开始，arr[0]是第一个元素。",score:2},{id:"c4-1-2",type:"code",question:"定义一个包含10个整数的数组，初始化值为1-10，然后逆序输出。",answer:`#include <stdio.h>

int main() {
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    printf("逆序输出：");
    for (int i = 9; i >= 0; i--) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}`,explanation:"从最后一个元素开始，使用递减的循环变量。",score:5}]},{id:"c4-2",title:"4.2 二维数组",description:"学习二维数组的定义和使用",content:`<h3>4.2.1 二维数组的定义</h3>
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
int x = matrix[1][2]; // 获取第二行第三列</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c4-2-1",type:"single",question:"int arr[3][4]表示什么？",options:["3个元素的一维数组","4个元素的一维数组","3行4列的二维数组","4行3列的二维数组"],answer:"C",explanation:"arr[3][4]表示3行4列的二维数组，共12个元素。",score:2}]},{id:"c4-3",title:"4.3 字符串",description:"学习字符串的存储和常用处理函数",content:`<h3>4.3.1 字符串的存储</h3>
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
</ul>`,code:`#include <stdio.h>
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
}`,exercises:[{id:"c4-3-1",type:"fill",question:"字符串在C语言中以______字符结尾。",answer:"\\0",explanation:"字符串以\\0（空字符）结尾，表示字符串结束。",score:2},{id:"c4-3-2",type:"single",question:"计算字符串长度的函数是？",options:["strcpy","strcat","strlen","strcmp"],answer:"C",explanation:"strlen()函数用于计算字符串长度，不包括\\0。",score:2}]},{id:"c4-4",title:"4.4 动态内存分配",description:"学习malloc、calloc、realloc、free等动态内存管理函数",content:`<h3>4.4.1 动态内存分配的概念</h3>
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
<p>字符串必须以\\0结尾，否则字符串处理函数（strlen、printf等）无法正常工作。</p>`,code:`#include <stdio.h>
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
}`,exercises:[{id:"c4-4-1",type:"single",question:"malloc()函数分配的内存位于哪个区域？",options:["栈区","堆区","全局区","代码区"],answer:"B",explanation:"malloc()函数在堆区（heap）分配动态内存，需要手动释放。",score:2},{id:"c4-4-2",type:"single",question:"释放动态内存后，最好将指针设为？",options:["0","NULL","不操作","1"],answer:"B",explanation:"释放后应将指针设为NULL，避免野指针导致的安全问题。",score:2},{id:"c4-4-3",type:"code",question:"使用动态内存分配创建一个整型数组，存储5个整数，计算并输出它们的和。",answer:`int *arr = (int*)malloc(5 * sizeof(int));
if (arr == NULL) {
    printf("分配失败\\n");
    return 1;
}
int sum = 0;
for (int i = 0; i < 5; i++) {
    arr[i] = i + 1;
    sum += arr[i];
}
printf("和：%d\\n", sum);
free(arr);`,explanation:"使用malloc分配5个整数空间，遍历赋值并累加，最后释放内存。",score:5}]}]},{id:"c5",title:"第五章：函数",lessons:[{id:"c5-1",title:"5.1 函数的定义和调用",description:"学习函数的定义、声明和调用方法",content:`<h3>5.1.1 函数的定义</h3>
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
<pre><code class="code-block">函数名(实参列表);</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c5-1-1",type:"single",question:"没有返回值的函数，返回类型应该声明为？",options:["int","float","void","char"],answer:"C",explanation:"void表示无返回值，用于不需要返回结果的函数。",score:2},{id:"c5-1-2",type:"code",question:"定义一个函数，计算两个整数的乘积并返回结果。",answer:`int multiply(int a, int b) {
    return a * b;
}`,explanation:"函数接收两个整型参数，返回它们的乘积。",score:5}]},{id:"c5-2",title:"5.2 函数参数传递",description:"学习值传递和地址传递的区别",content:`<h3>5.2.1 值传递</h3>
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
}</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c5-2-1",type:"single",question:"值传递和地址传递的主要区别是？",options:["语法不同","地址传递会影响实参","效率不同","返回值不同"],answer:"B",explanation:"值传递是复制值，不影响实参；地址传递是传递地址，会影响实参。",score:2}]},{id:"c5-3",title:"5.3 递归函数",description:"学习递归函数的定义和使用",content:`<h3>5.3.1 递归的概念</h3>
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
<p>递归函数必须包含终止条件（基线条件），否则会导致栈溢出（Stack Overflow）。</p>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c5-3-1",type:"single",question:"递归函数必须具备的条件是？",options:["返回值","参数","终止条件","循环"],answer:"C",explanation:"递归函数必须有终止条件，否则会无限递归导致栈溢出。",score:2},{id:"c5-3-2",type:"code",question:"使用递归计算1到n的累加和。",answer:`int sum(int n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n - 1);
}`,explanation:"终止条件：n=1时返回1；递归公式：sum(n) = n + sum(n-1)。",score:5}]}]},{id:"c6",title:"第六章：指针",lessons:[{id:"c6-1",title:"6.1 指针的概念",description:"学习指针的定义、初始化和基本操作",content:`<h3>6.1.1 什么是指针</h3>
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
*p = 20;           // 修改指针指向的变量的值</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c6-1-1",type:"single",question:"用于获取变量地址的操作符是？",options:["*","&","%","#"],answer:"B",explanation:"&amp;是取地址符，用于获取变量的内存地址。",score:2},{id:"c6-1-2",type:"fill",question:"int *p; 表示p是一个指向______类型的指针。",answer:"整型",explanation:"int *p表示p是指向整型变量的指针。",score:2}]},{id:"c6-2",title:"6.2 指针与数组",description:"学习指针在数组中的应用",content:`<h3>6.2.1 数组名与指针</h3>
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
}</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c6-2-1",type:"single",question:"数组名arr和&arr[0]的关系是？",options:["相等","arr更大","&arr[0]更大","无关"],answer:"A",explanation:"数组名本身就是指向第一个元素的指针，arr等价于&amp;arr[0]。",score:2}]},{id:"c6-3",title:"6.3 指针与函数",description:"学习指针作为函数参数和返回值",content:`<h3>6.3.1 指针作为函数参数</h3>
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
<p>动态分配的内存（malloc/calloc/realloc）必须使用free()释放，否则会造成内存泄漏，长期运行会导致系统内存耗尽。</p>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c6-3-1",type:"single",question:"使用指针作为函数参数的主要目的是？",options:["节省内存","实现地址传递","简化代码","提高效率"],answer:"B",explanation:"指针作为函数参数可以实现地址传递，从而修改实参的值。",score:2}]}]},{id:"c7",title:"第七章：结构体与联合体",lessons:[{id:"c7-1",title:"7.1 结构体的定义和使用",description:"学习结构体的定义、初始化和访问",content:`<h3>7.1.1 结构体的定义</h3>
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
</ul>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c7-1-1",type:"fill",question:"访问结构体成员使用______运算符。",answer:".",explanation:"结构体变量使用.运算符访问成员，结构体指针使用-&gt;运算符。",score:2}]},{id:"c7-2",title:"7.2 结构体数组",description:"学习结构体数组的定义和使用",content:`<h3>7.2.1 结构体数组的定义</h3>
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
<p>这个案例展示了结构体数组在实际信息管理系统中的应用，涵盖录入、遍历、查找和统计等核心操作。</p>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c7-2-1",type:"code",question:"定义一个包含5个学生的结构体数组，计算平均分。",answer:`#include <stdio.h>

typedef struct {
    char name[20];
    float score;
} Student;

int main() {
    Student students[5] = {
        {"张三", 95.5},
        {"李四", 88.0},
        {"王五", 92.3},
        {"赵六", 85.0},
        {"钱七", 90.0}
    };
    
    float sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += students[i].score;
    }
    printf("平均分：%.2f\\n", sum / 5);
    return 0;
}`,explanation:"遍历结构体数组，累加所有学生的分数，再除以人数得到平均分。",score:5}]},{id:"c7-3",title:"7.3 联合体",description:"学习联合体的定义和使用",content:`<h3>7.3.1 联合体的定义</h3>
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
</ul>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c7-3-1",type:"single",question:"联合体和结构体的主要区别是？",options:["语法不同","成员共享内存","效率不同","用途不同"],answer:"B",explanation:"联合体的成员共享同一块内存空间，而结构体的成员各自独立存储。",score:2}]}]},{id:"c8",title:"第八章：文件操作",lessons:[{id:"c8-1",title:"8.1 文件的打开和关闭",description:"学习文件指针和文件操作的基本流程",content:`<h3>8.1.1 文件指针</h3>
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
<pre><code class="code-block">int fclose(FILE *fp);</code></pre>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c8-1-1",type:"single",question:"使用fopen()打开文件时，若文件不存在会创建文件的模式是？",options:["r","w","r+","rb"],answer:"B",explanation:"w模式表示只写，如果文件不存在则创建，存在则清空内容。",score:2}]},{id:"c8-2",title:"8.2 文件的读写操作",description:"学习文件的顺序读写和随机读写",content:`<h3>8.2.1 字符读写</h3>
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
</ul>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c8-2-1",type:"single",question:"从文件读取一行字符串的函数是？",options:["fgetc","fgets","fscanf","fread"],answer:"B",explanation:"fgets()函数用于从文件读取一行字符串。",score:2}]},{id:"c8-3",title:"8.3 文件的定位操作",description:"学习文件指针的定位和移动",content:`<h3>8.3.1 文件指针</h3>
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
</ul>`,code:`#include <stdio.h>

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
}`,exercises:[{id:"c8-3-1",type:"single",question:"将文件指针移到文件开头的函数是？",options:["fseek","ftell","rewind","feof"],answer:"C",explanation:"rewind()函数用于将文件指针移到文件开头。",score:2}]}]},{id:"c9",title:"第九章：综合实战项目",lessons:[{id:"c9-1",title:"9.1 学生成绩管理系统",description:"综合运用C语言知识，开发一个完整的学生成绩管理系统",content:`<h3>9.1.1 项目简介</h3>
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
</ul>`,code:`#include <stdio.h>
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
}`,exercises:[{id:"c9-1-1",type:"single",question:"学生成绩管理系统中，数据持久化使用的文件操作模式是？",options:["文本读写","二进制读写","只读模式","追加模式"],answer:"B",explanation:"系统使用fwrite()和fread()进行二进制读写，效率更高，适合结构体数据的存储。",score:2},{id:"c9-1-2",type:"code",question:"在学生成绩管理系统中，添加一个按平均分排序的功能函数。",answer:`void sortByAverage(Student students[], int count) {
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - 1 - i; j++) {
            if (students[j].average < students[j + 1].average) {
                Student temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }
        }
    }
    printf("排序完成！\\n");
}`,explanation:"使用冒泡排序算法，按平均分从高到低排序，需要交换整个结构体。",score:5},{id:"c9-1-3",type:"essay",question:"请简述学生成绩管理系统中各模块之间的关系，以及如何保证数据的一致性。",answer:"系统通过结构体数组统一管理数据，各模块通过函数参数传递数组指针和计数器，实现数据共享。添加、修改、删除操作都会更新数组，保存操作将数据持久化到文件，加载操作从文件恢复数据。",explanation:"模块化设计使得每个函数职责单一，通过指针传递实现数据共享，文件操作保证数据持久化。",score:8}]},{id:"c9-2",title:"9.2 项目优化与调试",description:"学习代码优化技巧和调试方法，提升程序质量",content:`<h3>9.2.1 代码优化技巧</h3>
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
</ul>`,code:`#include <stdio.h>
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
                    printf("没有学生数据，请先添加学生记录！
");
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
}`,exercises:[{id:"c9-2-1",type:"single",question:"以下哪个不是常见的调试方法？",options:["printf调试","assert断言","自动生成代码","断点调试"],answer:"C",explanation:"自动生成代码是开发工具的功能，不是调试方法。printf、assert和断点调试是常用的调试手段。",score:2},{id:"c9-2-2",type:"single",question:"使用动态数组时，当数组满了应该如何处理？",options:["提示错误","使用realloc扩容","删除旧数据","忽略新数据"],answer:"B",explanation:"realloc()函数可以重新分配内存大小，实现动态扩容，适用于数据量不确定的场景。",score:2},{id:"c9-2-3",type:"code",question:"为学生成绩管理系统添加输入验证功能，确保成绩在0-100之间。",answer:`float inputScore(const char *subject) {
    float score;
    while (1) {
        printf("请输入%s成绩(0-100)：", subject);
        scanf("%f", &score);
        if (score >= 0 && score <= 100) {
            return score;
        }
        printf("成绩无效，请重新输入！\\n");
    }
}`,explanation:"封装一个输入验证函数，循环读取直到用户输入合法值，提高代码健壮性。",score:5}]}]}],St=[{id:"v1",title:"第一章：VFP概述",lessons:[{id:"v1-1",title:"1.1 数据库基础概念",description:"了解数据库、数据表、字段等基本概念",content:`<h3>1.1.1 数据与信息</h3>
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
</ul>`,exercises:[{id:"v1-1-1",type:"single",question:"以下哪个是数据库管理系统？",options:["Windows","VFP","Word","Excel"],answer:"B",explanation:"VFP是Visual FoxPro的简称，是一种数据库管理系统。",score:2}]},{id:"v1-2",title:"1.2 VFP的发展与特点",description:"了解VFP的发展历程和主要特点",content:`<h3>1.2.1 VFP的发展</h3>
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
</ul>`,exercises:[{id:"v1-2-1",type:"single",question:"VFP最新的版本是？",options:["6.0","7.0","8.0","9.0"],answer:"D",explanation:"Visual FoxPro 9.0是2004年发布的最新版本。",score:2}]},{id:"v1-3",title:"1.3 VFP的工作环境",description:"了解VFP的界面组成和操作方式",content:`<h3>1.3.1 VFP界面组成</h3>
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
</ul>`,exercises:[{id:"v1-3-1",type:"fill",question:"VFP中输入命令的地方是______窗口。",answer:"命令",explanation:"命令窗口是VFP中输入和执行命令的地方。",score:2}]}]},{id:"v2",title:"第二章：数据表的创建与操作",lessons:[{id:"v2-1",title:"2.1 数据表的创建",description:"学习使用向导和命令创建数据表",content:`<h3>2.1.1 数据表的结构</h3>
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
)</code></pre>`,exercises:[{id:"v2-1-1",type:"single",question:"创建数据表的命令是？",options:["CREATE","CREATE TABLE","NEW TABLE","MAKE TABLE"],answer:"B",explanation:"CREATE TABLE命令用于创建数据表。",score:2}]},{id:"v2-2",title:"2.2 数据表的基本操作",description:"学习数据表的打开、关闭和浏览",content:`<h3>2.2.1 打开数据表</h3>
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
DISPLAY         && 显示当前记录</code></pre>`,exercises:[{id:"v2-2-1",type:"fill",question:"浏览数据表的命令是______。",answer:"BROWSE",explanation:"BROWSE命令用于打开浏览窗口查看数据表内容。",score:2}]},{id:"v2-3",title:"2.3 记录的操作",description:"学习记录的添加、修改和删除",content:`<h3>2.3.1 添加记录</h3>
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
ZAP             && 删除所有记录</code></pre>`,exercises:[{id:"v2-3-1",type:"single",question:"DELETE命令执行的是哪种删除？",options:["物理删除","逻辑删除","永久删除","彻底删除"],answer:"B",explanation:"DELETE命令只是给记录加删除标记，属于逻辑删除，可以用RECALL恢复。",score:2}]},{id:"v2-4",title:"2.4 数据完整性约束",description:"学习实体完整性、参照完整性和域完整性约束",content:`<h3>2.4.1 数据完整性的概念</h3>
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
SELECT * FROM 学生 WHERE 备注 IS NOT NULL  && 查询备注不为空的记录</code></pre>`,exercises:[{id:"v2-4-1",type:"single",question:"保证表中每一行数据唯一性的约束是？",options:["域完整性","参照完整性","实体完整性","用户定义完整性"],answer:"C",explanation:"实体完整性通过主键PRIMARY KEY保证表中每条记录的唯一性。",score:2},{id:"v2-4-2",type:"single",question:"以下关于外键的说法，正确的是？",options:["一个表只能有一个外键","外键的值可以为任意值","外键用于保证表间数据的参照完整性","外键不能为NULL"],answer:"C",explanation:"外键（FOREIGN KEY）用于保证相关表之间的参照完整性，确保子表中的外键值在父表主键中存在。",score:2},{id:"v2-4-3",type:"code",question:'写出创建学生表时，添加性别字段只能为"男"或"女"的CHECK约束的SQL语句。',answer:'性别 C(2) CHECK 性别="男" OR 性别="女"',explanation:"使用CHECK约束限制字段的取值范围，确保数据有效性。",score:5}]},{id:"v2-5",title:"⚠️ 常见错误与注意事项",description:"总结数据表操作中的常见错误及解决方法",content:`<h3>⚠️ 常见错误一：表未正确打开/关闭</h3>
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
DISPLAY ALL FOR DELETED()    && 查看所有带删除标记的记录</code></pre>`,exercises:[{id:"v2-5-1",type:"single",question:"执行PACK命令删除记录时，需要以什么方式打开表？",options:["共享方式","独占方式","只读方式","任何方式"],answer:"B",explanation:"PACK命令需要以独占方式（EXCLUSIVE）打开表，因为物理删除需要对表进行独占访问。",score:2},{id:"v2-5-2",type:"single",question:"当记录被锁定无法修改时，应使用什么函数检查锁定状态？",options:["DELETE()","FOUND()","RLOCK()","EOF()"],answer:"C",explanation:"RLOCK()函数用于尝试锁定当前记录，返回.T.表示锁定成功，返回.F.表示锁定失败。",score:2}]}]},{id:"v3",title:"第三章：索引与查询",lessons:[{id:"v3-1",title:"3.1 索引的概念与创建",description:"学习索引的概念和创建方法",content:`<h3>3.1.1 索引的概念</h3>
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
ALTER TABLE 学生 ADD PRIMARY KEY 学号 TAG 学号 && 创建主索引</code></pre>`,exercises:[{id:"v3-1-1",type:"single",question:"一个数据表可以有几个主索引？",options:["1个","2个","多个","没有限制"],answer:"A",explanation:"一个数据表只能有一个主索引，用于唯一标识记录。",score:2}]},{id:"v3-2",title:"3.2 查询与筛选",description:"学习使用命令和查询设计器进行查询",content:`<h3>3.2.1 记录的定位</h3>
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
FIND "001"               && 查找学号为"001"的记录</code></pre>`,exercises:[{id:"v3-2-1",type:"fill",question:"定位到第一条记录的命令是______。",answer:"GO TOP",explanation:"GO TOP命令用于将记录指针定位到第一条记录。",score:2}]},{id:"v3-3",title:"3.3 数据表之间的关系",description:"学习表之间的关系类型和建立关联的方法",content:`<h3>3.3.1 表关系的概念</h3>
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
SET RELATION TO 学号 INTO 学生, 课程号 INTO 课程</code></pre>`,exercises:[{id:"v3-3-1",type:"single",question:"学生表和成绩表之间通常是什么关系？",options:["一对一","一对多","多对多","没有关系"],answer:"B",explanation:"一个学生可以有多条成绩记录，所以学生表与成绩表是一对多关系。",score:2},{id:"v3-3-2",type:"single",question:"实现多对多关系需要借助什么？",options:["主键","外键","中间表","索引"],answer:"C",explanation:"多对多关系需要通过中间表（关联表）拆分为两个一对多关系来实现。",score:2},{id:"v3-3-3",type:"code",question:"写出SET RELATION TO命令建立关联的语法。",answer:"SET RELATION TO 关联表达式 INTO 别名",explanation:"SET RELATION TO命令用于建立两个表之间的临时关联，关联表达式通常是公共字段。",score:5}]}]},{id:"v4",title:"第四章：SQL语言",lessons:[{id:"v4-1",title:"4.1 SQL概述",description:"了解SQL语言的基本概念和特点",content:`<h3>4.1.1 SQL的概念</h3>
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
</ul>`,exercises:[{id:"v4-1-1",type:"single",question:"SQL中用于查询数据的语句是？",options:["INSERT","UPDATE","SELECT","DELETE"],answer:"C",explanation:"SELECT语句用于从数据库中查询数据。",score:2}]},{id:"v4-2",title:"4.2 SELECT语句",description:"学习SQL查询语句的使用",content:`<h3>4.2.1 基本语法</h3>
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
GROUP BY Members.姓名, Members.等级 ORDER BY 消费总额 DESC</code></pre>`,exercises:[{id:"v4-2-1",type:"code",question:"写出查询学生表中所有女生记录的SQL语句。",answer:'SELECT * FROM 学生 WHERE 性别="女"',explanation:'使用WHERE子句筛选性别为"女"的记录。',score:5}]},{id:"v4-3",title:"4.3 多表查询",description:"学习连接查询和子查询",content:`<h3>4.3.1 连接查询</h3>
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
WHERE 学号 IN (SELECT 学号 FROM 成绩 WHERE 分数>60)</code></pre>`,exercises:[{id:"v4-3-1",type:"single",question:"只返回两表中匹配记录的连接是？",options:["左连接","右连接","内连接","全连接"],answer:"C",explanation:"内连接(INNER JOIN)只返回两表中匹配的记录。",score:2}]},{id:"v4-4",title:"4.4 视图与事务",description:"学习视图的创建使用和事务处理",content:`<h3>4.4.1 视图的概念</h3>
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
</ul>`,exercises:[{id:"v4-4-1",type:"single",question:"关于视图，以下说法正确的是？",options:["视图存储实际数据","视图是虚拟表，不存储数据","视图只能从一个表创建","视图创建后不能修改"],answer:"B",explanation:"视图是虚拟表，它基于SQL查询结果集，本身不存储实际数据。",score:2},{id:"v4-4-2",type:"single",question:"事务的ACID特性中，A代表什么？",options:["自动化","原子性","关联性","可访问性"],answer:"B",explanation:"ACID中的A代表Atomicity（原子性），即事务中的所有操作是一个不可分割的整体。",score:2},{id:"v4-4-3",type:"code",question:"写出创建视图的基本语法格式。",answer:"CREATE VIEW 视图名 AS SELECT语句",explanation:"使用CREATE VIEW命令创建视图，后面跟AS和SELECT查询语句。",score:5}]},{id:"v4-5",title:"⚠️ 常见错误与注意事项",description:"总结SQL语言中的常见错误及解决方法",content:`<h3>⚠️ 常见错误一：SQL语法错误</h3>
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
DELETE FROM 成绩 WHERE 分数<0</code></pre>`,exercises:[{id:"v4-5-1",type:"single",question:"在SELECT语句中，使用聚合函数作为条件筛选时，应使用什么子句？",options:["WHERE","HAVING","ON","FILTER"],answer:"B",explanation:"聚合函数不能用在WHERE子句中，应使用HAVING子句对分组后的结果进行筛选。",score:2},{id:"v4-5-2",type:"single",question:"查询所有学生及其成绩（包括没有成绩的学生），应使用什么连接？",options:["INNER JOIN","LEFT JOIN","RIGHT JOIN","CROSS JOIN"],answer:"B",explanation:"LEFT JOIN以左表（学生表）为主，返回所有学生记录，即使没有匹配的成绩记录也会显示NULL。",score:2},{id:"v4-5-3",type:"single",question:"执行UPDATE语句忘记WHERE条件会导致什么后果？",options:["语法错误","更新所有记录","没有任何影响","只更新第一条记录"],answer:"B",explanation:"UPDATE语句不带WHERE条件会更新表中所有记录，这是非常危险的操作。",score:2}]}]},{id:"v5",title:"第五章：表单设计",lessons:[{id:"v5-1",title:"5.1 表单的创建",description:"学习使用表单设计器创建表单",content:`<h3>5.1.1 表单的概念</h3>
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
</ul>`,exercises:[{id:"v5-1-1",type:"fill",question:"创建表单的命令是______。",answer:"CREATE FORM",explanation:"CREATE FORM命令用于打开表单设计器创建表单。",score:2}]},{id:"v5-2",title:"5.2 常用控件",description:"学习表单中常用控件的使用",content:`<h3>5.2.1 标签控件(Label)</h3>
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
ENDIF</code></pre>`,exercises:[{id:"v5-2-1",type:"single",question:"用于显示数据表内容的控件是？",options:["Label","TextBox","Grid","CommandButton"],answer:"C",explanation:"Grid控件（表格控件）用于显示数据表内容。",score:2}]},{id:"v5-3",title:"5.3 表单的事件与方法",description:"学习表单和控件的事件处理",content:`<h3>5.3.1 常见事件</h3>
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
THISFORM.Refresh   && 刷新表单</code></pre>`,exercises:[{id:"v5-3-1",type:"single",question:"关闭表单的方法是？",options:["Close","Release","Hide","Quit"],answer:"B",explanation:"Release方法用于释放表单，关闭表单窗口。",score:2}]}]},{id:"v6",title:"第六章：报表设计",lessons:[{id:"v6-1",title:"6.1 报表的创建",description:"学习使用报表设计器创建报表",content:`<h3>6.1.1 报表的概念</h3>
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
</ul>`,exercises:[{id:"v6-1-1",type:"fill",question:"创建报表的命令是______。",answer:"CREATE REPORT",explanation:"CREATE REPORT命令用于打开报表设计器创建报表。",score:2}]},{id:"v6-2",title:"6.2 报表的预览与打印",description:"学习报表的预览和打印操作",content:`<h3>6.2.1 预览报表</h3>
<pre><code class="code-block">REPORT FORM 报表名 PREVIEW && 预览报表</code></pre>

<h3>6.2.2 打印报表</h3>
<pre><code class="code-block">REPORT FORM 报表名 TO PRINT && 打印报表
REPORT FORM 报表名 TO FILE 文件名 && 导出到文件</code></pre>

<h3>6.2.3 报表的数据环境</h3>
<p>设置报表的数据环境，指定报表使用的数据表。</p>`,exercises:[{id:"v6-2-1",type:"single",question:"预览报表的命令是？",options:["VIEW REPORT","REPORT PREVIEW","REPORT FORM 报表名 PREVIEW","PRINT REPORT"],answer:"C",explanation:"REPORT FORM命令加上PREVIEW子句用于预览报表。",score:2}]}]},{id:"v7",title:"第七章：综合实战项目",lessons:[{id:"v7-1",title:"7.1 学生成绩管理系统",description:"综合运用VFP知识开发完整的学生成绩管理系统",content:`<h3>7.1.1 项目概述</h3>
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
SET SAFETY ON</code></pre>`,exercises:[{id:"v7-1-1",type:"single",question:"学生成绩管理系统中，学生表和成绩表之间是什么关系？",options:["一对一","一对多","多对多","没有关系"],answer:"B",explanation:"一个学生可以有多条成绩记录，所以学生表与成绩表是一对多关系。",score:2},{id:"v7-1-2",type:"code",question:"在VFP中，如何计算总评成绩（平时成绩占40%，期末成绩占60%）？写出REPLACE命令。",answer:"REPLACE ALL 总评成绩 WITH 平时成绩*0.4 + 期末成绩*0.6",explanation:"使用REPLACE ALL命令批量更新所有记录的总评成绩字段。",score:5},{id:"v7-1-3",type:"single",question:"在系统主程序中，READ EVENTS命令的作用是？",options:["读取系统事件","启动事件循环","读取表单数据","退出程序"],answer:"B",explanation:"READ EVENTS命令启动事件循环，使程序保持运行状态等待用户操作。",score:2}]},{id:"v7-2",title:"7.2 系统测试与发布",description:"学习系统测试方法和应用程序发布流程",content:`<h3>7.2.1 系统测试的重要性</h3>
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
COPY FILE 学生成绩管理系统.DBC TO 备份学生成绩管理系统.DBC
COPY FILE 学生.DBF TO 备份学生.DBF
COPY FILE 成绩.DBF TO 备份成绩.DBF
COPY FILE 课程.DBF TO 备份课程.DBF

* 恢复数据库
COPY FILE 备份学生成绩管理系统.DBC TO 学生成绩管理系统.DBC
COPY FILE 备份学生.DBF TO 学生.DBF
COPY FILE 备份成绩.DBF TO 成绩.DBF</code></pre>
<p><strong>日常维护任务：</strong></p>
<ul>
<li>定期备份数据库和数据表</li>
<li>清理过期数据（如往届毕业生记录）</li>
<li>重建索引文件（REINDEX命令）</li>
<li>检查数据完整性</li>
<li>更新系统功能以适应用户需求变化</li>
</ul>`,exercises:[{id:"v7-2-1",type:"single",question:"测试中，使用边界值（如0分、100分）进行测试属于什么测试方法？",options:["单元测试","边界值测试","集成测试","压力测试"],answer:"B",explanation:"边界值测试是测试输入数据的边界值情况，如最小值0、最大值100，确保程序在边界条件下正常工作。",score:2},{id:"v7-2-2",type:"fill",question:"VFP中编译可执行文件的命令是______。",answer:"BUILD EXE",explanation:"BUILD EXE命令用于将项目编译为可执行文件(.exe)。",score:2},{id:"v7-2-3",type:"single",question:"以下哪个不是VFP项目发布时需要包含的文件？",options:["可执行文件(.exe)","数据库文件(.dbc)","VFP源代码文件(.prg)","数据表文件(.dbf)"],answer:"C",explanation:"编译后的可执行文件已包含源代码逻辑，不需要分发源代码文件(.prg)给最终用户。",score:2}]}]}],Tt=[{id:"n1",title:"第一章：计算机网络概述",lessons:[{id:"n1-1",title:"1.1 计算机网络的概念",description:"了解计算机网络的定义、功能和分类",content:`<h3>1.1.1 计算机网络的定义</h3>
<p><strong>计算机网络</strong>：将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统、网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的系统。</p>

<h3>1.1.2 计算机网络的功能</h3>
<ul>
<li><strong>资源共享</strong>：硬件、软件、数据资源的共享</li>
<li><strong>数据通信</strong>：信息的传输和交换</li>
<li><strong>分布式处理</strong>：将任务分配给多台计算机处理</li>
<li><strong>提高可靠性</strong>：备份和容错机制</li>
</ul>

<h3>1.1.3 计算机网络的分类</h3>
<ul>
<li><strong>按覆盖范围分</strong>：局域网(LAN)、城域网(MAN)、广域网(WAN)</li>
<li><strong>按拓扑结构分</strong>：总线型、星型、环型、网状型</li>
<li><strong>按传输介质分</strong>：有线网络、无线网络</li>
</ul>`,exercises:[{id:"n1-1-1",type:"single",question:"局域网的英文缩写是？",options:["WAN","LAN","MAN","PAN"],answer:"B",explanation:"局域网的英文是Local Area Network，缩写为LAN。",score:2}]},{id:"n1-2",title:"1.2 网络拓扑结构",visualType:"home-network",description:"学习常见的网络拓扑结构",content:`<h3>1.2.1 总线型拓扑</h3>
<p>所有节点连接在一条总线上，任何一个节点发送的信号都可以沿着总线传播。</p>
<p><strong>优点</strong>：结构简单、布线方便</p>
<p><strong>缺点</strong>：故障诊断困难、扩展性差</p>

<h3>1.2.2 星型拓扑</h3>
<p>所有节点通过中央节点连接，中央节点控制整个网络。</p>
<p><strong>优点</strong>：故障诊断容易、扩展性好</p>
<p><strong>缺点</strong>：中央节点故障影响整个网络</p>

<h3>1.2.3 环型拓扑</h3>
<p>节点依次连接形成闭合的环，数据沿一个方向传输。</p>
<p><strong>优点</strong>：结构简单、传输稳定</p>
<p><strong>缺点</strong>：故障诊断困难、扩展性差</p>

<h3>1.2.4 网状型拓扑</h3>
<p>每个节点都与其他多个节点直接连接。</p>
<p><strong>优点</strong>：可靠性高、容错能力强</p>
<p><strong>缺点</strong>：成本高、管理复杂</p>

<h3>💡 实战案例：某公司办公室网络设计</h3>
<p><strong>背景</strong>：某公司租用一层办公楼，包含总经理办公室、财务部、技术部、市场部4个部门，共约50名员工，需要设计一个稳定可靠的办公网络。</p>
<p><strong>需求分析</strong>：</p>
<ul>
<li>需要互联网接入，所有员工能上网</li>
<li>财务部数据敏感，需要独立网段，与其他部门隔离</li>
<li>需要部署打印机、文件服务器供全员共享</li>
<li>需要无线网络覆盖，方便移动办公</li>
<li>总经理办公室需要独立的网络打印机</li>
</ul>
<p><strong>网络设计方案</strong>：</p>
<ol>
<li><strong>拓扑结构</strong>：采用<strong>星型拓扑</strong>，以核心交换机为中心，各部门交换机连接到核心交换机</li>
<li><strong>网络设备</strong>：核心交换机1台（三层交换机，支持VLAN）、部门交换机4台、无线AP 4台、路由器1台（连接互联网）、防火墙1台</li>
<li><strong>VLAN划分</strong>：财务部VLAN 10（192.168.10.0/24）、技术部VLAN 20（192.168.20.0/24）、市场部VLAN 30（192.168.30.0/24）、管理区VLAN 40（192.168.40.0/24）</li>
<li><strong>安全策略</strong>：财务部VLAN与其他VLAN之间设置ACL访问控制，禁止跨部门访问财务数据</li>
<li><strong>无线网络</strong>：部署SSID为"Company"的员工网络和"Guest"的访客网络，访客网络只能访问互联网</li>
</ol>
<p><strong>设计要点</strong>：星型拓扑保证了故障诊断容易和扩展性好，即使某个部门交换机故障也不会影响其他部门；VLAN技术实现了部门间的隔离，保护了财务数据安全。</p>`,exercises:[{id:"n1-2-1",type:"single",question:"所有节点通过中央节点连接的拓扑结构是？",options:["总线型","星型","环型","网状型"],answer:"B",explanation:"星型拓扑中所有节点都通过中央节点（如交换机）连接。",score:2}]},{id:"n1-3",title:"1.3 网络硬件设备",description:"了解常见的网络硬件设备",content:`<h3>1.3.1 网卡(NIC)</h3>
<p><strong>网卡</strong>：网络接口卡，计算机连接网络的必备设备。</p>

<h3>1.3.2 交换机(Switch)</h3>
<p><strong>交换机</strong>：连接多个设备，实现数据交换。</p>

<h3>1.3.3 路由器(Router)</h3>
<p><strong>路由器</strong>：连接不同网络，实现数据包转发。</p>

<h3>1.3.4 集线器(Hub)</h3>
<p><strong>集线器</strong>：简单的网络连接设备，共享带宽。</p>

<h3>1.3.5 调制解调器(Modem)</h3>
<p><strong>调制解调器</strong>：实现数字信号和模拟信号的转换。</p>`,exercises:[{id:"n1-3-1",type:"single",question:"用于连接不同网络的设备是？",options:["交换机","集线器","路由器","网卡"],answer:"C",explanation:"路由器用于连接不同的网络，实现数据包在不同网络间转发。",score:2}]}]},{id:"n2",title:"第二章：OSI参考模型",lessons:[{id:"n2-1",title:"2.1 OSI模型概述",visualType:"osi-model",description:"了解OSI七层模型的基本概念",content:`<h3>2.1.1 OSI模型的概念</h3>
<p><strong>OSI</strong>：Open Systems Interconnection，开放系统互连参考模型。</p>
<p>OSI模型将网络通信功能划分为7层，每层完成特定的功能。</p>

<h3>2.1.2 OSI七层模型</h3>
<ol>
<li><strong>物理层</strong>：传输比特流</li>
<li><strong>数据链路层</strong>：传输帧</li>
<li><strong>网络层</strong>：传输分组，路由选择</li>
<li><strong>传输层</strong>：端到端传输</li>
<li><strong>会话层</strong>：建立和管理会话</li>
<li><strong>表示层</strong>：数据格式转换</li>
<li><strong>应用层</strong>：提供应用服务</li>
</ol>

<h3>2.1.3 数据封装过程</h3>
<p>数据从应用层向下传递时，每层都会添加自己的头部信息，这个过程称为封装。</p>
<p>数据从物理层向上传递时，每层会剥离自己的头部信息，这个过程称为解封装。</p>`,exercises:[{id:"n2-1-1",type:"fill",question:"OSI模型共有______层。",answer:"7",explanation:"OSI参考模型将网络通信功能划分为7层。",score:2}]},{id:"n2-2",title:"2.2 各层功能详解",description:"学习OSI各层的具体功能",content:`<h3>2.2.1 物理层</h3>
<ul>
<li>功能：传输比特流</li>
<li>设备：集线器、网线</li>
<li>协议：10BASE-T、100BASE-TX、RS-232等</li>
</ul>

<h3>2.2.2 数据链路层</h3>
<ul>
<li>功能：将物理层收到的比特流组装成帧</li>
<li>设备：网卡、交换机、网桥</li>
<li>协议：PPP、HDLC</li>
</ul>

<h3>2.2.3 网络层</h3>
<ul>
<li>功能：路由选择和分组转发</li>
<li>设备：路由器</li>
<li>协议：IP、ICMP、ARP</li>
</ul>

<h3>2.2.4 传输层</h3>
<ul>
<li>功能：端到端的可靠传输</li>
<li>协议：TCP、UDP</li>
</ul>

<h3>2.2.5 会话层</h3>
<ul>
<li>功能：建立、管理和终止会话</li>
</ul>

<h3>2.2.6 表示层</h3>
<ul>
<li>功能：数据加密、解密、压缩、解压</li>
</ul>

<h3>2.2.7 应用层</h3>
<ul>
<li>功能：提供应用服务</li>
<li>协议：HTTP、FTP、SMTP、DNS</li>
</ul>`,exercises:[{id:"n2-2-1",type:"single",question:"负责路由选择的是哪一层？",options:["数据链路层","网络层","传输层","应用层"],answer:"B",explanation:"网络层负责路由选择和分组转发，主要设备是路由器。",score:2}]}]},{id:"n3",title:"第三章：TCP/IP协议",lessons:[{id:"n3-1",title:"3.1 TCP/IP概述",visualType:"tcpip-model",description:"了解TCP/IP协议族的基本概念",content:`<h3>3.1.1 TCP/IP的概念</h3>
<p><strong>TCP/IP</strong>：Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议。</p>
<p>TCP/IP是互联网的核心协议，是一个协议族。</p>

<h3>3.1.2 TCP/IP四层模型</h3>
<ol>
<li><strong>网络接口层</strong>：对应OSI物理层和数据链路层</li>
<li><strong>网络层</strong>：对应OSI网络层</li>
<li><strong>传输层</strong>：对应OSI传输层</li>
<li><strong>应用层</strong>：对应OSI会话层、表示层、应用层</li>
</ol>

<h3>3.1.3 TCP/IP与OSI的对应关系</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">TCP/IP层</th><th class="border px-4 py-2">OSI层</th></tr>
<tr><td class="border px-4 py-2">应用层</td><td class="border px-4 py-2">会话层、表示层、应用层</td></tr>
<tr><td class="border px-4 py-2">传输层</td><td class="border px-4 py-2">传输层</td></tr>
<tr><td class="border px-4 py-2">网络层</td><td class="border px-4 py-2">网络层</td></tr>
<tr><td class="border px-4 py-2">网络接口层</td><td class="border px-4 py-2">数据链路层、物理层</td></tr>
</table>`,exercises:[{id:"n3-1-1",type:"single",question:"TCP/IP模型分为几层？",options:["4层","5层","6层","7层"],answer:"A",explanation:"TCP/IP模型分为4层：网络接口层、网络层、传输层、应用层。",score:2}]},{id:"n3-2",title:"3.2 IP协议",description:"学习IP地址的概念和分类",content:`<h3>3.2.1 IP地址的概念</h3>
<p><strong>IP地址</strong>：互联网中每个设备的唯一标识。</p>
<p>IPv4地址由32位二进制数组成，通常表示为点分十进制格式，如192.168.1.1。</p>

<h3>3.2.2 IP地址的分类</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">类别</th><th class="border px-4 py-2">范围</th><th class="border px-4 py-2">用途</th></tr>
<tr><td class="border px-4 py-2">A类</td><td class="border px-4 py-2">1.0.0.0 ~ 126.255.255.255</td><td class="border px-4 py-2">大型网络</td></tr>
<tr><td class="border px-4 py-2">B类</td><td class="border px-4 py-2">128.0.0.0 ~ 191.255.255.255</td><td class="border px-4 py-2">中型网络</td></tr>
<tr><td class="border px-4 py-2">C类</td><td class="border px-4 py-2">192.0.0.0 ~ 223.255.255.255</td><td class="border px-4 py-2">小型网络</td></tr>
<tr><td class="border px-4 py-2">D类</td><td class="border px-4 py-2">224.0.0.0 ~ 239.255.255.255</td><td class="border px-4 py-2">组播</td></tr>
<tr><td class="border px-4 py-2">E类</td><td class="border px-4 py-2">240.0.0.0 ~ 255.255.255.255</td><td class="border px-4 py-2">保留</td></tr>
</table>

<h3>3.2.3 特殊IP地址</h3>
<ul>
<li><strong>127.0.0.0 ~ 127.255.255.255</strong>：环回地址，用于本地测试</li>
<li><strong>0.0.0.0</strong>：表示所有网络</li>
<li><strong>255.255.255.255</strong>：广播地址</li>
<li><strong>192.168.x.x、172.16.x.x ~ 172.31.x.x、10.x.x.x</strong>：私有地址</li>
</ul>

<h3>3.2.4 子网掩码</h3>
<p><strong>子网掩码</strong>：用于区分IP地址中的网络部分和主机部分。</p>
<p>常见子网掩码：255.255.255.0（C类）、255.255.0.0（B类）、255.0.0.0（A类）</p>`,exercises:[{id:"n3-2-1",type:"single",question:"192.168.1.1属于哪类IP地址？",options:["A类","B类","C类","D类"],answer:"C",explanation:"192开头的IP地址属于C类地址。",score:2}]},{id:"n3-3",title:"3.3 TCP和UDP协议",description:"学习传输层的两个主要协议",content:`<h3>3.3.1 TCP协议</h3>
<p><strong>TCP</strong>：Transmission Control Protocol，传输控制协议。</p>
<p>TCP是面向连接的、可靠的传输协议：</p>
<ul>
<li><strong>面向连接</strong>：建立连接→传输数据→断开连接</li>
<li><strong>可靠传输</strong>：确认机制、重传机制、流量控制</li>
<li><strong>面向字节流</strong>：数据以字节流形式传输</li>
</ul>

<h3>3.3.2 TCP三次握手</h3>
<ol>
<li>客户端发送SYN请求</li>
<li>服务器返回SYN+ACK确认</li>
<li>客户端发送ACK确认</li>
</ol>

<h3>3.3.5 TCP四次挥手</h3>
<p><strong>四次挥手</strong>：TCP连接断开时，由于TCP是全双工的，每个方向都需要单独关闭，因此需要四次交互。</p>
<ol>
<li><strong>第一次挥手（FIN）</strong>：主动关闭方发送FIN报文，请求关闭连接，进入<strong>FIN_WAIT_1</strong>状态</li>
<li><strong>第二次挥手（ACK）</strong>：被动关闭方收到FIN后，发送ACK确认，进入<strong>CLOSE_WAIT</strong>状态；主动关闭方收到ACK后进入<strong>FIN_WAIT_2</strong>状态</li>
<li><strong>第三次挥手（FIN）</strong>：被动关闭方发送FIN报文，请求关闭反向连接，进入<strong>LAST_ACK</strong>状态</li>
<li><strong>第四次挥手（ACK）</strong>：主动关闭方收到FIN后，发送ACK确认，进入<strong>TIME_WAIT</strong>状态（等待2MSL后关闭）；被动关闭方收到ACK后关闭连接</li>
</ol>
<p><strong>为什么是四次？</strong>TCP是全双工通信，每个方向的数据传输都需要独立关闭。被动关闭方收到FIN后，可能还有数据需要发送，因此先回复ACK确认收到关闭请求，等数据发送完毕后再发送自己的FIN。</p>

<h3>3.3.3 UDP协议</h3>
<p><strong>UDP</strong>：User Datagram Protocol，用户数据报协议。</p>
<p>UDP是无连接的、不可靠的传输协议：</p>
<ul>
<li><strong>无连接</strong>：不需要建立连接</li>
<li><strong>不可靠</strong>：不保证数据到达</li>
<li><strong>面向报文</strong>：数据以报文形式传输</li>
<li><strong>速度快</strong>：开销小，适合实时应用</li>
</ul>

<h3>3.3.4 TCP与UDP的区别</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">特性</th><th class="border px-4 py-2">TCP</th><th class="border px-4 py-2">UDP</th></tr>
<tr><td class="border px-4 py-2">连接方式</td><td class="border px-4 py-2">面向连接</td><td class="border px-4 py-2">无连接</td></tr>
<tr><td class="border px-4 py-2">可靠性</td><td class="border px-4 py-2">可靠</td><td class="border px-4 py-2">不可靠</td></tr>
<tr><td class="border px-4 py-2">传输速度</td><td class="border px-4 py-2">较慢</td><td class="border px-4 py-2">较快</td></tr>
<tr><td class="border px-4 py-2">适用场景</td><td class="border px-4 py-2">文件传输、网页浏览</td><td class="border px-4 py-2">视频会议、在线游戏</td></tr>
</table>

<h3>⚠️ 常见错误</h3>
<p><strong>1. IP地址配置错误</strong></p>
<ul>
<li><strong>子网掩码配置错误</strong>：将子网掩码设置为255.255.255.255（/32），导致无法与其他设备通信。正确做法是根据网络规划设置正确的子网掩码。</li>
<li><strong>网关配置错误</strong>：将默认网关设置为其他网段的地址，导致无法访问外网。网关必须与本机IP在同一网段。</li>
<li><strong>IP地址冲突</strong>：两个设备配置了相同的IP地址，导致网络通信异常。应使用DHCP自动分配或确保手动配置的IP地址唯一。</li>
<li><strong>DNS服务器配置错误</strong>：DNS服务器地址填写错误，导致能ping通IP但无法通过域名访问网站。</li>
</ul>
<p><strong>2. TCP与UDP误用</strong></p>
<ul>
<li><strong>把UDP当TCP用</strong>：在对可靠性要求高的场景（如文件传输）使用UDP，导致数据丢失或乱序。文件传输应使用TCP。</li>
<li><strong>把TCP当UDP用</strong>：在实时性要求高的场景（如视频直播）使用TCP，导致延迟增大。实时音视频应使用UDP。</li>
<li><strong>混淆端口号</strong>：HTTP使用80端口，HTTPS使用443端口，FTP使用21端口，DNS使用53端口。混淆端口会导致服务无法访问。</li>
<li><strong>忽视防火墙</strong>：配置了正确的IP和端口，但防火墙规则阻止了通信，导致连接失败。遇到连接问题时应检查防火墙设置。</li>
</ul>
<p><strong>3. 常见误解</strong></p>
<ul>
<li><strong>TCP一定比UDP好</strong>：错误。TCP和UDP各有适用场景，没有绝对的好坏之分。</li>
<li><strong>三次握手完成后数据才开始传输</strong>：不完全正确。虽然三次握手后建立连接，但TCP的慢启动机制会导致初始传输速率较低。</li>
<li><strong>端口号越大越安全</strong>：错误。端口号只是标识，安全性取决于应用层协议和防火墙配置。</li>
</ul>`,exercises:[{id:"n3-3-1",type:"single",question:"面向连接的可靠传输协议是？",options:["IP","TCP","UDP","HTTP"],answer:"B",explanation:"TCP是面向连接的、可靠的传输协议。",score:2}]},{id:"n3-4",title:"3.4 子网划分与计算",description:"学习子网掩码、网络地址、广播地址的计算方法",content:`<h3>3.4.1 子网划分的概念</h3>
<p><strong>子网划分</strong>：将一个大的网络划分为多个小的子网，以提高IP地址的利用率和网络管理的灵活性。</p>
<p>子网划分的核心是通过<strong>子网掩码</strong>将IP地址分为<strong>网络部分</strong>和<strong>主机部分</strong>。</p>

<h3>3.4.2 子网掩码的作用</h3>
<p><strong>子网掩码</strong>是一个32位的二进制数，与IP地址进行逐位"与"运算，得出网络地址。</p>
<ul>
<li><strong>子网掩码中为1的位</strong>：对应IP地址的网络部分</li>
<li><strong>子网掩码中为0的位</strong>：对应IP地址的主机部分</li>
</ul>
<p>常见默认子网掩码：</p>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">地址类别</th><th class="border px-4 py-2">默认子网掩码</th><th class="border px-4 py-2">CIDR表示</th></tr>
<tr><td class="border px-4 py-2">A类</td><td class="border px-4 py-2">255.0.0.0</td><td class="border px-4 py-2">/8</td></tr>
<tr><td class="border px-4 py-2">B类</td><td class="border px-4 py-2">255.255.0.0</td><td class="border px-4 py-2">/16</td></tr>
<tr><td class="border px-4 py-2">C类</td><td class="border px-4 py-2">255.255.255.0</td><td class="border px-4 py-2">/24</td></tr>
</table>

<h3>3.4.3 CIDR表示法</h3>
<p><strong>CIDR</strong>（Classless Inter-Domain Routing，无类别域间路由）：使用"IP地址/前缀长度"的格式表示网络。</p>
<p>例如：<strong>192.168.1.0/24</strong> 表示前24位是网络位，后8位是主机位。</p>
<p>常见CIDR前缀与子网掩码的对应关系：</p>
<ul>
<li><strong>/24</strong> → 255.255.255.0 → 256个地址（254个可用主机）</li>
<li><strong>/25</strong> → 255.255.255.128 → 128个地址（126个可用主机）</li>
<li><strong>/26</strong> → 255.255.255.192 → 64个地址（62个可用主机）</li>
<li><strong>/27</strong> → 255.255.255.224 → 32个地址（30个可用主机）</li>
<li><strong>/28</strong> → 255.255.255.240 → 16个地址（14个可用主机）</li>
</ul>

<h3>3.4.4 网络地址与广播地址</h3>
<p><strong>网络地址</strong>：主机位全为0的地址，标识网络本身，不可分配给设备。</p>
<p><strong>广播地址</strong>：主机位全为1的地址，用于向子网内所有设备发送数据，不可分配给设备。</p>
<p><strong>可用主机数</strong> = 2<sup>n</sup> - 2（n为主机位数，减2是因为去掉网络地址和广播地址）</p>

<h3>3.4.5 子网计算步骤</h3>
<p>以<strong>IP地址 192.168.1.100/26</strong>为例，计算子网信息：</p>
<ol>
<li><strong>确定子网掩码</strong>：/26 表示前26位为1，即 255.255.255.192</li>
<li><strong>将IP地址转换为二进制</strong>：192.168.1.100 → 11000000.10101000.00000001.01100100</li>
<li><strong>子网掩码二进制</strong>：255.255.255.192 → 11111111.11111111.11111111.11000000</li>
<li><strong>计算网络地址</strong>（逐位与运算）：11000000.10101000.00000001.01000000 → 192.168.1.64</li>
<li><strong>计算广播地址</strong>（主机位全置1）：11000000.10101000.00000001.01111111 → 192.168.1.127</li>
<li><strong>可用IP范围</strong>：192.168.1.65 ~ 192.168.1.126（共62个可用地址）</li>
</ol>

<h3>3.4.6 子网划分示例</h3>
<p><strong>题目</strong>：某公司获得一个C类地址 192.168.10.0/24，需要划分为4个子网，每个子网至少容纳50台主机。</p>
<p><strong>分析</strong>：</p>
<ul>
<li>4个子网 → 需要借2位主机位（2² = 4）</li>
<li>剩余主机位 = 8 - 2 = 6位 → 每个子网可容纳 2⁶ - 2 = 62台主机（满足需求）</li>
<li>新的子网掩码：/24 + 2 = /26，即 255.255.255.192</li>
</ul>
<p><strong>划分结果</strong>：</p>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">子网</th><th class="border px-4 py-2">网络地址</th><th class="border px-4 py-2">可用IP范围</th><th class="border px-4 py-2">广播地址</th></tr>
<tr><td class="border px-4 py-2">子网1</td><td class="border px-4 py-2">192.168.10.0/26</td><td class="border px-4 py-2">.1 ~ .62</td><td class="border px-4 py-2">192.168.10.63</td></tr>
<tr><td class="border px-4 py-2">子网2</td><td class="border px-4 py-2">192.168.10.64/26</td><td class="border px-4 py-2">.65 ~ .126</td><td class="border px-4 py-2">192.168.10.127</td></tr>
<tr><td class="border px-4 py-2">子网3</td><td class="border px-4 py-2">192.168.10.128/26</td><td class="border px-4 py-2">.129 ~ .190</td><td class="border px-4 py-2">192.168.10.191</td></tr>
<tr><td class="border px-4 py-2">子网4</td><td class="border px-4 py-2">192.168.10.192/26</td><td class="border px-4 py-2">.193 ~ .254</td><td class="border px-4 py-2">192.168.10.255</td></tr>
</table>`,exercises:[{id:"n3-4-1",type:"single",question:"CIDR表示法中，/24对应的子网掩码是？",options:["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],answer:"C",explanation:"/24表示前24位为网络位，子网掩码为255.255.255.0。",score:2},{id:"n3-4-2",type:"single",question:"子网掩码为255.255.255.192时，每个子网最多容纳多少台主机？",options:["30","62","126","254"],answer:"B",explanation:"255.255.255.192即/26，主机位为6位，可用主机数 = 2⁶ - 2 = 62。",score:2},{id:"n3-4-3",type:"fill",question:"IP地址192.168.1.100/26所在的网络地址是______。",answer:"192.168.1.64",explanation:"/26的子网掩码为255.255.255.192，与IP地址逐位与运算得网络地址192.168.1.64。",score:3},{id:"n3-4-4",type:"single",question:"某网络需要划分8个子网，至少需要借用几位主机位？",options:["2位","3位","4位","8位"],answer:"B",explanation:"2³ = 8，因此需要借用3位主机位来划分8个子网。",score:2}]},{id:"n3-5",title:"3.5 IPv6简介",description:"了解IPv6地址格式、类型及与IPv4的区别",content:`<h3>3.5.1 IPv6概述</h3>
<p><strong>IPv6</strong>（Internet Protocol Version 6）：下一代互联网协议，旨在解决IPv4地址枯竭问题。</p>
<p><strong>IPv4地址空间</strong>：32位，约43亿个地址（2³²）</p>
<p><strong>IPv6地址空间</strong>：128位，约3.4×10³⁸个地址（2¹²⁸），几乎取之不尽</p>

<h3>3.5.2 IPv6地址格式</h3>
<p>IPv6地址由128位二进制数组成，通常表示为<strong>8组十六进制数</strong>，每组用冒号分隔：</p>
<pre><code class="code-block">2001:0db8:0000:0000:0000:ff00:0042:8329</code></pre>
<p><strong>简化规则</strong>：</p>
<ul>
<li><strong>省略前导零</strong>：每组中的前导零可以省略，如 0042 → 42，0db8 → db8</li>
<li><strong>连续零压缩</strong>：连续的零组可以用双冒号"::"表示（但只能使用一次）</li>
</ul>
<p>简化后的地址：</p>
<pre><code class="code-block">2001:db8::ff00:42:8329</code></pre>

<h3>3.5.3 IPv6地址类型</h3>
<ul>
<li><strong>单播地址（Unicast）</strong>：标识单个接口，发送到单播地址的数据包只被一个设备接收</li>
<li><strong>组播地址（Multicast）</strong>：标识一组接口，发送到组播地址的数据包被组内所有设备接收</li>
<li><strong>任播地址（Anycast）</strong>：标识一组接口，发送到任播地址的数据包只被最近的一个设备接收</li>
</ul>
<p><strong>注意</strong>：IPv6中没有广播地址，广播功能由组播代替。</p>

<h3>3.5.4 IPv6特殊地址</h3>
<ul>
<li><strong>::1/128</strong>：环回地址（相当于IPv4的127.0.0.1）</li>
<li><strong>::/128</strong>：未指定地址（相当于IPv4的0.0.0.0）</li>
<li><strong>fe80::/10</strong>：链路本地地址，仅在同一链路上有效</li>
<li><strong>fc00::/7</strong>：唯一本地地址（相当于IPv4私有地址）</li>
</ul>

<h3>3.5.5 IPv6与IPv4对比</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">比较项目</th><th class="border px-4 py-2">IPv4</th><th class="border px-4 py-2">IPv6</th></tr>
<tr><td class="border px-4 py-2">地址长度</td><td class="border px-4 py-2">32位</td><td class="border px-4 py-2">128位</td></tr>
<tr><td class="border px-4 py-2">地址数量</td><td class="border px-4 py-2">约43亿</td><td class="border px-4 py-2">约3.4×10³⁸</td></tr>
<tr><td class="border px-4 py-2">表示方式</td><td class="border px-4 py-2">点分十进制</td><td class="border px-4 py-2">冒号分隔十六进制</td></tr>
<tr><td class="border px-4 py-2">地址类型</td><td class="border px-4 py-2">单播、广播、组播</td><td class="border px-4 py-2">单播、组播、任播</td></tr>
<tr><td class="border px-4 py-2">安全性</td><td class="border px-4 py-2">可选（IPSec）</td><td class="border px-4 py-2">内置IPSec支持</td></tr>
<tr><td class="border px-4 py-2">QoS</td><td class="border px-4 py-2">有限支持</td><td class="border px-4 py-2">更好的流标签机制</td></tr>
<tr><td class="border px-4 py-2">自动配置</td><td class="border px-4 py-2">需要DHCP</td><td class="border px-4 py-2">支持无状态自动配置</td></tr>
</table>

<h3>3.5.6 为什么需要IPv6</h3>
<ul>
<li><strong>地址枯竭</strong>：IPv4地址已基本耗尽（IANA于2011年分配完毕，各区域注册机构随后陆续耗尽），全球互联网发展需要更多地址</li>
<li><strong>物联网需求</strong>：智能家居、传感器、可穿戴设备等需要海量IP地址</li>
<li><strong>更好的安全性</strong>：IPv6原生支持IPSec，提供端到端加密</li>
<li><strong>更高效的路由</strong>：简化报文头部，提高路由效率</li>
<li><strong>即插即用</strong>：支持无状态地址自动配置，设备接入网络即可自动获取地址</li>
</ul>`,exercises:[{id:"n3-5-1",type:"single",question:"IPv6地址的长度是多少位？",options:["32位","64位","128位","256位"],answer:"C",explanation:"IPv6地址由128位二进制数组成，远大于IPv4的32位。",score:2},{id:"n3-5-2",type:"single",question:"IPv6中没有而IPv4中有的地址类型是？",options:["单播","组播","广播","任播"],answer:"C",explanation:"IPv6中没有广播地址，广播功能由组播替代。IPv6的地址类型为单播、组播和任播。",score:2},{id:"n3-5-3",type:"fill",question:"IPv6中表示环回地址（相当于IPv4的127.0.0.1）的是______。",answer:"::1",explanation:"::1/128是IPv6的环回地址，相当于IPv4的127.0.0.1。",score:2}]}]},{id:"n4",title:"第四章：常用网络服务",lessons:[{id:"n4-1",title:"4.1 HTTP协议",description:"学习超文本传输协议",content:`<h3>4.1.1 HTTP概述</h3>
<p><strong>HTTP</strong>：HyperText Transfer Protocol，超文本传输协议。</p>
<p>HTTP是用于在Web浏览器和服务器之间传输超文本的协议。</p>

<h3>4.1.2 HTTP工作原理</h3>
<ol>
<li>客户端发送HTTP请求</li>
<li>服务器处理请求</li>
<li>服务器返回HTTP响应</li>
<li>客户端接收响应并显示</li>
</ol>

<h3>4.1.3 HTTP请求方法</h3>
<ul>
<li><strong>GET</strong>：获取资源</li>
<li><strong>POST</strong>：提交数据</li>
<li><strong>PUT</strong>：更新资源</li>
<li><strong>DELETE</strong>：删除资源</li>
</ul>

<h3>4.1.4 HTTP状态码</h3>
<ul>
<li><strong>200</strong>：请求成功</li>
<li><strong>301</strong>：永久重定向</li>
<li><strong>404</strong>：资源未找到</li>
<li><strong>500</strong>：服务器错误</li>
</ul>`,exercises:[{id:"n4-1-1",type:"single",question:"HTTP状态码404表示什么？",options:["请求成功","资源未找到","服务器错误","重定向"],answer:"B",explanation:"HTTP状态码404表示请求的资源未找到。",score:2}]},{id:"n4-2",title:"4.2 FTP协议",description:"学习文件传输协议",content:`<h3>4.2.1 FTP概述</h3>
<p><strong>FTP</strong>：File Transfer Protocol，文件传输协议。</p>
<p>FTP用于在网络上进行文件传输。</p>

<h3>4.2.2 FTP工作模式</h3>
<ul>
<li><strong>主动模式</strong>：服务器主动连接客户端</li>
<li><strong>被动模式</strong>：客户端主动连接服务器</li>
</ul>

<h3>4.2.3 FTP端口</h3>
<ul>
<li><strong>21端口</strong>：控制连接端口</li>
<li><strong>20端口</strong>：数据连接端口（主动模式）</li>
</ul>`,exercises:[{id:"n4-2-1",type:"fill",question:"FTP的控制连接端口是______。",answer:"21",explanation:"FTP使用21端口作为控制连接端口。",score:2}]},{id:"n4-3",title:"4.3 DNS服务",description:"学习域名系统",content:`<h3>4.3.1 DNS概述</h3>
<p><strong>DNS</strong>：Domain Name System，域名系统。</p>
<p>DNS用于将域名转换为IP地址。</p>

<h3>4.3.2 DNS工作原理</h3>
<p>DNS解析采用<strong>递归查询</strong>与<strong>迭代查询</strong>相结合的方式：</p>
<ol>
<li><strong>本地DNS服务器 → 根DNS服务器</strong>：根DNS服务器返回顶级域DNS服务器地址（如.com域服务器）</li>
<li><strong>本地DNS服务器 → 顶级域DNS服务器</strong>：顶级域DNS服务器返回权威DNS服务器地址</li>
<li><strong>本地DNS服务器 → 权威DNS服务器</strong>：权威DNS服务器返回最终IP地址</li>
<li>本地DNS服务器将IP地址返回给客户端</li>
</ol>

<h3>4.3.3 DNS记录类型</h3>
<ul>
<li><strong>A记录</strong>：域名→IP地址</li>
<li><strong>CNAME记录</strong>：域名→域名</li>
<li><strong>MX记录</strong>：邮件服务器</li>
<li><strong>NS记录</strong>：域名服务器</li>
</ul>

<h3>⚠️ 常见错误</h3>
<p><strong>1. DNS相关常见问题</strong></p>
<ul>
<li><strong>DNS服务器配置错误</strong>：将DNS服务器地址设置为无效地址或未配置DNS，导致只能通过IP地址访问网站而无法使用域名。解决方法是设置正确的DNS服务器地址（如114.114.114.114或8.8.8.8）。</li>
<li><strong>DNS缓存污染</strong>：本地DNS缓存中存储了错误的域名解析记录，导致访问网站时被导向错误的IP地址。可通过 <code>ipconfig /flushdns</code> 清除DNS缓存解决。</li>
<li><strong>DNS劫持</strong>：攻击者篡改DNS解析结果，将用户引导到钓鱼网站。应使用安全的DNS服务器并启用DNSSEC验证。</li>
<li><strong>域名解析慢</strong>：DNS服务器响应慢或网络延迟高，导致首次访问网站时加载缓慢。可更换更快的DNS服务器或使用CDN加速。</li>
<li><strong>DNS服务器不可达</strong>：配置的DNS服务器宕机或网络不通，导致所有域名解析失败。应配置多个备用DNS服务器（主DNS和辅助DNS）。</li>
</ul>
<p><strong>2. HTTP状态码常见误解</strong></p>
<ul>
<li><strong>301和302的区别</strong>：301是<strong>永久重定向</strong>，浏览器会缓存重定向结果，下次直接访问新地址；302是<strong>临时重定向</strong>，浏览器每次都会重新请求原地址。混淆使用可能导致SEO问题。</li>
<li><strong>404不一定表示页面不存在</strong>：404状态码表示服务器找不到请求的资源，但也可能是因为URL拼写错误、路由配置错误、或者文件权限问题。</li>
<li><strong>500错误不是客户端问题</strong>：500 Internal Server Error表示服务器内部错误，与客户端无关。常见原因包括代码错误、数据库连接失败、配置文件错误等。</li>
<li><strong>200不一定是成功</strong>：200状态码仅表示HTTP请求成功，但如果响应内容是错误页面（如自定义404页面），表面上看是200但实际内容不对。</li>
<li><strong>403和401的区别</strong>：401 Unauthorized表示<strong>未认证</strong>（需要登录），403 Forbidden表示<strong>已认证但无权限</strong>（已登录但权限不足）。</li>
</ul>
<p><strong>3. 网络服务常见排查误区</strong></p>
<ul>
<li><strong>能ping通不代表服务正常</strong>：ping只测试ICMP连通性，即使ping通，HTTP服务也可能因为端口未开放或服务未启动而无法访问。</li>
<li><strong>防火墙关闭不等于安全</strong>：关闭防火墙虽然能解决连接问题，但会使系统暴露在风险中。正确做法是配置防火墙规则允许特定端口。</li>
<li><strong>端口号不是越大越好</strong>：端口号范围0-65535，其中0-1023为知名端口（需要管理员权限），选择端口时应避免与已知服务冲突。</li>
</ul>`,exercises:[{id:"n4-3-1",type:"single",question:"DNS的作用是？",options:["文件传输","域名解析","邮件发送","网页浏览"],answer:"B",explanation:"DNS用于将域名转换为IP地址，即域名解析。",score:2}]},{id:"n4-4",title:"4.4 常用网络命令",description:"学习ping、ipconfig、tracert、netstat、nslookup等常用网络诊断命令",content:`<h3>4.4.1 ping命令</h3>
<p><strong>ping</strong>（Packet Internet Groper）：用于测试网络连通性和延迟。</p>
<p>工作原理：向目标主机发送ICMP回显请求，等待目标主机回应ICMP回显应答。</p>
<p><strong>常用用法</strong>：</p>
<pre><code class="code-block">ping www.baidu.com         # 测试与百度服务器的连通性
ping -t 192.168.1.1        # 持续ping，直到手动停止（Ctrl+C）
ping -n 10 192.168.1.1     # 发送10个数据包后停止
ping -l 1024 192.168.1.1   # 发送1024字节的数据包</code></pre>
<p><strong>命令输出示例</strong>：</p>
<pre><code class="code-block">C:\\Users>ping www.baidu.com

正在 Ping www.a.shifen.com [110.242.68.66] 具有 32 字节的数据:
来自 110.242.68.66 的回复: 字节=32 时间=14ms TTL=54
来自 110.242.68.66 的回复: 字节=32 时间=13ms TTL=54
来自 110.242.68.66 的回复: 字节=32 时间=14ms TTL=54
来自 110.242.68.66 的回复: 字节=32 时间=13ms TTL=54

110.242.68.66 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)
往返行程的估计时间(以毫秒为单位):
    最短 = 13ms，最长 = 14ms，平均 = 13ms</code></pre>
<p><strong>关键指标</strong>：</p>
<ul>
<li><strong>时间</strong>：延迟时间，越小越好</li>
<li><strong>TTL</strong>：生存时间，每经过一个路由器减1</li>
<li><strong>丢失率</strong>：丢包率，0%表示网络通畅</li>
</ul>
<p><strong>典型故障场景</strong>：</p>
<ul>
<li><strong>请求超时</strong>：目标不可达，可能是网络不通或防火墙拦截</li>
<li><strong>Ping 127.0.0.1 不通</strong>：TCP/IP协议栈有问题</li>
<li><strong>Ping 网关不通</strong>：本地网络连接问题</li>
</ul>

<h3>4.4.2 ipconfig命令</h3>
<p><strong>ipconfig</strong>（Windows）/ <strong>ifconfig</strong>（Linux/macOS）：查看和配置网络接口信息。</p>
<p><strong>常用用法</strong>：</p>
<pre><code class="code-block">ipconfig                    # 查看基本网络配置信息
ipconfig /all               # 查看详细网络配置（MAC地址、DNS等）
ipconfig /release           # 释放当前IP地址
ipconfig /renew             # 重新获取IP地址
ipconfig /flushdns          # 清除DNS缓存</code></pre>
<p><strong>命令输出示例（ipconfig /all）</strong>：</p>
<pre><code class="code-block">C:\\Users>ipconfig

以太网适配器 以太网:

   连接特定的 DNS 后缀 . . . . . . . :
   本地链接 IPv6 地址 . . . . . . . . : fe80::a1b2:c3d4:e5f6:7890%12
   IPv4 地址 . . . . . . . . . . . . : 192.168.1.100
   子网掩码  . . . . . . . . . . . . : 255.255.255.0
   默认网关. . . . . . . . . . . . . : 192.168.1.1</code></pre>
<p><strong>关键信息</strong>：</p>
<ul>
<li><strong>IPv4地址</strong>：本机的IP地址</li>
<li><strong>子网掩码</strong>：用于区分网络位和主机位</li>
<li><strong>默认网关</strong>：通往其他网络的出口</li>
<li><strong>DNS服务器</strong>：域名解析服务器地址</li>
</ul>

<h3>4.4.3 tracert命令</h3>
<p><strong>tracert</strong>（Windows）/ <strong>traceroute</strong>（Linux/macOS）：追踪数据包到达目标主机所经过的路径。</p>
<p><strong>常用用法</strong>：</p>
<pre><code class="code-block">tracert www.baidu.com       # 追踪到百度服务器的路由路径
tracert -d 192.168.1.1      # 不解析主机名，只显示IP地址
tracert -h 10 目标地址       # 设置最大跳数为10</code></pre>
<p><strong>命令输出示例</strong>：</p>
<pre><code class="code-block">C:\\Users>tracert www.baidu.com

通过最多 30 个跃点跟踪到 www.a.shifen.com [110.242.68.66] 的路由:

  1     1ms     1ms     1ms  192.168.1.1
  2     5ms     4ms     5ms  10.74.22.1
  3     7ms     6ms     7ms  221.13.62.53
  4     *        *        *    请求超时。
  5    12ms    13ms    12ms  110.242.68.66

跟踪完成。</code></pre>
<p><strong>分析要点</strong>：</p>
<ul>
<li><strong>每一行</strong>：表示经过的一个路由器（跳）</li>
<li><strong>*号</strong>：表示该跳超时，可能是路由器不响应ICMP</li>
<li><strong>延迟逐渐增大</strong>：正常现象，距离越远延迟越大</li>
<li><strong>突然中断</strong>：可能是网络故障点所在</li>
</ul>

<h3>4.4.4 netstat命令</h3>
<p><strong>netstat</strong>：显示网络连接、路由表和网络接口统计信息。</p>
<p><strong>常用用法</strong>：</p>
<pre><code class="code-block">netstat -ano                # 查看所有连接和监听端口，显示PID
netstat -r                  # 查看路由表
netstat -s                  # 查看网络统计信息
netstat -an | findstr "80"  # 查找与80端口相关的连接</code></pre>
<p><strong>命令输出示例</strong>：</p>
<pre><code class="code-block">C:\\Users>netstat -ano | findstr "443"

TCP    192.168.1.100:54231    13.107.42.14:443      ESTABLISHED     1234
TCP    192.168.1.100:54232    110.242.68.66:443     ESTABLISHED     5678</code></pre>
<p><strong>连接状态说明</strong>：</p>
<ul>
<li><strong>LISTENING</strong>：正在监听端口，等待连接</li>
<li><strong>ESTABLISHED</strong>：已建立连接，正在通信</li>
<li><strong>TIME_WAIT</strong>：连接已关闭，等待清理</li>
<li><strong>CLOSE_WAIT</strong>：对端已关闭，等待本端关闭</li>
</ul>

<h3>4.4.5 nslookup命令</h3>
<p><strong>nslookup</strong>：查询DNS记录，用于域名解析故障排查。</p>
<p><strong>常用用法</strong>：</p>
<pre><code class="code-block">nslookup www.baidu.com              # 查询域名对应的IP地址
nslookup -type=mx baidu.com         # 查询MX邮件交换记录
nslookup -type=ns baidu.com         # 查询NS域名服务器记录
nslookup 110.242.68.66              # 反向查询：IP地址→域名</code></pre>
<p><strong>命令输出示例</strong>：</p>
<pre><code class="code-block">C:\\Users>nslookup www.baidu.com

服务器:  dns.google
Address:  8.8.8.8

非权威应答:
名称:    www.a.shifen.com
Addresses:  110.242.68.66
          110.242.68.65
Aliases:  www.baidu.com</code></pre>
<p><strong>故障排查</strong>：</p>
<ul>
<li><strong>无法解析域名</strong>：检查DNS服务器配置是否正确</li>
<li><strong>返回错误IP</strong>：可能是DNS劫持或缓存问题</li>
<li><strong>非权威应答</strong>：表示结果来自DNS缓存而非权威服务器</li>
</ul>

<h3>4.4.6 网络故障排查实战思路</h3>
<p>当遇到网络问题时，建议按以下顺序排查：</p>
<ol>
<li><strong>检查物理连接</strong>：网线是否插好、网卡指示灯是否正常</li>
<li><strong>查看本机IP配置</strong>：使用 <code>ipconfig</code> 确认IP地址、子网掩码、网关是否正确</li>
<li><strong>测试本机TCP/IP协议栈</strong>：<code>ping 127.0.0.1</code>，确认协议栈正常</li>
<li><strong>测试局域网连通性</strong>：<code>ping 网关地址</code>，确认局域网通信正常</li>
<li><strong>测试外网连通性</strong>：<code>ping 8.8.8.8</code>（Google DNS），确认外网可达</li>
<li><strong>测试DNS解析</strong>：<code>nslookup www.baidu.com</code>，确认域名解析正常</li>
<li><strong>追踪路由路径</strong>：<code>tracert 目标地址</code>，定位故障节点</li>
<li><strong>检查端口连接</strong>：<code>netstat -ano</code>，确认应用程序端口状态</li>
</ol>`,exercises:[{id:"n4-4-1",type:"single",question:"用于测试网络连通性的命令是？",options:["ipconfig","ping","netstat","nslookup"],answer:"B",explanation:"ping命令用于测试网络连通性，通过发送ICMP回显请求来检测目标主机是否可达。",score:2},{id:"n4-4-2",type:"single",question:"Windows系统中查看本机IP地址的命令是？",options:["ping","tracert","ipconfig","netstat"],answer:"C",explanation:"ipconfig是Windows系统中查看网络配置信息的命令，包括IP地址、子网掩码、默认网关等。",score:2},{id:"n4-4-3",type:"single",question:"用于追踪数据包到达目标主机所经过路径的命令是？",options:["ping","ipconfig","nslookup","tracert"],answer:"D",explanation:"tracert（Windows）或traceroute（Linux）用于追踪数据包到达目标主机所经过的路由路径。",score:2},{id:"n4-4-4",type:"single",question:"清除DNS缓存应使用哪个命令？",options:["ipconfig /release","ipconfig /renew","ipconfig /flushdns","ipconfig /all"],answer:"C",explanation:"ipconfig /flushdns用于清除本地DNS缓存，解决DNS解析异常问题。",score:2},{id:"n4-4-5",type:"fill",question:"查询域名www.example.com的IP地址，应使用命令______。",answer:"nslookup www.example.com",explanation:"nslookup命令用于查询DNS记录，可以查询域名对应的IP地址。",score:2}]}]},{id:"n5",title:"第五章：网络安全",lessons:[{id:"n5-1",title:"5.1 网络安全概述",description:"了解网络安全的基本概念",content:`<h3>5.1.1 网络安全的概念</h3>
<p><strong>网络安全</strong>：保护网络系统中的硬件、软件和数据，防止其被未经授权的访问、使用、修改或破坏。</p>

<h3>5.1.2 网络安全威胁</h3>
<ul>
<li><strong>黑客攻击</strong>：非法入侵系统</li>
<li><strong>病毒</strong>：恶意软件</li>
<li><strong>木马</strong>：伪装成合法程序的恶意软件</li>
<li><strong>钓鱼</strong>：欺骗用户泄露敏感信息</li>
<li><strong>DDoS攻击</strong>：分布式拒绝服务攻击</li>
</ul>

<h3>5.1.3 网络安全原则</h3>
<ul>
<li><strong>保密性</strong>：确保信息不被泄露</li>
<li><strong>完整性</strong>：确保信息不被篡改</li>
<li><strong>可用性</strong>：确保系统随时可用</li>
</ul>

<h3>💡 实战案例：钓鱼邮件攻击分析</h3>
<p><strong>场景描述</strong>：某公司员工小王收到一封来自"公司IT部门"的邮件，标题为"【紧急】邮箱存储空间已满，请立即处理"，邮件内容附有一个链接，要求点击后登录处理。</p>
<p><strong>攻击手法分析</strong>：</p>
<ol>
<li><strong>伪装身份</strong>：攻击者冒充公司IT部门，邮件发件人显示为"IT-Support &lt;it-support@company-secure.com&gt;"，域名看似合法但实际是攻击者注册的钓鱼域名</li>
<li><strong>制造紧迫感</strong>：使用"紧急"等字眼，迫使受害者在思考不充分的情况下做出反应</li>
<li><strong>钓鱼链接</strong>：邮件中的链接指向一个仿冒的邮箱登录页面，界面与真实登录页完全一致，但网址为"mail.company.com.xxx.net"（注意多出的后缀）</li>
<li><strong>信息窃取</strong>：一旦小王输入账号和密码，攻击者立即获取了凭据</li>
</ol>
<p><strong>防范措施</strong>：</p>
<ul>
<li><strong>检查发件人地址</strong>：仔细核对发件人邮箱域名，注意是否有拼写错误或多余后缀</li>
<li><strong>不点击可疑链接</strong>：将鼠标悬停在链接上查看实际URL，看是否指向合法网站</li>
<li><strong>直接访问官网</strong>：不通过邮件链接登录，而是手动输入网址或使用收藏夹</li>
<li><strong>确认邮件来源</strong>：如收到可疑邮件，通过电话或其他方式联系发送者确认</li>
<li><strong>启用双因素认证</strong>：即使密码泄露，攻击者也无法登录</li>
<li><strong>安全培训</strong>：定期对员工进行网络安全意识培训，了解最新钓鱼手法</li>
</ul>
<p><strong>案例启示</strong>：钓鱼攻击往往是利用人性弱点（信任、恐惧、紧迫感）而非技术漏洞，因此提高安全意识是防范钓鱼攻击最有效的手段。</p>`,exercises:[{id:"n5-1-1",type:"single",question:"网络安全的三大原则不包括？",options:["保密性","完整性","可用性","开放性"],answer:"D",explanation:"网络安全的三大原则是保密性、完整性和可用性，不包括开放性。",score:2}]},{id:"n5-2",title:"5.2 防火墙技术",description:"学习防火墙的基本原理",content:`<h3>5.2.1 防火墙的概念</h3>
<p><strong>防火墙</strong>：位于网络边界，用于控制进出网络的数据流。</p>

<h3>5.2.2 防火墙的类型</h3>
<ul>
<li><strong>包过滤防火墙</strong>：根据IP地址、端口过滤数据包</li>
<li><strong>应用层防火墙</strong>：根据应用程序协议过滤</li>
<li><strong>状态检测防火墙</strong>：跟踪连接状态</li>
</ul>

<h3>5.2.3 防火墙规则</h3>
<ul>
<li><strong>允许</strong>：允许特定流量通过</li>
<li><strong>拒绝</strong>：拒绝特定流量通过</li>
<li><strong>默认允许</strong>：只拒绝指定的流量</li>
<li><strong>默认拒绝</strong>：只允许指定的流量</li>
</ul>`,exercises:[{id:"n5-2-1",type:"single",question:"根据IP地址和端口过滤数据包的防火墙是？",options:["应用层防火墙","状态检测防火墙","包过滤防火墙","代理防火墙"],answer:"C",explanation:"包过滤防火墙根据IP地址和端口过滤数据包。",score:2}]},{id:"n5-3",title:"5.3 加密技术",description:"学习数据加密的基本原理",content:`<h3>5.3.1 加密的概念</h3>
<p><strong>加密</strong>：将明文转换为密文，防止信息被窃取。</p>

<h3>5.3.2 密码学算法分类</h3>
<p>（注：MD5和SHA属于哈希算法，用于验证数据完整性，不属于加密算法；DES、AES、RSA属于加密算法）</p>
<ul>
<li><strong>对称加密</strong>：加密和解密使用相同的密钥</li>
<li><strong>非对称加密</strong>：加密和解密使用不同的密钥</li>
</ul>

<h3>5.3.3 常见加密算法</h3>
<ul>
<li><strong>DES</strong>：对称加密，已过时</li>
<li><strong>AES</strong>：对称加密，目前广泛使用</li>
<li><strong>RSA</strong>：非对称加密</li>
<li><strong>MD5</strong>：哈希算法，用于验证数据完整性</li>
<li><strong>SHA</strong>：哈希算法，比MD5更安全</li>
</ul>`,exercises:[{id:"n5-3-1",type:"single",question:"加密和解密使用相同密钥的加密方式是？",options:["对称加密","非对称加密","哈希加密","数字签名"],answer:"A",explanation:"对称加密使用相同的密钥进行加密和解密。",score:2}]},{id:"n5-4",title:"5.4 DHCP协议",description:"学习动态主机配置协议的工作原理",content:`<h3>5.4.1 DHCP概述</h3>
<p><strong>DHCP</strong>（Dynamic Host Configuration Protocol，动态主机配置协议）：用于自动为网络中的设备分配IP地址、子网掩码、默认网关、DNS服务器等网络参数。</p>
<p><strong>为什么需要DHCP？</strong></p>
<ul>
<li>减少手动配置IP地址的工作量</li>
<li>避免IP地址冲突（同一网络中有两个设备使用相同IP）</li>
<li>有效管理IP地址资源（回收和重新分配）</li>
<li>支持移动设备即插即用</li>
</ul>

<h3>5.4.2 DHCP工作原理</h3>
<p>DHCP使用<strong>客户端-服务器</strong>模型，通过UDP协议的<strong>67端口</strong>（服务器）和<strong>68端口</strong>（客户端）通信。</p>

<h3>5.4.3 DHCP四步过程（DORA）</h3>
<p>DORA是DHCP获取IP地址的四个步骤的缩写：</p>
<ol>
<li><strong>Discover（发现）</strong>：客户端以广播方式发送DHCP Discover报文，寻找网络中的DHCP服务器</li>
<li><strong>Offer（提供）</strong>：DHCP服务器收到Discover报文后，从IP地址池中选择一个可用的IP地址，以广播方式发送DHCP Offer报文，向客户端提供IP地址</li>
<li><strong>Request（请求）</strong>：客户端收到Offer报文后，以广播方式发送DHCP Request报文，正式请求使用该IP地址（如果有多台DHCP服务器提供地址，客户端选择第一个收到的Offer）</li>
<li><strong>ACK（确认）</strong>：DHCP服务器收到Request报文后，以广播方式发送DHCP ACK报文，确认IP地址分配，同时包含子网掩码、网关、DNS等配置信息</li>
</ol>
<p><strong>DORA过程示意图</strong>：</p>
<pre><code class="code-block">客户端                                 DHCP服务器
  |                                      |
  |--- ① DHCP Discover (广播) ------------>|
  |                                      |
  |<--- ② DHCP Offer (广播) --------------|
  |                                      |
  |--- ③ DHCP Request (广播) ------------>|
  |                                      |
  |<--- ④ DHCP ACK (广播) ----------------|
  |                                      |
  |  客户端获得IP地址，开始使用该地址       |
</code></pre>

<h3>5.4.4 DHCP租约时间</h3>
<p><strong>租约时间（Lease Time）</strong>：DHCP分配的IP地址有使用期限，到期后需要续约。</p>
<ul>
<li><strong>租约更新</strong>：当租约时间达到<strong>50%</strong>时，客户端会向服务器发送DHCP Request报文请求续约</li>
<li><strong>重新绑定</strong>：如果50%时续约失败，当租约时间达到<strong>87.5%</strong>时，客户端会向所有DHCP服务器广播请求续约</li>
<li><strong>租约到期</strong>：如果租约到期仍未续约成功，客户端必须停止使用该IP地址，重新开始DORA过程</li>
<li><strong>提前释放</strong>：客户端可以发送DHCP Release报文主动释放IP地址</li>
</ul>

<h3>5.4.5 静态IP与动态IP分配</h3>
<table class="border-collapse w-full">
<tr><th class="border px-4 py-2">特性</th><th class="border px-4 py-2">静态IP</th><th class="border px-4 py-2">动态IP（DHCP）</th></tr>
<tr><td class="border px-4 py-2">配置方式</td><td class="border px-4 py-2">手动设置</td><td class="border px-4 py-2">自动获取</td></tr>
<tr><td class="border px-4 py-2">IP地址变化</td><td class="border px-4 py-2">固定不变</td><td class="border px-4 py-2">可能变化</td></tr>
<tr><td class="border px-4 py-2">管理难度</td><td class="border px-4 py-2">大（需逐个配置）</td><td class="border px-4 py-2">小（集中管理）</td></tr>
<tr><td class="border px-4 py-2">适用场景</td><td class="border px-4 py-2">服务器、打印机、网络设备</td><td class="border px-4 py-2">普通客户端、移动设备</td></tr>
<tr><td class="border px-4 py-2">冲突风险</td><td class="border px-4 py-2">高（人工配置易出错）</td><td class="border px-4 py-2">低（服务器自动管理）</td></tr>
</table>

<h3>5.4.6 DHCP典型应用场景</h3>
<ul>
<li><strong>家庭网络</strong>：路由器作为DHCP服务器，自动为手机、电脑、电视等设备分配IP地址</li>
<li><strong>企业办公网络</strong>：集中管理员工电脑的网络配置</li>
<li><strong>公共WiFi</strong>：咖啡馆、机场等场所自动为访客分配IP地址</li>
<li><strong>校园网</strong>：为大量学生终端自动分配IP地址</li>
</ul>`,exercises:[{id:"n5-4-1",type:"single",question:"DHCP协议的作用是？",options:["域名解析","文件传输","自动分配IP地址","加密通信"],answer:"C",explanation:"DHCP（动态主机配置协议）用于自动为网络设备分配IP地址等网络参数。",score:2},{id:"n5-4-2",type:"single",question:"DHCP四步过程中的正确顺序是？",options:["Discover → Request → Offer → ACK","Discover → Offer → Request → ACK","Request → Discover → Offer → ACK","Offer → Discover → Request → ACK"],answer:"B",explanation:"DHCP标准四步过程为：Discover（发现）→ Offer（提供）→ Request（请求）→ ACK（确认），缩写为DORA。",score:2},{id:"n5-4-3",type:"single",question:"DHCP租约时间达到多少时，客户端会尝试续约？",options:["25%","50%","75%","87.5%"],answer:"B",explanation:"当租约时间达到50%时，客户端会向DHCP服务器发送续约请求。",score:2},{id:"n5-4-4",type:"fill",question:"DHCP服务器使用UDP端口______，客户端使用UDP端口______。",answer:"67和68",explanation:"DHCP服务器使用UDP 67端口，客户端使用UDP 68端口进行通信。",score:3}]}]}],yt=[{id:"o1",title:"第一章：Excel基础操作",lessons:[{id:"o1-1",title:"1.1 Excel界面介绍",description:"了解Excel的界面组成和基本操作",content:`<h3>1.1.1 Excel界面组成</h3>
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
<p>单元格地址由列字母和行数字组成，如A1、B2、C3等。</p>`,exercises:[{id:"o1-1-1",type:"fill",question:"单元格地址由______和行数字组成。",answer:"列字母",explanation:"单元格地址由列字母（如A、B、C）和行数字（如1、2、3）组成。",score:2}]},{id:"o1-2",title:"1.2 数据输入与编辑",description:"学习在Excel中输入和编辑数据",content:`<h3>1.2.1 数据类型</h3>
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
</ul>`,exercises:[{id:"o1-2-1",type:"single",question:"公式的开头符号是？",options:["#","$","=","@"],answer:"C",explanation:"Excel公式以等号(=)开头。",score:2}]},{id:"o1-3",title:"1.3 单元格格式化",description:"学习单元格格式的设置",content:`<h3>1.3.1 数字格式</h3>
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
</ul>`,exercises:[{id:"o1-3-1",type:"single",question:"显示货币符号的数字格式是？",options:["数值格式","货币格式","百分比格式","日期格式"],answer:"B",explanation:"货币格式用于显示货币符号和数值。",score:2}]},{id:"o1-4",title:"1.4 工作表管理",description:"学习工作表的创建、复制、删除和重命名",content:`<h3>1.4.1 创建和删除工作表</h3>
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
</ul>`,exercises:[{id:"o1-4-1",type:"fill",question:"新建工作表可以点击工作表标签旁的______按钮。",answer:"新建",explanation:"点击工作表标签旁的新建按钮可以创建新的工作表。",score:2}]}]},{id:"o2",title:"第二章：Excel公式与函数",lessons:[{id:"o2-1",title:"2.1 基本公式",description:"学习Excel的基本公式运算",content:`<h3>2.1.1 公式的基本语法</h3>
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
=SUM(A1:A10)  && 删除第5行后自动变为 =SUM(A1:A9)（Excel自动调整）</code></pre>`,exercises:[{id:"o2-1-1",type:"fill",question:"绝对引用的符号是______。",answer:"$",explanation:"在Excel中，使用$符号表示绝对引用，如$A$1。",score:2}]},{id:"o2-2",title:"2.2 常用函数",description:"学习Excel中常用的函数",content:`<h3>2.2.1 数学函数</h3>
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
</ul>`,exercises:[{id:"o2-2-1",type:"single",question:"统计非空单元格数量的函数是？",options:["COUNT","COUNTA","COUNTIF","SUM"],answer:"B",explanation:"COUNTA函数用于统计非空单元格的数量。",score:2}]},{id:"o2-3",title:"2.3 逻辑函数",description:"学习条件判断和逻辑运算",content:`<h3>2.3.1 IF函数</h3>
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
=COUNTIF(E2:E50, "不及格")  && 统计不及格人数</code></pre>`,exercises:[{id:"o2-3-1",type:"code",question:"写出判断A1单元格成绩是否在60-100之间的公式。",answer:"=AND(A1>=60, A1<=100)",explanation:"使用AND函数判断两个条件同时满足。",score:5}]},{id:"o2-4",title:"2.4 VLOOKUP与查找函数",description:"学习VLOOKUP、HLOOKUP及INDEX/MATCH查找函数",content:`<h3>2.4.1 VLOOKUP函数</h3>
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
<pre><code class="code-block">=IFERROR(VLOOKUP(E2, A2:C100, 3, FALSE), "未找到")   && 错误处理</code></pre>`,exercises:[{id:"o2-4-1",type:"single",question:"VLOOKUP函数的第四个参数FALSE表示？",options:["模糊匹配","精确匹配","不匹配","部分匹配"],answer:"B",explanation:"FALSE表示精确匹配，TRUE表示模糊匹配。精确匹配要求查找值与数据完全一致。",score:2},{id:"o2-4-2",type:"code",question:"写出使用VLOOKUP在A2:D100区域中，根据E2单元格的值查找第3列数据（精确匹配）的公式。",answer:"=VLOOKUP(E2, A2:D100, 3, FALSE)",explanation:"VLOOKUP的四个参数：查找值E2，查找区域A2:D100，返回第3列，FALSE精确匹配。",score:5},{id:"o2-4-3",type:"fill",question:"当VLOOKUP找不到查找值时，会返回______错误。",answer:"#N/A",explanation:"当查找值在查找区域第一列中不存在时，VLOOKUP返回#N/A错误。",score:2}]}]},{id:"o3",title:"第三章：Excel数据处理",lessons:[{id:"o3-1",title:"3.1 数据排序",description:"学习数据排序的方法",content:`<h3>3.1.1 简单排序</h3>
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
筛选后复制：选中数据 → Alt+;（定位可见单元格）→ Ctrl+C → 粘贴到目标位置</code></pre>`,exercises:[{id:"o3-1-1",type:"single",question:"从小到大排列称为？",options:["升序","降序","乱序","倒序"],answer:"A",explanation:"升序是指从小到大排列。",score:2}]},{id:"o3-2",title:"3.2 数据筛选",description:"学习数据筛选的方法",content:`<h3>3.2.1 自动筛选</h3>
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
</ul>`,exercises:[{id:"o3-2-1",type:"single",question:"筛选出包含特定文本的记录使用哪种筛选？",options:["数字筛选","文本筛选","日期筛选","高级筛选"],answer:"B",explanation:"文本筛选用于筛选文本类型的数据。",score:2}]},{id:"o3-3",title:"3.3 数据透视表",description:"学习数据透视表的创建和使用",content:`<h3>3.3.1 数据透视表的概念</h3>
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
<p><strong>结果解读</strong>：通过透视表可快速发现：哪些产品销量最高、各区域偏好哪些产品、每位销售员的业绩对比，为决策提供数据支撑。</p>`,exercises:[{id:"o3-3-1",type:"fill",question:"用于快速汇总和分析大量数据的工具是______。",answer:"数据透视表",explanation:"数据透视表是Excel中用于快速汇总和分析大量数据的工具。",score:2}]},{id:"o3-4",title:"3.4 图表制作",description:"学习Excel中图表的创建和格式化",content:`<h3>3.4.1 常见图表类型</h3>
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
</ul>`,exercises:[{id:"o3-4-1",type:"single",question:"展示数据随时间变化趋势最适合使用哪种图表？",options:["柱状图","折线图","饼图","条形图"],answer:"B",explanation:"折线图最适合展示数据随时间的变化趋势，因为它能直观地表现数据的上升、下降和波动。",score:2},{id:"o3-4-2",type:"single",question:"展示各部分占总体的比例关系最适合使用哪种图表？",options:["柱状图","折线图","饼图","散点图"],answer:"C",explanation:"饼图专门用于展示各部分占总体的比例关系，能直观显示每个部分的占比大小。",score:2},{id:"o3-4-3",type:"fill",question:"在图表上显示具体数值需要添加______。",answer:"数据标签",explanation:"数据标签可以在图表上直接显示每个数据点的具体数值，方便阅读。",score:2}]},{id:"o3-5",title:"3.5 条件格式",description:"学习使用条件格式突出显示数据",content:`<h3>3.5.1 突出显示单元格规则</h3>
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
</ul>`,exercises:[{id:"o3-5-1",type:"single",question:"在单元格内显示条形图来展示数据大小的功能是？",options:["色阶","数据条","图标集","突出显示"],answer:"B",explanation:"数据条可以在单元格内显示条形图，直观展示数据大小对比。",score:2},{id:"o3-5-2",type:"fill",question:"使用条件格式标记重复值时，可以使用______函数配合公式规则实现。",answer:"COUNTIF",explanation:"COUNTIF函数可以统计某个值出现的次数，当次数大于1时即为重复值。",score:2},{id:"o3-5-3",type:"code",question:"写出条件格式公式：当A1的值大于A1:A100区域平均值时高亮显示。",answer:"=A1>AVERAGE($A$1:$A$100)",explanation:"使用AVERAGE计算平均值，绝对引用确保范围不变，条件格式会自动调整相对引用。",score:5}]}]},{id:"o4",title:"第四章：Word基础操作",lessons:[{id:"o4-1",title:"4.1 Word界面介绍",description:"了解Word的界面组成",content:`<h3>4.1.1 Word界面组成</h3>
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
</ul>`,exercises:[{id:"o4-1-1",type:"single",question:"所见即所得的视图模式是？",options:["大纲视图","草稿视图","页面视图","Web视图"],answer:"C",explanation:"页面视图是所见即所得的视图模式。",score:2}]},{id:"o4-2",title:"4.2 文本编辑与格式化",description:"学习文本的编辑和格式设置",content:`<h3>4.2.1 文本编辑</h3>
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
</ul>`,exercises:[{id:"o4-2-1",type:"single",question:"设置段落第一行缩进的方式是？",options:["左缩进","右缩进","首行缩进","悬挂缩进"],answer:"C",explanation:"首行缩进用于设置段落第一行的缩进。",score:2}]},{id:"o4-3",title:"4.3 文档排版",description:"学习文档的页面设置和排版",content:`<h3>4.3.1 页面设置</h3>
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
</ul>`,exercises:[{id:"o4-3-1",type:"fill",question:"页面顶部的内容称为______。",answer:"页眉",explanation:"页眉是页面顶部的内容，页脚是页面底部的内容。",score:2}]}]},{id:"o5",title:"第五章：Word高级功能",lessons:[{id:"o5-1",title:"5.1 样式的使用",description:"学习使用样式统一文档格式",content:`<h3>5.1.1 样式的概念</h3>
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
</ol>`,exercises:[{id:"o5-1-1",type:"single",question:"一组格式设置的集合称为？",options:["模板","样式","主题","格式"],answer:"B",explanation:"样式是一组格式设置的集合。",score:2}]},{id:"o5-2",title:"5.2 表格操作",description:"学习在Word中创建和编辑表格",content:`<h3>5.2.1 创建表格</h3>
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
</ul>`,exercises:[{id:"o5-2-1",type:"fill",question:"将多个单元格合并为一个的操作是______。",answer:"合并单元格",explanation:"合并单元格可以将多个单元格合并为一个。",score:2}]},{id:"o5-3",title:"5.3 图文混排",description:"学习在Word中插入和编辑图片",content:`<h3>5.3.1 插入图片</h3>
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
</ul>`,exercises:[{id:"o5-3-1",type:"single",question:"文本环绕在图片四周的环绕方式是？",options:["嵌入型","四周型环绕","紧密型环绕","浮于文字上方"],answer:"B",explanation:"四周型环绕使文本环绕在图片四周。",score:2}]}]},{id:"o6",title:"第六章：办公自动化综合应用",lessons:[{id:"o6-1",title:"6.1 Excel与Word的协同",description:"学习Excel和Word之间的数据交互",content:`<h3>6.1.1 复制粘贴数据</h3>
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
</ol>`,exercises:[{id:"o6-1-1",type:"single",question:"批量生成文档的功能是？",options:["复制粘贴","邮件合并","数据透视","模板套用"],answer:"B",explanation:"邮件合并用于批量生成文档，如批量制作邀请函、成绩单等。",score:2}]},{id:"o6-2",title:"6.2 常见办公场景应用",description:"学习实际办公场景中的应用技巧",content:`<h3>6.2.1 制作表格</h3>
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
</ul>`,exercises:[{id:"o6-2-1",type:"essay",question:"简述邮件合并的步骤。",answer:"1. 创建Word模板文档；2. 在Excel中准备数据源；3. 在Word中插入合并域；4. 执行邮件合并操作；5. 生成批量文档。",explanation:"邮件合并用于将Excel数据批量填充到Word模板中，生成个性化文档。",score:10}]}]},{id:"o7",title:"第七章：PowerPoint演示文稿",lessons:[{id:"o7-1",title:"7.1 PowerPoint界面与基本操作",description:"了解PowerPoint界面组成和基本操作",content:`<h3>7.1.1 PowerPoint界面组成</h3>
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
</ul>`,exercises:[{id:"o7-1-1",type:"single",question:"新建幻灯片的快捷键是？",options:["Ctrl+N","Ctrl+M","Ctrl+S","Ctrl+P"],answer:"B",explanation:"Ctrl+M是PowerPoint中新建幻灯片的快捷键，Ctrl+N是新建整个演示文稿。",score:2},{id:"o7-1-2",type:"fill",question:"用于展示流程和关系图的工具是______。",answer:"SmartArt",explanation:"SmartArt是PowerPoint中内置的图形工具，可以快速创建流程图、层次结构图、关系图等。",score:2}]},{id:"o7-2",title:"7.2 幻灯片设计",description:"学习幻灯片主题、布局、切换和动画",content:`<h3>7.2.1 主题和模板</h3>
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
</ul>`,exercises:[{id:"o7-2-1",type:"single",question:"幻灯片之间的过渡动画称为？",options:["动画效果","切换效果","过渡效果","转场效果"],answer:"B",explanation:"切换效果是幻灯片之间的过渡动画，而动画效果是单张幻灯片内元素的动态效果。",score:2},{id:"o7-2-2",type:"single",question:"用于分隔不同章节的版式是？",options:["标题幻灯片","标题和内容","节标题","空白"],answer:"C",explanation:"节标题版式专门用于分隔演示文稿中的不同章节，使结构更清晰。",score:2},{id:"o7-2-3",type:"fill",question:"一组预设的颜色、字体和效果组合称为______。",answer:"主题",explanation:"主题是PowerPoint中预设的颜色、字体和效果组合，可以快速统一演示文稿风格。",score:2}]},{id:"o7-3",title:"7.3 演示技巧",description:"学习幻灯片母版、演示技巧和打印设置",content:`<h3>7.3.1 幻灯片母版</h3>
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
</ul>`,exercises:[{id:"o7-3-1",type:"single",question:"控制所有幻灯片格式的模板称为？",options:["主题","模板","幻灯片母版","版式"],answer:"C",explanation:"幻灯片母版是控制所有幻灯片格式的模板，在母版中修改格式会应用到所有幻灯片。",score:2},{id:"o7-3-2",type:"fill",question:"从当前幻灯片开始放映的快捷键是______。",answer:"Shift+F5",explanation:"Shift+F5从当前幻灯片开始放映，F5则从头开始放映。",score:2},{id:"o7-3-3",type:"single",question:"每张幻灯片建议不超过多少行文字？",options:["3-4行","6-7行","10-12行","15行以上"],answer:"B",explanation:"每张幻灯片建议不超过6-7行文字，保持内容精简，避免观众阅读疲劳。",score:2}]}]}],Ct=[{course:Nt,courseId:"c-language",courseName:"C语言"},{course:St,courseId:"vfp",courseName:"VFP数据库"},{course:Tt,courseId:"network",courseName:"网络知识"},{course:yt,courseId:"office",courseName:"办公自动化"}],Rt=()=>{const e=[];for(const s of Ct)for(const n of s.course)for(const o of n.lessons)if(e.push({id:`${s.courseId}-${o.id}`,courseId:s.courseId,courseName:s.courseName,chapterId:n.id,chapterTitle:n.title,lessonId:o.id,lessonTitle:o.title,content:At(o.content),type:"lesson"}),o.exercises)for(const r of o.exercises)e.push({id:`exercise-${r.id}`,courseId:s.courseId,courseName:s.courseName,chapterId:n.id,chapterTitle:n.title,lessonId:o.id,lessonTitle:o.title,content:`${r.question} ${r.explanation}`,type:"exercise"});return{fuse:new dt(e,{keys:[{name:"lessonTitle",weight:.4},{name:"content",weight:.3},{name:"chapterTitle",weight:.2},{name:"courseName",weight:.1}],threshold:.4,distance:100,minMatchCharLength:1,includeScore:!0}),contents:e}};function At(e){return e.replace(/<[^>]*>/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/\\n/g," ").replace(/\s+/g," ").trim()}const It=({isOpen:e,onClose:i})=>{const[s,n]=m.useState(""),[o,r]=m.useState(0),d=R(),l=m.useRef(null),{fuse:c}=m.useMemo(()=>Rt(),[]),x=m.useMemo(()=>!s.trim()||!c?[]:c.search(s).slice(0,20),[s,c]),p=a=>{switch(a){case"c-language":return t.jsx(A,{className:"w-4 h-4"});case"vfp":return t.jsx(U,{className:"w-4 h-4"});case"network":return t.jsx(_,{className:"w-4 h-4"});case"office":return t.jsx(M,{className:"w-4 h-4"});default:return t.jsx(st,{className:"w-4 h-4"})}},E=a=>{switch(a){case"c-language":return"text-blue-600 bg-blue-50";case"vfp":return"text-green-600 bg-green-50";case"network":return"text-purple-600 bg-purple-50";case"office":return"text-orange-600 bg-orange-50";default:return"text-gray-600 bg-gray-50"}},h=a=>{const g=a.item;d(`/${g.courseId}#${g.lessonId}`),i(),n(""),r(0)};return m.useEffect(()=>{e?setTimeout(()=>{var a;return(a=l.current)==null?void 0:a.focus()},50):(n(""),r(0))},[e]),m.useEffect(()=>{const a=g=>{if(e){if(g.key==="Escape"){i();return}if((g.ctrlKey||g.metaKey)&&g.key==="k"){g.preventDefault(),i();return}g.key==="ArrowDown"?(g.preventDefault(),r(f=>Math.min(f+1,x.length-1))):g.key==="ArrowUp"?(g.preventDefault(),r(f=>Math.max(f-1,0))):g.key==="Enter"&&x.length>0&&(g.preventDefault(),h(x[o]))}};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e,x,o,i]),e?t.jsxs("div",{className:"fixed inset-0 z-[100]",children:[t.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm",onClick:i}),t.jsx("div",{className:"fixed inset-x-0 top-[15%] mx-auto max-w-2xl px-4",children:t.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden",children:[t.jsxs("div",{className:"flex items-center px-4 py-3 border-b",children:[t.jsx(L,{className:"w-5 h-5 text-gray-400 flex-shrink-0"}),t.jsx("input",{ref:l,type:"text",value:s,onChange:a=>{n(a.target.value),r(0)},placeholder:"搜索课程内容、知识点、练习题... (Ctrl+K 打开)",className:"flex-1 ml-3 text-base outline-none text-gray-800 placeholder-gray-400"}),t.jsx("button",{onClick:i,className:"p-1 rounded-lg hover:bg-gray-100 transition-colors",children:t.jsx(K,{className:"w-5 h-5 text-gray-400"})})]}),t.jsx("div",{className:"max-h-[400px] overflow-y-auto",children:s.trim()===""?t.jsxs("div",{className:"p-6 text-center text-gray-500",children:[t.jsx(L,{className:"w-10 h-10 mx-auto mb-3 text-gray-300"}),t.jsx("p",{className:"text-sm",children:"输入关键词搜索课程内容"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"支持搜索课程标题、知识点、练习题"})]}):x.length===0?t.jsxs("div",{className:"p-6 text-center text-gray-500",children:[t.jsx("p",{className:"text-sm",children:"未找到相关内容"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"尝试使用不同的关键词"})]}):t.jsx("div",{className:"py-2",children:x.map((a,g)=>{const f=a.item;return t.jsxs("button",{onClick:()=>h(a),className:`w-full px-4 py-3 text-left transition-colors flex items-start space-x-3 ${g===o?"bg-primary-50":"hover:bg-gray-50"}`,children:[t.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${E(f.courseId)}`,children:p(f.courseId)}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center space-x-2 mb-0.5",children:[t.jsx("span",{className:"text-xs font-medium text-gray-400",children:f.courseName}),t.jsx("span",{className:"text-xs text-gray-300",children:"·"}),t.jsx("span",{className:"text-xs text-gray-400",children:f.chapterTitle})]}),t.jsx("p",{className:"text-sm font-medium text-gray-800 truncate",children:f.lessonTitle}),t.jsx("p",{className:"text-xs text-gray-500 mt-0.5 line-clamp-1",children:f.type==="exercise"?"练习题":"课程内容"})]})]},`${f.id}-${g}`)})})}),t.jsxs("div",{className:"px-4 py-2 bg-gray-50 border-t flex items-center justify-between text-xs text-gray-400",children:[t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsx("span",{children:"↑↓ 导航"}),t.jsx("span",{children:"Enter 选择"}),t.jsx("span",{children:"Esc 关闭"})]}),t.jsxs("span",{children:[x.length," 个结果"]})]})]})})]}):null},Ot=()=>{const e=R(),i=k(),{sidebarOpen:s,toggleSidebar:n}=j(),[o,r]=m.useState(!1),d=[{path:"/",label:"首页"},{path:"/dashboard",label:"仪表盘"},{path:"/c-language",label:"C语言"},{path:"/vfp",label:"VFP数据库"},{path:"/network",label:"网络知识"},{path:"/office",label:"办公自动化"},{path:"/exams",label:"题库系统"}];return t.jsxs(t.Fragment,{children:[t.jsx("header",{className:"bg-primary-600 text-white shadow-lg sticky top-0 z-50",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>e("/"),children:[t.jsx("div",{className:"bg-accent-500 p-2 rounded-lg",children:t.jsx(A,{className:"w-6 h-6"})}),t.jsxs("div",{className:"hidden sm:block",children:[t.jsx("h1",{className:"text-xl font-bold",children:"职业高考学习平台"}),t.jsx("p",{className:"text-xs text-primary-200",children:"Vocational College Entrance Exam"})]})]}),t.jsxs("nav",{className:"hidden md:flex items-center space-x-1",children:[d.map(l=>t.jsx("button",{onClick:()=>e(l.path),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${i.pathname===l.path?"bg-accent-500 text-white":"text-primary-100 hover:bg-primary-700 hover:text-white"}`,children:l.label},l.path)),t.jsxs("button",{onClick:()=>r(!0),className:"ml-2 px-3 py-2 rounded-lg text-primary-100 hover:bg-primary-700 hover:text-white transition-all duration-200 flex items-center space-x-2",title:"搜索 (Ctrl+K)",children:[t.jsx(L,{className:"w-4 h-4"}),t.jsx("span",{className:"text-xs bg-primary-800 px-2 py-0.5 rounded",children:"Ctrl+K"})]})]}),t.jsxs("div",{className:"flex items-center space-x-2 md:hidden",children:[t.jsx("button",{onClick:()=>r(!0),className:"p-2 rounded-lg hover:bg-primary-700 transition-colors",children:t.jsx(L,{className:"w-5 h-5"})}),t.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-primary-700 transition-colors",children:s?t.jsx(K,{className:"w-6 h-6"}):t.jsx(et,{className:"w-6 h-6"})})]})]})})}),t.jsx(It,{isOpen:o,onClose:()=>r(!1)})]})},Lt=()=>{const e=R(),i=k(),{sidebarOpen:s,setSidebarOpen:n}=j(),[o,r]=m.useState([]),d=[{path:"/c-language",label:"C语言",icon:t.jsx(A,{className:"w-5 h-5"})},{path:"/vfp",label:"VFP数据库",icon:t.jsx(U,{className:"w-5 h-5"})},{path:"/network",label:"网络知识",icon:t.jsx(_,{className:"w-5 h-5"})},{path:"/office",label:"办公自动化",icon:t.jsx(M,{className:"w-5 h-5"})}],l=c=>i.pathname===c;return t.jsxs(t.Fragment,{children:[s&&t.jsx("div",{className:"md:hidden fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>n(!1)}),t.jsx("aside",{className:`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 transition-all duration-300 overflow-y-auto ${s?"w-72 md:w-64":"w-0 md:w-64"} ${s?"opacity-100":"opacity-0 md:opacity-100"}`,children:t.jsxs("div",{className:"p-4 space-y-2",children:[t.jsx("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2",children:"课程导航"}),t.jsxs("button",{onClick:()=>e("/dashboard"),className:`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${l("/dashboard")?"bg-primary-600 text-white":"text-gray-700 hover:bg-primary-50 hover:text-primary-600"}`,children:[t.jsx("span",{className:"mr-3",children:t.jsx(G,{className:"w-5 h-5"})}),t.jsx("span",{children:"学习仪表盘"})]}),d.map(c=>{const x=o.includes(c.path),p=l(c.path);return t.jsx("div",{className:"mb-1",children:t.jsxs("button",{onClick:()=>{e(c.path),s||n(!0)},className:`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${p?"bg-primary-600 text-white":"text-gray-700 hover:bg-primary-50 hover:text-primary-600"}`,children:[t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsx("span",{className:p?"text-primary-200":"text-primary-600",children:c.icon}),t.jsx("span",{className:"truncate",children:c.label})]}),t.jsx(rt,{className:`w-4 h-4 transition-transform duration-200 ${x?"rotate-90":""}`})]})},c.path)}),t.jsx("div",{className:"border-t border-gray-200 mt-4 pt-4",children:t.jsxs("button",{onClick:()=>e("/exams"),className:`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${l("/exams")?"bg-accent-500 text-white":"text-gray-700 hover:bg-accent-50 hover:text-accent-600"}`,children:[t.jsx("span",{className:"mr-3",children:t.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),t.jsx("span",{children:"题库系统"})]})})]})})]})};class Pt extends m.Component{constructor(s){super(s);B(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),window.location.href="/"});this.state={hasError:!1,error:null}}static getDerivedStateFromError(s){return{hasError:!0,error:s}}componentDidCatch(s,n){console.error("[ErrorBoundary] 捕获到未处理错误:",s,n)}render(){var s;return this.state.hasError?this.props.fallback?this.props.fallback:t.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:t.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(nt,{className:"w-8 h-8 text-red-500"})}),t.jsx("h1",{className:"text-xl font-bold text-gray-800 mb-2",children:"页面加载异常"}),t.jsx("p",{className:"text-gray-600 mb-2",children:"抱歉，页面在加载过程中遇到了问题。"}),t.jsx("p",{className:"text-xs text-gray-400 mb-6 break-all",children:((s=this.state.error)==null?void 0:s.message)||"未知错误"}),t.jsxs("button",{onClick:this.handleReset,className:"inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors",children:[t.jsx(ot,{className:"w-4 h-4"}),t.jsx("span",{children:"返回首页"})]})]})}):this.props.children}}const wt=({id:e,title:i,description:s,icon:n,color:o,bgColor:r})=>{const d=R(),{getCourseProgress:l}=j(),c=l(e);return t.jsxs("div",{onClick:()=>d(`/${e}`),className:`${r} rounded-2xl p-6 card-hover cursor-pointer border border-gray-100`,children:[t.jsx("div",{className:`w-14 h-14 ${o} rounded-xl flex items-center justify-center mb-4`,children:n}),t.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:i}),t.jsx("p",{className:"text-gray-600 text-sm mb-4",children:s}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("div",{className:"w-24 bg-white bg-opacity-50 rounded-full h-2",children:t.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-500",style:{width:`${c}%`}})}),t.jsxs("span",{className:"text-xs font-medium text-gray-600",children:[c,"%"]})]}),t.jsx(it,{className:"w-5 h-5 text-gray-500"})]})]})},Dt=()=>{const e=[{id:"c-language",title:"C语言",description:"从零基础到精通，系统学习C语言编程，掌握职业高考核心考点",icon:t.jsx(A,{className:"w-7 h-7 text-primary-600"}),color:"bg-blue-100",bgColor:"bg-gradient-to-br from-blue-50 to-blue-100"},{id:"vfp",title:"VFP数据库",description:"深入学习数据库原理，掌握VFP操作和SQL查询，应对高考数据库考点",icon:t.jsx(U,{className:"w-7 h-7 text-green-600"}),color:"bg-green-100",bgColor:"bg-gradient-to-br from-green-50 to-green-100"},{id:"network",title:"网络知识",description:"掌握计算机网络基础、TCP/IP协议、网络安全等专业知识",icon:t.jsx(_,{className:"w-7 h-7 text-purple-600"}),color:"bg-purple-100",bgColor:"bg-gradient-to-br from-purple-50 to-purple-100"},{id:"office",title:"办公自动化",description:"精通Excel和Word操作，掌握公式函数、数据处理和文档排版技能",icon:t.jsx(M,{className:"w-7 h-7 text-orange-600"}),color:"bg-orange-100",bgColor:"bg-gradient-to-br from-orange-50 to-orange-100"}];return t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map(i=>t.jsx(wt,{...i},i.id))})},vt=()=>{const e=R(),i=[{icon:t.jsx(A,{className:"w-8 h-8"}),title:"系统课程",description:"从零基础到精通的完整教学体系"},{icon:t.jsx(lt,{className:"w-8 h-8"}),title:"高考标准",description:"符合职业高考考试大纲要求"},{icon:t.jsx(ct,{className:"w-8 h-8"}),title:"实战练习",description:"配套大量练习题和模拟考试"},{icon:t.jsx(pt,{className:"w-8 h-8"}),title:"随时随地",description:"支持离线学习，自由安排时间"}],s=[{name:"张三",course:"C语言",comment:"通过这个平台学习，我顺利通过了职业高考，感谢老师们的精心教学！",score:"95分"},{name:"李四",course:"办公自动化",comment:"Excel和Word课程非常实用，现在工作中也经常用到这些技能。",score:"90分"},{name:"王五",course:"网络知识",comment:"网络课程讲解清晰，知识点覆盖全面，考试轻松应对。",score:"92分"}];return t.jsxs("div",{className:"min-h-screen bg-gray-50",children:[t.jsx("section",{className:"bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center",children:[t.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"职业高考学习平台"}),t.jsx("p",{className:"text-xl text-primary-200 mb-8",children:"专业、系统、高效的职业高考备考资源，助你成功上岸！"}),t.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[t.jsxs("div",{className:"bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3",children:[t.jsx("span",{className:"text-3xl font-bold",children:"4"}),t.jsx("span",{className:"ml-2 text-primary-200",children:"核心课程"})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3",children:[t.jsx("span",{className:"text-3xl font-bold",children:"92"}),t.jsx("span",{className:"ml-2 text-primary-200",children:"学习课时"})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3",children:[t.jsx("span",{className:"text-3xl font-bold",children:"500+"}),t.jsx("span",{className:"ml-2 text-primary-200",children:"练习题"})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3",children:[t.jsx("span",{className:"text-3xl font-bold",children:"100%"}),t.jsx("span",{className:"ml-2 text-primary-200",children:"高考覆盖"})]})]})]})})}),t.jsx("section",{className:"py-12 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-8",children:"平台特色"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:i.map((n,o)=>t.jsxs("div",{className:"text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors",children:[t.jsx("div",{className:"w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4",children:n.icon}),t.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:n.title}),t.jsx("p",{className:"text-gray-600 text-sm",children:n.description})]},o))})]})}),t.jsx("section",{className:"py-12 bg-gray-50",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-8",children:"核心课程"}),t.jsx(Dt,{})]})}),t.jsx("section",{className:"py-12 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-8",children:"学习指南"}),t.jsx("div",{className:"max-w-3xl mx-auto",children:t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"}),t.jsx("div",{className:"space-y-8",children:[{step:"01",title:"选择课程",desc:"根据自己的薄弱科目选择相应课程开始学习"},{step:"02",title:"系统学习",desc:"按照章节顺序进行学习，理解每个知识点"},{step:"03",title:"完成练习",desc:"每章学习完成后完成配套练习题，巩固知识"},{step:"04",title:"模拟考试",desc:"进入题库系统进行模拟考试，检验学习成果"},{step:"05",title:"查漏补缺",desc:"根据考试结果，针对薄弱环节进行专项复习"}].map((n,o)=>t.jsxs("div",{className:"flex items-start space-x-4 md:space-x-8",children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg",children:n.step}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-1",children:n.title}),t.jsx("p",{className:"text-gray-600",children:n.desc})]})]},o))})]})})]})}),t.jsx("section",{className:"py-12 bg-gradient-to-br from-primary-50 to-primary-100",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-8",children:"学员评价"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:s.map((n,o)=>t.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm",children:[t.jsx("div",{className:"flex items-center space-x-1 mb-4",children:[1,2,3,4,5].map(r=>t.jsx("svg",{className:"w-5 h-5 text-yellow-400 fill-current",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},r))}),t.jsxs("p",{className:"text-gray-600 mb-4",children:['"',n.comment,'"']}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-gray-800",children:n.name}),t.jsxs("p",{className:"text-sm text-gray-500",children:[n.course,"学员"]})]}),t.jsxs("span",{className:"bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-medium",children:["高考成绩: ",n.score]})]})]},o))})]})}),t.jsx("section",{className:"py-12 bg-primary-600 text-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-2xl font-bold mb-4",children:"开始你的职业高考备考之旅！"}),t.jsx("p",{className:"text-primary-200 mb-6",children:"选择一门课程，立即开始学习"}),t.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[t.jsx("button",{onClick:()=>e("/c-language"),className:"bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors",children:"浏览课程"}),t.jsxs("button",{onClick:()=>e("/dashboard"),className:"bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2",children:[t.jsx(G,{className:"w-4 h-4"}),t.jsx("span",{children:"学习仪表盘"})]}),t.jsx("button",{onClick:()=>e("/exams"),className:"bg-accent-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors",children:"进入题库"})]})]})}),t.jsx("footer",{className:"bg-gray-800 text-gray-400 py-8",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-sm",children:"职业高考学习平台 © 2026"}),t.jsx("p",{className:"text-xs mt-2",children:"助力每一位职高学子实现升学梦想"})]})})})]})},Ft=m.lazy(()=>T(()=>import("./CLanguage-CJqUuLrf.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>({default:e.CLanguage}))),kt=m.lazy(()=>T(()=>import("./VFP-ObctUmZi.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url).then(e=>({default:e.VFP}))),Mt=m.lazy(()=>T(()=>import("./Network-DzFBENuA.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url).then(e=>({default:e.Network}))),_t=m.lazy(()=>T(()=>import("./Office-LKOIqodb.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url).then(e=>({default:e.Office}))),Ut=m.lazy(()=>T(()=>import("./Exams-DaX_DvPY.js"),__vite__mapDeps([8,2,9,3,4]),import.meta.url).then(e=>({default:e.Exams}))),jt=m.lazy(()=>T(()=>import("./Dashboard-CFtezBs_.js"),__vite__mapDeps([10,9,2,3,4]),import.meta.url).then(e=>({default:e.Dashboard}))),Bt=m.lazy(()=>T(()=>import("./NotFound-BR7XmBcw.js"),__vite__mapDeps([11,2,3,4]),import.meta.url).then(e=>({default:e.NotFound}))),Ht=()=>t.jsx("div",{className:"min-h-screen bg-gray-50 p-8",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"animate-pulse",children:[t.jsx("div",{className:"h-8 bg-gray-200 rounded w-1/3 mb-4"}),t.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2 mb-8"}),t.jsxs("div",{className:"flex gap-6",children:[t.jsx("div",{className:"w-80",children:t.jsx("div",{className:"bg-white rounded-xl p-4 space-y-3",children:[1,2,3,4,5,6].map(e=>t.jsx("div",{className:"h-10 bg-gray-100 rounded"},e))})}),t.jsx("div",{className:"flex-1",children:t.jsxs("div",{className:"bg-white rounded-xl p-6 space-y-4",children:[t.jsx("div",{className:"h-6 bg-gray-200 rounded w-1/4"}),t.jsx("div",{className:"h-4 bg-gray-100 rounded w-full"}),t.jsx("div",{className:"h-4 bg-gray-100 rounded w-3/4"}),t.jsx("div",{className:"h-4 bg-gray-100 rounded w-5/6"})]})})]})]})})}),qt=()=>t.jsxs(t.Fragment,{children:[t.jsx(Lt,{}),t.jsx("main",{className:"ml-0 md:ml-64",children:t.jsx(m.Suspense,{fallback:t.jsx(Ht,{}),children:t.jsxs(Z,{children:[t.jsx(S,{path:"/c-language",element:t.jsx(Ft,{})}),t.jsx(S,{path:"/vfp",element:t.jsx(kt,{})}),t.jsx(S,{path:"/network",element:t.jsx(Mt,{})}),t.jsx(S,{path:"/office",element:t.jsx(_t,{})}),t.jsx(S,{path:"/exams",element:t.jsx(Ut,{})}),t.jsx(S,{path:"/dashboard",element:t.jsx(jt,{})}),t.jsx(S,{path:"*",element:t.jsx(Bt,{})})]})})})]}),Wt=()=>{const i=k().pathname==="/";return t.jsxs("div",{className:"min-h-screen bg-gray-50",children:[t.jsx(Ot,{}),i?t.jsx(vt,{}):t.jsx(qt,{})]})};function Vt(){return t.jsx(Pt,{children:t.jsx(Q,{children:t.jsx(Wt,{})})})}ht.createRoot(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(Vt,{})}));export{T as _,Nt as c,t as j,Tt as n,yt as o,j as u,St as v};
