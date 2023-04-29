/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import themes from 'daisyui/src/colors/themes';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['[data-theme=halloween]'],
          primary: '#ff595e',
          'primary-focus': '#A22A2E',
        },
      },
    ],
  },
};
