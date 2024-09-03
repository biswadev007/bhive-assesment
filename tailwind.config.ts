import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#FFBB00',
          light: '#FFC422',
          stroke: '#FFC422',
        },
        secondary: {
          main: '#F9F9F9',
          stroke: '#CEC6C6',
        },
        background: {
          main: '#F9FAFF',
          secondary: '#222E34',
        },
        text: {
          primary: '#263238',
          secondary: '#65624C',
          tarci: '#DDDDDD',
        },
        greys: {
          '100': '#E0E0E0',
          '200': '#B7B6B8',
          '300': '#828282',
          '400': '#4F4F4F',
          '500': '#333333',
        },
      },
    },
		dropShadow: {
			custom: '0px 1px 3px 0px #FFBB0060'
		},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
};
export default config;
