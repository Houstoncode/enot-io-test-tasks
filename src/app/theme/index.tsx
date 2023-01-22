import { createTheme, darkScrollbar } from '@mui/material';

import { muiSwitch } from './components';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          backgroundColor: '#222222',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        sx: {
          '&.Mui-checked': {
            color: '#F4F4F4',
          },
        },
      },
    },
    MuiSwitch: muiSwitch,
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#282828',
          boxShadow:
            '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
          borderRadius: '40px',
          padding: '16px 18px',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h4: {
      fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
      fontSize: '36px',
    },
  },
  palette: {
    mode: 'dark',
    text: {
      primary: '#F4F4F4',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
});
