import { Container, ThemeProvider, Button, Typography, TextField } from "@mui/material"
import { blue } from "@mui/material/colors"
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
}
const AddProject = () => {

  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const {loading, data:teamMemberData} = useQuery(QUERY_TEAMMEMBER,{
    variables:{teamMemberId: teamMemberId}
  })
  const teamMember= teamMemberData?.teamMember||{}

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
    };

    setFormState(initialForm);
    window.location.assign(`/projects`);
    
  };
  return (
    <ThemeProvider theme={theme}>

      <Container
        sx={{
          width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          height: "90vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <TitleHeader 
          teamMember={teamMember}
          title="ADD PROJECT"/>
          <Typography
          >Project Name:</Typography>
          <TextField
            label="Enter Project Name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Client:</Typography>
          <TextField
            label="Enter Client"
            name="client"
            type="text"
            value={formState.client}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Budget:</Typography>
          <TextField
            label="Enter Budget"
            name="budget"
            type="text"
            value={formState.budget}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Image Link:</Typography>
          <TextField
            label="Enter Image Link"
            name="image_link"
            type="text"
            value={formState.image_link}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >SOW Title:</Typography>
          <TextField
            label="Enter SOW Title"
            name="sow_title"
            type="text"
            value={formState.sow_title}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >SOW Detail:</Typography>
          <TextField
            label="Enter SOW Detail"
            name="sow_detail"
            type="text"
            value={formState.sow_detail}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Background Colour:</Typography>
          <TextField
            label="Enter Background Colour"
            name="background_color"
            type="text"
            value={formState.background_color}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <br></br>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'space-between',
            }}
          >
            <Button
              type="submit"
              variant="contained"
            > Add </ Button>
            <Link to='/projects'>
              <Button
                variant="contained"
              > Cancel </ Button>
            </Link>
          </Container>
        </form>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );

};


export default AddProject;
