import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Flex, Text } from "atoms";

export const PortfolioCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      height={{ md: "31.4rem", lg: "32.5rem" }}
      bg="grey.600"
      borderRadius="3.5px"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Box bg="grey.500">
          <Box
            height={{ md: "31.4rem", lg: "32.5rem" }}
            cursor="pointer"
            py="13.1rem"
          >
            <Flex justifyContent="center" alignItems="center">
              <Box
                px="5.5rem"
                py="1.5rem"
                border="1px solid white"
                borderRadius="4px"
              >
                <Link href={`/portfolio/${data?.slug}`} passHref>
                  <a>
                  <Text fontSize="2.1rem" fontWeight="700" color="white">
                    learn more
                  </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box
          height={{ md: "6.7rem", lg: "6.6rem" }}
          mt={{ md: "12.9rem", lg: "12.9rem" }}
          mx={{ md: "5.1rem", lg: "5.3rem" }}
          bg="grey.600"
        >
          <Image
            src={data?.portfolio_img?.url}
            alt={data?.portfolio_img?.alternativeText}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </Box>
      )}
    </Box>
  );
};
