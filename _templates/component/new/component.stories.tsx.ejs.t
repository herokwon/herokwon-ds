---
to: apps/storybook/src/<%= category %>/<%= h.changeCase.pascal(componentName) %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';

import { <%= h.changeCase.pascal(componentName) %> } from '@repo/ui';

const meta = {
  title: 'Components/<%= category %>/<%= h.changeCase.pascal(componentName) %>',
  tags: ['autodocs'],
  component: <%= h.changeCase.pascal(componentName) %>,
} satisfies Meta<typeof <%= h.changeCase.pascal(componentName) %>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
