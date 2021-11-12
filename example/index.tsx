import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/color-mode';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import theme from './theme';
import App from './App';

ReactDOM.render(<>
  <ColorModeScript initialColorMode='light' />
  <ChakraProvider theme={extendTheme(theme)}>
    <App />
  </ChakraProvider></>,
  document.getElementById('root')
);
