import type { Config } from 'postcss-load-config';

import postcssConfig from '@repo/tailwind-config/postcss';

const config: Config = {
  ...postcssConfig,
};

export default config;
