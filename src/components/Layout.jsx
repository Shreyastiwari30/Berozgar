import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-15 "> 
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
