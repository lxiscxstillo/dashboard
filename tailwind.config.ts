import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors, fontSizes, radius, shadows, spacing } = require("./lib/design-tokens.cjs");

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        "primary-dark": colors.primaryDark,
        secondary: colors.secondary,
        background: colors.background,
        card: colors.card,
        "text-primary": colors.textPrimary,
        "text-secondary": colors.textSecondary,
        border: colors.border,
        muted: colors.muted,
        success: colors.success,
        danger: colors.danger,
        info: colors.info,
        accent: colors.accent
      },
      spacing: {
        card: spacing.card,
        section: spacing.section
      },
      borderRadius: {
        xl: radius.xl,
        "2xl": radius["2xl"],
        "3xl": radius["3xl"]
      },
      boxShadow: {
        soft: shadows.soft,
        card: shadows.card
      },
      fontSize: {
        xs: fontSizes.xs,
        sm: fontSizes.sm,
        base: fontSizes.base,
        lg: fontSizes.lg,
        xl: fontSizes.xl,
        "2xl": fontSizes["2xl"],
        "3xl": fontSizes["3xl"],
        "4xl": fontSizes["4xl"]
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
      }
    }
  },
  plugins: []
};

export default config;
