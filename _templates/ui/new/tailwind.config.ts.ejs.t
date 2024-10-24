---
to: packages/ui/<%= category %>/tailwind.config.ts
---
import tailwindConfig from '../../tailwind-config/tailwind.config';

import type { Config } from 'tailwindcss';

const config: Config = {
  ...tailwindConfig,
};

export default config;
