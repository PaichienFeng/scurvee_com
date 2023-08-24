import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
// import AddTeamMember from './pages/AddTeamMember.jsx';
// import Login from './pages/Login';
// import ProjectDetail from './pages/ProjectDetail';
// import ProjectList from './pages/ProjectList';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />}
      // }, {
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <AddTeamMember />
      // }, {
      //   path: '/me',
      //   element: <ProjectList />
      // }, {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }, {
      //   path: '/thoughts/:thoughtId',
      //   element: <ProjectDetail />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
