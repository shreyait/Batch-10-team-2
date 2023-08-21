import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import CustomButton from "./customButton";

const LoanFormModal = ({ show, onHide, addLoan }) => {
  const [loanId, setLoanId] = useState("");
  const [loanType, setLoanType] = useState("Furniture");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLoan = {
      loanId,
      loanType,
      duration: parseInt(duration),
    };
    await addLoan(newLoan);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Loan Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loanId">
            <Form.Label>Loan ID</Form.Label>
            <Form.Control
              type="text"
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="loanType">
            <Form.Label>Loan Type</Form.Label>
            <Form.Control
              as="select"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="Furniture">Furniture</option>
              <option value="Crockery">Crockery</option>
              <option value="Stationary">Stationary</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <CustomButton type="submit">Add</CustomButton>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoanFormModal;
