import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import {indigo} from "@mui/material/colors"
import theme from '../../theme';

const CardProjectTitle1
 = () => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: indigo[200], 
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
            src="../../src/assets/logo/conman.png"
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

        <div>
            <Typography 
                variant="cardLightTitle"
            >CRYPTO CON
            </Typography>
            <Typography 
                variant="cardLightSubtitle"       
            >iOS Implementation
            </Typography>     
        </div>

      </Box>

    </ThemeProvider>
    );
  
  };

  export default CardProjectTitle1;