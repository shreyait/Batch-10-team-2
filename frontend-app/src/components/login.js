import "./../view/login.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./register";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomButton from "./customButton.js";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = {
        userName: username,
        password: password
      };
      const url = "https://localhost:7033/api/LoanLogger";
      axios
        .post(url, data)
        .then((result) => {
          navigate("/dashboard");
        })
        .catch((error) => {
          alert(error);
        });
    }

    setValidated(true);
  };

  const [username, setusername] = useState("");
  const [password, setpassword] = useState(" ");
  const handleUserNameChange = (value) => {
    setusername(value);
  };
  const handlePasswordChange = (value) => {
    setpassword(value);
  };
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };

  return (
  <div className="LoginCard">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
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
          </Form.Group>
          </Row>
        <Row className="mb-3">

          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3"></Row>
        <div style={{marginLeft : "35%"}}>
        <CustomButton type="submit" >Login</CustomButton>
        <span style={{marginLeft : "25%"}}>
        <CustomButton type="submit" onClick={navigateRegister} >
          Sign up!
        </CustomButton>
        </span>
        </div>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        
      </Form>
    </div>

  );
}
