import React, { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const navigate = useNavigate()//use navigate hook used to redirect to a particular path
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.warning("Please fill the form completely")
    }
    else {
      const result = await registerApi(userData)
      if (result.status === 200) {
        //tostify implement
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        toast.success(`${username} registered successfully`)
        //navigate to login aftr successfull registration
        navigate('/')


      }
      else if (result.status == 400) {

        toast.error(result.response.data)

      }
      else {
        toast.error("something happened")
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
                  Wants to join????</h5>


                <h6 className=' text-center mb-3 mt-3'>Sign Up To Your Account</h6>
                <input type="text" className='form-control rounded' placeholder='Name'
                  value={userData.username}
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}>

                </input>
                <div className='mb-3 mt-3'>
                  <input type="text" placeholder='Email Id' className='form-control rounded'
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}></input>
                </div>
                <div className='mb-3'>
                  <input type="password" placeholder='Password' className='form-control rounded'
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}></input>
                </div>
                <div>
                  <button className='btn btn-warning w-100 rounded' onClick={handleRegister} >REGISTER</button>
                  <p className='mt-3'>Already a User? Click here To
                    <Link className='ms-2' style={{ textDecoration: 'none' }} to={'/SignIn'}>Login</Link></p>
                </div>




              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default SignUp