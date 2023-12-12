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
    'gradient-text-5',
    'gradient-border-wrapper',
    'gradient-border-wrapper-1',
    'gradient-border-wrapper-2',
    'gradient-border-wrapper-3',
    'gradient-border-wrapper-4',
    'gradient-border-wrapper-5',
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

      const gradientBorderVariations = {
        '.gradient-border-wrapper': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            'z-index': '1',
            'background-image': 'url(/gradient_main.png)',
            'background-size': 'cover',
            padding: '2px',
            'border-radius': 'inherit',
            margin: '-2px',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            'z-index': '2',
            background: `${theme('colors.af.dark')}`,
            'border-radius': 'inherit',
          },
          '& > *': {
            position: 'relative',
            'z-index': '3',
          },
        },
      };

      for (let i = 1; i <= 5; i++) {
        // @ts-expect-error
        gradientTextVariations[`.gradient-text-${i}`] = {
          ...gradientTextVariations['.gradient-text'],
          'background-image': `url(/gradient_${i}.png)`,
        };
        // @ts-expect-error
        gradientBorderVariations[`.gradient-border-wrapper-${i}`] = {
          ...gradientBorderVariations['.gradient-border-wrapper'],
        };
        // @ts-expect-error
        gradientBorderVariations[`.gradient-border-wrapper-${i}::before`] = {
          ...gradientBorderVariations['.gradient-border-wrapper']['&::before'],
          'background-image': `url(/gradient_${i}.png)`,
        };
      }

      addUtilities({
        ...gradientTextVariations,
        ...gradientBorderVariations,
      });
    }),
  ],
};
export default config;
