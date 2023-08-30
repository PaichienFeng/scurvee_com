import { Container, ThemeProvider, Button, Typography, TextField, Autocomplete, alertTitleClasses } from "@mui/material"
import { blue } from "@mui/material/colors";
import theme from '../theme';
import Footer from '../components/Footer/index';
import FooterNavBar from "../components/FooterNavBar";
import Header from '../components/Header/index';
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TEAMMEMBER } from '../utils/queries';
import { ADD_TEAMTASK } from '../utils/mutations';
import { Link } from "react-router-dom";
import { useState } from "react";

const initialForm = {
  projectId: '',
  actualDuration: 0,
  taskDate: '',
}

const TeamTask = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { loading, data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId }
  })
  const teamMember = teamMemberData?.teamMember || {}
  const [selectedProject, setSelectedProject] = useState(null);

  const [formState, setFormState] = useState(initialForm);
  const [addTeamTask, { error }] = useMutation(ADD_TEAMTASK);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "actualDuration" ? parseFloat(value) : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  };
  const handleProjectChange = (event, newValue) => {
    setSelectedProject(newValue);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState.actualDuration);

    try {
      const { data: teamTaskData } = await addTeamTask({
        variables: {
          "teamMemberId": teamMemberId,
          "projectId": selectedProject ? selectedProject._id : "",
          "actualDuration": formState.actualDuration,
          "taskDate": formState.taskDate
        },
      });


      if (teamTaskData) {
        if (teamTaskData.addTeamTask !== null) {
          alert("You have successfully updated the task!");
          window.location.assign('/');

        } else {
          alert("No task found")
        }
      }
    } catch (error) {
      console.error(error);
    };

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
          <Header teamMember={teamMember} title={teamMember.username} />
          <Typography
          >Date:</Typography>
          <TextField
            name="taskDate"
            type="date"
            // value={formState.task_date}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Project Name:</Typography>
          {teamMember.projects && (
            <Autocomplete
              options={teamMember.projects}
              getOptionLabel={(project) => project.name}
              value={selectedProject}
              onChange={handleProjectChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="projectId"
                  label="Select a project"
                  value={selectedProject ? selectedProject._id : ""}
                />
              )}
            />
          )}
          <br></br>
          <Typography
          >Duration:</Typography>
          <TextField
            label="Enter Duration"
            name="actualDuration"
            type="number"
            // value={formState.plannedDuration}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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
            > Save </ Button>
            <Link
              to={'/'}
            >
              <Button
                variant="contained"
              > Cancel </ Button>
            </Link>
          </Container>
        </form>
      </Container>
      {Auth.getProfile().authenticatedPerson.username === "IL Capo" ?
        <FooterNavBar /> :
        <Footer />
      }
    </ThemeProvider>
  );

};


export default TeamTask;
