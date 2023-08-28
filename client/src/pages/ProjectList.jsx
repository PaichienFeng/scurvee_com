import { Container, ThemeProvider, Fab } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardProjectTitle from '../components/CardProjectTitle/index';
import CardProjectTitle1 from '../components/CardProjectTitle/p1';
// import CardProjectTitle2 from '../components/CardProjectTitle/p2';
// import CardProjectTitle3 from '../components/CardProjectTitle/p3';
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from '../utils/queries'

const ProjectList = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
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
          <TitleHeader />

          <br></br>
          <br></br>

          <CardProjectTitle1
            projects={projects}
          />


          {/* <br></br>
        <CardProjectTitle2 />
        <br></br>
        <CardProjectTitle3 />
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
        <br></br>                           */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'right',
            }}
          >
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


export default ProjectList;
