import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import cssimport from 'postcss-import';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import pkg from './package.json' assert { type: 'json' };

const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx'];

const config = [
  {
    input: 'index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: [/@babel\/runtime/, 'react', 'react-dom'],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        presets: [
          '@babel/preset-env',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          [
            'prismjs', {
              'languages': 'all',
              'plugins': ['autoloader'],
            },
          ],
        ],
        extensions: extensions,
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      }),
      commonjs({
        include: 'node_modules/**',
        extensions: extensions,
      }),
      image(),
      json({
        compact: true,
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: './postcss.config.mjs',
        },
        extensions: ['.css'],
        minimize: true,
        extract: true,
        plugins: [cssimport(), autoprefixer(), tailwindcss()],
      }),
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
        outputToFilesystem: false,
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist',
        },
        exclude: ['node_modules', '**/*.stories.tsx'],
      }),
      nodeResolve({
        extensions: extensions,
      }),
    ],
  },
];

export default config;
