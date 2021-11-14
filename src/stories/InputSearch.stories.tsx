import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {InputSearch} from '../components/InputSearch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/InputSearch',
  component: InputSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputSearch> = (args) => 
  <div style={{display:"flex",justifyContent:"center"}}>
    <InputSearch {...args} />
  </div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

