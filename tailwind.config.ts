import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import fontFamily from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-gradient',
    'gradient-text',
    'gradient-text-1',
    'gradient-text-2',
    'gradient-text-3',
    'gradient-text-4',
    'rounded-xl',
    'rounded-3xl',
    'rounded-4xl',
  ],
  theme: {
    extend: {
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        mono: ['var(--font-mono)'],
        heading: ['var(--font-heading)'],
        handwriting: ['var(--font-handwriting)'],
        body: ['var(--font-body)'],
      },
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
    // Tailwind utility classes that require JS
    plugin(({ addUtilities, theme }) => {
      const gradientTextVariations = {
        '.gradient-text': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-position': 'center',
          'background-size': 'cover',
          'background-image': 'url(/gradient_main.png)',
        },
      };

      for (let i = 1; i <= 5; i++) {
        // @ts-expect-error
        gradientTextVariations[`.gradient-text-${i}`] = {
          ...gradientTextVariations['.gradient-text'],
          'background-image': `url(/gradient_${i}.png)`,
        };
      }

      addUtilities({
        ...gradientTextVariations,
      });
    }),
  ],
};
export default config;
