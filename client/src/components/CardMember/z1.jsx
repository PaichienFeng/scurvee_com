import { ThemeProvider, Typography, Avatar, Box } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import theme from '../../theme';
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBERS } from '../../utils/queries'

const CardMember1
    = ({ project }) => {
        const { loading, data } = useQuery(QUERY_TEAMMEMBERS);
        const teamMembers = data?.teamMembers || [];

        if (loading) {
            return <div>Loading...</div>;
        }
        console.log(project);
        // const filteredMembers = teamMembers.filter(
        //     (teamMember)=> !project.teamMembers.find((member)=>member._id === teamMember._id)
        // )

        return (
            <ThemeProvider theme={theme}>
                {teamMembers && teamMembers.map((teamMember)=>(
                <Box
                    sx={{
                        width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
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
                ))}

            </ThemeProvider>
        );

    };

export default CardMember1;