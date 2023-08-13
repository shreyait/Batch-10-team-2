import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ViewLoan from "./../assets/View_loan.jpeg";
import AppliedLoan from "./../assets/Applied_loan.jpg";
import ItemCollection from "./../assets/Item_collection.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";


const Dashboard = () => {
    
const navigate = useNavigate();

    const handleApplyLoans = ()=>{
        navigate("/LoanApply");
    };
    const handleViewLoan = ()=>{
        navigate("/DisplayLoanCards");
    };
    const handleItems = ()=>{
        navigate("/ItemPurchased");
    };
    return (
        <div>
        <h2 style={{textAlign: 'center',margin:'2%'}}>Loan Management Application</h2>
        <h3 style={{textAlign: 'center',margin:'3%'}}>User Dashboard</h3>
        <CardGroup >
        <Card style={{ width: '13rem'}}>
        <Card.Img variant="top" src={ViewLoan} style={{ height: '12rem'}} />
        <Card.Body>
          <Card.Title>View Loan</Card.Title>
          <Card.Text>
            No Shopping On Month ends....! 
            But now you can..
          </Card.Text>
          <Button variant="primary" onClick={() => handleViewLoan()}>Click Me</Button>
        </Card.Body>
      </Card>
      &nbsp;&nbsp;&nbsp;
       <Card style={{ width: '13rem'}}>
       <Card.Img variant="top" src={AppliedLoan} style={{ height: '12rem'}} />
       <Card.Body>
         <Card.Title>Apply for Loan</Card.Title>
         <Card.Text>
          Suprise!!!
          Loans are always approved for you and steps made easy.
         </Card.Text>
         <Button variant="primary" onClick={() => handleApplyLoans()} >Apply</Button>
       </Card.Body>
     </Card>
     &nbsp;&nbsp;&nbsp;
      <Card style={{ width: '13rem'}}>
      <Card.Img variant="top" src={ItemCollection} style={{ height: '12rem'}} />
      <Card.Body>
        <Card.Title>View Item Purchased</Card.Title>
        <Card.Text>
          No Worries..
          All your purchase in one basket are managed for you.
        </Card.Text>
        <Button variant="primary" onClick={() => handleItems()} > Let's go in</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
    );
}

export default Dashboard;
