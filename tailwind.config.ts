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
    'xl:block',
  ],
  theme: {
    extend: {
      // Font Sizes
      fontSize: {
        xs: ['0.5rem', { lineHeight: '1rem' }], // 8px
        sm: ['0.75rem', { lineHeight: '1.125rem' }], // 12px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        xl: ['1.5rem', { lineHeight: '2rem' }], // 24px
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
        // ... add more sizes as needed
      },

      // Spacing (Padding, Margin, Width, Height, Gap, etc.)
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        // ... continue with this pattern
      },

      // Margin and Padding
      // @ts-expect-error
      margin: theme => theme('spacing'),
      // @ts-expect-error
      padding: theme => theme('spacing'),

      // Border Radius
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        full: '9999px',
      },

      // Width and Height
      // @ts-expect-error
      width: theme => theme('spacing'),
      // @ts-expect-error
      height: theme => theme('spacing'),

      // Gap for Grid and Flex layouts
      // @ts-expect-error
      gap: theme => theme('spacing'),
      // You can also extend other properties like lineHeight, maxWidth, minWidth, maxHeight, minHeight, colors, etc.

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
          // 'dark-dark': '#0A0510',
          // 'dark-light': '#1F0E2F',
          // 'dark-light2': '#2A133F',
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
          'font-weight': '300',
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
            backgroundImage: 'var(--bg-image)',
            'border-radius': 'inherit',
          },
          '& > *': {
            position: 'relative',
            'z-index': '3',
          },
          '& > .header-button-background': {
            position: 'absolute',
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
