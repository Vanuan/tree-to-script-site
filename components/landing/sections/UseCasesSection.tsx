import { UseCaseCard } from "@/components/landing/UseCaseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface UseCase {
  title: string;
  code: string;
  description?: string;
}

interface UseCasesSectionProps {
  useCases?: UseCase[]; // Made optional with default value
  title?: string;
}

export const UseCasesSection = ({
  useCases = [
    {
      title: "LLM-Powered Scaffolding",
      code: 'echo "Generate Python pipeline" | llm | tree-to-script',
      description: "Transform AI suggestions into filesystem structures",
    },
    {
      title: "Clipboard Workflow",
      code: "pbpaste | tree-to-script --no-dry",
      description: "Create structures directly from clipboard",
    },
    {
      title: "Template Library",
      code: "tree-to-script --template basic --output my_project",
      description: "Quickly create standardized project templates",
    },
  ],
  title = "🛠️ Use Cases",
}: UseCasesSectionProps) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Card variant={"gradient"}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {useCases.map((useCase, index) => (
          <UseCaseCard
            key={index} // Consider using unique ID if available
            title={useCase.title}
            code={useCase.code}
            description={useCase.description}
          />
        ))}
      </CardContent>
    </Card>
  </section>
);
