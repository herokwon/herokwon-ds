import type { Meta, StoryObj } from '@storybook/react';

import TextButton from './TextButton';
import Tooltip from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  component: Tooltip,
  args: {
    position: 'bottom-center',
    children: <TextButton label="Hover on Button" />,
  },
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
  },
};
