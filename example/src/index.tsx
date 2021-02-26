import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from './App'

const theme = {
  components: {
    Button: {
      baseStyle: {
        mr: 2
      }
    },
    Heading: {
      sizes: {
        lg: {
          mt: 5,
          mb: 3
        }
      }
    },
    List: {
      baseStyle: {
        maxW: '640px'
      }
    },
    Table: {
      baseStyle: {
        table: {
          w: '640px'
        },
        td: {
          textAlign: 'center'
        }
      }
    },
    Text: {
      baseStyle: {
        my: 3,
        maxW: '640px'
      }
    }
  }
}

ReactDOM.render(
  <ChakraProvider theme={extendTheme(theme)}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
