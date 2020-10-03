import {createMuiTheme} from '@material-ui/core/styles';

/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */
const theme = createMuiTheme({
  palette: {
    type: 'light', // 'dark' for Dark mode palettes
    primary: {
      main: '#81c784', // Green 300
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffb74d', // Orange 300
      // main: '#ba68c8', // Purple 300
      contrastText: '#000',
    },
    info: {
      main: '#0277bd', // Light Blue 800
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2e7d32', // Green 800
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#f9a825', // Yellow 800
      // contrastText: '#000000',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#c62828', // Red 800
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
  },
});

export default theme;