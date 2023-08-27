import {Container, ThemeProvider, Fab} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardMember from '../components/CardMember/index';
// import CardProjectDetail from '../components/CardProjectDetail/index';
import CardProjectDetail2 from '../components/CardProjectDetail/p2';
import CardMember2 from '../components/CardMember/z2';
import CardMember3 from '../components/CardMember/z3';
import AddIcon from "@mui/icons-material/Add";

const ProjectDetail = () => {

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

        <br></br>
        <br></br>
        <CardProjectDetail2 />
        <br></br>
        <CardMember2 />
        <br></br>
        <CardMember3 />
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
            justifyContent: 'right',  
        }}
        >
        {/* <Button 
        variant="contained"
        > Add </ Button>
        <Button 
        variant="contained"
        > Cancel </ Button> */}
        {/* //TODO onClick={handleFabClick} */}
        <Fab 
        color="primary"
        >
            <AddIcon />
        </Fab>        
        </Container>
      </main>
    </Container>
    <FooterNavBar />
  </ThemeProvider>
  );

};


export default ProjectDetail;
