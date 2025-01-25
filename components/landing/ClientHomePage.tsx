"use client";

import { useState } from "react";
import { GetStartedSection } from "@/components/landing/sections/GetStartedSection";
import { Footer } from "@/components/landing/sections/Footer";
import { UseCasesSection } from "@/components/landing/sections/UseCasesSection";
import { MotivationSection } from "@/components/landing/sections/MotivationSection";
import { DocumentationSection } from "@/components/landing/sections/DocumentationSection";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { YamlContent } from "@/types/content";

export function ClientHomePage({ content }: { content: YamlContent }) {
  const [treeCopied, setTreeCopied] = useState(false);
  const [commandsCopied, setCommandsCopied] = useState(false);

  const handleCopy = (text: string, type: "tree" | "commands") => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (type === "tree") setTreeCopied(true);
        else setCommandsCopied(true);
        setTimeout(
          () =>
            type === "tree" ? setTreeCopied(false) : setCommandsCopied(false),
          2000,
        );
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <main className="space-y-16 pt-16">
      <HeroSection
        inputCode={content.hero.inputCode}
        outputCode={content.hero.outputCode}
        onCopyInput={() => handleCopy(content.hero.inputCode, "tree")}
        onCopyOutput={() => handleCopy(content.hero.outputCode, "commands")}
        copiedInput={treeCopied}
        copiedOutput={commandsCopied}
        title={content.hero.title}
        githubUrl={content.github}
        subtitle={content.hero.subtitle}
      />

      {/* Other interactive sections */}
      <GetStartedSection {...content.getStarted} />
      <UseCasesSection {...content.useCases} />
      <MotivationSection {...content.motivation} />
      <DocumentationSection {...content.documentation} />

      <Footer {...content.footer} />
    </main>
  );
}
