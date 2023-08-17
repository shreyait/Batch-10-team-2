import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./register.module.css";
import CustomButton from "./customButton";
import { AuthContext } from "../context/auth";

export default function Register() {
  const { isLoggedIn, register, setLoginState } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting register form");
    const form = event.currentTarget;
   // event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      await register({ username, password, name, email });
      // setLoginState(true);
      //navigate("/dashboard");
    }
    setValidated(true);
  };

  const [username, setusername] = useState("");
  const [password, setpassword] = useState(" ");
  const [name, setname] = useState("");
  const [email, setemail] = useState(" ");
  const handleUserNameChange = (value) => {
    setusername(value);
  };
  const handlePasswordChange = (value) => {
    setpassword(value);
  };
  const handleNameChange = (value) => {
    setname(value);
  };
  const handleEmailChange = (value) => {
    setemail(value);
  };

  // const handleSave = () => {
  //   const data = {
  //     userName: username,
  //     password: password,
  //     name: name,
  //     email: email,
  //   };
  //   const url = "";
  //   axios
  //     .post(url, data)
  //     .then((result) => {
  //       alert(result.data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };

  return (
    <div className={styles["RegisterCard"]}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group as={Col} controlId="validationCustom01">
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

        <Form.Group as={Col} controlId="validationCustomUsername">
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

        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom05">
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
        <br></br>
        <CustomButton type="submit">Sign up</CustomButton>
      </Form>
    </div>
  );
}
