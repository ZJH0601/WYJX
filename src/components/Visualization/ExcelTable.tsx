interface CellData {
  value: string;
  formula?: string;
  highlight?: boolean;
  color?: string;
}

interface ExcelTableProps {
  data: CellData[][];
  title?: string;
  explanation?: string;
  showFormula?: boolean;
}

export const ExcelTable = ({ data, title, explanation, showFormula = false }: ExcelTableProps) => {
  return (
    <div className="bg-white rounded-xl p-6 my-6 shadow-sm">
      {title && <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>}
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gray-200 border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-600 w-12"></th>
              {data[0]?.map((_, colIndex) => (
                <th
                  key={colIndex}
                  className="bg-gray-200 border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-600 min-w-[100px]"
                >
                  {String.fromCharCode(65 + colIndex)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="bg-gray-200 border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-600">
                  {rowIndex + 1}
                </td>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`border border-gray-300 px-4 py-2 text-sm font-mono ${
                      cell.highlight ? 'bg-yellow-100 ring-2 ring-yellow-400' : 'bg-white'
                    } ${cell.color ? cell.color : ''}`}
                  >
                    {showFormula && cell.formula ? (
                      <span className="text-green-600">={cell.formula}</span>
                    ) : (
                      <span className="text-gray-800">{cell.value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {explanation && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 mb-2">💡 说明</h5>
          <p className="text-sm text-gray-600">{explanation}</p>
        </div>
      )}
    </div>
  );
};

// 示例：基础表格
export const BasicExcelTable = () => {
  const data: CellData[][] = [
    [{ value: '姓名' }, { value: '语文' }, { value: '数学' }, { value: '英语' }, { value: '总分' }],
    [{ value: '张三' }, { value: '85' }, { value: '92' }, { value: '88' }, { value: '265', formula: 'B2+C2+D2', highlight: true }],
    [{ value: '李四' }, { value: '78' }, { value: '85' }, { value: '90' }, { value: '253', formula: 'B3+C3+D3', highlight: true }],
    [{ value: '王五' }, { value: '90' }, { value: '88' }, { value: '95' }, { value: '273', formula: 'B4+C4+D4', highlight: true }],
    [{ value: '平均分', highlight: true }, { value: '84.3', formula: 'AVERAGE(B2:B4)', highlight: true }, { value: '88.3', formula: 'AVERAGE(C2:C4)', highlight: true }, { value: '91', formula: 'AVERAGE(D2:D4)', highlight: true }, { value: '263.7', formula: 'AVERAGE(E2:E4)', highlight: true }],
  ];

  return (
    <ExcelTable
      data={data}
      title="Excel基础表格示例"
      explanation="这是一个学生成绩表格，展示了基本的数据录入和公式计算。黄色高亮单元格显示了使用公式计算的结果。"
    />
  );
};

// 示例：条件格式
export const ConditionalFormattingTable = () => {
  const data: CellData[][] = [
    [{ value: '学号' }, { value: '姓名' }, { value: '成绩' }, { value: '等级' }],
    [{ value: '001' }, { value: '张三' }, { value: '92', color: 'bg-green-100' }, { value: '优秀', color: 'bg-green-100' }],
    [{ value: '002' }, { value: '李四' }, { value: '85', color: 'bg-blue-100' }, { value: '良好', color: 'bg-blue-100' }],
    [{ value: '003' }, { value: '王五' }, { value: '72', color: 'bg-yellow-100' }, { value: '中等', color: 'bg-yellow-100' }],
    [{ value: '004' }, { value: '赵六' }, { value: '58', color: 'bg-red-100' }, { value: '不及格', color: 'bg-red-100' }],
    [{ value: '005' }, { value: '钱七' }, { value: '88', color: 'bg-blue-100' }, { value: '良好', color: 'bg-blue-100' }],
  ];

  return (
    <ExcelTable
      data={data}
      title="条件格式示例"
      explanation="根据成绩自动设置不同颜色：90分以上绿色（优秀），80-89分蓝色（良好），60-79分黄色（中等），60分以下红色（不及格）。"
    />
  );
};

// 示例：数据透视表
export const PivotTableExample = () => {
  const data: CellData[][] = [
    [{ value: '部门', highlight: true }, { value: '性别', highlight: true }, { value: '人数', highlight: true }],
    [{ value: '销售部' }, { value: '男' }, { value: '5' }],
    [{ value: '销售部' }, { value: '女' }, { value: '3' }],
    [{ value: '销售部' }, { value: '合计', highlight: true }, { value: '8', highlight: true }],
    [{ value: '技术部' }, { value: '男' }, { value: '8' }],
    [{ value: '技术部' }, { value: '女' }, { value: '2' }],
    [{ value: '技术部' }, { value: '合计', highlight: true }, { value: '10', highlight: true }],
    [{ value: '人事部' }, { value: '男' }, { value: '2' }],
    [{ value: '人事部' }, { value: '女' }, { value: '4' }],
    [{ value: '人事部' }, { value: '合计', highlight: true }, { value: '6', highlight: true }],
    [{ value: '总计', highlight: true }, { value: '', highlight: true }, { value: '24', highlight: true }],
  ];

  return (
    <ExcelTable
      data={data}
      title="数据透视表示例"
      explanation="数据透视表可以快速汇总和分析大量数据。这里按部门和性别统计人数，并自动计算合计值。"
    />
  );
};
