interface NetworkDevice {
  id: string;
  label: string;
  type: 'pc' | 'server' | 'router' | 'switch' | 'firewall' | 'modem';
  x: number;
  y: number;
}

interface NetworkLink {
  from: string;
  to: string;
  label?: string;
}

interface NetworkTopologyProps {
  devices: NetworkDevice[];
  links: NetworkLink[];
  title?: string;
}

export const NetworkTopology = ({ devices, links, title }: NetworkTopologyProps) => {
  const getDeviceIcon = (type: NetworkDevice['type']) => {
    switch (type) {
      case 'pc':
        return '💻';
      case 'server':
        return '🖥️';
      case 'router':
        return '🔀';
      case 'switch':
        return '🔌';
      case 'firewall':
        return '🛡️';
      case 'modem':
        return '📶';
      default:
        return '📦';
    }
  };

  const getDeviceBg = (type: NetworkDevice['type']) => {
    switch (type) {
      case 'pc':
        return 'bg-blue-100 border-blue-400';
      case 'server':
        return 'bg-green-100 border-green-400';
      case 'router':
        return 'bg-orange-100 border-orange-400';
      case 'switch':
        return 'bg-purple-100 border-purple-400';
      case 'firewall':
        return 'bg-red-100 border-red-400';
      case 'modem':
        return 'bg-yellow-100 border-yellow-400';
      default:
        return 'bg-gray-100 border-gray-400';
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 my-6">
      {title && <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h4>}
      <svg viewBox="0 0 700 400" className="w-full h-auto">
        {/* 连接线 */}
        {links.map((link, index) => {
          const fromDevice = devices.find(d => d.id === link.from);
          const toDevice = devices.find(d => d.id === link.to);
          if (!fromDevice || !toDevice) return null;

          return (
            <g key={index}>
              <line
                x1={fromDevice.x}
                y1={fromDevice.y}
                x2={toDevice.x}
                y2={toDevice.y}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray={link.label ? '5,5' : 'none'}
              />
              {link.label && (
                <text
                  x={(fromDevice.x + toDevice.x) / 2}
                  y={(fromDevice.y + toDevice.y) / 2 - 5}
                  className="text-xs fill-blue-600 text-center"
                >
                  {link.label}
                </text>
              )}
            </g>
          );
        })}

        {/* 设备节点 */}
        {devices.map((device) => (
          <g key={device.id}>
            <circle
              cx={device.x}
              cy={device.y}
              r="35"
              className={`${getDeviceBg(device.type)}`}
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x={device.x}
              y={device.y - 8}
              className="text-2xl text-center"
              textAnchor="middle"
            >
              {getDeviceIcon(device.type)}
            </text>
            <text
              x={device.x}
              y={device.y + 18}
              className="text-xs fill-gray-700 text-center"
              textAnchor="middle"
            >
              {device.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// 示例：家庭网络拓扑
export const HomeNetworkTopology = () => {
  const devices: NetworkDevice[] = [
    { id: 'modem', label: '光猫', type: 'modem', x: 350, y: 60 },
    { id: 'router', label: '路由器', type: 'router', x: 350, y: 160 },
    { id: 'switch', label: '交换机', type: 'switch', x: 350, y: 260 },
    { id: 'pc1', label: '台式电脑', type: 'pc', x: 150, y: 340 },
    { id: 'pc2', label: '笔记本', type: 'pc', x: 350, y: 340 },
    { id: 'server', label: 'NAS服务器', type: 'server', x: 550, y: 340 },
  ];

  const links: NetworkLink[] = [
    { from: 'modem', to: 'router', label: 'WAN' },
    { from: 'router', to: 'switch', label: 'LAN' },
    { from: 'switch', to: 'pc1' },
    { from: 'switch', to: 'pc2' },
    { from: 'switch', to: 'server' },
  ];

  return <NetworkTopology devices={devices} links={links} title="家庭网络拓扑图" />;
};

// 示例：企业网络拓扑
export const EnterpriseNetworkTopology = () => {
  const devices: NetworkDevice[] = [
    { id: 'internet', label: '互联网', type: 'modem', x: 350, y: 30 },
    { id: 'firewall', label: '防火墙', type: 'firewall', x: 350, y: 100 },
    { id: 'router', label: '核心路由器', type: 'router', x: 350, y: 170 },
    { id: 'switch1', label: '办公区交换机', type: 'switch', x: 180, y: 250 },
    { id: 'switch2', label: '服务器区交换机', type: 'switch', x: 520, y: 250 },
    { id: 'pc1', label: '员工PC1', type: 'pc', x: 100, y: 340 },
    { id: 'pc2', label: '员工PC2', type: 'pc', x: 260, y: 340 },
    { id: 'server1', label: 'Web服务器', type: 'server', x: 450, y: 340 },
    { id: 'server2', label: '数据库服务器', type: 'server', x: 590, y: 340 },
  ];

  const links: NetworkLink[] = [
    { from: 'internet', to: 'firewall', label: '公网IP' },
    { from: 'firewall', to: 'router', label: 'DMZ' },
    { from: 'router', to: 'switch1', label: '办公网' },
    { from: 'router', to: 'switch2', label: '服务器网' },
    { from: 'switch1', to: 'pc1' },
    { from: 'switch1', to: 'pc2' },
    { from: 'switch2', to: 'server1' },
    { from: 'switch2', to: 'server2' },
  ];

  return <NetworkTopology devices={devices} links={links} title="企业网络拓扑图" />;
};
