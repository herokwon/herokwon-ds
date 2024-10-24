import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { customBgColor } from './background';
import { customOpacity } from './effect';
import { customSize } from './size';
import { customTextColor } from './typography';

const customColor: { [key: string]: string } = {
  'light-red': 'rgb(239 68 68)',
  'light-blue': 'rgb(59 130 246)',
  'light-green': 'rgb(34 197 94)',
  'light-yellow': 'rgb(250 204 21)',
  'dark-red': 'rgb(220 38 38)',
  'dark-blue': 'rgb(37 99 235)',
  'dark-green': 'rgb(22 163 74)',
  'dark-yellow': 'rgb(234 179 8)',
};

export const extendedTheme: Partial<CustomThemeConfig> = {
  width: customSize,
  height: customSize,
  borderRadius: {
    ms: '0.25rem',
  },
  colors: {
    ...customColor,
    brown: {
      50: '#fdf8f6',
      100: '#f2e8e5',
      200: '#eaddd7',
      300: '#e0cec7',
      400: '#d2bab0',
      500: '#bfa094',
      600: '#a18072',
      700: '#977669',
      800: '#846358',
      900: '#43302b',
    },
  },
  textColor: customTextColor,
  backgroundColor: customBgColor,
  borderColor: customBgColor,
  boxShadowColor: customBgColor,
  fill: customBgColor,
  opacity: customOpacity,
};

export { default as plugin } from './plugin';
