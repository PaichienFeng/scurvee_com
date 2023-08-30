import { Container, ThemeProvider, Fab, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectDetail2 from '../components/CardProjectDetail/';
import CardMember2 from '../components/CardMember/';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom';
import { QUERY_PROJECT } from '../utils/queries';
import { useQuery } from '@apollo/client';

const ProjectDetail = () => {
  const {projectId}= useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = data?.project || {}

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: '100%',
          bgcolor: blue[50],
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <main>
          <TitleHeader />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardProjectDetail2 
              project={project}/>
            </Grid>
            <Grid item xs={12}>
              <CardMember2 
              project={project}/>
            </Grid>

          </Grid>
        </main>
        <div
          style={{
            position: 'absolute',
            bottom: '16px', 
            right: '16px',
            paddingRight: 28,
          }}
        >
          <Link
          to={`/projects/${project._id}/addprojectteam`}>
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

export default ProjectDetail;
