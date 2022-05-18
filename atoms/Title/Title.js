import React from "react";
import Image from "next/image";

import { Box, Text } from "atoms";
import { isMobile } from "utils/utilities";

export const Title = ({
  title,
  src,
  strokeTitle,
  textAlign,
  singleLine,
  bg_desktop,
  bg_mobile,
  ...props
}) => {
  return (
    <Box
      width={{ xs: "33.4rem", md: "41rem" }}
      height={{ xs: "12.3rem", md: "26rem" }}
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={singleLine ? "row" : "column"}
    >      
      {
        (src !== undefined && (
          <Image            
            src={src}
            alt="title-border"
            layout="fill"
            objectFit="contain"
          />
        ))}
      <Text
        fontSize={{ xs: "3rem", md: "4rem", lg: "5rem" }}        
        color="white"
        fontWeight="700"
        textAlign="center"
      >
        {title}
        <Text         
          as={ singleLine && "span"}
          fontSize={{ xs: "2.55rem", md: "3.4rem", lg: "4.25rem" }}                                                                  
          ml={singleLine && {xs: "0.8rem", md: "1rem"}}
          mt={!singleLine ? { md: "0.6rem", lg: "1rem" } : "0"}
          color="white"
          fontWeight="700"
          textAlign="center"
          fontFamily="secondary"         
        >
          {strokeTitle}
        </Text>
      </Text>      
    </Box>
  );
};
