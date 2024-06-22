/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['var(--font-inter']
      },
      colors:{
        background:'rgb(var(--background))',
        foreground:'rgb(var(--foreground))',
        muted:'rgb(var(--muted))',
        accent:'rgb(var(--accent))'
      }
    },
  },
  plugins: [],
}