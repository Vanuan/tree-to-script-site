import Link from "next/link";

interface FooterProps {
  brandName?: string;
  tagline?: string;
  links?: Array<{
    title: string;
    href: string;
  }>;
  license?: string;
}

export const Footer = ({
  brandName = "TreeToScript",
  tagline = "Transform your workflow today!",
  links = [
    { title: "Documentation", href: "#" },
    { title: "GitHub", href: "#" },
    { title: "Contributing", href: "#" },
    { title: "License", href: "#" },
  ],
  license = "MIT License",
}: FooterProps) => (
  <footer className="bg-gray-800 text-white mt-16 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">{brandName}</h3>
          <p className="text-sm">{tagline}</p>
        </div>
        <div className="space-y-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-sm hover:text-emerald-400 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>
          {license} © {new Date().getFullYear()} {brandName}
        </p>
      </div>
    </div>
  </footer>
);
