import type { Config } from 'postcss-load-config';

import postcssConfig from '../tailwind-config/postcss.config';

const config: Config = {
  ...postcssConfig,
};

export default config;
