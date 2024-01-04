import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        // logo and headers
        brandText: "#7b4e27",

        // light theme colors
        lightBackground: "#f8f9fa",
        lightText: "#333333",

        // dark theme colors
        darkBackground: "#212529",
        darkText: "#ffffff",

        // functional colors
        primary: "#187fa5",
        success: "#347a53",
        warning: "#d58c1e",
        info: "2C3F4F",
      }
    }
  }
}
export default config
