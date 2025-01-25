import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/landing/CodeBlock";

interface DocumentationSectionProps {
  title?: string;
  features?: { title: string; description: string }[];
  installationCommand?: string;
}

export const DocumentationSection = ({
  title = "📦 Documentation",
  features = [
    { title: "Safe by Design", description: "dry-run mode" },
    {
      title: "Easy to Use CLI",
      description: "",
    },
    { title: "Flexible Input Methods", description: "" },
    { title: "AI-Friendly Structure", description: "" },
  ],
  installationCommand = "pip install tree-to-script",
}: DocumentationSectionProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(installationCommand)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Copy failed:", err));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card variant="elevated" padding="lg">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center">{title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    {feature.title}: {feature.description}
                  </li>
                ))}
              </ul>
            </div>
            <CodeBlock
              code={installationCommand}
              copied={copied}
              onCopy={handleCopy}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
