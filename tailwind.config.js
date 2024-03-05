/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#f1f1f1',
      dark: '#252525',
      green: '#1B5C2E',
      lightGreen: '#216B25',
      darkGreen: '#14463B',
      primary: {
        light: '#4dabf5',
        main: '#098CFF',
        dark: '#1769aa'
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        text: '#000'
      }
    }
  }
}
