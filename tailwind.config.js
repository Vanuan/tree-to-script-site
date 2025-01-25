const { TreeToScriptTheme } = require("./theme/tokens");

// Convert HEX to HSL format for shadcn compatibility
const hexToHsl = require("hex-to-hsl"); // Add this package
const primaryHsl = hexToHsl(TreeToScriptTheme.colors.primaryBlue);
const destructiveHsl = hexToHsl(TreeToScriptTheme.colors.destructive);
const hslVariables = Object.entries(TreeToScriptTheme.colors).reduce(
  (acc, [name, value]) => {
    if (typeof value === "string") {
      const [h, s, l] = hexToHsl(value);
      acc[name] = `${h} ${s}% ${l}%`;
    }
    return acc;
  },
  {},
);

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: TreeToScriptTheme.spacing.scale[6],
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: TreeToScriptTheme.shadows,
      fontSize: {
        h1: [
          TreeToScriptTheme.typography.sizes.h1,
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        h2: [
          TreeToScriptTheme.typography.sizes.h2,
          { lineHeight: "1.25", letterSpacing: "-0.015em" },
        ],
        h3: [TreeToScriptTheme.typography.sizes.h3, { lineHeight: "1.3" }],
        body: [TreeToScriptTheme.typography.sizes.body, { lineHeight: "1.6" }],
        small: [
          TreeToScriptTheme.typography.sizes.small,
          { lineHeight: "1.5" },
        ],
      },
      fontWeight: TreeToScriptTheme.typography.weights,
      fontFamily: {
        heading: TreeToScriptTheme.typography.headingFont.split(", "),
        body: TreeToScriptTheme.typography.bodyFont.split(", "),
        mono: TreeToScriptTheme.typography.mono.split(", "),
        // Optional: Add as default sans font
        sans: TreeToScriptTheme.typography.bodyFont.split(", "),
      },
      colors: {
        ...TreeToScriptTheme.colors,
        // Shadcn color system
        ring: TreeToScriptTheme.colors.primaryBlue,
        primary: {
          DEFAULT: `hsl(${primaryHsl[0]} ${primaryHsl[1]}% ${primaryHsl[2]}%)`,
          foreground: TreeToScriptTheme.colors.white,
        },
        popover: {
          DEFAULT: TreeToScriptTheme.colors.popover,
          foreground: TreeToScriptTheme.colors.popoverForeground,
        },
        destructive: {
          DEFAULT: `hsl(${destructiveHsl[0]} ${destructiveHsl[1]}% ${destructiveHsl[2]}%)`,
          foreground: TreeToScriptTheme.colors.white,
        },
        muted: {
          DEFAULT: TreeToScriptTheme.colors.lightBackground,
          foreground: TreeToScriptTheme.colors.darkText,
        },
        card: {
          DEFAULT: `hsl(${hslVariables.lightBackground})`,
          foreground: `hsl(${hslVariables.darkText})`,
        },
      },
      borderRadius: TreeToScriptTheme.borderRadius,
      opacity: {
        30: "0.3",
        80: "0.8",
      },
      popover: TreeToScriptTheme.popover,
      transitionTimingFunction: {
        "in-out": TreeToScriptTheme.transitions.timing,
      },
      transitionDuration: TreeToScriptTheme.transitions.duration,
      spacing: TreeToScriptTheme.spacing.scale,
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
