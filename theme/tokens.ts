// theme/tokens.ts
export const TreeToScriptTheme = {
  colors: {
    primary: "#3B82F6",
    secondary: "#E0F2FE",
    destructive: "#DC2626",
    background: "#F9FAFB",
    foreground: "#1F2937",
    border: "#E5E7EB",
    popover: "#F3F4F6", // Slightly darker than background
    popoverForeground: "#1F2937",
    input: "#E5E7EB",
    accent: "#A7F3D0", // Light emerald

    primaryBlue: "#3B82F6",
    emeraldGreen: "#10B981",
    white: "#FFFFFF",
    darkText: "#1F2937",
    lightBackground: "#F9FAFB",
    darkBackground: "#111827",
    borderLight: "#E5E7EB",
  },
  typography: {
    headingFont: "var(--font-heading), sans-serif",
    bodyFont: "var(--font-body), sans-serif",
    mono: "var(--font-geist-mono), monospace",
    // headingFont: "Inter, sans-serif",
    // bodyFont: "Open Sans, sans-serif",
    sizes: {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.5rem",
      body: "1rem",
      small: "0.875rem",
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    section: "5rem",
    element: "1.5rem",
    small: "0.75rem",
    // Add Tailwind-compatible numeric scale
    scale: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      section: "5rem",
      element: "1.5rem",
    },
  },
  borderRadius: {
    default: "0.5rem",
    small: "0.375rem",
    // Compatibility with shadcn
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  shadows: {
    default: "0 4px 6px rgba(0, 0, 0, 0.1)",
    hover: "0 8px 12px rgba(0, 0, 0, 0.15)",
    // Tailwind compatibility
    sm: "0 1px 3px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.08)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    timing: "cubic-bezier(0.4, 0, 0.2, 1)",
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
  },
  popover: {
    elevation:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    border: "1px solid hsl(var(--border)/0.3)",
    zIndex: "z-[100]",
    backdropBlur: "blur(4px)",
  },
} as const;
