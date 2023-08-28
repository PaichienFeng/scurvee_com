import { Container, ThemeProvider, Button, Typography, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from '../theme';
import FooterNavBar from '../components/FooterNavBar/index';
import TitleHeader from '../components/TitleHeader/index';

const AdminTask = () => {
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
          <TitleHeader />
          <Container
            sx={{
              flexGrow: 1,
              bgcolor: blue[50],
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              padding: "16px",
            }}
          >
            <Typography>Date:</Typography>
            <TextField label="Enter Date" />
            <br /><br />
            <Typography>Project Name:</Typography>
            <TextField label="Enter Project Name" />
            <br /><br />
            <Typography>Duration:</Typography>
            <TextField label="Enter Duration" />
            <br /><br />
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Button variant="contained">Save</Button>
              <Button variant="contained">Cancel</Button>
            </Container>
          </Container>
        </main>
      </Container>
      <FooterNavBar />
    </ThemeProvider>
  );
};

export default AdminTask;
