import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

const WeatherIndex = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [bgColor, setBgColor] = useState('gray.200'); 
  const [boxWidth, setBoxWidth] = useState('800px'); 

  const handleSearch = () => {
    if (city) {
      // Fetch weather data from OpenWeatherMap API
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18c7430fba537c652a6ef43612d2fc8f`
        )
        .then((response) => {
          setWeather(response.data);
          updateBackgroundColor(response.data.weather[0].main);
          setBoxWidth('800px'); // Adjust the box width dynamically
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const updateBackgroundColor = (weatherCondition) => {
    // Determine the background color based on weather condition
    switch (weatherCondition) {
      case 'Clear':
        setBgColor('orange.200'); // Sunny
        break;
      case 'Clouds':
        setBgColor('gray.200'); // Cloudy
        break;
      case 'Rain':
        setBgColor('teal.200'); // Rainy
        break;
      case 'Snow':
        setBgColor('white'); // Snowy
        break;
      case 'Mist':
        setBgColor('gray.400'); // Misty
        break;
      case 'Fog':
        setBgColor('gray.400'); // Foggy
        break;
      case 'Haze':
        setBgColor('orange.200'); // Hazy
        break;
      case 'Thunderstorm':
        setBgColor('purple.300'); // Thunderstorm
        break;
      default:
        setBgColor('gray.200'); // Default
    }
  };

  return (
    <Center height="100vh">
      <Box
        p={6}
        rounded="lg"
        boxShadow="lg"
        bgColor={bgColor}
        width={boxWidth} // Dynamic width for the box
        height="auto" // Auto height for box content
        overflow="hidden" // Hide overflow content
        align="center" // Center all elements
      >
        <Heading size="2xl">Weather App</Heading>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          mb={4} // Add margin at the bottom
        />
        <Button colorScheme="blue" onClick={handleSearch} mb={4} ml={2}>
          Search
        </Button>
        {weather && (
          <VStack spacing={4} align="center">
            <Heading size="xl">
              The weather in {city} is {weather.weather[0].description}
            </Heading>
            <Image
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <Text fontSize="2xl">
              It's {(weather.main.temp - 273.15).toFixed(1)}°C in {city}.
            </Text>
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default WeatherIndex;