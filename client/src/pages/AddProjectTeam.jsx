import {
  Container,
  ThemeProvider,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from "../theme";
import FooterNavBar from "../components/FooterNavBar/index";
import TitleHeader from "../components/TitleHeader/index";
import CardMember1 from "../components/CardMember/z1";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PROJECT, QUERY_TEAMMEMBER } from "../utils/queries";
import { ADD_PROJECTTEAM } from "../utils/mutations";
import Auth from "../utils/auth";

const AddProjectTeam = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId },
  });
  const teamMember = teamMemberData?.teamMember || {};

  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = data?.project || {};

  const [addProjectTeam, { error }] = useMutation(ADD_PROJECTTEAM);

  const handleCardClick = async (teamMemberId) => {
    try {
      const { data } = await addProjectTeam({
        variables: {
          projectId: projectId,
          teamMemberId: teamMemberId,
        },
      });
    } catch (error) {
      console.error(error);
    }

    window.location.assign(`/projects/${projectId}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: "100%",
          bgcolor: blue[50],
          minHeight: "95vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <main>
          <TitleHeader teamMember={teamMember} title="ADD PROJECT TEAM" />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardMember1 project={project} onCardClick={handleCardClick} />
            </Grid>
          </Grid>
        </main>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            px: 2,
            pb: 2,
          }}
        >
          <Link to={`/projects/${projectId}`}>
            <Button variant="contained">Cancel</Button>
          </Link>
        </Box>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default AddProjectTeam;
