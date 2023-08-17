import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";

export default function Register(){

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        const data = {
            // username : username,
            password : password,
            Name : name,
            email : email
        };
    const url = 'https://localhost:7033/api/Registrations';
    axios.post(url,data).then((result) =>{
         alert(result.data);
    }).catch((error)=>{
        alert(error);
    })
    }

    setValidated(true);
  };
 
    // const [username, setusername] = useState('');
    const [password, setpassword] = useState(' ');
    const [name, setname] = useState('');
    const [email, setemail] = useState(' ');
    // const handleUserNameChange = (value)=>{
    //     setusername(value);
    // }
    const handlePasswordChange = (value)=>{
        setpassword(value);
    }
    const handleNameChange = (value)=>{
        setname(value);
    }
    const handleEmailChange = (value)=>{
        setemail(value);
    }

    const handleSave = () => {
        const data = {
            // userName : username,
            password : password,
            name : name,
            email : email
        };
    const url = '';
    axios.post(url,data).then((result) =>{
         alert(result.data);
    }).catch((error)=>{
        alert(error);
    })
    }

    return(
        <div className='RegisterCard'>
             <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue=""
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
{/*         
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => handleUserNameChange(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required onChange={(e) => handleEmailChange(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" required onChange={(e) => handlePasswordChange(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
     
      <Button type="submit"  >Submit form</Button>
    </Form>
   
        </div>
    )
}
