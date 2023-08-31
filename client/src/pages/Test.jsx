// BASELINE CODE
// HOME

import { Container, ThemeProvider, Button, Typography, Box, Divider, Fab } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import Footer from '../components/Footer/index';
import FooterNavBar from "../components/FooterNavBar";
import Header from '../components/Header/index';
import AddIcon from "@mui/icons-material/Add";
import Auth from '../utils/auth';
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBER, QUERY_TODAY_TASK } from "../utils/queries";
import BarChart from "../components/BarChart";
import { useEffect, useState } from "react";

const Home = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { loading, data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId }
  })
  const teamMember = teamMemberData?.teamMember || []
  const currentDate = new Date();

  const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;


  const { error, data, loading: taskLoading } = useQuery(QUERY_TODAY_TASK, {
    variables: {
      teamMemberId: teamMemberId,
      taskDate: formattedCurrentDate
    }
  });

  // if (taskLoading||loading){
  //   return <div>Loading...</div>
  // }
  const [today_tasks, setToday_tasks] = useState(data?.today_tasks || [])
  const updateTaskDelay = () => {
    setTimeout(() => {
      setToday_tasks(data?.today_tasks)
    }, 500)
  };
  updateTaskDelay();

  console.log(today_tasks);

  const backgroundColors = ['rgba(255, 159, 64, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 26, 104, 0.5)'];

  useEffect(() => {
    const datasets = today_tasks?.map((task, index) => ({
      label: task.project.name,
      data: [task.planned_duration, task.actual_duration],
      backgroundColor: backgroundColors[index % backgroundColors.length],
      borderColor: 'black',
    }));

    setBarChartData(
      {
        labels: ['PLANNED', 'ACTUAL'],
        datasets,
      }
    )
  }, [today_tasks]);

  const [barChartData, setBarChartData] = useState({
    labels: ['PLANNED', 'ACTUAL'],
    datasets: []
  });


  return (
    <ThemeProvider theme={theme}>

      <Container
        sx={{
          width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          height: "90vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <main>
          <Header teamMember={teamMember} title={teamMember.username} />
          <Container
            sx={{
              width: "100%",
              bgcolor: blue[50],
              height: "65vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <div>
              <Box
                sx={{
                  width: "30vw",
                  bgcolor: blue[50],
                  height: "65vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: 'space-between',
                }}
              >
                <div style={
                  {
                    width: 300,
                    height: 700
                  }}>
                  <BarChart barChartData={barChartData} />
                </div>
                {/* {[...Array(9)].map((_, index) => (
                <Divider key={index} sx={{ backgroundColor: "#CCC" }} />
            ))} */}
              </Box>

              {/* <Typography
            variant="columnChartTitle"
            >Planned</Typography>             */}
            </div>
            {/* <div> 
            <Box 
            sx={{
                width: "30vw",
                bgcolor: blue[50], 
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between',                
            }}
            >
            {[...Array(9)].map((_, index) => (
                <Divider key={index} sx={{ backgroundColor: "#CCC" }} />
            ))}                
            </Box>
            <Typography
            variant="columnChartTitle"
            >Actual</Typography>            
        </div>  */}

          </Container>
          <br></br>
          <br></br>
          <br></br>

          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'space-between',
            }}
          >
            <Button
              onClick={logout}
              variant="contained"
            > Log Out </ Button>
            <Link
              to={'/teamtask'}>
              <Fab
                color="primary"
              >
                <AddIcon />
              </Fab>
            </Link>
          </Container>
        </main>
      </Container>
      {Auth.getProfile().authenticatedPerson.username === "IL Capo" ?
        <FooterNavBar /> :
        <Footer />
      }
    </ThemeProvider>
  );

};


export default Home;

// HOME END

