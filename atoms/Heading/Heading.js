import React from "react";

import { Flex, Text } from "atoms";

export const Heading = ({ text, strokeText, flexDirection, mx, color, textAlign, maxWidth, ...props }) => {
  return (
    <Flex
      maxWidth={maxWidth}       
      flexDirection={flexDirection}      
      mx={mx}
      justifyContent={textAlign}
      alignItems={flexDirection === "row" ? "center" : textAlign}
    >
      <Text
        fontSize={{ xs: "3rem", md: "4rem", lg: "5rem" }}        
        fontWeight="700"            
        color={color}        
        textAlign={textAlign}
        {...props}
      >
        {text}
        <Text
          as={ flexDirection === "row" && "span"}
          fontSize={{ xs: "2.55rem", md: "3.4rem", lg: "4.25rem" }}                                                                  
          ml={flexDirection==="row" && {xs: "0.8rem", md: "1rem"}}
          mt={flexDirection === "column" ? { md: "0.6rem", lg: "1rem" } : "0"}
          fontWeight="700"  
          fontFamily='secondary'          
          color={color}        
          textAlign={textAlign}
          {...props}
        >
          {strokeText}
        </Text>
      </Text>      
    </Flex>
  );
};

Heading.defaultProps = {
  color: "white",
  maxWidth: { xs: "23.6rem", md: "42.2rem", lg: "57rem" },
  flexDirection: "column",
  textAlign: "center",
  mx: 'auto'
};
