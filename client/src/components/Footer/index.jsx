import { ThemeProvider, Typography, Box } from "@mui/material"
import theme from '../../theme';

const Footer = () => {

  return (
  <ThemeProvider theme={theme}>
      <Box
            sx={{ 
                bgcolor: "#ffffff", 
                height: "10vh",
                display: "flex",
                justifyContent: "center",
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
