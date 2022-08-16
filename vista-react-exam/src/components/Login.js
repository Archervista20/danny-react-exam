import React, { useEffect, useState } from 'react'
import {Form, Button, Row, Col,} from 'react-bootstrap'
import {Label} from 'reactstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


const Login = ({currentStorage}) => {
  const history = useNavigate(); 
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handlerSubmitLogin = async (e) => {
    e.preventDefault();
    // login API call end-point
    await axios.post(`http://localhost/react-exam/login.php`, form,  {
      
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      if (response.data.status === 'failed') {
        alert(response.data.msg);
      
        history("/")  
      } else {
        localStorage.setItem("email", form.email);
        alert(response.data.msg);
        
        window.location.reload()
      }
    })     
  }

  useEffect(()=>{
    
    if (!currentStorage) {
      history('/'); 
    } else {
      
      history('/home'); 
    }
  }, [])

  return (
    <Row >
      <Col></Col>
      <Col>
        <div className="bg-style h-100 m-3 p-3">
          <div className="justify-content-center">
          <h2 className="text-light">Login</h2>
          <Form className="container-fluid mt-5" onSubmit={handlerSubmitLogin}> 
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setForm(form => ({...form, email: e.target.value})) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => { setForm(form => ({...form, password: e.target.value})) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Label className="text-light" check for="exampleCheck mb-3 p-3">Don't have an account? <Link className="ml-2" to='/signup'>Sign Up</Link></Label>
            </Form.Group> 
            <Button variant="primary" className="float-right" type="submit">
              Login
            </Button>
          </Form>
          </div>
        </div>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Login
