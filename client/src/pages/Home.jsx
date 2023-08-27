import {Container, ThemeProvider, Button, Typography, Box, Divider, Fab} from "@mui/material"
import {blue} from "@mui/material/colors"
import theme from '../theme';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import AddIcon from "@mui/icons-material/Add";

const Home = () => {

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
      <Header />
      <Container
        sx={{
            width: "100%",
            bgcolor: blue[50], 
            height: "65vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",            
        }}>
        <div> 
            <Box 
            sx={{
                width: "30vw",
                bgcolor: blue[50], 
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between',
            }}
            >
            {[...Array(9)].map((_, index) => (
                <Divider key={index} sx={{ backgroundColor: "#CCC" }} />
            ))}
            </Box>
            <Typography
            variant="columnChartTitle"
            >Planned</Typography>            
        </div>    
        <div> 
            <Box 
            sx={{
                width: "30vw",
                bgcolor: blue[50], 
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between',                
            }}
            >
            {[...Array(9)].map((_, index) => (
                <Divider key={index} sx={{ backgroundColor: "#CCC" }} />
            ))}                
            </Box>
            <Typography
            variant="columnChartTitle"
            >Actual</Typography>            
        </div> 

        </Container>   
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
        variant="contained"
        > Log All </ Button>

{/* //TODO onClick={handleFabClick} */}
        <Fab 
        color="primary"
        >
            <AddIcon />
        </Fab>
        </Container>
      </main>
    </Container>
    <Footer />
  </ThemeProvider>
  );

};


export default Home;
