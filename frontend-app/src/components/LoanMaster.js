import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import LoanTable from "./LoanMasterTable";
import LoanFormModal from "./LoanFormMasterModal";
import axios from "axios";
import CustomButton from "./customButton";
import styles from "./LoanMaster.module.css";
// import "./App.css";

function LoanMaster() {
  const [loans, setLoans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await axios.get("https://localhost:7033/api/LoanCardMasters");
      setLoans(response.data);
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

  const addLoan = async (newLoan) => {
    try {
      await axios.post("https://localhost:7033/api/LoanCardMasters", newLoan);
      await fetchLoans();
    } catch (error) {
      console.error("Error adding loan:", error);
    }
  };

  const editLoan = async (id, updatedLoan) => {
    try {
      await axios.put(`https://localhost:7033/api/LoanCardMasters/${id}`, updatedLoan);
      await fetchLoans();
    } catch (error) {
      console.error("Error editing loan:", error);
    }
  };

  const deleteLoan = async (id) => {
    try {
      await axios.delete(`https://localhost:7033/api/LoanCardMasters/${id}`);
      await fetchLoans();
    } catch (error) {
      console.error("Error deleting loan:", error);
    }
  };

  return (
    <div className="App">
      <Container>
        <h3>| Loan Cards Management System</h3>

        <CustomButton className={styles["btn"]} onClick={openModal}>
          Add New Loan Card
        </CustomButton>
        <br></br>
        <LoanTable loans={loans} editLoan={editLoan} deleteLoan={deleteLoan} />
        <LoanFormModal show={showModal} onHide={closeModal} addLoan={addLoan} />
      </Container>
    </div>
  );
}

export default LoanMaster;
