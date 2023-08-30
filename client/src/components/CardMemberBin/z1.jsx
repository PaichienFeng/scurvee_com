import { ThemeProvider, Typography, Avatar, Box, Fab } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import theme from '../../theme';
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation } from "@apollo/client";
import { DELETE_TEAMMEMBER } from "../../utils/mutations";

const CardMemberBin1
    = ({ teamMembers }) => {

        const [deleteTeamMember] = useMutation(DELETE_TEAMMEMBER);

        const handleDeleteClick = async (teamMemberId) => {
            console.log
            try {
                await deleteTeamMember({
                    variables: { teamMemberId },
                });
                window.location.assign(`/teammembers`);

            } catch (error) {
                console.error('error deleting team member', error);
                alert('fail to delete the team member')
            }
        };

        return (
            <ThemeProvider theme={theme}>
                {teamMembers.map((teamMember) => (

                    <Box
                        key={teamMember._id}
                        sx={{
                            width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
                            bgcolor: teamMember.background_color,
                            maxWidth: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            paddingLeft: 2,
                            paddingRight: 2,
                            alignItems: "center",
                            mb:1,
                            py: 1,
                            borderRadius: 3,
                        }}
                    >
                        <Avatar
                            variant="memberPic"
                            alt=""
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

                        <div>
                            <Fab
                                onClick={() => handleDeleteClick(teamMember._id)}
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
                ))}

            </ThemeProvider>
        );

    };

export default CardMemberBin1;