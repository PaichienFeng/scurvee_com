import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import './App.css';

const theme = createTheme({

  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[700],
    },
    // inputBackground: {
    //     main: "#ffffff",
    //   },    
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
    cardDarkTitle: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 18,
    },
    cardDarkSubtitle: {
        fontSize: "0.8rem",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 18,
    },
    cardLightTitle: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 18,
    },
    cardLightSubtitle: {
        fontSize: "0.8rem",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 18,
    },                
  },
//   MuiInputBase-input: {
//     customWidth:{
//         background: "#ffffff",
//         width: "300px",
//     },
//   },


});

export default theme;