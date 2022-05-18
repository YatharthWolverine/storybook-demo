import React from "react";
import { Box } from "../atoms/Box";

export default {
  title: "atoms/Box",
  component: Box,
};

const Template = (args) => <Box {...args}>{args.label}</Box>;

export const Primary = Template.bind({});
Primary.args = {
  bg: "red",
  p: "3.2rem",
  label: "hi",
};
