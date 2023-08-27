import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./../view/login.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./register";
import { useContext, useState } from "react";
import axios from "axios";
import CustomButton from "./customButton.js";
import { AuthContext } from "../context/auth";
import background from "./../assets/login-bg.jpg";

export default function Login() {
  const { logIn } = useContext(AuthContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [employeeId, setempid] = useState("");
  const handleUsernameChange = (value) => {
    setusername(value);
  };
  const handlePasswordChange = (value) => {
    setpassword(value);
  };
  const handleempidChange = (value) => {
    setempid(value);
  }
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleSave = async (event) => {
    event.preventDefault();
    await logIn(username, password,employeeId);
    //navigate("/dashboard");
  };

  return (
    <div
      className="LoginCard"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter employee id"
            onChange={(e) => handleempidChange(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <CustomButton className="login-btn" type="submit">
          SIGN IN
        </CustomButton>
        <br></br>
        <h6 className="divider">Don't have an account?</h6>
        <br></br>
        <CustomButton
          type="button"
          className="register-btn"
          onClick={navigateRegister}
        >
          CREATE ACCOUNT
        </CustomButton>
        {/* <Link to={"/AdminDashboard"}>Admin Login</Link> */}
      </Form>
    </div>
  );
}
