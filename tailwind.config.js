const plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 1px 1px 0 rgb(0 0 0 / 0.05), 0 1px 2px 0 rgb(0 0 0 / 0.02)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#bfc4cd",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        violet: {
          50: "#f1eeff",
          100: "#e6e1ff",
          200: "#d2cbff",
          300: "#b7acff",
          400: "#9c8cff",
          500: "#8470ff",
          600: "#755ff8",
          700: "#5d47de",
          800: "#4634b1",
          900: "#2f227c",
          950: "#1c1357",
        },
        sky: {
          50: "#e3f3ff",
          100: "#d1ecff",
          200: "#b6e1ff",
          300: "#a0d7ff",
          400: "#7bc8ff",
          500: "#67bfff",
          600: "#56b1f3",
          700: "#3193da",
          800: "#1c71ae",
          900: "#124d79",
          950: "#0b324f",
        },
        green: {
          50: "#d2ffe2",
          100: "#b1fdcd",
          200: "#8bf0b0",
          300: "#67e294",
          400: "#4bd37d",
          500: "#3ec972",
          600: "#34bd68",
          700: "#239f52",
          800: "#15773a",
          900: "#0f5429",
          950: "#0a3f1e",
        },
        red: {
          50: "#ffe8e8",
          100: "#ffd1d1",
          200: "#ffb2b2",
          300: "#ff9494",
          400: "#ff7474",
          500: "#ff5656",
          600: "#fa4949",
          700: "#e63939",
          800: "#c52727",
          900: "#941818",
          950: "#600f0f",
        },
        yellow: {
          50: "#fff2c9",
          100: "#ffe7a0",
          200: "#ffe081",
          300: "#ffd968",
          400: "#f7cd4c",
          500: "#f0bb33",
          600: "#dfad2b",
          700: "#bc9021",
          800: "#816316",
          900: "#4f3d0e",
          950: "#342809",
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1.5",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5715",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.33",
            letterSpacing: "-0.01em",
          },
        ],
        "3xl": [
          "1.88rem",
          {
            lineHeight: "1.33",
            letterSpacing: "-0.01em",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      addVariant("sidebar-expanded", "&.sidebar-expanded *");
      // addVariant("sidebar-expanded-children", ".sidebar-expanded &"); // Targets direct children inside .sidebar-expanded
      addVariant("dark", "&:is(.dark *)"); // Targets elements inside `.dark`
    }),
  ],
});
