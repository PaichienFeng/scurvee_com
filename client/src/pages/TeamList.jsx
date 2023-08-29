import { Container, ThemeProvider, Fab, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardMemberBin1 from '../components/CardMemberBin/z1';
import CardMemberBin2 from '../components/CardMemberBin/z2';
import CardMemberBin3 from '../components/CardMemberBin/z3';
import AddIcon from '@mui/icons-material/Add';

const TeamList = () => {
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
              <CardMemberBin1 />
            </Grid>
            <Grid item xs={12}>
              <CardMemberBin2 />
            </Grid>
            <Grid item xs={12}>
              <CardMemberBin3 />
            </Grid>
          </Grid>

          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 4,
            }}
          >
            <Fab color="primary">
              <AddIcon />
            </Fab>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default TeamList;