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
import background from "./../assets/login-bg.jpg";

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
      await register({
        username,
        password,
        name,
        email,
        gender,
        department,
        designation,
        DOB,
        DOJ,
        empID,
      });
      // setLoginState(true);
      //navigate("/dashboard");
    }
    setValidated(true);
  };

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [department, setdep] = useState("");
  const [designation, setdesignation] = useState("");
  const [DOB, setDOB] = useState(new Date());
  const [DOJ, setDOJ] = useState(new Date());
  const [empID, setID] = useState("");
  const handleIdChange = (value) => {
    setID(value);
  };
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
  const handleGenderChange = (value) => {
    setgender(value);
  };
  const handleDepartmentChange = (value) => {
    setdep(value);
  };
  const handleDesignationChange = (value) => {
    setdesignation(value);
  };
  const handleDOBChange = (value) => {
    setDOB(value);
  };
  const handleDOJChange = (value) => {
    setDOJ(value);
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
    <div
      className={styles["RegisterCard"]}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee ID"
              defaultValue=""
              onChange={(e) => handleIdChange(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee Name"
              defaultValue=""
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee Designation"
              defaultValue=""
              onChange={(e) => handleDesignationChange(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Department</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your department"
              defaultValue=""
              onChange={(e) => handleDepartmentChange(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              required
              type="Date"
              placeholder="Enter Date of Birth"
              defaultValue=""
              onChange={(e) => handleDOBChange(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Date of joining</Form.Label>
            <Form.Control
              required
              type="Date"
              placeholder="Enter Date of joining"
              defaultValue=""
              onChange={(e) => handleDOJChange(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
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

          <Form.Group as={Col} md="6" controlId="validationCustom05">
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
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
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

          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              onChange={(e) => handleGenderChange(e.target.value)}
            >
              <option value="N">Prefer not to say</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <CustomButton className={styles["reg-btn"]} type="submit">
          SIGN UP
        </CustomButton>
      </Form>
    </div>
  );
}
