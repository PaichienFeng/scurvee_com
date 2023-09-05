import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import theme from '../../theme';

const CardMember3
 = ({teamMember}) => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: teamMember.background_color, 
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
            alt={teamMember.username}
            src={teamMember.image_link}
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

        <div>
            <Typography 
                variant="cardDarkTitle"
            >{teamMember.username}
            </Typography>
            <Typography 
                variant="cardDarkSubtitle"       
            >{teamMember.title}
            </Typography>     
        </div>

      </Box>

    </ThemeProvider>
    );
  
  };

  export default CardMember3;