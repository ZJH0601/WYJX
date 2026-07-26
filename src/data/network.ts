import { Chapter } from './cLanguage';

export const networkCourse: Chapter[] = [
  {
    id: 'n1',
    title: '第一章：计算机网络概述',
    lessons: [
      {
        id: 'n1-1',
        title: '1.1 计算机网络的概念',
        description: '了解计算机网络的定义、功能和分类',
        content: `<h3>1.1.1 计算机网络的定义</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n1-1-1',
            type: 'single',
            question: '局域网的英文缩写是？',
            options: ['WAN', 'LAN', 'MAN', 'PAN'],
            answer: 'B',
            explanation: '局域网的英文是Local Area Network，缩写为LAN。',
            score: 2
          }
        ]
      },
      {
        id: 'n1-2',
        title: '1.2 网络拓扑结构',
        visualType: 'home-network',
        description: '学习常见的网络拓扑结构',
        content: `<h3>1.2.1 总线型拓扑</h3>
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
<p><strong>设计要点</strong>：星型拓扑保证了故障诊断容易和扩展性好，即使某个部门交换机故障也不会影响其他部门；VLAN技术实现了部门间的隔离，保护了财务数据安全。</p>`,
        exercises: [
          {
            id: 'n1-2-1',
            type: 'single',
            question: '所有节点通过中央节点连接的拓扑结构是？',
            options: ['总线型', '星型', '环型', '网状型'],
            answer: 'B',
            explanation: '星型拓扑中所有节点都通过中央节点（如交换机）连接。',
            score: 2
          }
        ]
      },
      {
        id: 'n1-3',
        title: '1.3 网络硬件设备',
        description: '了解常见的网络硬件设备',
        content: `<h3>1.3.1 网卡(NIC)</h3>
<p><strong>网卡</strong>：网络接口卡，计算机连接网络的必备设备。</p>

<h3>1.3.2 交换机(Switch)</h3>
<p><strong>交换机</strong>：连接多个设备，实现数据交换。</p>

<h3>1.3.3 路由器(Router)</h3>
<p><strong>路由器</strong>：连接不同网络，实现数据包转发。</p>

<h3>1.3.4 集线器(Hub)</h3>
<p><strong>集线器</strong>：简单的网络连接设备，共享带宽。</p>

<h3>1.3.5 调制解调器(Modem)</h3>
<p><strong>调制解调器</strong>：实现数字信号和模拟信号的转换。</p>`,
        exercises: [
          {
            id: 'n1-3-1',
            type: 'single',
            question: '用于连接不同网络的设备是？',
            options: ['交换机', '集线器', '路由器', '网卡'],
            answer: 'C',
            explanation: '路由器用于连接不同的网络，实现数据包在不同网络间转发。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'n2',
    title: '第二章：OSI参考模型',
    lessons: [
      {
        id: 'n2-1',
        title: '2.1 OSI模型概述',
        visualType: 'osi-model',
        description: '了解OSI七层模型的基本概念',
        content: `<h3>2.1.1 OSI模型的概念</h3>
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
<p>数据从物理层向上传递时，每层会剥离自己的头部信息，这个过程称为解封装。</p>`,
        exercises: [
          {
            id: 'n2-1-1',
            type: 'fill',
            question: 'OSI模型共有______层。',
            answer: '7',
            explanation: 'OSI参考模型将网络通信功能划分为7层。',
            score: 2
          }
        ]
      },
      {
        id: 'n2-2',
        title: '2.2 各层功能详解',
        description: '学习OSI各层的具体功能',
        content: `<h3>2.2.1 物理层</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n2-2-1',
            type: 'single',
            question: '负责路由选择的是哪一层？',
            options: ['数据链路层', '网络层', '传输层', '应用层'],
            answer: 'B',
            explanation: '网络层负责路由选择和分组转发，主要设备是路由器。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'n3',
    title: '第三章：TCP/IP协议',
    lessons: [
      {
        id: 'n3-1',
        title: '3.1 TCP/IP概述',
        visualType: 'tcpip-model',
        description: '了解TCP/IP协议族的基本概念',
        content: `<h3>3.1.1 TCP/IP的概念</h3>
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
</table>`,
        exercises: [
          {
            id: 'n3-1-1',
            type: 'single',
            question: 'TCP/IP模型分为几层？',
            options: ['4层', '5层', '6层', '7层'],
            answer: 'A',
            explanation: 'TCP/IP模型分为4层：网络接口层、网络层、传输层、应用层。',
            score: 2
          }
        ]
      },
      {
        id: 'n3-2',
        title: '3.2 IP协议',
        description: '学习IP地址的概念和分类',
        content: `<h3>3.2.1 IP地址的概念</h3>
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
<p>常见子网掩码：255.255.255.0（C类）、255.255.0.0（B类）、255.0.0.0（A类）</p>`,
        exercises: [
          {
            id: 'n3-2-1',
            type: 'single',
            question: '192.168.1.1属于哪类IP地址？',
            options: ['A类', 'B类', 'C类', 'D类'],
            answer: 'C',
            explanation: '192开头的IP地址属于C类地址。',
            score: 2
          }
        ]
      },
      {
        id: 'n3-3',
        title: '3.3 TCP和UDP协议',
        description: '学习传输层的两个主要协议',
        content: `<h3>3.3.1 TCP协议</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n3-3-1',
            type: 'single',
            question: '面向连接的可靠传输协议是？',
            options: ['IP', 'TCP', 'UDP', 'HTTP'],
            answer: 'B',
            explanation: 'TCP是面向连接的、可靠的传输协议。',
            score: 2
          }
        ]
      },
      {
        id: 'n3-4',
        title: '3.4 子网划分与计算',
        description: '学习子网掩码、网络地址、广播地址的计算方法',
        content: `<h3>3.4.1 子网划分的概念</h3>
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
</table>`,
        exercises: [
          {
            id: 'n3-4-1',
            type: 'single',
            question: 'CIDR表示法中，/24对应的子网掩码是？',
            options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
            answer: 'C',
            explanation: '/24表示前24位为网络位，子网掩码为255.255.255.0。',
            score: 2
          },
          {
            id: 'n3-4-2',
            type: 'single',
            question: '子网掩码为255.255.255.192时，每个子网最多容纳多少台主机？',
            options: ['30', '62', '126', '254'],
            answer: 'B',
            explanation: '255.255.255.192即/26，主机位为6位，可用主机数 = 2⁶ - 2 = 62。',
            score: 2
          },
          {
            id: 'n3-4-3',
            type: 'fill',
            question: 'IP地址192.168.1.100/26所在的网络地址是______。',
            answer: '192.168.1.64',
            explanation: '/26的子网掩码为255.255.255.192，与IP地址逐位与运算得网络地址192.168.1.64。',
            score: 3
          },
          {
            id: 'n3-4-4',
            type: 'single',
            question: '某网络需要划分8个子网，至少需要借用几位主机位？',
            options: ['2位', '3位', '4位', '8位'],
            answer: 'B',
            explanation: '2³ = 8，因此需要借用3位主机位来划分8个子网。',
            score: 2
          }
        ]
      },
      {
        id: 'n3-5',
        title: '3.5 IPv6简介',
        description: '了解IPv6地址格式、类型及与IPv4的区别',
        content: `<h3>3.5.1 IPv6概述</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n3-5-1',
            type: 'single',
            question: 'IPv6地址的长度是多少位？',
            options: ['32位', '64位', '128位', '256位'],
            answer: 'C',
            explanation: 'IPv6地址由128位二进制数组成，远大于IPv4的32位。',
            score: 2
          },
          {
            id: 'n3-5-2',
            type: 'single',
            question: 'IPv6中没有而IPv4中有的地址类型是？',
            options: ['单播', '组播', '广播', '任播'],
            answer: 'C',
            explanation: 'IPv6中没有广播地址，广播功能由组播替代。IPv6的地址类型为单播、组播和任播。',
            score: 2
          },
          {
            id: 'n3-5-3',
            type: 'fill',
            question: 'IPv6中表示环回地址（相当于IPv4的127.0.0.1）的是______。',
            answer: '::1',
            explanation: '::1/128是IPv6的环回地址，相当于IPv4的127.0.0.1。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'n4',
    title: '第四章：常用网络服务',
    lessons: [
      {
        id: 'n4-1',
        title: '4.1 HTTP协议',
        description: '学习超文本传输协议',
        content: `<h3>4.1.1 HTTP概述</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n4-1-1',
            type: 'single',
            question: 'HTTP状态码404表示什么？',
            options: ['请求成功', '资源未找到', '服务器错误', '重定向'],
            answer: 'B',
            explanation: 'HTTP状态码404表示请求的资源未找到。',
            score: 2
          }
        ]
      },
      {
        id: 'n4-2',
        title: '4.2 FTP协议',
        description: '学习文件传输协议',
        content: `<h3>4.2.1 FTP概述</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n4-2-1',
            type: 'fill',
            question: 'FTP的控制连接端口是______。',
            answer: '21',
            explanation: 'FTP使用21端口作为控制连接端口。',
            score: 2
          }
        ]
      },
      {
        id: 'n4-3',
        title: '4.3 DNS服务',
        description: '学习域名系统',
        content: `<h3>4.3.1 DNS概述</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n4-3-1',
            type: 'single',
            question: 'DNS的作用是？',
            options: ['文件传输', '域名解析', '邮件发送', '网页浏览'],
            answer: 'B',
            explanation: 'DNS用于将域名转换为IP地址，即域名解析。',
            score: 2
          }
        ]
      },
      {
        id: 'n4-4',
        title: '4.4 常用网络命令',
        description: '学习ping、ipconfig、tracert、netstat、nslookup等常用网络诊断命令',
        content: `<h3>4.4.1 ping命令</h3>
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
</ol>`,
        exercises: [
          {
            id: 'n4-4-1',
            type: 'single',
            question: '用于测试网络连通性的命令是？',
            options: ['ipconfig', 'ping', 'netstat', 'nslookup'],
            answer: 'B',
            explanation: 'ping命令用于测试网络连通性，通过发送ICMP回显请求来检测目标主机是否可达。',
            score: 2
          },
          {
            id: 'n4-4-2',
            type: 'single',
            question: 'Windows系统中查看本机IP地址的命令是？',
            options: ['ping', 'tracert', 'ipconfig', 'netstat'],
            answer: 'C',
            explanation: 'ipconfig是Windows系统中查看网络配置信息的命令，包括IP地址、子网掩码、默认网关等。',
            score: 2
          },
          {
            id: 'n4-4-3',
            type: 'single',
            question: '用于追踪数据包到达目标主机所经过路径的命令是？',
            options: ['ping', 'ipconfig', 'nslookup', 'tracert'],
            answer: 'D',
            explanation: 'tracert（Windows）或traceroute（Linux）用于追踪数据包到达目标主机所经过的路由路径。',
            score: 2
          },
          {
            id: 'n4-4-4',
            type: 'single',
            question: '清除DNS缓存应使用哪个命令？',
            options: ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns', 'ipconfig /all'],
            answer: 'C',
            explanation: 'ipconfig /flushdns用于清除本地DNS缓存，解决DNS解析异常问题。',
            score: 2
          },
          {
            id: 'n4-4-5',
            type: 'fill',
            question: '查询域名www.example.com的IP地址，应使用命令______。',
            answer: 'nslookup www.example.com',
            explanation: 'nslookup命令用于查询DNS记录，可以查询域名对应的IP地址。',
            score: 2
          }
        ]
      }
    ]
  },
  {
    id: 'n5',
    title: '第五章：网络安全',
    lessons: [
      {
        id: 'n5-1',
        title: '5.1 网络安全概述',
        description: '了解网络安全的基本概念',
        content: `<h3>5.1.1 网络安全的概念</h3>
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
<p><strong>案例启示</strong>：钓鱼攻击往往是利用人性弱点（信任、恐惧、紧迫感）而非技术漏洞，因此提高安全意识是防范钓鱼攻击最有效的手段。</p>`,
        exercises: [
          {
            id: 'n5-1-1',
            type: 'single',
            question: '网络安全的三大原则不包括？',
            options: ['保密性', '完整性', '可用性', '开放性'],
            answer: 'D',
            explanation: '网络安全的三大原则是保密性、完整性和可用性，不包括开放性。',
            score: 2
          }
        ]
      },
      {
        id: 'n5-2',
        title: '5.2 防火墙技术',
        description: '学习防火墙的基本原理',
        content: `<h3>5.2.1 防火墙的概念</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n5-2-1',
            type: 'single',
            question: '根据IP地址和端口过滤数据包的防火墙是？',
            options: ['应用层防火墙', '状态检测防火墙', '包过滤防火墙', '代理防火墙'],
            answer: 'C',
            explanation: '包过滤防火墙根据IP地址和端口过滤数据包。',
            score: 2
          }
        ]
      },
      {
        id: 'n5-3',
        title: '5.3 加密技术',
        description: '学习数据加密的基本原理',
        content: `<h3>5.3.1 加密的概念</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n5-3-1',
            type: 'single',
            question: '加密和解密使用相同密钥的加密方式是？',
            options: ['对称加密', '非对称加密', '哈希加密', '数字签名'],
            answer: 'A',
            explanation: '对称加密使用相同的密钥进行加密和解密。',
            score: 2
          }
        ]
      },
      {
        id: 'n5-4',
        title: '5.4 DHCP协议',
        description: '学习动态主机配置协议的工作原理',
        content: `<h3>5.4.1 DHCP概述</h3>
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
</ul>`,
        exercises: [
          {
            id: 'n5-4-1',
            type: 'single',
            question: 'DHCP协议的作用是？',
            options: ['域名解析', '文件传输', '自动分配IP地址', '加密通信'],
            answer: 'C',
            explanation: 'DHCP（动态主机配置协议）用于自动为网络设备分配IP地址等网络参数。',
            score: 2
          },
          {
            id: 'n5-4-2',
            type: 'single',
            question: 'DHCP四步过程中的正确顺序是？',
            options: ['Discover → Request → Offer → ACK', 'Discover → Offer → Request → ACK', 'Request → Discover → Offer → ACK', 'Offer → Discover → Request → ACK'],
            answer: 'B',
            explanation: 'DHCP标准四步过程为：Discover（发现）→ Offer（提供）→ Request（请求）→ ACK（确认），缩写为DORA。',
            score: 2
          },
          {
            id: 'n5-4-3',
            type: 'single',
            question: 'DHCP租约时间达到多少时，客户端会尝试续约？',
            options: ['25%', '50%', '75%', '87.5%'],
            answer: 'B',
            explanation: '当租约时间达到50%时，客户端会向DHCP服务器发送续约请求。',
            score: 2
          },
          {
            id: 'n5-4-4',
            type: 'fill',
            question: 'DHCP服务器使用UDP端口______，客户端使用UDP端口______。',
            answer: '67和68',
            explanation: 'DHCP服务器使用UDP 67端口，客户端使用UDP 68端口进行通信。',
            score: 3
          }
        ]
      }
    ]
  }
];
