import {Container, ThemeProvider, Button, Typography, TextField} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';

const AddProject = () => {

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
        >Project Name:</Typography>
        <TextField 
          label="Enter Project Name" 
        ></TextField>
        <br></br>
        <br></br>
        <Typography 
        >Client:</Typography>
        <TextField 
        label="Enter Client" 
        ></TextField>    
        <br></br>
        <br></br>
        <Typography 
        >Budget:</Typography>
        <TextField 
        label="Enter Budget" 
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
        <Typography 
        >SOW Title:</Typography>
        <TextField 
        label="Enter SOW Title" 
        ></TextField>   
        <br></br>
        <br></br>
        <Typography 
        >SOW Detail:</Typography>
        <TextField 
        label="Enter SOW Detail" 
        ></TextField>   
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


export default AddProject;
