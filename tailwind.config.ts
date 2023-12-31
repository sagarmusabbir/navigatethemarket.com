import type { Config } from 'tailwindcss';
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
