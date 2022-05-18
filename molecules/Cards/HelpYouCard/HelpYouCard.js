import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "atoms";
import { isMobile, isTab } from "utils/utilities";
export const HelpYouCard = ({
  bgImg,
  shapeImg,
  bg,
  boxBg,
  reverse,
  apidata,
  bannerImage,
  heading,
  stroke_heading,
  description,
  email_link,
  email,
}) => {
  return (
    <Flex
      width="100%"
      bg={{ xs: "grey.200", lg: bg }}
      flexDirection={
        reverse
          ? { xs: "column", lg: "row-reverse" }
          : { xs: "column", lg: "row" }
      }
    >
      <Box width={{ xs: "100%", lg: "55%" }}>
        <Box
          width="100%"
          height="100%"
          position="absolute"
          display={{ xs: "block", lg: boxBg ? "block" : "none" }}
        >
          {bannerImage && (
            <Image src={bannerImage} alt="banner" layout="fill" />
          )}
        </Box>
        <Box
          pt={{ xs: "9.6rem", md: "8.6rem", lg: "12.4rem" }}
          pl={{ xs: "3rem", md: "10.9rem", lg: "20rem" }}
          pb={{ xs: "4rem", md: "6.3rem", lg: "0" }}
        >
          <Box maxWidth={{ xs: "32.6rem", md: "57rem" }}>
            <Text
              fontSize={{ xs: "3rem", md: "4rem", lg: "5rem" }}
              color="white"
              fontWeight="700"
            >
              {heading}{" "}
              <Text
                as="span"
                fontSize={{ xs: "2.4rem", md: "3.45rem", lg: "4.3rem" }}
                color="white"
                fontWeight="700"
                fontFamily="secondary"
              >
                {stroke_heading}
              </Text>
            </Text>
          </Box>
          <Box
            width="10.2rem"
            borderBottom="3px solid"
            borderColor="primary.500"
            height="0"
            mt="6rem"
          />
          <a
            href={email_link ? email_link : "/"}
            target="_blank"
            rel="noreferrer"
          >
            <Text
              fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
              color="white"
              fontWeight="500"
              lineHeight={{ xs: "1.9rem", md: "3.5rem" }}
              mt="6rem"
            >
              {description} {email}
            </Text>
          </a>
        </Box>
      </Box>
      <Box
        width={{ xs: "100%", lg: "45%" }}
        height={{ xs: "35.4rem", md: "54.9rem" }}
        bg="black"
      >
        <Image
          src={
            isMobile() === true
              ? bgImg[2]
              : isTab() === true
              ? bgImg[1]
              : bgImg[0]
          }
          alt="help-card-img"
          layout="fill"
          quality={100}
          className="blend-image"
        />
        <Box
          width="100%"
          height="100%"
          transform={reverse ? { lg: "rotateY(180deg)" } : "rotateY(0deg)"}
        >
          <Image
            src={isMobile() === true ? shapeImg[1] : shapeImg[0]}
            alt="help-card-img"
            layout="fill"
            quality={100}
          />
        </Box>
      </Box>
    </Flex>
  );
};
