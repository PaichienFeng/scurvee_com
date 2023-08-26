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
  typography: {
    logo: {
        color: blue[700],
        fontSize: "2rem",
        fontWeight: "bold",       
    },
    pageTitle: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#262626",
        display: "flex",
        flexDirection: "column",
    },
    date: {
        fontSize: "0.8rem",
        color: "#262626",
        display: "flex",
        flexDirection: "column",   
        paddingRight: 150,          
    },
    columnChartTitle: {
        fontSize: "0.7rem",
        fontWeight: "bold",
        color: blue[700],
        justifyContent: "center",        
    },
  },
//   avatar: {
//     memberPic:{
//         display: "flex",
//         justifyContent: "flex-end",
//         width: 35, 
//         height: 35,
//         px: 5,
//     },
//   },


});

export default theme;