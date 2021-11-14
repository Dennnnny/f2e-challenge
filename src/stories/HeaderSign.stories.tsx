import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {HeaderSign} from '../components/HeaderSign';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/HeaderSign',
  component: HeaderSign,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HeaderSign>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderSign> = (args) => <HeaderSign {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: '欸晚最好玩',
};

