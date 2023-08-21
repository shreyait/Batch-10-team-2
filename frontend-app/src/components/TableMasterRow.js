import React from "react";
import { Button } from "react-bootstrap";

const TableRow = ({ loan, editLoan, deleteLoan }) => {
  return (
    <tr>
      <td>{loan.loanId}</td>
      <td>{loan.loanType}</td>
      <td>{loan.duration}</td>
      <td>
        <Button
          variant="secondary"
          onClick={() =>
            editLoan(loan.id, {
              loanId: "newId",
              loanType: "newType",
              duration: 0,
            })
          }
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteLoan(loan.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
