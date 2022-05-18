import { Text } from "atoms";
import React from "react";

export const SubHeading = ({ name, color, maxWidth, mx, textAlign, ...props }) => {
  return (
    <Text
      fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
      lineHeight={{ xs: "1.9rem", md: "3rem", lg: "3.5rem" }}
      fontWeight="500"
      maxWidth={maxWidth}
      color={color}
      textAlign={textAlign}
      {...props}
      mx={mx}
    >
      {name}
    </Text>
  );
};

SubHeading.defaultProps = {
  color: "white",
  maxWidth: { xs: "21rem", md: "54.1rem" },
  textAlign: "center",
  mx: "auto",
};
