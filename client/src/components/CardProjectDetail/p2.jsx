import {
    ThemeProvider,
    Typography,
    Avatar,
    Box,
    Fab,
  } from "@mui/material";
  import theme from "../../theme";
  import InsightsIcon from "@mui/icons-material/Insights";
  
  const CardProjectDetail2 = ({ project }) => {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
            bgcolor: project.background_color,
            maxWidth: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            paddingLeft: 2,
            py: 1,
            paddingRight: 2,
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="memberPic"
              alt={project.name}
              src={project.image_link}
              sx={{
                width: 60,
                height: 60,
                marginRight: 2,
              }}
            />
            <Fab color="primary">
              <InsightsIcon />
            </Fab>
          </Box>
  
          <div>
            <Typography variant="cardLightTitle">{project.name}</Typography>
            <Typography variant="cardLightTitleL1">
              Value: ${project.budget}
            </Typography>
          </div>
          <div>
            <Typography variant="cardLightSubtitle">{project.sow_title}</Typography>
            <Typography sx={{ whiteSpace: "pre-line" }} variant="cardLightSubtitle">
              {project.sow_detail}
            </Typography>
          </div>
        </Box>
      </ThemeProvider>
    );
  };
  
  export default CardProjectDetail2;
  