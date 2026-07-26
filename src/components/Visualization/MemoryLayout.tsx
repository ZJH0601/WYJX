interface MemoryBlock {
  address: string;
  value: string;
  label: string;
  type?: 'int' | 'char' | 'float' | 'pointer' | 'array' | 'struct';
  highlighted?: boolean;
}

interface MemoryLayoutProps {
  blocks: MemoryBlock[];
  title?: string;
  explanation?: string;
}

export const MemoryLayout = ({ blocks, title, explanation }: MemoryLayoutProps) => {
  const getBlockColor = (type?: MemoryBlock['type']) => {
    switch (type) {
      case 'int':
        return 'bg-blue-100 border-blue-400';
      case 'char':
        return 'bg-green-100 border-green-400';
      case 'float':
        return 'bg-purple-100 border-purple-400';
      case 'pointer':
        return 'bg-red-100 border-red-400';
      case 'array':
        return 'bg-yellow-100 border-yellow-400';
      case 'struct':
        return 'bg-pink-100 border-pink-400';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 my-6 shadow-sm">
      {title && <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* 内存布局 */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-2">
            {blocks.map((block, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg p-3 text-center transition-all duration-300 ${getBlockColor(block.type)} ${
                  block.highlighted ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                <div className="text-xs text-gray-500 mb-1">{block.address}</div>
                <div className="font-mono text-lg font-bold text-gray-800">{block.value}</div>
                <div className="text-xs text-gray-600 mt-1">{block.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 解释 */}
        {explanation && (
          <div className="lg:w-64 bg-gray-50 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">💡 说明</h5>
            <p className="text-sm text-gray-600">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// 示例：变量内存布局
export const VariableMemoryLayout = () => {
  const blocks: MemoryBlock[] = [
    { address: '0x7ffeefbff58c', value: '10', label: 'int a', type: 'int' },
    { address: '0x7ffeefbff588', value: '20', label: 'int b', type: 'int' },
    { address: '0x7ffeefbff584', value: "'A'", label: 'char c', type: 'char' },
    { address: '0x7ffeefbff580', value: '3.14', label: 'float f', type: 'float' },
  ];

  return (
    <MemoryLayout
      blocks={blocks}
      title="变量内存布局示例"
      explanation="每个变量在内存中占用一定的字节数，int类型通常占用4字节，char占用1字节，float占用4字节。变量按声明顺序从高地址向低地址分配。"
    />
  );
};

// 示例：数组内存布局
export const ArrayMemoryLayout = () => {
  const blocks: MemoryBlock[] = [
    { address: '0x7ffeefbff570', value: '1', label: 'arr[0]', type: 'array' },
    { address: '0x7ffeefbff574', value: '2', label: 'arr[1]', type: 'array' },
    { address: '0x7ffeefbff578', value: '3', label: 'arr[2]', type: 'array' },
    { address: '0x7ffeefbff57c', value: '4', label: 'arr[3]', type: 'array' },
    { address: '0x7ffeefbff580', value: '5', label: 'arr[4]', type: 'array' },
  ];

  return (
    <MemoryLayout
      blocks={blocks}
      title="数组内存布局示例"
      explanation="数组元素在内存中连续存储。数组名arr代表首元素的地址，arr[i]等价于*(arr+i)。通过下标可以访问每个元素。"
    />
  );
};

// 示例：指针内存布局
export const PointerMemoryLayout = () => {
  const blocks: MemoryBlock[] = [
    { address: '0x7ffeefbff580', value: '100', label: 'int num', type: 'int', highlighted: true },
    { address: '0x7ffeefbff588', value: '0x...580', label: 'int *p', type: 'pointer', highlighted: true },
  ];

  return (
    <MemoryLayout
      blocks={blocks}
      title="指针内存布局示例"
      explanation="指针变量p存储的是变量num的内存地址。*p表示访问p所指向的内存单元的值，即100。"
    />
  );
};
