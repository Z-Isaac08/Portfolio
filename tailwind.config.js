/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(216, 13%, 15%)',  // Couleur de fond actuelle
        primary: 'hsl(219, 18%, 81%)',
        foreground: 'hsl(219, 18%, 71%)',
        border: 'hsl(216, 3%, 20%)',
        ring: 'hsl(219, 18%, 81%)',        // Couleur de l'anneau
        darkerBackground: 'hsl(216, 13%, 10%)', // Version moins claire du background
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
    plugins: [],
  }
}
