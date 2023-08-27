import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import CustomButton from "./customButton";

const ItemFormModal = ({ isEdit = false, show, onHide, addItem, a = "", b = "", c="Select the status", d="Select the category", g="Select the material", f=""}) => {
  const [item_id, setitem_id] = useState(a);
  const [item_description, setitem_description] = useState(b);
  const [item_status, setitem_status] = useState(c);
  const [item_make, setitem_make] = useState(d);
  const [item_category, setitem_category] = useState(g);
  const [item_valuation, setitem_valuation] = useState(f);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      Itemid: item_id,
      ItemDescription: item_description,
      IssueStatus: item_status,
      ItemMake: item_make,
      ItemCategory: item_category,
      ItemValue: item_valuation,
    };
    await addItem(newItem);
    setitem_id(a);
    setitem_description(b);
    setitem_status(c);
    setitem_make(d);
    setitem_category(g);
    setitem_valuation(f);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        {isEdit && <Modal.Title>Edit the Item</Modal.Title>}
        {!isEdit && <Modal.Title>Add New Item</Modal.Title>}
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
              <option value="">Select status</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="item_make">
            <Form.Label>Item Make</Form.Label>
            <Form.Control
              as="select"
              value={item_make}
              onChange={(e) => setitem_make(e.target.value)}
            >
              <option value="">Select the material</option>
              <option value="Wooden">Wooden</option>
              <option value="Plastic">Plastic</option>
              <option value="Glass">Glass</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="item_category">
            <Form.Label>Item category</Form.Label>
            <Form.Control
              as="select"
              value={item_category}
              onChange={(e) => setitem_category(e.target.value)}
            >
              <option value="">Select the category</option>
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
          {isEdit && <CustomButton type="submit">Edit</CustomButton>}
          {!isEdit && <CustomButton type="submit">Add</CustomButton>}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ItemFormModal;
