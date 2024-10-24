---
to: packages/ui/<%= category %>/tsup.config.ts
---
import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  minify: !options.watch,
  sourcemap: true,
  treeshake: true,
}));
