import { HeroCodeComparison } from "./HeroCodeComparison";
import { CTAButtons } from "@/components/landing/sections/CTAButtons";
import { Logo } from "@/components/landing/Logo";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  inputCode: string;
  outputCode: string;
  onCopyInput: () => void;
  onCopyOutput: () => void;
  copiedInput: boolean;
  copiedOutput: boolean;
  githubUrl: string;
  getStartedHref?: string;
  logoSize?: number;
}

export const HeroSection = ({
  title = "From Text to Directories in One Command",
  subtitle = "The simplest way to safely materialize AI-generated directory structures",
  inputCode,
  outputCode,
  onCopyInput,
  onCopyOutput,
  copiedInput,
  copiedOutput,
  githubUrl,
  getStartedHref = "#get-started",
  logoSize = 160,
}: HeroSectionProps) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-6">
      {/* Prominent Hero Logo */}
      <Logo
        variant="side-by-side"
        size={logoSize}
        className="mx-auto mb-8"
        background="bg-gradient-to-r from-primaryBlue/90 to-emeraldGreen/90"
        showTitle={false}
      />

      <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>

      <HeroCodeComparison
        inputCode={inputCode}
        outputCode={outputCode}
        onCopyInput={onCopyInput}
        onCopyOutput={onCopyOutput}
        copiedInput={copiedInput}
        copiedOutput={copiedOutput}
      />

      <CTAButtons githubUrl={githubUrl} getStartedHref={getStartedHref} />
    </div>
  </section>
);
