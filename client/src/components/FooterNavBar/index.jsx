import { BottomNavigation, BottomNavigationAction, ThemeProvider, Box } from '@mui/material';
import theme from '../../theme';
import Home from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ProjectIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const FooterNavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          bgcolor: '#ffffff',
          height: '10vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          '@media (min-width: 600px)': {
            justifyContent: 'space-around',
          },
        }}
      >
        <BottomNavigation>
          <Link
          to={'/'}>
          <BottomNavigationAction showLabel={true} label="Home" icon={<Home style={{ fontSize: 30 }} />} />
          </Link>
          <Link
          to={'/teammembers'}>
          <BottomNavigationAction showLabel={true} label="TeamList" icon={<PersonIcon style={{ fontSize: 30 }} />} />
          </Link>
          <Link
          to={'/projects'}>
          <BottomNavigationAction showLabel={true} label="ProjectList" icon={<ProjectIcon style={{ fontSize: 30 }} />} />
          </Link>
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export default FooterNavBar;