import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import { orange } from "@mui/material/colors"
import theme from '../../theme';

const CardProjectTitle2
    = ({ project }) => {

        return (
            <ThemeProvider theme={theme}>

                <Box
                    sx={{
                        width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
                        bgcolor: project.background_color,
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
                            variant="cardLightSubtitle"
                        >{project.sow_title}
                        </Typography>
                    </div>

                </Box>

            </ThemeProvider>
        );

    };

export default CardProjectTitle2;