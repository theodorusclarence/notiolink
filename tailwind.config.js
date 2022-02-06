/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    themeVariants: ['light', 'milky', 'street', 'monokai'],
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        milky: {
          50: withOpacity('--tw-clr-milky-50'),
          100: withOpacity('--tw-clr-milky-100'),
          400: withOpacity('--tw-clr-milky-400'),
          500: withOpacity('--tw-clr-milky-500'),
        },
        street: {
          400: withOpacity('--tw-clr-street-400'),
          500: withOpacity('--tw-clr-street-500'),
          800: withOpacity('--tw-clr-street-800'),
        },
        monokai: {
          400: withOpacity('--tw-clr-monokai-400'),
          500: withOpacity('--tw-clr-monokai-500'),
          800: withOpacity('--tw-clr-monokai-800'),
        },
        dark: withOpacity('--tw-clr-dark'),
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        flickerStreet: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(184, 105, 255)) drop-shadow(0 0 15px rgba(104, 107, 253)) drop-shadow(0 0 1px rgba(184, 105, 255))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.7deg)',
          },
          '75%': {
            transform: 'rotate(-0.7deg)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        flickerStreet: 'flickerStreet 3s linear infinite',
        tilt: 'tilt 10s infinite linear',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-multi-theme')],
};
