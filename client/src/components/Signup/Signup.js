import React, { useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Signup.css';
import Api from "../../utils/Api"

const Signup = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
  Api.signup({ 
    firstName: firstName, 
    lastName: lastName,
    email: email,
    password: password,
    username: userName
  }).then(res => {console.log(res)}) 
  }

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="FirstName">First Name</Label>
            <Input type="FirstName" name="FirstName" id="FirstName" placeholder="First Name" onChange = { e => setFirstName (e.target.value)} value = {firstName}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="LastName">Last Name</Label>
            <Input type="LastName" name="LastName" id="LastName" placeholder="Last Name" onChange = { e => setLastName (e.target.value)} value = {lastName} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="mail" placeholder="Email" onChange = { e => setEmail (e.target.value)} value = {email}/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password </Label>
        <Input type="password" name="password" id="password" placeholder="Password 6+ characters" onChange = { e => setPassword (e.target.value)} value = {password}/>
      </FormGroup>
      <Row form>
        <Col>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input type="text" name="userName" id="User Name" placeholder="Username 4+ characters" onChange = { e => setUserName (e.target.value)} value = {userName}/>
          </FormGroup>
        </Col>
      </Row>
      <Button onClick = {handleSubmit}>Sign up</Button>
    </Form>
  );
}

export default Signup;