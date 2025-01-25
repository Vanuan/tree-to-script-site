import React from "react";
import { Terminal, Trees, Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreeToScriptTheme } from "@/theme/tokens";
import { Logo } from "@/components/landing/Logo";
export const Logos = () => (
  <div className="flex flex-col items-center gap-8">
    <Logo
      variant="side-by-side"
      size={200}
      className="rounded-xl"
      showTitle={false}
    />
    <div className="grid grid-cols-2 gap-4">
      <Logo
        variant="icon-pair"
        size={120}
        icons={[<Trees key="tree" />, <Terminal key="terminal" />]}
        showTitle={false}
      />
      <Logo
        variant="icon-pair"
        size={120}
        icons={[<Terminal key="tree" />, <Trees key="terminal" />]}
        showTitle={false}
      />
    </div>
  </div>
);
// TODO decide whether to reuse components from the app or implement branding independently
// <SideBySideLogo size={200} />
// <div className="grid grid-cols-2 gap-4">
//   <LogoVariation
//     size={120}
//     icon1={<Trees />}
//     icon2={<Terminal />}
//   />
//   <LogoVariation
//     size={120}
//     icon1={<Terminal />}
//     icon2={<Trees />}
//   />
// </div>

// Branding Subcomponents
// const SideBySideLogo: React.FC<{ size: number }> = ({ size }) => (
//   <div
//     className="inline-flex items-center justify-center bg-gradient-to-r from-primaryBlue to-emeraldGreen p-4 rounded-xl"
//     style={{
//       width: `${size * 1.5}px`,
//       height: `${size}px`,
//     }}
//   >
//     <Trees size={size * 0.6} className="text-white mr-4" />
//     <Terminal size={size * 0.4} className="text-white" />
//   </div>
// );

// const LogoVariation: React.FC<{
//   size: number;
//   icon1: React.ReactNode;
//   icon2: React.ReactNode;
// }> = ({ size, icon1, icon2 }) => (
//   <div className="p-4 rounded-lg bg-lightBackground">
//     <div className="flex items-center">
//       {React.cloneElement(icon1 as React.ReactElement, {
//         size: size * 0.6,
//         className: "text-primaryBlue",
//       })}
//       {React.cloneElement(icon2 as React.ReactElement, {
//         size: size * 0.4,
//         className: "text-emeraldGreen ml-2",
//       })}
//     </div>
//   </div>
// );

export const TreeToScriptBrandBook: React.FC = () => (
  <div className="space-y-16 p-section max-w-7xl mx-auto">
    {/* Brand Identity Section */}
    <section>
      <h2 className="text-h1 font-heading mb-element">Brand Identity</h2>
      <div className="space-y-8">
        <Card variant="elevated">
          <CardContent className="p-6">
            <h3 className="text-h3 font-heading mb-4">Logo System</h3>
            <div className="flex flex-col items-center gap-8">
              <Logos />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <h3 className="text-h3 font-heading mb-4">Color System</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(TreeToScriptTheme.colors)
                .filter(
                  ([name]) =>
                    ![
                      "border",
                      "input",
                      "ring",
                      "background",
                      "foreground",
                    ].includes(name),
                )
                .map(([name, color]) => (
                  <ColorSwatch key={name} name={name} color={color} />
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Typography Section */}
    <section>
      <h2 className="text-h1 font-heading mb-element">Typography</h2>
      <Card variant="elevated">
        <CardContent className="p-6 space-y-6">
          <div className="font-heading">
            <h1 className="text-h1 font-heading font-bold">Heading 1</h1>
            <h2 className="text-h2 font-semibold mt-4">Heading 2</h2>
            <h3 className="text-h3 font-medium mt-4">Heading 3</h3>
          </div>
          <div className="font-body">
            <p className="text-body">
              Body Text: The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-small mt-4">
              Small Text: Secondary information and captions
            </p>
          </div>
        </CardContent>
      </Card>
    </section>

    {/* Component Library Section */}
    <section>
      <h2 className="text-h1 font-heading mb-element">Component Library</h2>
      <div className="space-y-8">
        <Card variant="elevated">
          <CardContent className="p-6 space-y-6">
            <div className="flex gap-4 flex-wrap">
              <Button variant="gradient" size="icon">
                <Terminal className="size-5" />
              </Button>
              <Button variant="gradient">Primary Action</Button>
              <Button variant="bordered">Secondary Action</Button>
              <Button variant="outline">Outline</Button>
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Primary
              </Button>
              <Button
                variant="secondary"
                className="bg-secondary text-secondary-foreground"
              >
                Secondary
              </Button>
              <Button
                variant="destructive"
                className="bg-destructive text-destructive-foreground"
              >
                Destructive
              </Button>
            </div>
            <CodeBlockPreview code="npm install tree-to-script" />
          </CardContent>
        </Card>

        <Card variant="default" padding="lg">
          <CardContent className="space-y-4">
            <CardHeader>
              <CardTitle className="text-foreground">Card Title</CardTitle>
              <CardDescription className="text-muted-foreground">
                Card Description
              </CardDescription>
            </CardHeader>

            <Card variant="popover" className="w-[300px]">
              <CardContent className="p-4">
                <p className="text-popover-foreground">
                  Popover content with proper spacing
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card variant="gradient" padding="lg">
          <CardContent className="space-y-4">
            <CardHeader>
              <CardTitle className="text-foreground">Card Variations</CardTitle>
            </CardHeader>

            <div className="grid md:grid-cols-2 gap-4">
              <FeatureCardPreview
                title="Example Card"
                content="Card content with description"
              />
              <FeatureCardPreview
                title="Another Card"
                content="Different card content"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card variant="gradient">
            <CardHeader>
              <CardTitle>Gradient</CardTitle>
              <CardDescription>Background pattern</CardDescription>
            </CardHeader>
          </Card>

          <Card variant="bordered">
            <CardContent>
              <p>Subtle border accent</p>
            </CardContent>
          </Card>

          <Card variant="elevated" padding="sm">
            <CardContent>Shadow emphasis</CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
);

const ColorSwatch: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-lightBackground">
    <div
      className="size-12 rounded-lg border border-border"
      style={{ backgroundColor: color }}
    />
    <div>
      <p className="font-body font-medium text-darkText">{name}</p>
      <p className="font-body text-small text-muted-foreground">{color}</p>
    </div>
  </div>
);

const CodeBlockPreview: React.FC<{ code: string }> = ({ code }) => (
  <div className="relative group bg-darkText text-white rounded-lg overflow-hidden">
    <pre className="p-6 overflow-x-auto text-small font-mono">
      <code>{code}</code>
    </pre>
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <Copy className="size-4" />
    </Button>
  </div>
);

const FeatureCardPreview: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <Card>
    <CardContent className="p-6">
      <h4 className="text-h3 font-heading mb-2">{title}</h4>
      <p className="text-body text-muted-foreground">{content}</p>
    </CardContent>
  </Card>
);
