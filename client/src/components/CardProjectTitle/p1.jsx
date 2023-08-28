import { ThemeProvider, Typography, Avatar, Box } from '@mui/material';
import { indigo } from '@mui/material/colors';
import theme from '../../theme';
import { Link } from 'react-router-dom';

const CardProjectTitle1 = ({ projects }) => {
  return (
    <ThemeProvider theme={theme}>
      {projects.map((project) => (
        <Link
          style={{ color: 'black' }}
          to={`/projects/${project._id}`}
          key={project._id}
        >
          <Box
            // Don't forget to add a unique key
            sx={{
              width: '100%', // Adjust as needed
              maxWidth: 'sm', // Add maxWidth directly to the Box
              bgcolor: project.background_color,
              display: 'flex',
              justifyContent: 'left',
              paddingLeft: 2,
              alignItems: 'center',
              py: 1,
              borderRadius: 3,
              margin: '16px auto', // Add margin to center the content
            }}
          >
            <Avatar
              variant="memberPic"
              alt={project.name}
              src={project.image_link}
              sx={{
                width: 60,
                height: 60,
              }}
            />

            <div>
              <Typography variant="cardLightTitle">{project.name}</Typography>
              <Typography variant="cardLightSubtitle">
                {project.sow_title}
              </Typography>
            </div>
          </Box>
        </Link>
      ))}
    </ThemeProvider>
  );
};

export default CardProjectTitle1;