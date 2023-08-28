import {
    Container,
    ThemeProvider,
    Button,
    Typography,
    Box,
    Divider,
    Fab,
  } from '@mui/material';
  import { blue } from '@mui/material/colors';
  import theme from '../theme';
  import Footer from '../components/Footer/index';
  import Header from '../components/Header/index';
  import AddIcon from '@mui/icons-material/Add';
  
  const Home = () => {
    return (
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            width: { xs: '100%', md: 960, lg: 1280, xl: 1920 },
            bgcolor: blue[50],
            minHeight: '100vh', 
            display: 'flex',
            flexDirection: 'column', 
          }}
        >
          <Header />
          <Container
            sx={{
              flexGrow: 1, 
              bgcolor: blue[50],
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center', 
              paddingTop: '16px', 
              paddingBottom: '32px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                bgcolor: blue[50],
                height: '65vh',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr', 
                gap: '16px', 
              }}
            >
              <div>
                <Box
                  sx={{
                    width: '100%',
                    bgcolor: blue[50],
                    height: '100%', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {[...Array(9)].map((_, index) => (
                    <Divider key={index} sx={{ backgroundColor: '#CCC' }} />
                  ))}
                </Box>
                <Typography variant="columnChartTitle">Planned</Typography>
              </div>
              <div>
                <Box
                  sx={{
                    width: '100%',
                    bgcolor: blue[50],
                    height: '100%', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {[...Array(9)].map((_, index) => (
                    <Divider key={index} sx={{ backgroundColor: '#CCC' }} />
                  ))}
                </Box>
                <Typography variant="columnChartTitle">Actual</Typography>
              </div>
            </Box>
  
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}
            >
              <Button variant="contained">Log All</Button>
              <Fab color="primary">
                <AddIcon />
              </Fab>
            </Container>
          </Container>

        </Container>
        <Footer
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          />
      </ThemeProvider>
    );
  };
  
  export default Home;