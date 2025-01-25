import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  onCopy?: () => void;
  copied: boolean;
  label?: string;
}

export const CodeBlock = ({ code, onCopy, copied, label }: CodeBlockProps) => (
  <div className="relative flex-1 w-full">
    {/* External label */}
    {label && <p className="text-sm text-gray-600 mb-2 font-medium">{label}</p>}

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group">
      {/* Code content with text-start */}
      <pre className="p-6 overflow-x-auto text-sm font-mono text-gray-100 whitespace-pre text-start w-min">
        <code>{code}</code>
      </pre>

      {/* Copy button positioned at top-right */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-300" />
        )}
      </Button>
    </div>
  </div>
);
