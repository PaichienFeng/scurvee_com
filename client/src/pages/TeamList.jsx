import { Container, ThemeProvider, Fab } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
import CardMemberBin1 from '../components/CardMemberBin/z1';
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBERS, QUERY_TEAMMEMBER } from '../utils/queries';
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const TeamList = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId }
  });
  const teamMember = teamMemberData?.teamMember || {};

  const { loading, data } = useQuery(QUERY_TEAMMEMBERS);
  const teamMembers = data?.teamMembers || []

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
          <TitleHeader teamMember={teamMember} title="TEAM LIST" />
          <br />
          <br />
          <CardMemberBin1 teamMembers={teamMembers} />
        </main>
        <Container
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: 2,
          }}
        >
          <Link to={'/teammembers/addteammember'}>
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

export default TeamList;