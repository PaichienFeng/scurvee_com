import { ThemeProvider, Typography, Avatar, Box, Fab, List, ListItem, ListItemText } from "@mui/material"
import { orange } from "@mui/material/colors"
import theme from '../../theme';
import InsightsIcon from "@mui/icons-material/Insights";

const CardProjectDetail2
    = ({ project }) => {
        return (
            <ThemeProvider theme={theme}>

                <Box
                    sx={{
                        width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
                        bgcolor: project.background_color,
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
                        alt={project.name}
                        src={project.image_link}
                        sx={{
                            width: 60,
                            height: 60,
                        }}
                    />

                    <div>
                        <Typography
                            variant="cardLightTitle"
                        >{project.name}
                        </Typography>
                        <Typography
                            variant="cardLightTitleL1"
                        >Value: ${project.budget}
                        </Typography>
                        <Typography
                            variant="cardLightSubtitle"
                        >{project.sow_title}
                        </Typography>
                        <Typography
                            sx={{ whiteSpace: 'pre-line' }}
                            variant="cardLightSubtitle"
                        >{project.sow_detail}
                        </Typography>

                        {/* <List>
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
            </List> */}

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