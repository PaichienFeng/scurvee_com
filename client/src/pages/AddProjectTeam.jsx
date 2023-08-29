import {Container, ThemeProvider, Button} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';
// import CardMember from '../components/CardMember/index';
import CardMember1 from '../components/CardMember/z1';
// import CardMember2 from '../components/CardMember/z2';
// import CardMember3 from '../components/CardMember/z3';
import { Link, useParams, useNavigate,} from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';
import {ADD_PROJECTTEAM} from '../utils/mutations';


const AddProjectTeam = () => {
  const {projectId}= useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });
  const project = data?.project || {}
  const navigate = useNavigate();

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
      <TitleHeader />

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
