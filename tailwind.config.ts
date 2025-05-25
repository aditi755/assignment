import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   safelist: [
    "bg-yellow-200", "text-yellow-800",
    "bg-blue-200", "text-blue-800",
    "bg-orange-200", "text-orange-800",
    "bg-green-200", "text-green-800",
    "bg-red-200", "text-red-800"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
