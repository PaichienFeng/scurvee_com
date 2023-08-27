import { ThemeProvider, Typography, Avatar, Box, Fab } from "@mui/material"
import {brown} from "@mui/material/colors"
import theme from '../../theme';
import DeleteIcon from "@mui/icons-material/Delete";

const CardMemberBin2
 = () => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: brown[700], 
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: 2,
                paddingRight: 2,
                alignItems: "center",
                py: 1,
                borderRadius: 3,
              }}
      >
        <Avatar
            variant="memberPic"
            alt=""
            src="../../src/assets/avatar/02.png"
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

        <div>
            <Typography 
                variant="cardDarkTitle"
            >IL Capo
            </Typography>
            <Typography 
                variant="cardDarkSubtitle"       
            >Project Manager
            </Typography>     
        </div>

        <div>
        {/* //TODO onClick={handleFabClick} */}
            <Fab 
                color="secondary"
                sx={{ 
                    width: 40, 
                    height: 40,
                }}
                >
                <DeleteIcon />
            </Fab>            
        </div>

      </Box>

    </ThemeProvider>
    );
  
  };

  export default CardMemberBin2;