import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import CustomButton from "./customButton";

const ItemFormModal = ({ show, onHide, addItem }) => {
  const [item_id, setitem_id] = useState("");
  const [item_description, setitem_description] = useState("");
  const [item_status, setitem_status] = useState("");
  const [item_make, setitem_make] = useState("");
  const [item_category, setitem_category] = useState("");
  const [item_valuation, setitem_valuation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      item_id,
      item_description,
      item_status,
      item_make,
      item_category,
      item_valuation: parseInt(item_valuation),
    };
    await addItem(newItem);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="item_id">
            <Form.Label>Item ID</Form.Label>
            <Form.Control
              type="text"
              value={item_id}
              onChange={(e) => setitem_id(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="item_description">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              type="text"
              value={item_description}
              onChange={(e) => setitem_description(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="item_status">
            <Form.Label>Item Status</Form.Label>
            <Form.Control
              as="select"
              value={item_status}
              onChange={(e) => setitem_status(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="item_make">
            <Form.Label>Item Make</Form.Label>
            <Form.Control
              as="select"
              value={item_make}
              onChange={(e) => setitem_make(e.target.value)}
            >
              <option value="Wooden">Wooden</option>
              <option value="Plastic">Plastic</option>
              <option value="Glass">Glass</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="item_category">
            <Form.Label>item_category</Form.Label>
            <Form.Control
              as="select"
              value={item_category}
              onChange={(e) => setitem_category(e.target.value)}
            >
              <option value="Furniture">Furniture</option>
              <option value="Crockery">Crockery</option>
              <option value="Stationary">Stationary</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="item_valuation">
            <Form.Label>Item Value</Form.Label>
            <Form.Control
              type="number"
              value={item_valuation}
              onChange={(e) => setitem_valuation(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <CustomButton type="submit">Add</CustomButton>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ItemFormModal;
