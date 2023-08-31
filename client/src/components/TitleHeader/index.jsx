import { ThemeProvider, Typography, Box, Avatar } from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../../theme';
import { useState, useEffect } from "react";
// import defaultDate from './defaultDate';

const TitleHeader = ({teamMember, title}) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentDate(new Date());
        }, 60000);
        return ()=> clearInterval(interval);
    }, []);

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
    
      const formattedDate = currentDate.toLocaleDateString(undefined, options);
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
            >{title}
            </Typography>
            <Typography 
                variant="date"       
            >{formattedDate}
            </Typography>     
        {/* <defaultDate />    */}
        </div>
        <Avatar
            variant="memberPic"
            alt=""
            src={`/${teamMember.image_link}`}
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