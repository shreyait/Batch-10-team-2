import React from "react";
import { Table, Button } from "react-bootstrap";
import TableRow from "./TableMasterRow";
import styles from "./displayLoan.module.css";

const LoanTable = ({ loans, editLoan, deleteLoan }) => {
  return (
    <Table striped bordered hover className={styles["custom-table"]}>
      <thead>
        <tr>
          <th>Loan ID</th>
          <th>Loan Type</th>
          <th>Duration</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <TableRow
            key={loan.loanid}
            loan={loan}
            editLoan={editLoan}
            deleteLoan={deleteLoan}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default LoanTable;
