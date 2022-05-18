import React from "react";
import Image from "next/image";

import { Box, Flex, Grid, Text } from "atoms";
import { isMobile, isTab } from "utils/utilities";

export const HomeHeroCard = ({ apidata }) => {
  return (
    <Box
      width="100vw"
      px={{ xs: "2rem", md: "7rem", lg: "20.4rem" }}
      bg="grey.200"
    >
      <Flex
        flexDirection={{ xs: "column", lg: "row" }}
        pt={{ xs: "4.3rem", md: "6.5rem", lg: "9.5rem" }}
        pb={{ xs: "5.7rem", md: "7.8rem", lg: "9.5rem" }}
      >
        <Flex
          flexDirection={{ xs: "row", lg: "column" }}
          alignItems={{ xs: "center", lg: "start" }}
        >
          <Box
            left={{ xs: "-1.2rem", md: "-1.8rem", lg: "-2.5rem" }}
            top={{ xs: "0.2rem", md: "unset" }}
          >
            <Image
              src={apidata?.logo.url}
              alt={apidata?.logo.alternativeText}
              width={isMobile() === true ? 90 : isTab() === true ? 150 : 210}
              height={isMobile() === true ? 30 : isTab() === true ? 50 : 70}
            />
          </Box>
          <Text
            ml={{ xs: "-1.2rem", md: "-1.8rem", lg: "0" }}
            mt={{ xs: "-0.3rem", md: "0.6rem", lg: "1.4rem" }}
            fontSize={{ xs: "2.2rem", md: "3.5rem", lg: "4.3rem" }}
            lineHeight={{ xs: "2rem", md: "3.2rem", lg: "4.3rem" }}
            color="white"
            fontWeight="700"
            fontFamily="secondary"
          >
            {apidata?.stroke_heading}
          </Text>
        </Flex>

        <Grid
          gridTemplateColumns={{
            xs: "6.5rem 16rem 8rem",
            md: "11.7rem 17.5rem 12.8rem",
            lg: "15.6rem 23.4rem 17rem",
          }}
          gridColumnGap={{ xs: "1.8rem", md: "7rem", lg: "6rem" }}
          ml={{ lg: "5.9rem" }}
          mt={{ xs: "2.3rem", md: "6rem", lg: "0" }}
        >
          {apidata?.home_data?.map((item) => (
            <Box key={item.id}>
              <Text
                fontSize={{ xs: "2.5rem", md: "4rem", lg: "5rem" }}
                lineHeight={{ xs: "3.4rem", md: "4.8rem", lg: "7rem" }}
                color="white"
                fontWeight="700"
              >
                {item?.number}
                <Text
                  as="span"
                  fontSize={{ xs: "2.5rem", md: "4rem", lg: "3.6rem" }}
                  lineHeight={{ xs: "3.4rem", md: "4.8rem", lg: "4.8rem" }}
                  top={{ xs: "0.2rem", md: "0.5rem", lg: "0.4rem" }}
                  color="white"
                  fontWeight="700"
                  fontFamily="secondary"
                >
                  {item?.plus}
                </Text>
                <Text
                  mt={{ xs: "0.4rem", md: "0.4rem", lg: "3rem" }}
                  fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
                  lineHeight={{ xs: "2.2rem", md: "3,5rem" }}
                  color="white"
                  fontWeight="500"
                >
                  {item?.title}
                </Text>
              </Text>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
