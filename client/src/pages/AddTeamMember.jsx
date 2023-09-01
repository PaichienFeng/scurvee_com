import { Container, ThemeProvider, Button, Typography, TextField, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TEAMMEMBER } from "../utils/mutations";
import Auth from '../utils/auth';
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBER } from "../utils/queries";

const initialForm = {
  username: '',
  title: '',
  email: '',
  password: '',
  rate: 0,
  background_color: '',
  image_link: ''
}

const AddTeamMember = () => {

  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const {loading, data:teamMemberData} = useQuery(QUERY_TEAMMEMBER,{
    variables:{teamMemberId: teamMemberId}
  })
  const teamMember= teamMemberData?.teamMember||{}

  const [formState, setFormState] = useState(initialForm);
  const [addTeamMember, { error, data }] = useMutation(ADD_TEAMMEMBER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "rate" ? parseFloat(value) : value;
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

    } catch (e) {
      console.error(e);
    };

    setFormState(initialForm);
    window.location.assign('/teammembers')
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: { xs: "100%", md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <TitleHeader teamMember={teamMember} title="ADD TEAM MEMBER"/>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Username:</Typography>
              <TextField
                fullWidth
                label="Enter Username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Title:</Typography>
              <TextField
                fullWidth
                label="Enter Title"
                name="title"
                type="text"
                value={formState.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Email:</Typography>
              <TextField
                fullWidth
                label="Enter Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Password:</Typography>
              <TextField
                fullWidth
                label="Assign Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Rate $/Hr:</Typography>
              <TextField
                fullWidth
                label="Enter Rate $/Hr"
                name="rate"
                type="number"
                value={formState.rate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Background Colour:</Typography>
              <TextField
                fullWidth
                name="background_color"
                type="color"
                value={formState.background_color}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Image Link:</Typography>
              <TextField
                fullWidth
                label="Enter Avatar Link"
                name="image_link"
                type="text"
                value={formState.image_link}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            sx={{ mt: 2 }}
          >
            <Grid item>
              <Button
                variant="contained"
                type="submit"
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Link to={'/teammembers'}>
                <Button
                  variant="contained"
                >
                  Cancel
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default AddTeamMember;