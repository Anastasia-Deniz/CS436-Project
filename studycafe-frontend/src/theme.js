import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6D4C41', // Coffee brown color
    },
    secondary: {
      main: '#D7CCC8', // Lighter coffee tone
    },
    background: {
      default: '#FFF3E0', // Warm, light background color 
      paper: '#FBF8F3', // Lighter paper color
    },
    text: {
      primary: '#3E2723', // Dark brown for text
    },
  },
});

export default theme;