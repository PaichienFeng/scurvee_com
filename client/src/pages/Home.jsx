import {Container, ThemeProvider, Button, Typography, TextField} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import Footer from '../components/Footer/index';

const Home = () => {

  return (
  <ThemeProvider theme={theme}>
    <Container 
      sx={{ 
        width: { xs: 400, md: 960, lg: 1280, xl: 1920},
        bgcolor: blue[50], 
        height: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
        py: 12,
        m: 0.1,
      }}
    >
      <main>
        <Typography 
        >Username</Typography>
     
        <TextField 
          label="Enter Username" 
        ></TextField>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Typography 
        >Password</Typography>

        <TextField 
        label="Enter password" 
        ></TextField>    
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button 
        variant="contained"
        > Login </ Button>
      </main>
    </Container>
    <Footer />
  </ThemeProvider>
  );

};


export default Home;
