// app/page.tsx
import { loadYaml } from "@/lib/yaml-custom-loader";
import { YamlContent } from "@/types/content";
import { Header } from "@/components/Header";
import { ClientHomePage } from "@/components/landing/ClientHomePage";

// Server Component (no 'use client' directive)
export default async function HomePage() {
  const content = await loadYaml<YamlContent>("content/home.yaml");

  return (
    <>
      <Header githubUrl={content.github} documentationHref={content.sphinx} />
      <ClientHomePage content={content} />
    </>
  );
}
