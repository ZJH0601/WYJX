import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = 'c' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const highlightCode = (code: string) => {
    // 简单的语法高亮
    const keywords = ['int', 'float', 'char', 'void', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'return', 'include', 'define', 'struct', 'union', 'typedef', 'static', 'extern', 'const', 'sizeof', 'NULL', 'TRUE', 'FALSE', 'main'];
    
    const highlighted = code
      // 先转义源码，避免代码示例中的HTML被浏览器解释为真实标签。
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // 处理注释
      .replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="code-comment">$1</span>')
      // 处理字符串
      .replace(/("[^"]*")/g, '<span class="code-string">$1</span>')
      .replace(/('[^']*')/g, '<span class="code-string">$1</span>')
      // 处理数字
      .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
      // 处理关键字
      .replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), '<span class="code-keyword">$1</span>')
      // 处理函数名
      .replace(/(\w+)\s*\(/g, '<span class="code-function">$1</span>(');

    return highlighted;
  };

  return (
    <div className="relative my-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-t-lg">
        <span className="text-sm text-slate-400 font-medium">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-2 py-1 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-400" />
              <span className="text-green-400">已复制</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>复制</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="code-block rounded-b-lg overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  );
};
