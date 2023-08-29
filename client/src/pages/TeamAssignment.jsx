import { Container, ThemeProvider, Button, Typography, TextField } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardMember from '../components/CardMember/index';
// import CardMember1 from '../components/CardMember/z1';
import CardProjectTitle2 from '../components/CardProjectTitle/p2';
import CardMember3 from '../components/CardMember/z3';
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TEAMASSIGNMENT } from '../utils/mutations';
import { QUERY_PROJECT, QUERY_TEAMMEMBER } from '../utils/queries';
import { useState } from "react";

const initialForm = {
  description: '',
  planned_duration: 0,
  task_date: '',
}

const TeamAssignment = () => {
  const { teamMemberId } = useParams();
  const { projectId } = useParams();
  const { loading: projectLoading, data: projectData } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = projectData?.project || {};

  const { loading, data } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId },
  });
  const teamMember = data?.teamMember || {};

  const [formState, setFormState] = useState(initialForm);
  const [addTeamAssignment, { error }] = useMutation(ADD_TEAMASSIGNMENT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "planned_duration" ? parseFloat(value) : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
    console.log(formState)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addTeamAssignment({
        variables: { teamMemberId, projectId, ...formState },
      });

    } catch (e) {
      console.error(e);
    };

    setFormState(initialForm);
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
          <TitleHeader />

          {/* <br></br>
        <br></br>
        <CardMember1 /> */}
          <br></br>
          <CardProjectTitle2 project={project} />
          <br></br>
          <CardMember3 teamMember={teamMember} />
          <br></br>
          <Typography
          >Date:</Typography>
          <TextField
            name="task_date"
            type="date"
            value={formState.task_date}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Task:</Typography>
          <TextField
            label="Enter Task"
            name="description"
            type="text"
            value={formState.description}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Typography
          >Duration:</Typography>
          <TextField
            label="Enter Duration"
            name="planned_duration"
            type="number"
            value={formState.planned_duration}
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
            <Link
              to={`/projects/${projectId}`}>
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


export default TeamAssignment;
