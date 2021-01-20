import React, { useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import Api from "../../utils/Api";

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="mail" placeholder="Email" onChange = { e => setEmail (e.target.value)} value = {email}/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Password" onChange = { e => setPassword (e.target.value)} value = {password}/>
      </FormGroup>
      <Row form>
      </Row>
  
      <Button>Log in</Button>
    </Form>
  );
}

export default Login;