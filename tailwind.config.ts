import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        af: {
          dark: '#13091D',
          purple: '#6C40BF',
          pink: '#B9039C',
          red: '#DB2722',
          yellow: '#D59B01',
        },
      },
      backgroundColor: {
        dark: 'rgba(16, 10, 22, 1)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) =>
      addUtilities({
        '.bg-gradient': {
          'background-image': 'url(/gradient_main.png)',
          'background-position': 'center',
          'background-size': 'cover',
        },
        '.gradient-text': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          // 'background-image': 'radial-gradient(circle, #ff7e5f, #feb47b)',
          // 'background-image': `linear-gradient(to right, ${theme(
          //   'color-af-dark'
          //   )}, ${theme('color-af-red')})`,
          'background-image': 'url(/gradient_main.png)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      })
    ),
  ],
};
export default config;
