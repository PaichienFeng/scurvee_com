import { ThemeProvider, Typography, Box } from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../../theme';


const Footer = () => {

  return (
  <ThemeProvider theme={theme}>
      <Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: "#ffffff", 
                height: "10vh",
                display: "flex",
                color: blue[700],
                justifyContent: "center",
                alignItems: "center",
              }}
      >
        <Typography 
            variant="h4"
            fontWeight="bold" 
        >Scurvee.com</Typography>
      </Box>
  </ThemeProvider>
  );

};






export default Footer;
