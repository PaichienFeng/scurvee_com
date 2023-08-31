import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'

// TODO MUI addition
import Test from './pages/Test';
// TODO MUI Close addition
import AddProject from './pages/AddProject';
import AddProjectTeam from './pages/AddProjectTeam';
import AddTeamMember from './pages/AddTeamMember';
import Login from './pages/Login';
import Home from './pages/Home';
import TeamAssignment from './pages/TeamAssignment';
import TeamTask from './pages/TeamTask'
import ProjectDetail from './pages/ProjectDetail';
import ProjectList from './pages/ProjectList';
import TeamList from './pages/TeamList';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Test />
      // },
      {
        index: true,
        element: <Home />
      }, {        
        path: '/login',
        element: <Login />
      }, {        
        path: '/teammembers',
        element: <TeamList />
      },{
        path: '/teammembers/addteammember',
        element: <AddTeamMember />
      }, {        
        path: '/projects',
        element: <ProjectList />
      },{
        path: '/projects/addproject',
        element: <AddProject />
      }, {        
        path: '/projects/:projectId',
        element: <ProjectDetail />
      },{
        path: '/projects/:projectId/addprojectteam',
        element: <AddProjectTeam />
      }, {
        path: '/projects/:projectId/teamassignment/:teamMemberId',
        element: <TeamAssignment />
      }, {
        path: '/teamtask',
        element: <TeamTask />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
