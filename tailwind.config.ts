import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width:{
        '600':'600px'
      },
      colors:{
        'faq-color':'rgba(47, 47, 47, 0.5)',
        'faq-box-xolor':'rgba(217, 217, 217, 0.2)',
        'navbar-bg-color':'rgba(255, 255, 255, 0.07)',
        'wallet-btn':'rgba(164, 119, 249, 0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
