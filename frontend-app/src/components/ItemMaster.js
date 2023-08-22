import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import ItemMasterTable from "./ItemMasterTable";
import ItemFormModal from "./ItemFormMasterModal";
import axios from "axios";
import CustomButton from "./customButton";
import styles from "./ItemMaster.module.css";
// import "./App.css";

function ItemMaster() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("/api/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addItem = async (newItem) => {
    try {
      await axios.post("/api/loans", newItem);
      fetchItems();
    } catch (error) {
      console.error("Error adding loan:", error);
    }
  };

  const editItem = async (id, updatedItem) => {
    try {
      await axios.put(`/api/loans/${id}`, updatedItem);
      fetchItems();
    } catch (error) {
      console.error("Error editing loan:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/loans/${id}`);
      fetchItems();
    } catch (error) {
      console.error("Error deleting loan:", error);
    }
  };

  return (
    <div className="App">
      <Container>
        <h3>Items Management System</h3>

        <CustomButton className={styles["btn"]} onClick={openModal}>
          Add New Item
        </CustomButton>
        <br></br>
        <ItemMasterTable
          items={items}
          editItem={editItem}
          deleteItem={deleteItem}
        />
        <ItemFormModal show={showModal} onHide={closeModal} addItem={addItem} />
      </Container>
    </div>
  );
}

export default ItemMaster;
