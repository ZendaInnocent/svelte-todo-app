/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: [
      'light',
      'dark',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'forest',
      'aqua',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'night',
    ],
  },
}
