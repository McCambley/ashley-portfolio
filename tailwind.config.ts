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
    plugin(({ addUtilities, theme }) => {
      const backgroundGradientVariations = {
        '.bg-gradient': {
          'background-image': 'url(/gradient_main.png)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      };
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
          border: '8px solid transparent',
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
            padding: '1px',
            'border-radius': 'inherit',
            margin: '-1px',
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

      const gradientBorderImageVariations = {
        '.gradient-border-image': {
          'border-image': 'url(/gradient_main.png)',
          'border-style': 'solid',
          'border-image-slice': '30%', // Adjust as needed
          'border-image-width': '0 2px 0 0 ', // Match the width of the right border
          'border-image-repeat': 'stretch', // Adjust as needed
        },
      };

      for (let i = 1; i <= 4; i++) {
        // @ts-expect-error
        gradientTextVariations[`.gradient-text-${i}`] = {
          ...gradientTextVariations['.gradient-text'],
          'background-image': `url(/gradient_${i}.png)`,
        };
      }

      addUtilities({
        ...backgroundGradientVariations,
        ...gradientTextVariations,
        ...gradientBorderVariations,
        ...gradientBorderImageVariations,
      });
    }),
  ],
};
export default config;
