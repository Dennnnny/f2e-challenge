import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TopicPicker} from '../components/TopicPicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TopicPicker',
  component: TopicPicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TopicPicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopicPicker> = (args) => 
  <div style={{display:"flex",justifyContent:"center"}}>
    <TopicPicker {...args} />
  </div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

