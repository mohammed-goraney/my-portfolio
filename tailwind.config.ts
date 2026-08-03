import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        background: '#1A1918',
        surface: '#2A2825',
        'surface-light': '#3A3530',

        // Text Colors
        text: {
          primary: '#F5F2ED',
          secondary: '#EAE5DC',
          muted: '#A39C94',
          inverse: '#1A1918',
        },

        // Accent Colors
        accent: {
          gold: '#D4A574',
          'gold-light': '#E8BB89',
          'gold-dark': '#B08A5B',
          amber: '#C9915E',
          'amber-light': '#E0A677',
          'amber-dark': '#A87445',
        },

        // Semantic Colors
        success: '#6BA587',
        warning: '#D4A574',
        error: '#C9715E',
        info: '#6B9DC9',

        // Borders
        border: '#403C38',
        'border-light': '#504A45',
      },

      backgroundColor: {
        primary: '#1A1918',
        secondary: '#2A2825',
        tertiary: '#3A3530',
      },

      textColor: {
        primary: '#F5F2ED',
        secondary: '#EAE5DC',
        muted: '#A39C94',
      },

      fontSize: {
        // Display sizes
        display: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],

        // Heading sizes
        h1: ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        h2: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1rem', { lineHeight: '1.5', fontWeight: '600' }],

        // Body sizes
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],

        // Caption sizes
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        'caption-bold': ['0.75rem', { lineHeight: '1.4', fontWeight: '600' }],
      },

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },

      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },

      borderRadius: {
        none: '0',
        xs: '0.25rem',
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },

      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

        // Elevated shadows (warm graphite theme)
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.35)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.4)',
      },

      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseSoft: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },

      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
      },

      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'ultra': '1920px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [
    // Custom plugins can be added here
    function ({
      addBase,
      addComponents,
      addUtilities,
    }: {
      addBase: any;
      addComponents: any;
      addUtilities: any;
    }) {
      // Custom base styles
      addBase({
        '@supports (backdrop-filter: blur(0px))': {
          '.glass': {
            '@apply bg-white/10 backdrop-blur-md': {},
          },
        },
        '@supports not (backdrop-filter: blur(0px))': {
          '.glass': {
            '@apply bg-surface-light/80': {},
          },
        },
      });

      // Custom component classes
      addComponents({
        '.btn-primary': {
          '@apply px-6 py-3 bg-accent-gold text-background rounded-lg font-semibold transition-all duration-300 hover:bg-accent-gold-light active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed':
            {},
        },
        '.btn-secondary': {
          '@apply px-6 py-3 border border-border bg-transparent text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-surface-light active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed':
            {},
        },
        '.card': {
          '@apply bg-surface border border-border rounded-lg p-6 transition-all duration-300': {},
        },
        '.section': {
          '@apply py-20 md:py-32 px-6 md:px-12': {},
        },
        '.section-title': {
          '@apply text-display md:text-display-sm font-bold text-primary mb-4': {},
        },
      });

      // Utility classes
      addUtilities({
        '.text-truncate-lines-1': {
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.text-truncate-lines-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.text-truncate-lines-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.backdrop-blur-glass': {
          'backdrop-filter': 'blur(12px) saturate(1.2)',
        },
        '.transition-micro': {
          'transition-duration': '150ms',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      });
    },
  ],
};

export default config;