import { Container, ThemeProvider, Fab } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardMemberBin from '../components/CardMemberBin/index';
import CardMemberBin1 from '../components/CardMemberBin/z1';
import CardMemberBin2 from '../components/CardMemberBin/z2';
import CardMemberBin3 from '../components/CardMemberBin/z3';
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBERS } from '../utils/queries';
import { Link } from "react-router-dom";

const TeamList = () => {

  const { loading, data } = useQuery(QUERY_TEAMMEMBERS);
  const teamMembers = data?.teamMembers || []

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
        <main>
          <TitleHeader />

          <br></br>
          <br></br>
          <CardMemberBin1
            teamMembers={teamMembers} />
          <br></br>

          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'right',
            }}
          >
            {/* //TODO onClick={handleFabClick} */}
            <Link
              to={'/teammembers/addteammember'}>
              <Fab
                color="primary"
              >
                <AddIcon />
              </Fab>
            </Link>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );

};


export default TeamList;
