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
      const response = await axios.get("https://localhost:7033/api/ItemDBs");
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
      await axios.post("https://localhost:7033/api/ItemDBs", newItem);
      await fetchItems();
    } catch (error) {
      console.error("Error adding loan:", error);
    }
  };

  const editItem = async (id, updatedItem) => {
    try {
      await axios.put(`https://localhost:7033/api/ItemDBs/${id}`, updatedItem);
      await fetchItems();
    } catch (error) {
      console.error("Error editing loan:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://localhost:7033/api/ItemDBs/${id}`);
      await fetchItems();
    } catch (error) {
      console.error("Error deleting loan:", error);
    }
  };

  return (
    <div className="App">
      <Container>
        <h3>| Items Management System</h3>

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
