import React,{useState, useEffect,Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomButton from "./customButton";



const EditEmployeeData = (props) => {
const [name, setname] = useState("");
const [gender, setgender] = useState("");
const [department, setdep] = useState("");
const [designation, setdesignation] = useState("");
const [DOB, setDOB] = useState("");
const [DOJ, setDOJ] = useState("");
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

  const fetchdata = (empId) =>{
    axios.get("" + empId).then((response) => {
        console.log(response.data);
        setID(response.data.employeeId);
        setname(response.data.employeeName);
        setgender(response.data.designation);
        setdep(response.data.department);
        setdesignation(response.data.gender);
        setDOB(response.data.dateOfBirth);
        setDOJ(response.data.dateOfJoining);

    }).catch(error => {
        alert(error);
    })
  }
 useEffect(()=>{
    fetchdata(props.employeeId)
 }, []);

 function handleLogin(e){
    e.preventDefault();
    props.toggle();
 }

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
         name: name,
         designation: designation,
         department: department,
         dateofBirth: DOB,
         dateofJoining: DOJ,
         empId: empID,
         Gender: gender,
     };
 const putUrl = 'https://localhost:7033/api/Registrations';
 axios.put(putUrl,data).then((result) =>{
      alert("employee editted successfully");
    //   navigate('/customerMaster');
    window.location.reload();
 }).catch((error)=>{
     alert(error);
    })
   
}
setValidated(true);
};

    return (
        <div>
        <Form noValidate validated={validated} onSubmit={handleLogin}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Employee ID"
                value={empID}
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
                value={name}
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
                value={designation}
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
                value={department}
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
               value={DOB}
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
                value={DOJ}
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
                value={gender}
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
          <CustomButton  type="submit" onClick={handleSubmit}>
        Edit
          </CustomButton>

        </Form>
        <CustomButton  type="submit" onClick={props.toggle}>
        Close
          </CustomButton>
      </div>  
    );
}

export default EditEmployeeData;
