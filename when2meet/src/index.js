// import necessary modules from chakra
import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

// create overall index.js container
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// render app
root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);
