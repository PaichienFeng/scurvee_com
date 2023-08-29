import { Container, ThemeProvider, Fab } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectTitle1 from '../components/CardProjectTitle/p1';
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
          width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          minHeight: '90vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'column' },
          position: 'relative',
          overflow: 'hidden',
          padding: '0 16px',
        }}
      >
        <main>
          <TitleHeader />

          <br />
          <br />

          <CardProjectTitle1
            projects={projects}
            sx={{ 
                margin: '16px',
             }} 
          />
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