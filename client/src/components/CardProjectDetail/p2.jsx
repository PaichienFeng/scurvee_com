import { ThemeProvider, Typography, Avatar, Box, Fab, List, ListItem, ListItemText } from "@mui/material"
import {orange} from "@mui/material/colors"
import theme from '../../theme';
import InsightsIcon from "@mui/icons-material/Insights";

const CardProjectDetail2
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
            >DUD SUBMARINE
            </Typography>
            <Typography 
                variant="cardLightTitleL1"
            >Value: $ 1,250,000.00
            </Typography>
            <Typography 
                variant="cardLightSubtitle"       
            >Web Development
            </Typography>

            <List>
                <ListItem
                    sx={{
                        marginY:-2,
                    }}
                >                  
                    <ListItemText 
                    primary="- Virtual tours" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}             
                    />
                </ListItem>
                <ListItem
                    sx={{
                        marginY:-2
                    }}
                >
                    <ListItemText 
                    primary="- Mini Game" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}                    
                    />
                </ListItem>
                <ListItem
                    sx={{
                        marginY:-2
                    }}                
                >
                    <ListItemText 
                    primary="- Social Media integration" 
                    primaryTypographyProps={{ variant: "cardLightSubtitle"}}                    
                    />
                </ListItem>
                <ListItem
                    sx={{
                        marginY:-2
                    }}                
                >
                    <ListItemText 
                    primary="- Sweeten Debt strategy" 
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

  export default CardProjectDetail2;