import React from "react";
import ButtonComponent from "./ButtonComponent";
import { Box, Center, Text } from "@chakra-ui/react";

const MyPage = () => {
  const buttons = ["First", "Second", "Third"];
  const [activeButton, setActiveButton] = React.useState(buttons[0]);

  const setValue = (button) => {
    setActiveButton(button);
  };

  return (
    <Center height="100vh"> 
      <Box>
        <ButtonComponent buttons={buttons} activeButton={activeButton} setValue={setValue} />
        <Text fontSize="xl" fontWeight="bold" textAlign="center" mt={4}>
          Active button: {activeButton}
        </Text>
      </Box>
    </Center>
  );
};

export default MyPage;
