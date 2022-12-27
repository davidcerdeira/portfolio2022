/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'backgroundContact': '#DB929D',
        'linkedin': '#3E517A',
        'github': '#24292F',
        'email': '#FFC759',
        'resume': '#79CDAA',
        'highlight': '#DB929D',
        'primary': '#37393A',
        'secondary': '#A2A7A5',
        'tertiary': '#262322',
        'basic': '#37393A',
        'blue': '#93A8E1',
      }
    },
    fontFamily: {
      signature: 'Great Vibes'
    },
  },
  plugins: [],
}
