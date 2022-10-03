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

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Title */}
      {/* In this case, the Finance Bro is scheduling */}
      <Box>
        <Heading ml={24} mt={12} fontWeight={'light'}>
          Meeting for our super important merger and acquisition 📈
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
