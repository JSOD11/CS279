// use chakra ui react
import {
  Center,
  Box,
  ChakraProvider,
  theme,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Dash from './components/Dash';

// create app
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Heading ml={24} mt={12} fontWeight={'light'}>
          CS 279R Meeting
        </Heading>
      </Box>

      <Text ml={24}>To invite people, send them this page's URL</Text>
      {/* Dash */}
      <Center mt={'5%'}>
        <Dash />
      </Center>
    </ChakraProvider>
  );
}

export default App;