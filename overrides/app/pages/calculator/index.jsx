import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  ChakraProvider,
  CSSReset,
  extendTheme,
  ThemeProvider,
  HStack,
  Flex,
  FormControl,
  Input,
  Select,
} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif', 
  },
  colors: {
    brand: {
      100: '#F3F4F6',
      500: '#333333',
      900: '#FF9900',
    },
  },
});

const CalculatorApp = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  useEffect(() => {
    calculateResult();
  }, [num1, num2, operation]);

  const clearFields = () => {
    setNum1(0);
    setNum2(0);
    setOperation('+');
    setResult(0);
  };

  return (
    <Center minH="100vh">
      <Box
        p={8}
        bg="gray.100"
        borderRadius="lg"
        boxShadow="xl"
        textAlign="center"
        maxW="400px"
      >
        <Heading as="h1" size="xl" mb={4} color="brand.900">
          Calculator
        </Heading>
        <FormControl display="flex" alignItems="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Number 1:
          </Text>
          <Input
            type="number"
            value={num1}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
            style={{
              width: '100px',
              fontSize: '18px',
              textAlign: 'center',
            }}
          />
        </FormControl>
        <FormControl display="flex" alignItems="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Operation:
          </Text>
          <Select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            style={{
              width: '100px',
              fontSize: '18px',
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </Select>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Number 2:
          </Text>
          <Input
            type="number"
            value={num2}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
            style={{
              width: '100px',
              fontSize: '18px',
              textAlign: 'center',
            }}
          />
        </FormControl>
        <Button
          colorScheme="brand"
          size="lg"
          onClick={clearFields}
          mb={4}
          width="100%"
        >
          Clear
        </Button>
        <Text fontSize="3xl" fontWeight="bold" color="brand.900">
          Result: {result}
        </Text>
      </Box>
    </Center>
  );
};

export default CalculatorApp;
