import React from "react";
import Image from "next/image";

import { Box, Flex, Grid, Heading, SubHeading, Text } from "atoms";
import { ContactForm } from "molecules";

export const ContactUs = ({ apidata, data }) => {
  return (
    <Box>
      <Box
        position="absolute"
        top="-5.3rem"
        left="6.2rem"
        bg="white"
        width="3.1rem"
        height="3.1rem"
        zIndex="1"
        display={{ xs: "none", lg: "block" }}
      />
      <Box
        position="absolute"
        top="2.5rem"
        left="6.2rem"
        border="2px solid"
        borderColor="white"
        width="3.1rem"
        height="3.1rem"
        zIndex="1"
        display={{ xs: "none", lg: "block" }}
      />
      <Box
        bg="grey.200"
        px={{ xs: "2.1rem", md: "5rem", lg: "20rem" }}
        pt={{ xs: "5.5rem", md: "7.5rem", lg: "11.2rem" }}
        pb={{ xs: "5.6rem", md: "5rem", lg: "13.4rem" }}
      >
        <Grid
          gridTemplateColumns={{ lg: "1fr 1fr" }}
          gridColumnGap={{ lg: "4.7rem" }}
        >
          <Box ml={{ md: "2.2rem", lg: "0" }}>
            <Flex alignItems="center">
              <Heading
                text={apidata?.title}
                strokeText={apidata?.stroke_title}
                flexDirection="row"
                mx="0"
              />
            </Flex>
            <Box
              width="10.2rem"
              borderBottom="3px solid"
              borderColor="primary.500"
              height="0"
              mt={{ xs: "3rem", lg: "6rem" }}
            />

            <SubHeading
              name={apidata?.description}
              mt={{ xs: "3rem", lg: "6rem" }}
              textAlign="start"
              mx="0"
            />

            <Box mt={{ xs: "4.3rem", md: "6.1rem", lg: "10.1rem" }}>
              <a
                href={apidata?.contact_us_component?.[0]?.url}
                target="_blank"
                rel="noreferrer"
              >
                <Flex alignItems="center">
                  <Box color="white" width="4rem" height="2.8rem">
                    <Image
                      src={apidata?.contact_us_component?.[0]?.icon?.url}
                      layout="fill"
                    />
                  </Box>
                  <Text
                    fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
                    color="white"
                    fontWeight="700"
                    ml="3rem"
                    lineHeight="3.5rem"
                  >
                    {apidata?.contact_us_component?.[0]?.description?.replace(
                      /<[^>]+>|&nbsp;/g,
                      ""
                    )}
                  </Text>
                </Flex>
              </a>

              <Flex mt={{ xs: "4.5rem", lg: "6.6rem" }} left="-0.8rem">
                <Box color="white" width="5rem" height="5rem">
                  <Image
                    src={apidata?.contact_us_component?.[1]?.icon?.url}
                    layout="fill"
                  />
                </Box>
                <Text
                  fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
                  color="white"
                  fontWeight="700"
                  ml="3rem"
                  lineHeight="3.5rem"
                  maxWidth={{ xs: "21.3rem", md: "28rem" }}
                >
                  {apidata?.contact_us_component?.[1]?.description?.replace(
                    /<[^>]+>|&nbsp;/g,
                    ""
                  )}
                </Text>
              </Flex>
            </Box>
          </Box>

          <ContactForm apidata={apidata} data={data} />
        </Grid>
      </Box>
    </Box>
  );
};
