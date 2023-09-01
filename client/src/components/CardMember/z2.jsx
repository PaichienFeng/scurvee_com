import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import theme from '../../theme';
import { Link } from "react-router-dom";

const CardMember2
    = ({ project }) => {

        return (
            <ThemeProvider theme={theme}>
                {project.teamMembers && project.teamMembers.map((teamMember)=>(
                <Link
                style={{ color: 'white', textDecoration: 'none' }}
                key={teamMember._id}
                to={`/projects/${project._id}/teamassignment/${teamMember._id}`}>
                <Box
                    sx={{
                        width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
                        bgcolor: teamMember.background_color,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "left",
                        paddingLeft: 2,
                        alignItems: "center",
                        mb: 1,
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
                </Link>
                ))}

            </ThemeProvider>
        );

    };

export default CardMember2;