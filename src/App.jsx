import React from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import 'remixicon/fonts/remixicon.css'
import AboutUs from './pages/AboutUs'
import CoursesSection from './pages/CourseSection'
import ContactUs from './pages/ContactUs'


const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<AboutUs/>
        },
        {
          path:'/courses',
          element:<CoursesSection/>
        },
        {
          path:'/contact',
          element:<ContactUs/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App
