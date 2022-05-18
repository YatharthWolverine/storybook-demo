import React from "react";
import { Box, Text, Button, Grid } from "atoms";

import Markdown from "markdown-to-jsx";
import Link from "next/link";

export const PortfolioInnerSalaryCard = ({
  mt,
  mr,
  title,
  body,
  button,
  slug,
}) => {
  return (
    <>
      <Grid
        mt={mt}
        mr={mr}
        width={{ xs: "28.2rem", md: "100%" }}
        borderRadius="4px"
        p="3rem"
        height="auto"
        bg="grey.600"
      >
        <Text
          fontWeight="700"
          fontSize={{ xs: "2rem", md: "2.4rem", lg: "3.4rem" }}
          lineHeight={{ xs: "2.4rem", md: "2.9rem", lg: "4.1rem" }}
          color="white"
          maxWidth={{ xs: "21.7rem", md: "unset" }}
        >
          {title}
        </Text>
        <Text
          mt="3rem"
          fontWeight="500"
          maxWidth={{ xs: "22.1rem", md: "24.8rem", lg: "unset" }}
          fontSize={{ xs: "1.6rem", md: "1.8rem", lg: "2.4rem" }}
          lineHeight={{ xs: "2.4rem", lg: "3.5rem" }}
          color="white"
        >
          <Markdown
            options={{
              overrides: {
                p: {
                  component: Text,
                  props: {
                    mb: "2.5rem",
                    fontSize: { xs: "1.6rem", md: "1.8rem", lg: "2.4rem" },
                    fontWeight: "500",
                    color: "white",
                    lineHeight: { xs: "2.3rem", md: "3.5rem" },
                  },
                },
              },
            }}
          >
            {body}
          </Markdown>
        </Text>
        <Link href={`/portfolio/${slug}`} passHref>
          <a>
            <Button
              maxWidth={{ xs: "21.7rem", md: "unset" }}
              mt="3rem"
              py="1.5rem"
              px={{ xs: "3rem", md: "unset" }}
              bg="grey.600"
            >
              {button}
            </Button>
          </a>
        </Link>
      </Grid>
    </>
  );
};
