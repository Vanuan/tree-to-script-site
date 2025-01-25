// components/header.tsx
import Link from "next/link";
import { Github, Trees, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/Logo";

interface HeaderProps {
  documentationHref?: string;
  githubUrl?: string;
}

export const Header = ({
  documentationHref = "#docs",
  githubUrl = "https://github.com/your-repo",
}: HeaderProps) => (
  <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo with responsive sizing */}
        <div className="flex items-center flex-shrink-0">
          <Logo
            variant="header"
            size={32}
            icons={[<Trees key="trees" />, <Terminal key="terminal" />]}
            className="space-x-1.5"
            titleClassName="text-xl font-semibold tracking-tight"
            showTitle={true}
          />
        </div>

        {/* Navigation with responsive spacing */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex text-sm font-medium hover:bg-accent"
            asChild
          >
            <Link href={documentationHref}>Documentation</Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full aspect-square p-2 sm:aspect-auto sm:px-4 sm:py-2"
            asChild
          >
            <Link href={githubUrl} target="_blank">
              <span className="sr-only">GitHub</span>
              <Github className="h-4 w-4" />
              <span className="hidden sm:ml-2 sm:inline">GitHub</span>
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  </header>
);

// // components/header.tsx
// import Link from "next/link";
// import { Github, Trees, Terminal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Logo } from "@/components/landing/Logo";

// interface HeaderProps {
//   documentationHref?: string;
//   githubUrl?: string;
// }

// export const Header = ({
//   documentationHref = "#docs",
//   githubUrl = "https://github.com/your-repo",
// }: HeaderProps) => (
//   <header className="bg-white shadow-sm sticky top-0 z-50">
//     <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//       <Logo
//         variant="header"
//         size={32}
//         icons={[<Trees key="trees" />, <Terminal key="terminal" />]}
//         className="space-x-2"
//         titleClassName="text-2xl font-bold text-gray-900"
//       />
//       <nav className="flex space-x-4">
//         <Button variant="bordered" asChild>
//           <Link href={documentationHref}>Documentation</Link>
//         </Button>
//         <Button variant="gradient" asChild>
//           <Link href={githubUrl} target="_blank">
//             <Github className="mr-2 h-4 w-4" /> GitHub
//           </Link>
//         </Button>
//       </nav>
//     </div>
//   </header>
// );
