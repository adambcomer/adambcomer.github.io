module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      mono: ["'Roboto Mono'"],
      sc: ["'Noto Sans SC'"]
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')]
}
