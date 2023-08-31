import {Container, ThemeProvider, Button} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardMember from '../components/CardMember/index';
import CardMember1 from '../components/CardMember/z1';
// import CardMember2 from '../components/CardMember/z2';
// import CardMember3 from '../components/CardMember/z3';
import { Link, useParams} from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PROJECT, QUERY_TEAMMEMBER } from '../utils/queries';
import {ADD_PROJECTTEAM} from '../utils/mutations';
import Auth from "../utils/auth";


const AddProjectTeam = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const {data:teamMemberData} = useQuery(QUERY_TEAMMEMBER,{
    variables:{teamMemberId: teamMemberId}
  })
  const teamMember= teamMemberData?.teamMember||{}

  const {projectId}= useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = data?.project || {}

  const [addProjectTeam, {error}]= useMutation(ADD_PROJECTTEAM);

  const handleCardClick = async (teamMemberId)=> {

    try {
      const {data} = await addProjectTeam({
        variables: {
          projectId: projectId,
          teamMemberId: teamMemberId
        }
      })
    } catch (error) {
      console.error(error);
    };

    window.location.assign(`/projects/${projectId}`);

  }

  return (
  <ThemeProvider theme={theme}>

    <Container 
      sx={{ 
        width: { xs: 400, md: 960, lg: 1280, xl: 1920},
        bgcolor: blue[50], 
        height: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
      }}
    >
      <main>
      <TitleHeader teamMember={teamMember} title="ADD PROJECT TEAM"/>

        <br></br>
        <br></br>
        <CardMember1 
        project={project}
        onCardClick={handleCardClick}/>
                           
        <Container 
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-between',  
        }}
        >
        {/* <Button 
        variant="contained"
        > Add </ Button> */}
        <Link to={`/projects/${projectId}`}>
        <Button 
        variant="contained"
        > Cancel </ Button>
        </Link>
        </Container>
      </main>
    </Container>
    <FooterNavBar />
  </ThemeProvider>
  );

};


export default AddProjectTeam;
