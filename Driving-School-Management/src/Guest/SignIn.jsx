import React, { useState } from 'react'
import { Col, Row,Form } from 'react-bootstrap'
import {  Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi } from '../services/allApi';


function SignIn() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
  
    email: "",
    password: ""
  })
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userData
    if (!email || !password) {
      toast.warning("Please fill the form completely")

    }
    else {
      const result = await loginApi(userData)
      console.log("login result");
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem("loggedUser", JSON.stringify(result.data.data))//see resnponse in output
        sessionStorage.setItem("token", result.data.token)
        setUserData({

          email: "",
          password: ""
        })
        toast.success("User logged in successfully")
        navigate('/Dashboard')
      }
      else if (result.status === 401) {
        toast.error("Invalid username or password")
      }
      else {
        toast.error("Something happened")
      }



    }
  }
  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className='container w-75'>
      <h5>
        <Link className='text-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }} to={'/'}><i class="fa-solid fa-arrow-left"></i> Back To Home</Link>
      </h5>
      <div className='bg-secondary'>
        <Row>
          <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
            <img src="https://www.bus-tickets.com/imagini/500x650/banner-driver.jpg" width={'70%'} />
          </Col>
          <Col md={6} className='p-5 d-flex justify-content-center'>
            <Form className='w-100'>
           
              <h5 className='text-center text-light'>
               Welcome to Omega Driving School................ </h5>


              <h6 className=' text-center mb-3 mt-3'>Sign In To Your Account</h6>
             
              <div className='mb-3 mt-3'>
                <input type="text" placeholder='Email Id' className='form-control rounded'
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}></input>
              </div>
              <div className='mb-3'>
                <input type="password" placeholder='Password' className='form-control rounded'
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })} ></input>
              </div>
              <div>
                <button className='btn btn-warning w-100 rounded'  onClick={handleLogin}>LOGIN</button>
                <p className='mt-3'>Not Registerer Yet?.... Click here To
                  <Link className='ms-2' style={{ textDecoration: 'none' }} to={'/SignUp'}>Register</Link></p>
              </div>
             
              
              
              
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  </div>
  )
}

export default SignIn