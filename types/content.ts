// types/content.ts
export interface YamlContent {
  github: string;
  pip: string;
  sphinx: string;
  hero: {
    title: string;
    subtitle: string;
    inputCode: string;
    outputCode: string;
  };
  getStarted: {
    combined: boolean;
    installationCommand: string;
    exampleCommand: string;
    title: string;
  };
  useCases: {
    title: string;
    items: Array<{
      title: string;
      code: string;
      description: string;
    }>;
  };
  motivation: {
    title: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  documentation: {
    id: string;
    title: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    installationCommand: string;
  };
  footer: {
    brandName: string;
    tagline: string;
    links: Array<{
      title: string;
      href: string;
    }>;
    license: string;
  };
}
