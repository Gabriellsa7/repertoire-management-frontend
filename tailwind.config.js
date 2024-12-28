/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h3: "1.5rem",
        "secondary-text": "0.875rem",
        "input-label": "1.25rem",
      },
      colors: {
        "primary-bg": "#0b0e15",
        "primary-text-color": "#FFFFFF",
        "secondary-text-color": "#009DA2",
        "hover-text-color": "#00D4DB",
        "primary-button": "#009DA2",
        "button-hover-color": "#00D4DB",
      },
    },
  },
  plugins: [],
};
