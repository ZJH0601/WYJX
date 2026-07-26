interface OSILayer {
  level: number;
  name: string;
  description: string;
  keyProtocols: string[];
  color: string;
}

interface OSIModelProps {
  highlightLayers?: number[];
  title?: string;
}

export const OSIModel = ({ highlightLayers = [], title }: OSIModelProps) => {
  const layers: OSILayer[] = [
    {
      level: 7,
      name: '应用层',
      description: '为应用程序提供网络服务',
      keyProtocols: ['HTTP', 'FTP', 'SMTP', 'DNS'],
      color: 'bg-red-500',
    },
    {
      level: 6,
      name: '表示层',
      description: '数据的表示、加密、解密',
      keyProtocols: ['SSL', 'TLS', 'JPEG', 'MPEG'],
      color: 'bg-orange-500',
    },
    {
      level: 5,
      name: '会话层',
      description: '建立、管理和终止会话',
      keyProtocols: ['RPC', 'NetBIOS', 'SQL'],
      color: 'bg-amber-500',
    },
    {
      level: 4,
      name: '传输层',
      description: '端到端的通信和可靠传输',
      keyProtocols: ['TCP', 'UDP', 'SPX'],
      color: 'bg-yellow-500',
    },
    {
      level: 3,
      name: '网络层',
      description: 'IP地址和路由选择',
      keyProtocols: ['IP', 'ICMP', 'OSPF', 'BGP'],
      color: 'bg-green-500',
    },
    {
      level: 2,
      name: '数据链路层',
      description: 'MAC地址和帧传输',
      keyProtocols: ['Ethernet', 'PPP', 'HDLC'],
      color: 'bg-cyan-500',
    },
    {
      level: 1,
      name: '物理层',
      description: '物理介质和信号传输',
      keyProtocols: ['RS-232', 'RJ-45', '光纤'],
      color: 'bg-blue-500',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 my-6 shadow-sm">
      {title && <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h4>}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl">
          {layers.map((layer) => {
            const isHighlighted = highlightLayers.includes(layer.level);
            return (
              <div
                key={layer.level}
                className={`relative border-l-4 mb-2 transition-all duration-300 ${
                  isHighlighted ? 'scale-[1.02] shadow-lg' : ''
                }`}
                style={{ borderLeftColor: layer.color.replace('bg-', '') }}
              >
                <div className={`${layer.color} text-white px-4 py-3 flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-lg w-8 text-center">{layer.level}</span>
                    <span className="font-semibold">{layer.name}</span>
                  </div>
                  {isHighlighted && <span className="text-sm bg-white/20 px-2 py-1 rounded">当前层</span>}
                </div>
                <div className="bg-gray-50 px-4 py-3">
                  <p className="text-sm text-gray-600 mb-2">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.keyProtocols.map((protocol, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-mono text-gray-700"
                      >
                        {protocol}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 数据封装示意图 */}
        <div className="mt-6 w-full max-w-md">
          <h5 className="text-sm font-semibold text-gray-700 mb-3 text-center">📦 数据封装过程</h5>
          <div className="flex flex-col-reverse items-center">
            {layers.map((layer, index) => (
              <div key={layer.level} className="flex items-center">
                <div
                  className={`${layer.color} text-white px-3 py-1 text-xs rounded-l`}
                  style={{ opacity: 1 - index * 0.1 }}
                >
                  {layer.name}
                </div>
                <div
                  className="bg-gray-100 border-t border-b border-gray-300 px-6 py-1 text-xs text-gray-600"
                  style={{ opacity: 1 - index * 0.1 }}
                >
                  {index === 0 && '数据'}
                  {index === 1 && '段(Segment)'}
                  {index === 2 && '数据包(Packet)'}
                  {index === 3 && '帧(Frame)'}
                  {index === 4 && '比特流(Bit)'}
                </div>
                {index < layers.length - 1 && (
                  <div className="ml-2">
                    <span className="text-gray-400 text-xs">↓ 封装</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// TCP/IP模型
export const TCPIPModel = () => {
  const layers = [
    { level: 4, name: '应用层', protocols: ['HTTP', 'FTP', 'DNS', 'SMTP'], color: 'bg-red-500' },
    { level: 3, name: '传输层', protocols: ['TCP', 'UDP'], color: 'bg-yellow-500' },
    { level: 2, name: '网络层', protocols: ['IP', 'ICMP', 'ARP'], color: 'bg-green-500' },
    { level: 1, name: '网络接口层', protocols: ['Ethernet', 'PPP'], color: 'bg-blue-500' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 my-6 shadow-sm">
      <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">TCP/IP四层模型</h4>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg">
          {layers.map((layer) => (
            <div key={layer.level} className="relative border-l-4 mb-2" style={{ borderLeftColor: layer.color.replace('bg-', '') }}>
              <div className={`${layer.color} text-white px-4 py-3 flex items-center justify-between`}>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-lg w-8 text-center">{layer.level}</span>
                  <span className="font-semibold">{layer.name}</span>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {layer.protocols.map((protocol, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-mono text-gray-700">
                      {protocol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OSI与TCP/IP对比 */}
        <div className="mt-6 w-full max-w-2xl">
          <h5 className="text-sm font-semibold text-gray-700 mb-3 text-center">🔄 OSI与TCP/IP模型对应关系</h5>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <h6 className="font-semibold text-gray-700 text-sm mb-2">OSI七层</h6>
              <div className="text-xs text-gray-600 space-y-1">
                <p>7. 应用层</p>
                <p>6. 表示层</p>
                <p>5. 会话层</p>
                <p>4. 传输层</p>
                <p>3. 网络层</p>
                <p>2. 数据链路层</p>
                <p>1. 物理层</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <h6 className="font-semibold text-gray-700 text-sm mb-2">TCP/IP四层</h6>
              <div className="text-xs text-gray-600 space-y-1">
                <p className="font-semibold">应用层 ← 合并</p>
                <p>4. 传输层</p>
                <p>3. 网络层</p>
                <p className="font-semibold">网络接口层 ← 合并</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
