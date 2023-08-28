import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// TODO Material UI
import { Container, ThemeProvider, Button, Typography, TextField } from "@mui/material"
import { blue } from "@mui/material/colors"
import theme from '../theme';
import Footer from '../components/Footer/index';
// TODO Material UI End

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      alert('Invalid Email or Password')
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (

    // TODO Material UI 
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: { xs: 400, md: 960, lg: 1280, xl: 1920 },
          bgcolor: blue[50],
          height: "90vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          py: 12,
          m: 0.1,
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Typography
          >Email</Typography>
          <TextField
            label="Enter email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography
          >Password</Typography>

          <TextField
            label="Enter password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          ></TextField>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Button
            variant="contained"
            type='submit'
          > Login </ Button>
        </form>
      </Container>
      <Footer />
    </ThemeProvider>
  );

};
// TODO Material UI End

//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Login</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

export default Login;
