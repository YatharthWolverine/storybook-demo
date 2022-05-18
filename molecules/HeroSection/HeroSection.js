import React from "react";
import Image from "next/image";

import { Box, Flex, Text } from "atoms";
import { isMobile, isTab } from "utils/utilities";

export const HeroSection = ({
  alt,
  bgImage,
  height,
  title,
  strokeTitle,
  subtitle,
  textAlign,
  pt,
  direction,
}) => {
  return (
    <>
      <Box width="100vw" height={height}>
        <Image
          src={
            isMobile() === true
              ? bgImage[2]
              : isTab() === true
              ? bgImage[1]
              : bgImage[0]
          }
          alt={alt}
          layout="fill"
          quality={100}
        />
        <Box
          position="absolute"
          pt={pt}
          px={{ xs: "2.8rem", md: "6.4rem", lg: "18.8rem" }}
          width="100%"
        >
          <Flex
            flexDirection={direction ? direction : "column"}
            justifyContent={direction === "row" ? "center" : "none"}
            alignItems={direction === "row" && "center"}
          >
            <Text
              fontSize={{ xs: "4rem", md: "6rem", lg: "8.8rem" }}
              color="white"
              fontWeight="700"
              textAlign={textAlign}
            >
              {title}
              {strokeTitle && (
                <Text
                  as={direction === "row" && "span"}
                  fontSize={{ xs: "3.45rem", md: "5.1rem", lg: "7.7rem" }}
                  color="white"
                  fontWeight="700"
                  textAlign={textAlign}
                  fontFamily="secondary"
                  ml={direction === "row" && { xs: "0.8rem", md: "1.2rem" }}
                  mt={!direction ? { md: "0.6rem", lg: "1.2rem" } : "0"}
                >
                  {strokeTitle}
                </Text>
              )}
            </Text>
          </Flex>
          <Box
            mt={{ xs: "3rem", md: "6rem" }}
            borderBottom="3px solid"
            borderColor="primary.500"
            height="0"
            width="10.2rem"
            mx={textAlign === "center" ? "auto" : "0"}
          />
          <Text
            maxWidth={{ xs: "29.2rem", md: "54.2rem" }}
            mt={{ xs: "3rem", md: "6rem" }}
            fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
            lineHeight={{ xs: "2.2rem", md: "3rem", lg: "3.5rem" }}
            color="white"
            fontWeight="500"
            textAlign={textAlign}
            mx={textAlign === "center" ? "auto" : "0"}
          >
            {subtitle}
          </Text>
        </Box>
      </Box>
    </>
  );
};
