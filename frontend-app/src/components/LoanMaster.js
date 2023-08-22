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

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await axios.get("/api/loans");
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
      await axios.post("/api/loans", newLoan);
      fetchLoans();
    } catch (error) {
      console.error("Error adding loan:", error);
    }
  };

  const editLoan = async (id, updatedLoan) => {
    try {
      await axios.put(`/api/loans/${id}`, updatedLoan);
      fetchLoans();
    } catch (error) {
      console.error("Error editing loan:", error);
    }
  };

  const deleteLoan = async (id) => {
    try {
      await axios.delete(`/api/loans/${id}`);
      fetchLoans();
    } catch (error) {
      console.error("Error deleting loan:", error);
    }
  };

  return (
    <div className="App">
      <Container>
        <h3>Loan Cards Management System</h3>

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
