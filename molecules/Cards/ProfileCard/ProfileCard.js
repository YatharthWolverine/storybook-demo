import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Button, Flex, Text } from "atoms";
import MemoTwitter from "public/assets/icons/Twitter";
import MemoLinkedin from "public/assets/icons/Linkedin";

export const ProfileCard = ({
  height,
  isShowIcons,
  twiterUrl,
  linkedInUrl,
  profileUrl,
  learnMoreUrl,
  name,
  info,
  img,
  alt,
}) => {
  return (
    <Box
      width={{ xs: "28.2rem", md: "41.5rem" }}
      height={height}
      bg={isShowIcons ? "grey.100" : "black"}
    >
      <Box>
        <Link href={profileUrl} passHref>
          <Box
            width={{ xs: "28.2rem", md: "41.5rem" }}
            height={{ xs: "28.2rem", md: "41.5rem" }}
            cursor="pointer"
          >
            {img && (
              <Image
                width={416}
                height={416}
                src={img}
                alt={alt}
                objectFit="contain"
              />
            )}
          </Box>
        </Link>
        <Box
          pl={!isShowIcons && { xs: "3.6rem", md: "5.3rem" }}
          height="auto"
          width="100%"
          pb={
            isShowIcons
              ? { xs: "3rem", md: "4.8rem", lg: "5.9rem" }
              : { xs: "3.5rem", md: "5.8rem", lg: "4.9rem" }
          }
        >
          <Text
            fontSize={{ xs: "2rem", md: "2.4rem", lg: "3.4rem" }}
            fontWeight="700"
            lineHeight={{ xs: "2.4rem", md: "2.9rem", lg: "4.1rem" }}
            color="white"
            mt={
              isShowIcons
                ? { xs: "3.3rem", md: "4.9rem", lg: "6rem" }
                : { xs: "3.1rem", md: "4.5rem" }
            }
            textAlign={isShowIcons ? "center" : "none"}
          >
            {name}
          </Text>
          <Text
            fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
            fontWeight="500"
            lineHeight={
              isShowIcons
                ? { xs: "2rem", md: "2.9rem", lg: "3.5rem" }
                : { xs: "2.4rem", md: "3.5rem" }
            }
            color="white"
            mt="3rem"
            maxWidth={!isShowIcons && { xs: "18.6rem", md: "27.4rem" }}
            textAlign={isShowIcons ? "center" : "none"}
          >
            {info}
          </Text>
          {isShowIcons && (
            <Flex
              mt={{ xs: "2.7rem", md: "4.6rem", lg: "5.1rem" }}
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                height={{ xs: "3.6rem", md: "4.9rem", lg: "6rem" }}
                width={{ xs: "3.6rem", md: "4.9rem", lg: "6rem" }}
                border="2px solid"
                borderColor="grey.500"
                borderRadius="50%"
                mr={{ xs: "1.5rem", md: "2.4rem", lg: "3rem" }}
                alignItems="center"
                justifyContent="center"
              >
                <a
                  href={twiterUrl ? twiterUrl : "/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    height={{ xs: "1.6rem", md: "1.9rem", lg: "2.3rem" }}
                    width={{ xs: "1.1rem", md: "1.5rem", lg: "2.3rem" }}
                    cursor="pointer"
                  >
                    <MemoTwitter height="100%" width="100%" />
                  </Box>
                </a>
              </Flex>
              <Flex
                height={{ xs: "3.6rem", md: "4.9rem", lg: "6rem" }}
                width={{ xs: "3.6rem", md: "4.9rem", lg: "6rem" }}
                border="2px solid"
                borderColor="grey.500"
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
              >
                <a
                  href={linkedInUrl ? linkedInUrl : "/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    height={{ xs: "1.6rem", md: "1.9rem", lg: "2.3rem" }}
                    width={{ xs: "1.1rem", md: "1.5rem", lg: "2.3rem" }}
                  >
                    <MemoLinkedin height="100%" width="100%" />
                  </Box>
                </a>
              </Flex>
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
  );
};

ProfileCard.defaultProps = {
  height: "auto",
  isShowIcons: false,
};
