import { Container, ThemeProvider, Fab, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectTitle1 from '../components/CardProjectTitle/p1';
// import CardProjectTitle2 from '../components/CardProjectTitle/p2';
import AddIcon from '@mui/icons-material/Add';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: '100%',
          bgcolor: blue[50],
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          padding: '0 16px',
        }}
      >
        <main>
          <TitleHeader />

          <br />
          <br />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardProjectTitle1 projects={projects} sx={{ margin: '16px' }} />
            </Grid>
            {/* <Grid item xs={12}>
              <CardProjectTitle2 projects={projects} sx={{ margin: '16px' }} />
            </Grid> */}
          </Grid>
        </main>

        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '24px',
          }}
        >
          <Link to="/projects/addproject">
            <Fab color="primary">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default ProjectList;