// components/motivation-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

interface MotivationSectionProps {
  title?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export const MotivationSection = ({
  title = "💡 Why TreeToScript?",
  features = [
    {
      title: "Simplify Workflows",
      description: "Turn text structures into real folders in seconds",
    },
    {
      title: "AI Integration",
      description: "Seamlessly scaffold projects from AI tools",
    },
    {
      title: "Custom Templates",
      description: "Create and reuse project templates",
    },
  ],
}: MotivationSectionProps) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Card variant="gradient" padding="lg">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            variant="popover"
            className="h-full transition-all hover:shadow-lg hover:border-primary/20"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Icon container with subtle background */}
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Info className="size-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-h3 text-foreground">
                    {feature.title}
                  </CardTitle>
                  <p className="text-body text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  </section>
);

// export const MotivationSection = ({
//   title = "💡 Why TreeToScript?",
//   features = [
//     {
//       title: "Simplify Workflows",
//       description: "Turn text structures into real folders in seconds",
//     },
//     {
//       title: "AI Integration",
//       description: "Seamlessly scaffold projects from AI tools",
//     },
//     {
//       title: "Custom Templates",
//       description: "Create and reuse project templates",
//     },
//   ],
// }: MotivationSectionProps) => (
//   <section className="bg-white py-16">
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//       <h2 className="text-3xl font-bold mb-6">{title}</h2>
//       <div className="grid md:grid-cols-3 gap-6 text-left">
//         {features.map((feature, index) => (
//           <FeatureItem
//             key={index}
//             title={feature.title}
//             description={feature.description}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// );
