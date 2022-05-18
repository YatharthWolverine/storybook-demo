import React from "react";
import { Box, Text } from "atoms";

export const Demo = ({ bg, width, text }) => {
  return (
    <Box bg={bg} width={width} p="3.2rem">
      <Text>{text}</Text>
    </Box>
  );
};

Demo.defaultProps = {
  bg: "blue",
  width: "50%",
  text: "demo",
};
