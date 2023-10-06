import React from 'react';
import { AspectRatio, Box, Center } from '@chakra-ui/react';

export default function Youtube() {
  return (
    <Center minH="100vh">
      <Box
        maxW="1000px" // Increase the maximum width for a larger video
        width="100%"
        bg="gray.100"
        boxShadow="lg"
        p="4"
        borderRadius="md"
      >
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/TswL6KhQDn4?si=QN0FL-9fFG6cgebs"
            title="OSF"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Center>
  );
}