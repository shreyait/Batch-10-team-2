import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import CustomButton from "./customButton";

const LoanFormModal = ({ isEdit = false, show, onHide, addLoan, initialloanid = "", initialloanType = "Select the type", initDuration = "" }) => {
  const [loanid, setloanid] = useState(initialloanid);
  const [loanType, setLoanType] = useState(initialloanType);
  const [duration, setDuration] = useState(initDuration);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLoan = {
      Loanid: loanid,
      LoanType: loanType,
      Duration: duration,
    };
    await addLoan(newLoan);
    setloanid(initialloanid);
    setLoanType(initialloanType);
    setDuration(initDuration);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        {isEdit && <Modal.Title>Edit the Loan Card</Modal.Title>}
        {!isEdit && <Modal.Title>Add New Loan Card</Modal.Title>}
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loanid">
            <Form.Label>Loan ID</Form.Label>
            <Form.Control
              type="text"
              value={loanid}
              onChange={(e) => setloanid(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="loanType">
            <Form.Label>Loan Type</Form.Label>
            <Form.Control
              as="select"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="">Select the type</option>
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
          {isEdit && <CustomButton type="submit">Edit</CustomButton>}
          {!isEdit && <CustomButton type="submit">Add</CustomButton>}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoanFormModal;
