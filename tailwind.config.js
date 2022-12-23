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
        'linkedin': '#0A66C2',
        'github': '#24292F',
        'email': '#DB929D',
        'resume': '#565f69',
        'highlight': '#DB929D',
        'primary': '#262322',
        'secondary': '#A2A7A5',
        'tertiary': '#262322',
        'basic': '#262322',
      }
    },
    fontFamily: {
      signature: 'Great Vibes'
    },
  },
  plugins: [],
}
