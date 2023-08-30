import {Container, ThemeProvider, Button, Typography, Box, Divider, Fab} from "@mui/material"
import {blue} from "@mui/material/colors"
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
import { useState } from "react";

const Home = () => {
  if (!Auth.loggedIn()){
    return <Navigate to="/login" />;
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const {loading, data:teamMemberData} = useQuery(QUERY_TEAMMEMBER,{
    variables:{teamMemberId: teamMemberId}
  })
  const teamMember= teamMemberData?.teamMember||[]
  const currentDate= new Date();

  const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;


  const {error, data, loading: taskLoading} = useQuery(QUERY_TODAY_TASK, {
    variables:{
      teamMemberId: teamMemberId,
      taskDate: formattedCurrentDate
    }
  });

  // if (taskLoading||loading){
  //   return <div>Loading...</div>
  // }

  const today_tasks = data?.today_tasks || []
  console.log(today_tasks);
  

  const planned_durations = today_tasks.map((task)=>task.planned_duration);
  const actual_durations = today_tasks.map((task)=>task.actual_duration);
  console.log(planned_durations[1], actual_durations[1])
  const [barChartData, setBarChartData] = useState({
    labels:['PLANNED', 'ACTUAL'],
    datasets:[{
      label: "PROJECT TIME",
      data: [planned_durations[1], actual_durations[1]],
      backgroundColor: ['orange'],
      borderColor:"black"
    }]
  })

  return (
  <ThemeProvider theme={theme}>

    <Container 
      sx={{ 
        width: { xs: 400, md: 960, lg: 1280, xl: 1920},
        bgcolor: blue[50], 
        height: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
      }}
    >
      <main>
      <Header teamMember={teamMember} title={teamMember.username}/>
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
                 <div style={{width: 300}}> 
            <BarChart barChartData= {barChartData}/>
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
    {Auth.getProfile().authenticatedPerson.username === "IL Capo"?
    <FooterNavBar/>:
    <Footer />
    }
  </ThemeProvider>
  );

};


export default Home;
