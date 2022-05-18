import { Box, Text } from "atoms";
import MemoClose from "public/assets/icons/Close";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0px",
    padding: "0px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export const SuccessModal = ({ isOpen, onRequestClose, ariaHideApp, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={ariaHideApp}
    >
      <Box
        width="100%"
        maxWidth="73rem"
        bg="black"
        px={{ xs: "3rem", lg: "7.7rem" }}
      >
        <Box
          onClick={onRequestClose}
          position="absolute"
          right="3rem"
          top="4rem"
          cursor="pointer"
          zIndex={2}
          color="primary.500"
        >
          <MemoClose width="1.8rem" height="1.8rem" />
        </Box>
        <Box py="8rem">
          <Text
            fontWeight="800"
            fontSize={{ xs: "1.8rem", lg: "2.4rem" }}
            lineHeight={{ xs: "2.4rem", lg: "3.6rem" }}
            color="white"
            textTransform="uppercase"
            textAlign="center"
          >
            {data?.heading?.replace(/<[^>]+>|&nbsp;/g, "")}
          </Text>
          <Text
            fontWeight="400"
            fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
            lineHeight="2.4rem"
            color="white"
            textAlign="center"
            mt="3rem"
          >
            {data?.description?.replace(/<[^>]+>|&nbsp;/g, "")}
          </Text>
        </Box>
      </Box>
    </Modal>
  );
};
