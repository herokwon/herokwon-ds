import type { Config } from 'tailwindcss';

import { extendedTheme, plugin } from '../config/src';

const config: Config = {
  content: ['src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      ...extendedTheme,
    },
  },
  plugins: [plugin],
};

export default config;
