import { Container, ThemeProvider, Button, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardMember1 from '../components/CardMember/';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';
import { ADD_PROJECTTEAM } from '../utils/mutations';

const AddProjectTeam = () => {
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = data?.project || {};
  const navigate = useNavigate();

  const [addProjectTeam, { error }] = useMutation(ADD_PROJECTTEAM);

  const handleCardClick = async (teamMemberId) => {
    try {
      const { data } = await addProjectTeam({
        variables: {
          projectId: projectId,
          teamMemberId: teamMemberId,
        },
      });
    } catch (error) {
      console.error(error);
    }

    window.location.assign(`/projects/${projectId}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: '100%',
          bgcolor: blue[50],
          minHeight: '90vh',
        }}
      >
        <main>
          <TitleHeader />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardMember1 project={project} onCardClick={handleCardClick} />
            </Grid>
          </Grid>

          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 6,
            }}
          >
            <Button variant="contained">Add</Button>
            <Link to={`/projects/${projectId}`}>
              <Button variant="contained">Cancel</Button>
            </Link>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default AddProjectTeam;