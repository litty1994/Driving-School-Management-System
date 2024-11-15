import React from 'react'
import Testimonials from './Testimonials'
import Images from '../Components/Images'
import Dashboard from '../Components/Dashboard'
import AdminDashboard from '../Components/Admin/AdminDashboard';

function Home() {
  const userRole = 'student';
  return (
    <>
     <Images/>
    <Testimonials/>
   <AdminDashboard/>
    </>
  )
}

export default Home