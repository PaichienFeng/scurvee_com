import { ThemeProvider, Typography, Box } from "@mui/material"
// import {blue} from "@mui/material/colors"
import theme from '../../theme';

const defaultDate = () => {

  return (
  <ThemeProvider theme={theme}>
      <Box
            sx={{ 
                width: { xs: 400, md: 960, lg: 1280, xl: 1920},
                bgcolor: "blue[50]", 
                height: "10vh",
                display: "flex",
                color: blue[700],
                justifyContent: "left",
                py: 2,
              }}
      >
        <div>
            {/* <Typography 
                variant="pageTitle"
            >Member Name
            </Typography> */}
            <Typography 
                variant="date"       
            >Sunday, 27 August 2023
            </Typography>        
        </div>
      </Box>
  </ThemeProvider>
  );

};



// class defaultDate extends React.components{


// constructor() {
//     super();
//     this.state={date1:new Date().toISOString()};
// }

// render() {
// return(
//     <div>
//         <input type="date" type="hidden" value={this.state.date1} />
//         <hr />
//         <Typography 
//         >{this.state.date1}</Typography>
//     </div>
//     )
// }
// }

export default defaultDate