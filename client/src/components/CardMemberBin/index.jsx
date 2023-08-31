import { ThemeProvider, Typography, Avatar, Box, Fab } from "@mui/material"
import {grey} from "@mui/material/colors"
import theme from '../../theme';
import DeleteIcon from "@mui/icons-material/Delete";

const CardMemberBin
 = () => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: grey[700], 
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
            src="../../src/assets/avatar/XX.png"
            sx={{ 
                width: 60, 
                height: 60,
            }}
            />

        <div>
            <Typography 
                variant="cardDarkTitle"
            >Member Name
            </Typography>
            <Typography 
                variant="cardDarkSubtitle"       
            >Member Title
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

  export default CardMemberBin;