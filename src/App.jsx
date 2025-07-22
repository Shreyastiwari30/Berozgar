import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Contacts from './components/Contacts'
import Login from './components/Login'
import Register from './components/Register'
import Gpt from './components/Gpt'

import './App.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,   
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
  {
    path: '/tasks',
    element: <Layout />,   
    children: [
      { path: '/tasks', element: <Tasks /> },
    ],
  },
  {
    path: '/contact',
    element: <Layout />,   
    children: [
      { path: '/contact', element: <Contacts /> },
    ],
  },
  {
    path:'/login',
    element: <Login/>,
    children: [
       { path: '/login' ,element: <Login/> }
    ],
  },
  {
    path: '/register',
    element: <Register/>,
    children:[
      {path:'/register', element:<Register/>}
    ]
  },
  {
    path: '/gpt',
    element: <Gpt/>,
    children:[
      {path:'/gpt', element:<Gpt/>}
    ]
  }
 
])


function App() {
  


  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
