import {Container, ThemeProvider, Button, Typography, TextField} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';

const TeamTask = () => {

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
      <Header />
      <Typography 
        >Date:</Typography>
        <TextField 
          label="Enter Date" 
        ></TextField>
        <br></br>
        <br></br>
        <Typography 
        >Project Name:</Typography>
        <TextField 
        label="Enter Project Name" 
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
        <br></br>
        <br></br>
        <br></br>
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
        > Save </ Button>
        <Button 
        variant="contained"
        > Cancel </ Button>
        </Container>
      </main>
    </Container>
    <Footer />
  </ThemeProvider>
  );

};


export default TeamTask;
