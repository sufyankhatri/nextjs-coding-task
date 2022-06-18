import React from "react";
import Cover from '../src/components/Cover';

export default {
  title: "Components/Cover",
  component: Cover,
  argTypes: {},
};

const Template = (args) => <Cover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Contact me",
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "My work",
};
