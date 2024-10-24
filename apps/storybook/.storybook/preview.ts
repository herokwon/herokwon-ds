import type { Preview } from '@storybook/react';
import { create } from '@storybook/theming';

import '../src/globals.css';

const lightTheme = create({
  base: 'light',
  appBg: 'white',
  colorPrimary: 'rgb(59 130 246)',
  colorSecondary: 'rgb(226 232 240)',
});

const darkTheme = create({
  base: 'dark',
  appBg: 'rgb(18 18 18)',
  colorPrimary: 'rgb(37 99 235)',
  colorSecondary: 'rgb(30 41 59)',
});

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      light: lightTheme,
      dark: darkTheme,
      stylePreview: true,
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default preview;
