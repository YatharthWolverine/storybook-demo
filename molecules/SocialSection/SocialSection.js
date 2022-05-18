import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Box, Flex, Grid } from "atoms";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";

export const SocialSection = ({ apidata }) => {
  return (
    <Flex gridGap="3.3rem">
      {apidata?.map((item, index) => (
        <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
          <Grid
            placeItems="center"
            height="4.2rem"
            width="4.2rem"
            borderRadius="100%"
            border="1px solid"
            borderColor="white"
            cursor="pointer"
            color="white"
          >
            <Box height="1.9rem" width="1.9rem" key={index}>
              <Image
                src={apidata?.[index]?.icon?.url}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </a>
      ))}
    </Flex>
  );
};
