import React, { useState } from "react";
import {
    Container,
    ThemeProvider,
    Button,
    Typography,
    TextField,
    Box,
    Fab
} from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from "../theme";
import FooterNavBar from "../components/FooterNavBar/index";
import TitleHeader from "../components/TitleHeader/index";
import CardProjectTitle2 from "../components/CardProjectTitle/p2";
import CardMember3 from "../components/CardMember/z3";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TEAMASSIGNMENT } from "../utils/mutations";
import { QUERY_PROJECT, QUERY_TEAMMEMBER, QUERY_WEEKTASK } from "../utils/queries";
import Auth from "../utils/auth";
import AddIcon from "@mui/icons-material/Add";
import formattedDate from "../utils/formattedDate";
import formattedCurrentDate from '../utils/formattedCurrentDate'



const ProjectPerformance = () => {
    const userId = Auth.getProfile().authenticatedPerson._id;
    const { data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
        variables: { teamMemberId: userId },
    });
    const user = teamMemberData?.teamMember || {};

    const { projectId } = useParams();
    const { loading: projectLoading, data: projectData } = useQuery(QUERY_PROJECT, {
        variables: { projectId: projectId },
    });
    const project = projectData?.project || {};
    const startDate = formattedDate(new Date().setDate(new Date().getDate() - 6));
    const endDate = formattedCurrentDate();

    const { loading, data } = useQuery(QUERY_WEEKTASK, {
        variables: {
            projectId: projectId,
            startDate: startDate,
            endDate: endDate,
        }
    });

    const tasks = data?.weekTask || [];
    console.log(tasks)



    const paddingRight = {
        xs: theme.spacing(1),
        sm: theme.spacing(2),
        md: theme.spacing(3),
        lg: theme.spacing(4),
        xl: theme.spacing(5),
    };
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: 960, lg: 1280, xl: 1920 },
                    bgcolor: blue[50],
                    minHeight: "95vh",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <main>
                    <TitleHeader teamMember={user} title="PROJECT PERFORMANCE" />
                    <Box my={2}>
                        <CardProjectTitle2 project={project} />
                    </Box>
                    <Container
                        sx={{
                            width: "100%",
                            bgcolor: blue[50],
                            flexGrow: 1,
                            height: "65vh",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                paddingRight: paddingRight[theme.breakpoints.down("md")],
                            }}
                        >
                        </Box>
                    </Container>

                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: 8,
                        }}
                    >

                    </Container>
                </main>

            </Container>
            <FooterNavBar />
        </ThemeProvider>
    );
};

export default ProjectPerformance;
