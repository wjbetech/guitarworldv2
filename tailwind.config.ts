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
        browntext: "#7b4e27",
        lighttext: "#3d3d3d",
        darktext: "#e7e7e7",
        primary: "#187fa5",
        success: "#347a53",
        warning: "#d58c1e",
        info: "2C3F4F",
        background: {
          light: "#fffefd",
          dark: "#232827",
        }
      }
    }
  }
}
export default config
