import React, { useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Signup.css';
import Api from "../../utils/Api"

const Signup = (props) => {
  const [firstName, setFirstName] = useState("")
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
            <Input type="LastName" name="LastName" id="LastName" placeholder="Last Name" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="Email" id="Email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password </Label>
        <Input type="password" name="password" id="password" placeholder="Password"/>
      </FormGroup>
      <Row form>
        <Col>
          <FormGroup>
            <Label for="UserName">User Name</Label>
            <Input type="text" name="UserName" id="User Name"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
  );
}

export default Signup;