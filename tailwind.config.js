/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'text-primary': 'var(--text-primary)',
    },
    fontSize: {
      't-m': ['14px', '140%'],
      'h1-m':['20px','120%']
    }
  },
  darkMode:'selector',
  plugins: [],
}