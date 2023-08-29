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
import { QUERY_TEAMMEMBER } from "../utils/queries";

const Home = () => {
  if (!Auth.loggedIn()){
    return <Navigate to="/login" />;
  }
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const {loading, data} = useQuery(QUERY_TEAMMEMBER,{
    variables:{teamMemberId: teamMemberId}
  })
  const teamMember= data?.teamMember||{}

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
            {[...Array(9)].map((_, index) => (
                <Divider key={index} sx={{ backgroundColor: "#CCC" }} />
            ))}
            </Box>
            <Typography
            variant="columnChartTitle"
            >Planned</Typography>            
        </div>    
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
            {[...Array(9)].map((_, index) => (
                <Divider key={index} sx={{ backgroundColor: "#CCC" }} />
            ))}                
            </Box>
            <Typography
            variant="columnChartTitle"
            >Actual</Typography>            
        </div> 

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
        variant="contained"
        > Log All </ Button>
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
