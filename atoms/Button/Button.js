import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { fontSize, variant } from "styled-system";
import PropTypes from "prop-types";

import { Box, Flex, Text, Loader } from "atoms";

const ButtonBase = styled(Box)`
  position: relative;
  cursor: pointer;
  outline: none;
  display: grid;
  align-items: center;
  font-family: Inter;

  ${variant({
    variants: {
      primary: {
        color: "white",        
        fontFamily: "primary",
        fontSize: ["1.6rem", "1.6rem", "1.6rem", "1.8rem", "1.8rem", "2.4rem"],
        border: "1px solid",
        borderColor: "white",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 600,
        "&:active, &:hover": {
          bg: "white",
          color: "black",
        },
        "&:focus": {
          bg: "white",
          outline: "none",
          color: "black",
        },
      },
      disabled: {
        color: "grey.500",
        backgroundColor: "grey.600",
        cursor: "not-allowed",
        border: "none",
      },
      black: {
        color: "white",
        bg: "black",
        fontFamily: "primary",
        fontSize: ["1.6rem", "1.6rem", "1.6rem", "1.8rem", "1.8rem", "2.4rem"],
        border: "1px solid",
        borderColor: "white",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 600,
        "&:active, &:hover": {
          bg: "white",
          color: "black",
        },
        "&:focus": {
          bg: "white",
          outline: "none",
          color: "black",
        },
      },
    },
  })}
  &[disabled] {
    color: "grey.500";
    background-color: "grey.600";
    cursor: not-allowed;
  }
`;

export const Button = ({
  disabled,
  loading,
  children,
  variant: v = "primary",
  onClick,
  showAsyncLoad,
  fontWeight,
  classes,
  label,
  ...rest
}) => {
  const [asyncLoading, setLoading] = useState(false);
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true);
      try {
        await onClick?.(arg);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [onClick]
  );

  return (
    <ButtonBase
      variant={v}
      as="button"
      color="white"
      {...rest}
      onClick={onClickHandler}
      disabled={disabled || loading || (showAsyncLoad && asyncLoading)}
      overflow="hidden"
      className={classes}
    >
      {(loading || (showAsyncLoad && asyncLoading)) && (
        <Flex
          left={0}
          right={0}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          fontSize={2}
          height="15px"
          width="15px"
          mx="auto"
        >
          <Loader loading />
        </Flex>
      )}
      {label ? (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          id={label}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      ) : (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      )}
    </ButtonBase>
  );
};

Button.defaultProps = {
  as: "button",
  width: "100%",
  fontSize: "1.6rem",
};

Button.propTypes = {  
  fontSize: PropTypes.string,
  as: PropTypes.string,
  width: PropTypes.string,
};
