import {Container, ThemeProvider, Button, Typography, TextField} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';

const AddTeamMember = () => {

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
      <Typography 
        >Username:</Typography>
        <TextField 
          label="Enter Username" 
        ></TextField>
        <br></br>
        <br></br>
        <Typography 
        >Title:</Typography>
        <TextField 
        label="Enter Title" 
        ></TextField>    
        <br></br>
        <br></br>
        <Typography 
        >Password:</Typography>
        <TextField 
        label="Assign Password" 
        ></TextField>   
        <br></br>
        <br></br>
        <Typography 
        >Rate $/Hr:</Typography>
        <TextField 
        label="Enter Rate $/Hr" 
        ></TextField>   
        <br></br>
        <br></br>
        <Typography 
        >Avatar Link:</Typography>
        <TextField 
        label="Enter Avatar Link" 
        ></TextField>   
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


export default AddTeamMember;
