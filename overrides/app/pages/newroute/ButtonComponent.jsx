import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

const ButtonComponent = ({ buttons, activeButton, setValue }) => {
  const [activeButtonState, setActiveButtonState] = useState(activeButton);

  const handleClick = (button) => {
    setActiveButtonState(button);
    setValue(button);
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center" 
      justifyContent="center" 
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={() => handleClick(button)}
          isActive={activeButtonState === button}
          borderRadius="md"
          bg="brand.500"
          color="white"
          fontSize="lg"
          fontWeight="semibold"
          width="200px"
          height="50px"
          my="2"  
        >
          {button}
        </Button>
      ))}
    </Flex>
  );
};

export default ButtonComponent;
