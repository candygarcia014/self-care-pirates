import React, { useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import Api from "../../utils/Api";
import { useHistory } from 'react-router-dom';
const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault()
  Api.login({ 
    username: email,
    password: password,
  }).then(res => {
    console.log(res)
    if(res.data.username){
       localStorage.setItem("user", res.data)
       history.push("/user");
    }
  })}
  return (
    <Form>
      <Row form>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="email" name="email" id="mail" placeholder="Email" onChange = { e => setEmail (e.target.value)} value = {email}/>
    </FormGroup>
    </Row>
    <Row form>
    <FormGroup>
      <Label for="password">Password </Label>
      <Input type="password" name="password" id="password" placeholder="Password 6+ characters" onChange = { e => setPassword (e.target.value)} value = {password}/>
    </FormGroup>
    <Button onClick = {handleSubmit}>Log in</Button>
    </Row>
  </Form>
  );
}
export default Login;

