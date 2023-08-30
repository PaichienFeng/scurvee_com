import { Container, ThemeProvider, Button, Typography, TextField, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TEAMMEMBER } from '../utils/mutations';
import Auth from '../utils/auth';

const initialForm = {
  username: '',
  title: '',
  email: '',
  password: '',
  rate: 0,
  background_color: '',
  image_link: ''
};

const AddTeamMember = () => {
  const [formState, setFormState] = useState(initialForm);
  const [addTeamMember, { error, data }] = useMutation(ADD_TEAMMEMBER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === 'rate' ? parseFloat(value) : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addTeamMember({
        variables: { ...formState },
      });

      Auth.login(data.addTeamMember.token);
    } catch (e) {
      console.error(e);
    }

    setFormState(initialForm);
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
            <Grid item xs={12} >
              <form onSubmit={handleFormSubmit}>
                <Typography>Username:</Typography>
                <TextField
                  label="Enter Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <Typography>Title:</Typography>
                <TextField
                  label="Enter Title"
                  name="title"
                  type="text"
                  value={formState.title}
                  onChange={handleChange}
                />
                <Typography>Email:</Typography>
                <TextField
                  label="Enter Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <Typography>Password:</Typography>
                <TextField
                  label="Assign Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Typography>Rate $/Hr:</Typography>
                <TextField
                  label="Enter Rate $/Hr"
                  name="rate"
                  type="number"
                  value={formState.rate}
                  onChange={handleChange}
                />
                <Typography>Background Colour:</Typography>
                <TextField
                  name="background_color"
                  type="color"
                  value={formState.background_color}
                  onChange={handleChange}
                />
                <Typography>Image Link:</Typography>
                <TextField
                  label="Enter Avatar Link"
                  name="image_link"
                  type="text"
                  value={formState.image_link}
                  onChange={handleChange}
                />

                <Container
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button type="submit" variant="contained">
                    Add
                  </Button>
                  <Button variant="contained">Cancel</Button>
                </Container>
              </form>
            </Grid>
          </Grid>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default AddTeamMember;