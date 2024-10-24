import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'tailwindcss/nesting': {},
    autoprefixer: {},
  },
};

export default config;
