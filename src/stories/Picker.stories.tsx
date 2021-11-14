import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {LocationPicker} from '../components/LocationPicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LocationPicker',
  component: LocationPicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LocationPicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LocationPicker> = (args) => 
  <div style={{display:"flex",justifyContent:"center"}}>
    <LocationPicker {...args} />
  </div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

