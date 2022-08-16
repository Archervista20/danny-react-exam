import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Row, Col, Label} from 'reactstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  let history = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    retype_password: ''
  })

  const hadlerFormSumbit = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost/react-exam/registration.php`, form,  {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      if (response.data.status === 'failed') {
        alert(response.data.msg);
        history("/signup")  
      } else {
        alert(response.data.msg);
        history("/")
      }
    });

}

  return (
    <Row>
      <Col></Col>
      <Col>
        <div className="bg-style h-100 m-3 p-3">
          <div className="justify-content-center">
          <h2 className="text-light">Register an account</h2>
          <Form onSubmit={hadlerFormSumbit} className="container-fluid mt-5"> 
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Email address</Form.Label>
              <Form.Control type="email" onChange={(e) => { setForm(form => ({...form, email: e.target.value})) }} placeholder="Enter email" />
              <Form.Text className="text-light"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control type="password" onChange={(e) => { setForm(form => ({...form, password: e.target.value})) }} placeholder="Password" />
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label className="text-light mb-3">Confirm Password</Form.Label>
              <Form.Control type="password" onChange={(e) => { setForm(form => ({...form, retype_password: e.target.value})) }} placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Label className="text-light" check for="exampleCheck mb-3 p-3">Already have an account? <Link className="ml-2" to='/'>Login</Link></Label>
            </Form.Group> 
            <Button variant="primary" className="float-right" type="submit">
              Register
            </Button>
          </Form>
          </div>
        </div>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Signup
