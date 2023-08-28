import { Container, ThemeProvider, Fab } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectTitle1 from '../components/CardProjectTitle/p1';
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from '../utils/queries'
import { Link } from "react-router-dom";

const ProjectList = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
  console.log(projects);
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
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'right',
            }}
          >
            {/* //TODO onClick={handleFabClick} */}
            <Link to="/projects/addproject">
            <Fab
              color="primary"
            >
              <AddIcon />
            </Fab>
            </Link>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );

};


export default ProjectList;
