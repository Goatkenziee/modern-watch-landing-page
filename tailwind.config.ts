/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#222',
        'custom-blue': '#0070f3',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/hero-watch.jpg')",
      },
    },
  },
  plugins: [],
};
