import React from "react";
import Table from "react-bootstrap/Table";
import styles from "./displayLoan.module.css";

const DisplayLoanCards = () => {
  return (
    <div className={styles["tableBody"]}>
      <Table striped bordered hover variant="danger">
        <thead>
          <tr>
            <th>#</th>
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Card Issue date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1/1/2000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>7/8/2022</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@mdo</td>
            <td>@twitter</td>
            <td>2/3/2018</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayLoanCards;
