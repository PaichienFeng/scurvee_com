import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import './App.css';

const theme = createTheme({

  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[900],
    },
    
  },
});

export default theme;