import { Container, ThemeProvider, Button, Typography, TextField, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { ADD_PROJECT } from "../utils/mutations";
import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBER } from "../utils/queries";

const initialForm = {
  name: '',
  client: '',
  budget: 0,
  sow_title: '',
  sow_detail: '',
  background_color: '',
  image_link: '',
};

const AddProject = () => {

  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { loading, data:teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId },
  });
  const teamMember = teamMemberData?.teamMember || {};

  const [formState, setFormState] = useState(initialForm);
  const [addProject, { error, data }] = useMutation(ADD_PROJECT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "budget" ? parseFloat(value) : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
      alert('Failed to add project');
    };

    setFormState(initialForm);
    window.location.assign(`/projects`);
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
          <TitleHeader 
            teamMember={teamMember}
            title="ADD PROJECT"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Typography>Project Name:</Typography>
              <TextField
                fullWidth
                label="Enter Project Name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} >
              <Typography>Client:</Typography>
              <TextField
                fullWidth
                label="Enter Client"
                name="client"
                type="text"
                value={formState.client}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} >
              <Typography>Budget:</Typography>
              <TextField
                fullWidth
                label="Enter Budget"
                name="budget"
                type="number"
                value={formState.budget}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} >
              <Typography>Image Link:</Typography>
              <TextField
                fullWidth
                label="Enter Image Link"
                name="image_link"
                type="text"
                value={formState.image_link}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>SOW Title:</Typography>
              <TextField
                fullWidth
                label="Enter SOW Title"
                name="sow_title"
                type="text"
                value={formState.sow_title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>SOW Detail:</Typography>
              <TextField
                fullWidth
                label="Enter SOW Detail"
                name="sow_detail"
                type="text"
                value={formState.sow_detail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Background Colour:</Typography>
              <TextField
                fullWidth
                // label="Enter Background Colour"
                name="background_color"
                // type="text"
                type="color"
                value={formState.background_color}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Link to='/projects'>
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

export default AddProject;