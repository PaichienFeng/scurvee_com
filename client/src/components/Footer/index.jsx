import { ThemeProvider, Typography, Box } from "@mui/material"
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
                justifyContent: "center",
                alignItems: "center",
              }}
      >
        <Typography 
            variant="logo"
        >Scurvee.com</Typography>
      </Box>
  </ThemeProvider>
  );

};






export default Footer;
