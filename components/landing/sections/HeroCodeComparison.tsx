// components/hero-code-comparison.tsx
"use client";

import { CodeBlock } from "@/components/landing/CodeBlock";

interface HeroCodeComparisonProps {
  inputCode: string;
  outputCode: string;
  onCopyInput: () => void;
  onCopyOutput: () => void;
  copiedInput: boolean;
  copiedOutput: boolean;
  inputLabel?: string;
  outputLabel?: string;
  footerText?: string;
}

export const HeroCodeComparison = ({
  inputCode,
  outputCode,
  onCopyInput,
  onCopyOutput,
  copiedInput,
  copiedOutput,
  inputLabel = "Input Tree Structure",
  outputLabel = "Generated Script",
  footerText,
}: HeroCodeComparisonProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-8">
    <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
      <CodeBlock
        code={inputCode}
        onCopy={onCopyInput}
        copied={copiedInput}
        label={inputLabel}
      />
      <span className="text-3xl text-gray-400 hidden md:block self-center">
        →
      </span>
      <CodeBlock
        code={outputCode}
        onCopy={onCopyOutput}
        copied={copiedOutput}
        label={outputLabel}
      />
    </div>
    {footerText && <p className="mt-4 text-sm text-gray-500">{footerText}</p>}
  </div>
);

// {
//   /* Side-by-Side Code Blocks */
// }
// <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-8">
//   <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
//     <CodeBlock
//       code={heroTreeExample}
//       onCopy={() => handleCopy(heroTreeExample, "tree")}
//       copied={treeCopied}
//       label="Input Tree Structure"
//     />
//     <span className="text-3xl text-gray-400 hidden md:block self-center">
//       →
//     </span>
//     <CodeBlock
//       code={heroCommandExample}
//       onCopy={() => handleCopy(heroCommandExample, "commands")}
//       copied={commandsCopied}
//       label="Generated Script"
//     />
//   </div>
//   <p className="mt-4 text-sm text-gray-500">
//     Dry-run mode enabled by default – safe by design
//   </p>
// </div>;
