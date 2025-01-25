import { Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface CTAButtonsProps {
  githubUrl: string;
  getStartedHref?: string;
}

export const CTAButtons = ({
  githubUrl,
  getStartedHref = "#get-started",
}: CTAButtonsProps) => (
  <Card variant={"popover"} className="flex justify-center">
    <CardContent className="flex justify-center flex-col md:flex-rowitems-center gap-8">
      <div className="flex items-start gap-8 justify-center flex-wrap ">
        <Button variant="gradient" size="lg" asChild>
          <Link href={getStartedHref} className="flex items-center">
            <Rocket className="w-5 h-5" />
            Get Started
          </Link>
        </Button>
        <Button variant="bordered" size="lg" asChild>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            View on GitHub
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);
