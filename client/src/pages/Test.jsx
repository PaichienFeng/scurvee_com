import {Container, ThemeProvider, Button, Typography, TextField} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardMember from '../components/CardMember/index';
// import CardMember1 from '../components/CardMember/z1';
import CardProjectTitle2 from '../components/CardProjectTitle/p2';
import CardMember3 from '../components/CardMember/z3';


const TeamAssignment = () => {

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
      <TitleHeader />

        {/* <br></br>
        <br></br>
        <CardMember1 /> */}
        <br></br>
        <CardProjectTitle2 />
        <br></br>
        <CardMember3 />
        <br></br>
        <Typography 
        >Date:</Typography>
        <TextField 
        label="Enter Date" 
        ></TextField>   
        <br></br>
        <br></br>
        <Typography 
        >Task:</Typography>
        <TextField 
        label="Enter Task" 
        ></TextField>   
        <br></br>
        <br></br>
        <Typography 
        >Duration:</Typography>
        <TextField 
        label="Enter Duration" 
        ></TextField>   
        <br></br>
        <br></br>
        <br></br>
        <br></br>        
        <br></br>
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
        > Add </ Button>
        <Button 
        variant="contained"
        > Cancel </ Button>
        </Container>
      </main>
    </Container>
    <FooterNavBar />
  </ThemeProvider>
  );

};


export default TeamAssignment;
