import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProfileCard } from "molecules";
import { Box, Flex, Grid } from "atoms";

export const SuccessStorySlider = ({ apidata, left_arrow, right_arrow }) => {
  const customeSlider = React.createRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <>
      <Box display={apidata.length > 2 ? { xs: "none", lg: "block" } : "none"}>
        <Flex alignItems="center" justifyContent="center">
          <Box
            width="10.8rem"
            height="10.8rem"
            mr="4.5rem"
            cursor="pointer"
            onClick={() => gotoPrev()}
          >
            {left_arrow && (
              <Image
                src={left_arrow}
                alt="left-arrow"
                layout="fill"
                quality={100}
              />
            )}
          </Box>

          <Box width="84.8rem" className="inline-slider">
            <Slider {...settings} ref={customeSlider}>
              {apidata?.map((item, index) => (
                <ProfileCard
                  key={index}
                  profileUrl="/"
                  learnMoreUrl={
                    item?.learn_more?.[0]?.link
                      ? item?.learn_more?.[0]?.link
                      : "/"
                  }
                  name={item?.title}
                  info={item?.description?.replace(/<[^>]+>|&nbsp;/g, "")}
                  img={item?.image?.url}
                  alt={item?.image?.alternativeText}
                />
              ))}
            </Slider>
          </Box>

          <Box
            width="10.8rem"
            height="10.8rem"
            transform="rotate(180deg)"
            ml="4.5rem"
            cursor="pointer"
            onClick={() => gotoNext()}
          >
            {right_arrow && (
              <Image
                src={right_arrow}
                alt="right-arrow"
                layout="fill"
                quality={100}
              />
            )}
          </Box>
        </Flex>
      </Box>

      <Box display={apidata.length < 3 ? "block" : {xs: "block", lg: "none"}}>
        <Grid
          gridTemplateColumns={{xs: `repeat(${apidata.length}, 28.2rem)`, md: `repeat(${apidata.length}, 41.5rem)`}}
          overflow="auto"
          gridRow="auto"
          gridColumnGap={{ xs: "3rem", md: "3.1rem" }}
          px={{ xs: "2rem", md: "5.9rem" }}
          className="hide-scrollbar"
          justifyContent={apidata.length < 2 ? "center" : {xs: "unset" ,lg: "center"}}                                   
        >
          {apidata?.map((item, index) => (
            <ProfileCard
              key={index}
              profileUrl="/"
              learnMoreUrl={
                item?.learn_more?.[0]?.link ? item?.learn_more?.[0]?.link : "/"
              }
              name={item?.title}
              info={item?.description?.replace(/<[^>]+>|&nbsp;/g, "")}
              img={item?.image?.url}
              alt={item?.image?.alternativeText}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};
