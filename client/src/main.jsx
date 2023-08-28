import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'

// TODO MUI addition
// import Test from './pages/Test';
// TODO MUI Close addition
import AddProject from './pages/AddProject';
import AddProjectTeam from './pages/AddProjectTeam';
import AddTeamMember from './pages/AddTeamMember';
import Login from './pages/Login';
import Home from './pages/Home';
import TeamAssignment from './pages/TeamAssignment';
import TeamTask from './pages/TeamTask'
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      // TODO MUI
      // {
      //   index: true,
      //   element: <Test />
      // },
      // // TODO Close MUI
      {
        index: true,
        element: <Home />
      }, {        
        path: '/login',
        element: <Login />
      }, {
        path: '/teammembers/addteammember',
        element: <AddTeamMember />
      }, {
        path: '/projects/addproject',
        element: <AddProject />
      }, {
        path: '/projects/:projectId/addprojectteam',
        element: <AddProjectTeam />
      }, {
        path: '/projects/:projectId/teamassignment',
        element: <TeamAssignment />
      }, {
        path: '/summary/teamtask',
        element: <TeamTask />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
