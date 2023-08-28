import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// TODO Material UI
import { Container, ThemeProvider, Button, Typography, TextField } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import Footer from '../components/Footer/index';
// TODO Material UI End

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      alert('Invalid Email or Password')
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    // TODO Material UI 
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: "100%",
          bgcolor: blue[50],
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          paddingTop: 8,
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Typography>Email</Typography>
          <TextField
            label="Enter email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <br /><br />
          <Typography>Password</Typography>
          <TextField
            label="Enter password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <br /><br />
          <Button
            variant="contained"
            type='submit'
            sx={{
                marginTop: 5
            }}
          >Login</Button>
        </form>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Login;
