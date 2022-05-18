import React from "react";
import Image from "next/image";

import { Box, Button, Text } from "atoms";
import Link from "next/link";

export const MediaCard = ({ img, alt, date, info, link, apidata }) => {
  return (
    <Box
      width={{ xs: "28.3rem", md: "31.5rem", lg: "33rem" }}
      height="auto"
      borderRadius="0.4rem"
      bg="grey.200"
      px={{ xs: "0.8rem", md: "2.3rem", lg: "3.1rem" }}
      py={{ xs: "5.3rem", lg: "5.1rem" }}
    >
      <Box width="12.6rem" height="12.6rem" mx="auto" borderRadius="50%">
        <Image src={img} alt={alt} width={126} height={126} />
      </Box>

      <Text
        color="primary.500"
        fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
        fontWeight="300"
        lineHeight="3.5rem"
        textAlign="center"
        mt={{ xs: "3rem", md: "4rem", lg: "6rem" }}
      >
        {date}
      </Text>

      <Text
        color="white"
        fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
        fontWeight="500"
        lineHeight="3.5rem"
        textAlign="center"
        mt={{ xs: "1rem", lg: "6rem" }}
      >
        {info}
      </Text>

      <a href={link ? link : "/"} target="_blank" rel="noreferrer">
        <Button
          variant="black"
          width={{ xs: "23.3rem", md: "26.8rem" }}
          height={{ xs: "4.9rem", md: "5.2rem", lg: "5.9rem" }}
          mt={{ xs: "3rem", md: "4rem", lg: "6rem" }}
          mx="auto"
        >
          {apidata?.text}
        </Button>
      </a>
    </Box>
  );
};
