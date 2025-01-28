import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#fe6a0d',
          accent: '#fe6a0dcc',
          light: '#FF924E',
        },
        secondary: {
          DEFAULT: '#80C4E9',
          accent: '#AAE1FF',
        },
        black: {
          DEFAULT: '#0f374e',
        },
        gray: {
          DEFAULT: '#f3f4f6',
          100: '#f3f4f6',
          200: '#d3d3d3',
          300: '#9d9d9d',
        },
        red: {
          DEFAULT: '#FF6D6D',
        },
      },
    },
  },

  plugins: [],
}
export default config
