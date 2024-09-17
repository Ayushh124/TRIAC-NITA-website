import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Gallery from './pages/Gallery.jsx'
import Projects from './pages/Projects.jsx'
import FacultyPage from './pages/Faculty.jsx'
import EventsPage from './pages/Events.jsx'
import DownloadPage from './pages/DownloadPage.jsx'
import TeamsPage from './pages/TeamsPage.jsx'
import NotFound from './pages/NotFoundPage.jsx'


const router= createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/events",
        element: <EventsPage/>
      },
    
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/teams",
        element: <TeamsPage/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/downloads",
        element: <DownloadPage/>
      },
      {
        path: "/faculty",
        element: <FacultyPage/>
      }
     
    ]
  },
  {
    path: "*", // Wildcard route for 404 page
    element: <NotFound />, // Renders the 404 page
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
