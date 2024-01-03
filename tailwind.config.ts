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
        lightButton: {
          background: "#dee2e6",
          hoverBackground: "#e9ecef",
          border: "1px solid #ced4da",
          hoverBorder: "1px solid #ced4da",
        },
        lightText: "#212020",
        lightTextHover: "#6b6464",
        lightBorder: "#c4bebe",
        lightShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

        // dark theme colors
        darkBackground: "#212529",
        darkButton: {
          background: "#495057",
          hoverBackground: "#6c757d",
          border: "#6c757d",
          hoverBorder: "#343a40",
        },
        darkText: "#e7e7e7",
        darkTextHover: "#f5f2f2",
        darkBorder: "#c4c0c0",
        darkShadow: "rgba(255, 255, 255, 0.2) 0px 7px 29px 0px",

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
