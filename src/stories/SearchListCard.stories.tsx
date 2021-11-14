import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SearchListCard} from '../components/SearchListCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SearchListCard',
  component: SearchListCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchListCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchListCard> = (args) => 
  <div style={{display:"flex",justifyContent:"center"}}>
    <SearchListCard {...args} />
  </div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

