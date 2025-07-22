import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import About from './components/About'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Contacts from './components/Contacts'
import Login from './components/Login'
import Register from './components/Register'
import Gpt from './components/Gpt'
import { motion,AnimatePresence } from "framer-motion";

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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500); // 2.5s intro
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
   <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-800 z-[9999]"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-white text-5xl font-bold"
              initial={{ y: 0 }}
              animate={{ y: -50 }}
              transition={{ duration: 1 }}
            >
              Welcome to Berozgaar.com
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <RouterProvider router={router} />
          
        </motion.div>
      )}
      
    </>
  )
}

export default App
