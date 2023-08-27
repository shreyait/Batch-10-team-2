import React, { useState } from "react";
import { Button } from "react-bootstrap";

import LoanFormModal from "./LoanFormMasterModal";

const TableRow = ({ loan, editLoan, deleteLoan }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <tr>
      <td>{loan.loanid}</td>
      <td>{loan.loanType}</td>
      <td>{loan.duration}</td>
      <td>
      <LoanFormModal isEdit={true} show={showModal} onHide={closeModal} addLoan={(input)=>editLoan(loan.loanid, input)} initialloanid={loan.loanid} initialloanType={loan.loanType} initDuration={loan.duration} />
        <Button
          variant="info"
          onClick={openModal}
        >
          Edit
        </Button>
        <Button variant="warning" onClick={() => deleteLoan(loan.loanid)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
