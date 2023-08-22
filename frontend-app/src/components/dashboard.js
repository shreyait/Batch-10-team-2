import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ViewLoan from "./../assets/CustomerData.jpg";
import AppliedLoan from "./../assets/ItemData.jpg";
import ItemCollection from "./../assets/LoanData.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomButton from "./customButton";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  const navigate = useNavigate();

  const handleApplyLoans = () => {
    navigate("/LoanApply");
  };
  const handleViewLoan = () => {
    navigate("/DisplayLoanCards");
  };
  const handleItems = () => {
    navigate("/ItemPurchased");
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "3%" }}>User Dashboard</h3>
      <CardGroup>
        <Card className={styles["cardStyle"]}>
          <Card.Img variant="top" src={ViewLoan} style={{ height: "15rem" }} />
          <Card.Body>
            <Card.Title>View Loans</Card.Title>
            <Card.Text>
              No Shopping On Month ends....! <br></br>But now you can..
            </Card.Text>
            <CustomButton onClick={() => handleViewLoan()}>
              View Loans
            </CustomButton>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card className={styles["cardStyle"]}>
          <Card.Img
            variant="top"
            src={AppliedLoan}
            style={{ height: "15rem" }}
          />
          <Card.Body>
            <Card.Title>Available Loans</Card.Title>
            <Card.Text>
              Suprise!!! Loans are always approved for you and steps made easy.
            </Card.Text>
            <CustomButton onClick={() => handleApplyLoans()}>
              Apply for Loan
            </CustomButton>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card className={styles["cardStyle"]}>
          <Card.Img
            variant="top"
            src={ItemCollection}
            style={{ height: "15rem" }}
          />
          <Card.Body>
            <Card.Title>Items Purchased</Card.Title>
            <Card.Text>
              No Worries.. All your purchase in one basket are managed for you.
            </Card.Text>
            <CustomButton onClick={() => handleItems()}> View</CustomButton>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Dashboard;
