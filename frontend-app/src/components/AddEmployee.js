import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './AddEmployee.module.css';
import CustomButton from "./customButton";
const AddEmployee = () => 
{
const [validated, setValidated] = useState(false);

const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("submitting add employee form");
  const form = event.currentTarget;
  // event.preventDefault();
  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
    const data = {
        EmployeeName: name,
        Designation: designation,
        Department: department,
        dateofBirth: DOB,
        dateofJoining: DOJ,
        empId: empID,
        Gender: gender,
    };
const url = 'https://localhost:7033/api/EmployeeMasters';
axios.post(url,data).then((result) =>{
     alert("employee added successfully");
     navigate('/customerMaster');
}).catch((error)=>{
    alert(error);
})
   
  }
  setValidated(true);
};


const [name, setname] = useState("");
const [gender, setgender] = useState("");
const [department, setdep] = useState("");
const [designation, setdesignation] = useState("");
const [DOB, setDOB] = useState(new Date());
const [DOJ, setDOJ] = useState(new Date());
const [empID, setID] = useState("");
const handleIdChange = (value) => {
  setID(value);
};
const handleNameChange = (value) => {
  setname(value);
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

return (
  <div className={styles["form"]}>
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


        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            aria-label="Default select example"
            required
            onChange={(e) => handleGenderChange(e.target.value)}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a option.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <CustomButton  type="submit">
    Add Employee
      </CustomButton>
    </Form>
  </div>

    );
}
export default AddEmployee;
