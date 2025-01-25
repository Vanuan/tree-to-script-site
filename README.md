# TreeToScript Landing Page

[![Powered by Next.js](https://img.shields.io/badge/powered_by-Next.js-000000.svg?logo=next.js&labelColor=000000)](https://nextjs.org)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Modern landing page for TreeToScript, built with Next.js App Router and TypeScript. Features dynamic content management through YAML and interactive code examples.

![TreeToScript Screenshot](./public/screenshot.png)

## Features

- 🚀 Next.js 14 with App Router
- 📝 YAML-powered content management
- 📱 Responsive design
- 📋 Clipboard functionality for code examples
- 🎨 Geist font & modern UI components
- ⚡ Static site generation (SSG)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vanuan/tree-to-script-site.git
```

2. Install dependencies:
```bash
cd tree-to-script-landing
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Project Structure

```
├── app/                  # Next.js app router
├── components/           # Reusable components
│   ├── landing/          # Page-specific components
│   └── ui/               # UI primitives
├── content/              # YAML content files
├── lib/                  # Utility functions
├── public/               # Static assets
├── types/                # TypeScript types
└── styles/               # Global CSS
```

## Content Management

Edit YAML files in `/content` to update site content:

```yaml
# content/home.yaml
hero:
  title: "Your New Title"
  subtitle: "Updated subtitle text"
  inputCode: |
    your-custom-structure/
      ├── src/
      └── ...
```

The system automatically:
- Loads YAML content at build time
- Handles multi-line code blocks
- Manages clipboard functionality
- Propagates changes across components

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vanuan/tree-to-script-landing)

### Manual Build

1. Create production build:
```bash
npm run build
```

2. Start server:
```bash
npm start
```

## Tech Stack

- [Next.js](https://nextjs.org) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [YAML](https://yaml.org) - Content management
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Lucide](https://lucide.dev) - Icons

