interface FlowNode {
  id: string;
  label: string;
  type: 'start' | 'end' | 'process' | 'decision' | 'input' | 'output';
  x: number;
  y: number;
}

interface FlowConnection {
  from: string;
  to: string;
  label?: string;
}

interface FlowChartProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  title?: string;
}

export const FlowChart = ({ nodes, connections, title }: FlowChartProps) => {
  const getNodeColor = (type: FlowNode['type']) => {
    switch (type) {
      case 'start':
      case 'end':
        return 'bg-green-500 text-white';
      case 'process':
        return 'bg-blue-500 text-white';
      case 'decision':
        return 'bg-yellow-500 text-white';
      case 'input':
        return 'bg-purple-500 text-white';
      case 'output':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getNodeShape = (type: FlowNode['type']) => {
    switch (type) {
      case 'start':
      case 'end':
        return 'rounded-full';
      case 'decision':
        return 'rotate-45';
      default:
        return 'rounded-lg';
    }
  };

  const getNodeSize = (type: FlowNode['type']) => {
    switch (type) {
      case 'start':
      case 'end':
        return 'w-16 h-16';
      case 'decision':
        return 'w-24 h-24';
      default:
        return 'w-32 h-16';
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 my-6">
      {title && <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h4>}
      <svg viewBox="0 0 600 400" className="w-full h-auto">
        {/* 连接线 */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          let path = '';
          if (fromNode.type === 'decision') {
            // 菱形节点的连接
            if (toNode.y > fromNode.y) {
              path = `M ${fromNode.x} ${fromNode.y + 48} L ${fromNode.x} ${fromNode.y + 80} L ${toNode.x} ${toNode.y - 32}`;
            } else if (toNode.x > fromNode.x) {
              path = `M ${fromNode.x + 48} ${fromNode.y} L ${fromNode.x + 80} ${fromNode.y} L ${toNode.x - 32} ${toNode.y}`;
            } else {
              path = `M ${fromNode.x - 48} ${fromNode.y} L ${fromNode.x - 80} ${fromNode.y} L ${toNode.x + 32} ${toNode.y}`;
            }
          } else {
            // 普通节点的连接
            path = `M ${fromNode.x} ${fromNode.y + 32} L ${fromNode.x} ${fromNode.y + 60} L ${toNode.x} ${toNode.y - 32}`;
          }

          return (
            <g key={index}>
              <path
                d={path}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              {conn.label && (
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2}
                  className="text-xs fill-gray-600 text-center"
                >
                  {conn.label}
                </text>
              )}
            </g>
          );
        })}

        {/* 箭头标记 */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>

        {/* 节点 */}
        {nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x - (node.type === 'decision' ? 48 : 64)}
              y={node.y - (node.type === 'decision' ? 48 : 32)}
              width={node.type === 'decision' ? 96 : 128}
              height={node.type === 'start' || node.type === 'end' ? 64 : node.type === 'decision' ? 96 : 64}
              rx={node.type === 'start' || node.type === 'end' ? 32 : node.type === 'decision' ? 0 : 8}
              className={`${getNodeColor(node.type)}`}
            />
            <text
              x={node.x}
              y={node.y}
              className="text-white text-xs text-center dominant-baseline-middle"
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// 示例：if-else流程图
export const IfElseFlowChart = () => {
  const nodes: FlowNode[] = [
    { id: 'start', label: '开始', type: 'start', x: 300, y: 40 },
    { id: 'input', label: '输入成绩', type: 'input', x: 300, y: 120 },
    { id: 'decision', label: '成绩>=60?', type: 'decision', x: 300, y: 220 },
    { id: 'pass', label: '输出"及格"', type: 'output', x: 180, y: 340 },
    { id: 'fail', label: '输出"不及格"', type: 'output', x: 420, y: 340 },
    { id: 'end', label: '结束', type: 'end', x: 300, y: 420 },
  ];

  const connections: FlowConnection[] = [
    { from: 'start', to: 'input' },
    { from: 'input', to: 'decision' },
    { from: 'decision', to: 'pass', label: '是' },
    { from: 'decision', to: 'fail', label: '否' },
    { from: 'pass', to: 'end' },
    { from: 'fail', to: 'end' },
  ];

  return <FlowChart nodes={nodes} connections={connections} title="if-else语句流程图" />;
};

// 示例：for循环流程图
export const ForLoopFlowChart = () => {
  const nodes: FlowNode[] = [
    { id: 'start', label: '开始', type: 'start', x: 300, y: 40 },
    { id: 'init', label: '初始化循环变量', type: 'process', x: 300, y: 120 },
    { id: 'condition', label: '条件判断', type: 'decision', x: 300, y: 220 },
    { id: 'body', label: '循环体', type: 'process', x: 300, y: 320 },
    { id: 'update', label: '更新循环变量', type: 'process', x: 450, y: 320 },
    { id: 'end', label: '结束', type: 'end', x: 300, y: 420 },
  ];

  const connections: FlowConnection[] = [
    { from: 'start', to: 'init' },
    { from: 'init', to: 'condition' },
    { from: 'condition', to: 'body', label: '是' },
    { from: 'condition', to: 'end', label: '否' },
    { from: 'body', to: 'update' },
    { from: 'update', to: 'condition' },
  ];

  return <FlowChart nodes={nodes} connections={connections} title="for循环流程图" />;
};
