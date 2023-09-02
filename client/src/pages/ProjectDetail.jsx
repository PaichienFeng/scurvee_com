import { Container, ThemeProvider, Fab, Grid, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectDetail from '../components/CardProjectDetail/index';
import CardMember2 from '../components/CardMember/z2';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom';
import { QUERY_PROJECT, QUERY_TEAMMEMBER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

const ProjectDetail = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId }
  });
  const teamMember = teamMemberData?.teamMember || {};

  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = data?.project || {};

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: '100%',
          bgcolor: blue[50],
          minHeight: '95vh',
          position: 'relative',
        }}
      >
        <main>
          <TitleHeader teamMember={teamMember} title="PROJECT DETAIL" />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardProjectDetail project={project} />
            </Grid>

            {project.teamMembers?.length > 0 && (
              <Box sx={{ mt: 2, mb: 1 }}>
                <Typography variant="cardLightTitle">Project Team</Typography>
              </Box>
            )}

            <Grid item xs={12} md={6}>
              <CardMember2 project={project} />
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
          <Link to={`/projects/${project._id}/addprojectteam`}>
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
