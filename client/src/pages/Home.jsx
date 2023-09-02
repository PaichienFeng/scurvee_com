import { Container, ThemeProvider, Button, Box, Fab } from "@mui/material"
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
import formattedCurrentDate from '../utils/formattedCurrentDate'
import formattedDate from "../utils/formattedDate";

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


  const { error, data, loading: taskLoading } = useQuery(QUERY_TODAY_TASK, {
    variables: {
      teamMemberId: teamMemberId,
      taskDate: formattedCurrentDate()
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
          width: { xs: "100%", md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <main>
          <Header teamMember={teamMember} title={teamMember.username} />
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
              <BarChart barChartData={barChartData} />
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
            <Button onClick={logout} variant="contained">
              Log Out
            </Button>
            <Link to={"/teamtask"}>
              <Fab color="primary">
                <AddIcon />
              </Fab>
            </Link>
          </Container>
        </main>
      </Container>
      {Auth.getProfile().authenticatedPerson.username === "IL Capo" ? (
        <FooterNavBar />
      ) : (
        <Footer />
      )}
    </ThemeProvider>
  );
};

export default Home;
