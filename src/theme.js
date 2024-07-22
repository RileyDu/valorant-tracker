// src/theme.js
import { background, extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  secondary: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  // Add more custom colors if needed
}

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      sizes: {
        md: {
          fontSize: 'md',
          px: 4,
          py: 3,
        },
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: {
            bg: 'primary.50',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
    Card: {
      baseStyle: {
        boxShadow: 'lg',
        borderRadius: 'lg',
        p: 4,
        bg: 'white',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        background: 'blue'
      },
      sizes: {
        xl: {
          fontSize: '2xl',
        },
        lg: {
          fontSize: 'xl',
        },
        md: {
          fontSize: 'lg',
        },
        sm: {
          fontSize: 'md',
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'body',
        color: 'gray.700',
      },
      sizes: {
        md: {
          fontSize: 'md',
        },
        sm: {
          fontSize: 'sm',
        },
      },
    },
  },
})

export default theme
