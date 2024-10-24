import type { Config } from 'tailwindcss';

import tailwindConfig from '../tailwind-config/tailwind.config';

const config: Config = {
  ...tailwindConfig,
  content: ['index.ts', tailwindConfig.content[0]],
};

export default config;
