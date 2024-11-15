

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Images from './Components/Images'
import SignIn  from './Guest/SignIn'
import SignUp  from './Guest/SignUp'
import About  from './Guest/About'
import Home from './Guest/Home'
import Course from './Guest/Course'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Components/Dashboard'

function App() {
 

  return (
    <>
    <Header/>
     
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>

       
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
