import { ThemeProvider, Typography, Box, Avatar } from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../../theme';
// import defaultDate from './defaultDate';

const TitleHeader = () => {

  return (
  <ThemeProvider theme={theme}>
      <Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: "blue[50]", 
                height: "10vh",
                display: "flex",
                color: blue[700],
                justifyContent: "left",
                py: 2,
              }}
      >
        <div>
            <Typography 
                variant="pageTitle"
            >Page Title
            </Typography>
            <Typography 
                variant="date"       
            >Sunday, 27 August 2023
            </Typography>     
        {/* <defaultDate />    */}
        </div>
        <Avatar
            variant="memberPic"
            alt=""
            src="../../src/assets/avatar/02.png"
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

      </Box>
  </ThemeProvider>
  );

};






export default TitleHeader;