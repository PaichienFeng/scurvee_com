import { Container, ThemeProvider, Fab, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectDetail2 from '../components/CardProjectDetail/p2';
import CardMember2 from '../components/CardMember/z2';
import CardMember3 from '../components/CardMember/z3';
import AddIcon from '@mui/icons-material/Add';

const ProjectDetail = () => {
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
              <CardProjectDetail2 />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMember2 />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMember3 />
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
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </div>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default ProjectDetail;
