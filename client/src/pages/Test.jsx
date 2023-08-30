import { Container, ThemeProvider, Button, Typography, TextField, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectTitle2 from '../components/CardProjectTitle/p2';
import CardMember3 from '../components/CardMember/z3';

const TeamAssignment = () => {
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
              <CardProjectTitle2 />
            </Grid>
            <Grid item xs={12}>
              <CardMember3 />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Date:</Typography>
              <TextField label="Enter Date" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Task:</Typography>
              <TextField label="Enter Task" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Duration:</Typography>
              <TextField label="Enter Duration" />
            </Grid>
          </Grid>

          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 2,
            }}
          >
            <Button variant="contained">Add</Button>
            <Button variant="contained">Cancel</Button>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default TeamAssignment;
