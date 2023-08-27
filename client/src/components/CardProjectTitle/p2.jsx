import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import {orange} from "@mui/material/colors"
import theme from '../../theme';

const CardProjectTitle2
 = () => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: orange[200], 
                maxWidth: "100%",
                display: "flex",
                justifyContent: "left",
                paddingLeft: 2,
                alignItems: "center",
                py: 1,
                borderRadius: 3,
              }}
      >
        <Avatar
            variant="memberPic"
            alt=""
            src="../../src/assets/logo/submarine.png"
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

        <div>
            <Typography 
                variant="cardLightTitle"
            >DUD SUBMARINE
            </Typography>
            <Typography 
                variant="cardLightSubtitle"       
            >Web Development
            </Typography>     
        </div>

      </Box>

    </ThemeProvider>
    );
  
  };

  export default CardProjectTitle2;