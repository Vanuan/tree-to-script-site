"use client";
import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/landing/CodeBlock";

interface UseCaseCardProps {
  title: string;
  code: string;
  description?: string;
}

export const UseCaseCard = ({ title, code, description }: UseCaseCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Copy failed:", err));
  };

  return (
    <Card variant="elevated">
      <CardContent className="p-6">
        <CardTitle className="text-h3 mb-4">{title}</CardTitle>
        <CodeBlock code={code} copied={copied} onCopy={handleCopy} />
        {description && (
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};
