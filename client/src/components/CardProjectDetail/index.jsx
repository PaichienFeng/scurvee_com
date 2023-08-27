import { ThemeProvider, Typography, Avatar, Box, Fab, List, ListItem, ListItemText } from "@mui/material"
import {orange} from "@mui/material/colors"
import theme from '../../theme';
import InsightsIcon from "@mui/icons-material/Insights";

const CardProjectDetail
 = () => {

    return (
    <ThemeProvider theme={theme}>

<Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: orange[200], 
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: 2,
                py: 1,
                paddingRight: 2,
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
            >PROJECT NAME
            </Typography>
            <Typography 
                variant="cardLightTitleL1"
            >Value: $ 0,000,000.00
            </Typography>
            <Typography 
                variant="cardLightSubtitle"       
            >Short Project Description
            </Typography>

            <List>
                <ListItem
                    sx={{
                        marginY:-2,
                    }}
                >                  
                    <ListItemText 
                    primary="- SOW Item 1" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}             
                    />
                </ListItem>
                <ListItem
                    sx={{
                        marginY:-2
                    }}
                >
                    <ListItemText 
                    primary="- SOW Item 2" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}                    
                    />
                </ListItem>
                <ListItem
                    sx={{
                        marginY:-2
                    }}                
                >
                    <ListItemText 
                    primary="- SOW Item 3" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}                    
                    />
                </ListItem>
                <ListItem
                    sx={{
                        marginY:-2
                    }}                
                >
                    <ListItemText 
                    primary="- SOW Item 4" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}                   
                    />
                </ListItem>
            </List>

        </div>
        {/* //TODO onClick={handleFabClick} */}
        {/* //TODO Delete Later if Not Functional */}
        <Fab 
        color="primary"
        >
            <InsightsIcon />
        </Fab>



      </Box>

    </ThemeProvider>
    );
  
  };

  export default CardProjectDetail;