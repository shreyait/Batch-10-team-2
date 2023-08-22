import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styles from "./AdminDashboard.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomButton from "./customButton";
import CustomerData from "./../assets/CustomerData.jpg";
import LoanData from "./../assets/LoanData.jpg";
import ItemData from "./../assets/ItemData.jpg";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleCustomerMaster = () => {
      navigate("/CustomerMaster");
    };
    const handleLoanCardManagement = () => {
      navigate("/LoanMaster");
    };
    const handleItemsMaster = () => {
      navigate("/ItemMaster");
    };

    return (
        <div>
            <div className={styles["heading-container"]}>
            <div className={styles["rectangle"]}></div>
            <h3 >Admin Dashboard</h3>
            </div>
            <Row xs={1} md={3} className="g-3">
        <Col>
        <Card className={styles["cardStyle"]}>
          <Card.Img variant="top" src={CustomerData}  style={{ height: "15rem" }} />
          <Card.Body>
            <Card.Title>Customer Data Management</Card.Title>
            <Card.Text>
              You have access to customer data. Now handle it your hand.
            </Card.Text>
            <CustomButton onClick={() => handleCustomerMaster()}>
              View Data
            </CustomButton>
          </Card.Body>
        </Card>
          </Col>
          <Col>
          <Card className={styles["cardStyle"]}>
          <Card.Img variant="top" src={LoanData}  style={{ height: "15rem" }} />
          <Card.Body>
            <Card.Title>Loan Card Management</Card.Title>
            <Card.Text>
              Loan Management made easy. All the data now at one place.
            </Card.Text>
            <CustomButton onClick={() => handleLoanCardManagement()}>
              View Loan 
            </CustomButton>
          </Card.Body>
        </Card>
           </Col>
           <Col>
           <Card className={styles["cardStyle"]}>
          <Card.Img variant="top" src={ItemData}  style={{ height: "15rem" }} />
          <Card.Body>
            <Card.Title>Items Master Data</Card.Title>
            <Card.Text>
              All the Items master details are Available here.
            </Card.Text>
            <CustomButton onClick={() => handleItemsMaster()}>
              View Items
            </CustomButton>
          </Card.Body>
        </Card>
        </Col>
     
    </Row> 
            
        </div>
    );
}

export default AdminDashboard;
