import type { Config } from 'tailwindcss';

import { extendedTheme } from '../config/src';

const config: Config = {
  content: ['src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      ...extendedTheme,
    },
  },
  plugins: [],
};

export default config;
