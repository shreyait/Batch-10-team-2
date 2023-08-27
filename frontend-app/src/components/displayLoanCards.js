import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import styles from "./displayLoan.module.css";

const DisplayLoanCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7033/api/LoanCardMasters")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles["table-container"]}>
      <div className={styles["heading-container"]}>
        <div className={styles["rectangle"]}></div>
        <h3>Loan Cards Availed</h3>
      </div>
      <div className={styles["custom-table"]}>
        <table className="table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Duration</th>
              {/* <th>Card Issue date</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.loanid}</td>
                  <td>{user.loanType}</td>
                  <td>{user.duration}</td>
                  {/* <td>{user.address.city}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayLoanCards;
