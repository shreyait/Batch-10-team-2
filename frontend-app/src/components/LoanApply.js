import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import styles from "./LoanApply.module.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "./customButton";

const LoanApply = () => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else {
        const data = {
            EmpId: EmpId,
            ICategory: ICategory,
            IDes: IDes,
            IMake:IMake,
            IValue:IValue
        };
        const url = "https://localhost:7033/api/LoanLogger";
        axios
          .post(url, data)
          .then((result) => {
            alert("succesfully applied for loan");
            navigate("/DisplayLoanCards");
          })
          .catch((error) => {
            alert(error);
          });
      }
      setValidated(true);
    };
    const navigate = useNavigate();
    const [EmpId, setId] = useState("");
    const [ICategory, setCategory] = useState(" ");
    const [IDes, setDes] = useState(" ");
    const [IMake,setMake] = useState(" ");
    const [IValue,setIvalue] = useState(" ");
    const handleIdChange = (value) => {
        setId(value);
    }
    const handleCategoryChange =(value)=>{
        setCategory(value);
    }
    const handleDesChange = (value) => {
      setDes(value);
    };
    const handleItemMakeChange = (value) => {
        setMake(value);
      };
    const handleValueChange= (value) => {
        setIvalue(value);
      };
    return (
        <div className={styles["Loan"]}>
             <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please enter your Employee id"
            defaultValue=""
            onChange={(e) => handleIdChange(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Item Category</Form.Label>
          <Form.Select aria-label="Default select example" required onChange={(e) => handleCategoryChange(e.target.value)}>
      <option value="Furniture">Furniture</option>
      <option value="Stationary">Stationary</option>
      <option value="Crockery">Crockery</option>
    </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Item Description</Form.Label>
          <Form.Control type="text" placeholder="Description of item" required onChange={(e) => handleDesChange(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Item value</Form.Label>
          <Form.Control type="number" placeholder="Enter Item value" required onChange={(e) => handleValueChange(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Item Make</Form.Label>
          <Form.Select aria-label="Default select example" required onChange={(e) => handleItemMakeChange(e.target.value)}>
      <option value="Wodden">Wodden</option>
      <option value="Glass">Glass</option>
      <option value="Plastic">Plastic</option>
    </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <div >
      <CustomButton type="submit" style={{marginLeft : "40%",marginTop: "2%"}}>Apply</CustomButton>
      </div>
    </Form>
        </div>
    );
}

export default LoanApply;
