/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom themes/colors here if you want
    },
  },
  plugins: [require("daisyui")], // 🪷 This line brings in DaisyUI magic
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula", "synthwave"], // 🎨 Choose the themes you want
  },
};
