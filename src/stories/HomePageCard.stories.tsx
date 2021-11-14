import { ComponentStory, ComponentMeta } from '@storybook/react';

import {HomePageCard} from '../components/HomePageCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/HomePageCard',
  component: HomePageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof HomePageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePageCard> = (args) => <HomePageCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title:"標題",
  location:"地址地址地址地址地址"
};

export const LocationWordLong = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LocationWordLong.args = {
  title:"標題",
  location:"地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址"
};

