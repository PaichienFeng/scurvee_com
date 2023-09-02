import { Container, ThemeProvider, Fab, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardProjectTitle1 from '../components/CardProjectTitle/p1';
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS, QUERY_TEAMMEMBER } from '../utils/queries'
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const ProjectList = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId }
  });
  const teamMember = teamMemberData?.teamMember || {};

  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: "100%",
          bgcolor: blue[50],
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main>
          <TitleHeader teamMember={teamMember} title="PROJECT LIST" />
          <br />
          <br />
          <CardProjectTitle1 projects={projects} />
        </main>
        <Container
          sx={{
            mt: "auto", // This pushes the button to the bottom
            display: "flex",
            justifyContent: "flex-end", // Align the button to the right
            paddingBottom: 2, // Add some padding to separate from the bottom
          }}
        >
          <Link to="/projects/addproject">
            <Fab color="primary">
              <AddIcon />
            </Fab>
          </Link>
        </Container>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default ProjectList;