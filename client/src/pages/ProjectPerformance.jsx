import React, { useState, useEffect } from "react";
import { Container, ThemeProvider, Button, Typography, TextField, Box, Fab } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from "../theme";
import FooterNavBar from "../components/FooterNavBar/index";
import TitleHeader from "../components/TitleHeader/index";
import CardProjectTitle2 from "../components/CardProjectTitle/p2";
import CardMember3 from "../components/CardMember/z3";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PROJECT, QUERY_TEAMMEMBER, QUERY_WEEKTASK } from "../utils/queries";
import Auth from "../utils/auth";
import AddIcon from "@mui/icons-material/Add";
import LineChart from '../components/LineChart';
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
    const [weekTasks, setWeekTasks] = useState(data?.weekTask || []);

    useEffect(()=> {
        if(data) {
            setWeekTasks(data?.weekTask|| [])
        }
    }, [data]);

    // console.log(weekTasks);

    const dateObj = {
        dayOne: startDate,
        dayTwo: formattedDate(new Date().setDate(new Date().getDate() - 5)),
        dayThree: formattedDate(new Date().setDate(new Date().getDate() - 4)),
        dayFour: formattedDate(new Date().setDate(new Date().getDate() - 3)),
        dayFive: formattedDate(new Date().setDate(new Date().getDate() - 2)),
        daySix: formattedDate(new Date().setDate(new Date().getDate() - 1)),
        daySeven: endDate
    };

    const dateObjArray = [dateObj.dayOne, dateObj.dayTwo, dateObj.dayThree, dateObj.dayFour, dateObj.dayFive, dateObj.daySix, dateObj.daySeven];

    const plannedRateSums = {
        dayOne: 0,
        dayTwo: 0,
        dayThree: 0,
        dayFour: 0,
        dayFive: 0,
        daySix: 0,
        daySeven: 0
    };


    const actualRateSums = {
        dayOne: 0,
        dayTwo: 0,
        dayThree: 0,
        dayFour: 0,
        dayFive: 0,
        daySix: 0,
        daySeven: 0
    };


    useEffect(() => {
        weekTasks.forEach((task) => {
            if (task.task_date === dateObj.dayOne) {
                plannedRateSums.dayOne += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.dayOne += task.teamMember.rate * (task.actual_duration || 0)
            } else if (task.task_date === dateObj.dayTwo) {
                plannedRateSums.dayTwo += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.dayTwo += task.teamMember.rate * (task.actual_duration || 0)
            } else if (task.task_date === dateObj.dayThree) {
                plannedRateSums.dayThree += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.dayThree += task.teamMember.rate * (task.actual_duration || 0)
            } else if (task.task_date === dateObj.dayFour) {
                plannedRateSums.dayFour += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.dayFour += task.teamMember.rate * (task.actual_duration || 0)
            } else if (task.task_date === dateObj.dayFive) {
                plannedRateSums.dayFive += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.dayFive += task.teamMember.rate * (task.actual_duration || 0)
            } else if (task.task_date === dateObj.daySix) {
                plannedRateSums.daySix += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.daySix += task.teamMember.rate * (task.actual_duration || 0)
            } else if (task.task_date === dateObj.daySeven) {
                plannedRateSums.daySeven += task.teamMember.rate * (task.planned_duration || 0);
                actualRateSums.daySeven += task.teamMember.rate * (task.actual_duration || 0)
            };
        });
        const plannedRateSumsArray = [plannedRateSums.dayOne, plannedRateSums.dayTwo, plannedRateSums.dayThree, plannedRateSums.dayFour, plannedRateSums.dayFive, plannedRateSums.daySix, plannedRateSums.daySeven];
        const actualRateSumsArray = [actualRateSums.dayOne, actualRateSums.dayTwo, actualRateSums.dayThree, actualRateSums.dayFour, actualRateSums.dayFive, actualRateSums.daySix, actualRateSums.daySeven];
        // console.log(actualRateSumsArray);
        
        setlineChartData({
            labels: dateObjArray,
            datasets: [{
                label: 'Sum of Planned Rate',
                data: plannedRateSumsArray,
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 0.5)',
            },
            {
                label: 'Sum of Actual Rate',
                data: actualRateSumsArray,
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 0.5)',
            }]
        });
    }, [weekTasks])

    const [lineChartData, setlineChartData] = useState({
        labels: ['PLANNED', 'ACTUAL'],
        datasets: []
    });


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
                    width: '100%',
                    bgcolor: blue[50],
                    minHeight: '95vh',
                    position: 'relative',
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
                            <LineChart lineChartData={lineChartData} />

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
