import { Container, ThemeProvider, Button, Typography, TextField, Autocomplete } from "@mui/material"
import { blue } from "@mui/material/colors";
import theme from '../theme';
import Footer from '../components/Footer/index';
import FooterNavBar from "../components/FooterNavBar";
import Header from '../components/Header/index';
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_TEAMMEMBER } from '../utils/queries'
import { Link } from "react-router-dom";

const initialForm = {
  projectId:'',
  actualDuration: 0,
  taskDate: '',
}

const TeamTask = () => {
  const teamMemberId = Auth.getProfile().authenticatedPerson._id;
  const { loading, data: teamMemberData } = useQuery(QUERY_TEAMMEMBER, {
    variables: { teamMemberId: teamMemberId }
  })
  const teamMember = teamMemberData?.teamMember || {}


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

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const { data: AssignmentData } = await addTeamAssignment({
  //       variables: {
  //         "teamMemberId": teamMemberId,
  //         "projectId":projectId,
  //         "description": formState.description,
  //         "plannedDuration": formState.plannedDuration,
  //         "taskDate": formState.taskDate
  //       },
  //     });

  //     if (AssignmentData) {
  //       alert('You have successfully added the assignment!');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   };

  //   setFormState(initialForm);
  // };
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
          <Autocomplete
            options={teamMember.projects}
            getOptionLabel={(project) => project.name}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} inputProps={{value: project._id, name: projectId}} label="Select a project" />}
          ></Autocomplete>
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
