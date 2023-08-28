import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import {blueGrey} from "@mui/material/colors"
import theme from '../../theme';

const CardMember1
 = () => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: blueGrey[700], 
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
            src="../../src/assets/avatar/01.png"
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

        <div>
            <Typography 
                variant="cardDarkTitle"
            >Yothu Yindi
            </Typography>
            <Typography 
                variant="cardDarkSubtitle"       
            >Front End Specialist
            </Typography>     
        </div>

      </Box>

    </ThemeProvider>
    );
  
  };

  export default CardMember1;