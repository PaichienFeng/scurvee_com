import React, { useState } from "react";
import {
  Container,
  ThemeProvider,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from "../theme";
import FooterNavBar from "../components/FooterNavBar/index";
import TitleHeader from "../components/TitleHeader/index";
import CardProjectTitle2 from "../components/CardProjectTitle/p2";
import CardMember3 from "../components/CardMember/z3";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TEAMASSIGNMENT } from "../utils/mutations";
import { QUERY_PROJECT, QUERY_TEAMMEMBER } from "../utils/queries";
import Auth from "../utils/auth";

const initialForm = {
  description: "",
  plannedDuration: 0,
  taskDate: "",
};

const TeamAssignment = () => {
  const userId = Auth.getProfile().authenticatedPerson._id;
  const { data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: userId },
  });
  const user = teamMemberData?.teamMember || {};

  const { teamMemberId } = useParams();
  const { projectId } = useParams();
  const { loading: projectLoading, data: projectData } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = projectData?.project || {};

  const teamMember =
    project.teamMembers?.find((member) => member._id === teamMemberId) || {};

  const [formState, setFormState] = useState(initialForm);
  const [addTeamAssignment, { error }] = useMutation(ADD_TEAMASSIGNMENT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "plannedDuration" ? parseFloat(value) : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: AssignmentData } = await addTeamAssignment({
        variables: {
          teamMemberId: teamMemberId,
          projectId: projectId,
          description: formState.description,
          plannedDuration: formState.plannedDuration,
          taskDate: formState.taskDate,
        },
      });

      if (AssignmentData) {
          alert("You have successfully assigned the task!");
          window.location.assign("/projects");
        } else {
          alert("No task found");
        }
    } catch (error) {
      console.error(error);
      alert("Error, duplicate task!");
    }

    setFormState(initialForm);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          position: "relative",
          width: { xs: "100%", md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          minHeight: "95vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
          <TitleHeader teamMember={user} title="TEAM ASSIGNMENT" />

          <Box my={2}>
            <CardProjectTitle2 project={project} />
          </Box>
          <Box my={2}>
            <CardMember3 teamMember={teamMember} />
          </Box>

          <Typography>Date:</Typography>
          <TextField
            name="taskDate"
            type="date"
            onChange={handleChange}
            fullWidth
          />

          <Typography>Task:</Typography>
          <TextField
            label="Enter Task"
            name="description"
            type="text"
            onChange={handleChange}
            fullWidth
          />

          <Typography>Duration:</Typography>
          <TextField
            label="Enter Duration"
            name="plannedDuration"
            type="number"
            onChange={handleChange}
            fullWidth
          />

          <Box mt={2} mb={2}>
            <Container
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "16px",
                backgroundColor: blue[50],
              }}
            >
              <Button type="submit" variant="contained">
                Add
              </Button>
              <Link to={`/projects/${projectId}`}>
                <Button variant="contained">Cancel</Button>
              </Link>
            </Container>
          </Box>
        </form>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default TeamAssignment;
