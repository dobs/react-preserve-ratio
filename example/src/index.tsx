import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import theme from './theme'
import App from './App'

ReactDOM.render(
  <ChakraProvider theme={extendTheme(theme)}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
