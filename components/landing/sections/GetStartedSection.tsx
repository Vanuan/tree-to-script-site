// components/get-started-section.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/landing/CodeBlock";

interface GetStartedSectionProps {
  installationCommand: string;
  exampleCommand: string;
  title?: string;
  combined?: boolean;
  footerText?: string;
}

export const GetStartedSection = ({
  installationCommand = "pip install tree-to-script",
  exampleCommand = `echo "project/\n├── src/\n│   ├── components/\n│   └── utils/\n├── tests/\n└── README.md" | tree-to-script`,
  title = "Get Started",
  combined = false,
  footerText = "Dry-run mode enabled by default – safe by design",
}: GetStartedSectionProps) => {
  const [copiedType, setCopiedType] = useState<"install" | "example" | null>(
    null,
  );

  const combinedCommands = `${installationCommand}\n\n# Try it out with an example\n${exampleCommand}`;

  const handleCopy = (type: "install" | "example" | "combined") => {
    const text =
      type === "combined"
        ? combinedCommands
        : type === "install"
          ? installationCommand
          : exampleCommand;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type === "combined" ? "install" : type);
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  // const commandsAndOutputs = [
  //   {
  //     command: "pip install tree-to-script",
  //     output: [
  //       "Defaulting to user installation because normal site-packages is not writeable",
  //       "Requirement already satisfied: tree-to-script in ~/.local/lib/python3.10/site-packages (0.1.2)",
  //     ],
  //   },
  //   {
  //     command:
  //       "echo 'project/\n  ├── src/\n  │   ├── components/\n  │   └── utils/\n  ├── tests/\n  └── README.md\n' | python3 -m tree_to_script.main",
  //     output: [
  //       "commands=(",
  //       "  'mkdir -p project'",
  //       "  'mkdir -p project/src'",
  //       "  'mkdir -p project/src/components'",
  //       "  'mkdir -p project/src/utils'",
  //       "  'mkdir -p project/tests'",
  //       "  'touch project/README.md'",
  //       ")",
  //     ],
  //   },
  //   {
  //     command: "~/projects/my_tree$ tree project/",
  //     output: [
  //       "project/",
  //       "├── README.md",
  //       "├── src",
  //       "│   ├── components",
  //       "│   └── utils",
  //       "└── tests",
  //       "4 directories, 1 file",
  //     ],
  //   },
  // ];

  return (
    <section
      id="get-started"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
    >
      <Card variant="gradient">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center">{title}</h2>

          {combined ? (
            <div className="relative group">
              <CodeBlock
                code={combinedCommands}
                onCopy={() => handleCopy("combined")}
                copied={copiedType === "install"}
              />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <CodeBlock
                code={installationCommand}
                onCopy={() => handleCopy("install")}
                copied={copiedType === "install"}
                label="Installation"
              />
              <CodeBlock
                code={exampleCommand}
                onCopy={() => handleCopy("example")}
                copied={copiedType === "example"}
                label="Example Usage"
              />
            </div>
          )}

          {footerText && (
            <p className="text-sm text-gray-500 text-center mt-4">
              {footerText}
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
