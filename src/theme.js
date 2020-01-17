import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: red[100],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      paper: '#fff'
    },
  },
});

export default theme;
