import { Container, ThemeProvider, Button, Typography, TextField, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_PROJECT } from '../utils/mutations';

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
  const [formState, setFormState] = useState(initialForm);
  const [addProject, { error, data }] = useMutation(ADD_PROJECT);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === 'budget' ? parseFloat(value) : value;
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
    }

    setFormState(initialForm);
    navigate('/projects');
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
            <Grid item xs={12} md={6}>
              <Typography>Project Name:</Typography>
              <TextField
                label="Enter Project Name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Client:</Typography>
              <TextField
                label="Enter Client"
                name="client"
                type="text"
                value={formState.client}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Budget:</Typography>
              <TextField
                label="Enter Budget"
                name="budget"
                type="text"
                value={formState.budget}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Image Link:</Typography>
              <TextField
                label="Enter Image Link"
                name="image_link"
                type="text"
                value={formState.image_link}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>SOW Title:</Typography>
              <TextField
                label="Enter SOW Title"
                name="sow_title"
                type="text"
                value={formState.sow_title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>SOW Detail:</Typography>
              <TextField
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
                label="Enter Background Colour"
                name="background_color"
                type="text"
                value={formState.background_color}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Container
            sx={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button type="submit" variant="contained">
              Add
            </Button>
            <Link to="/projects">
              <Button variant="contained">Cancel</Button>
            </Link>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default AddProject;