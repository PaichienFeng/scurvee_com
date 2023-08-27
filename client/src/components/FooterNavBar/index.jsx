import { BottomNavigation, BottomNavigationAction, ThemeProvider, Box } from "@mui/material"
import theme from '../../theme';
import Home from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import ProjectIcon from "@mui/icons-material/Assignment"

const FooterNavBar = () => {

  return (
  <ThemeProvider theme={theme}>
      <Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: "#ffffff", 
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-evenly',
              }}
      >
            <BottomNavigation
            >
                <BottomNavigationAction label="Home" icon={<Home style={{ fontSize: 30}}/>} />
                <BottomNavigationAction label="TeamList" icon={<PersonIcon style={{ fontSize: 30}}/>} />
                <BottomNavigationAction label="ProjectList" icon={<ProjectIcon style={{ fontSize: 30}}/>} />
            </BottomNavigation>
      </Box>
  </ThemeProvider>
  );

};

export default FooterNavBar;
