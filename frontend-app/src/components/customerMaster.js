import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import styles from "./displayLoan.module.css";
import AddEmployee from "./AddEmployee";
import EditEmployeeData from "./EditEmployeeData";
import { Button } from "bootstrap";
import CustomButton from "./customButton";
import { Link } from "react-router-dom";

const CustomerMaster = () => {
  const baseURL = "";
  const deleteBaseURL = "";

  const [lists, setList] = useState([]);
  const [box, setBox] = useState(false);
  const [empId, setEmpId] = useState("");

  const deleteEmployee = (empId) => {
    axios
      .delete(deleteBaseURL + empId)
      .then((response) => {
        alert("Employee deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        alert("error occured while deleting employee");
      });
  };

  const populatedList = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        alert("Error occured while loading data");
      });
  };
  console.log(lists);
  useEffect(() => {
    populatedList();
  }, []);

  const fetchdata = (empId) => {
    axios
      .get("" + empId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const showbox = (temp) => {
    console.log(temp);
    setBox(!box);
  };

  return (
    <div className={styles["table-container"]}>
      <div className={styles["heading-container"]}>
        <div className={styles["rectangle"]}></div>
        <h3>Customer Master Data</h3>
      </div>
      <div className={styles["custom-table"]}>
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>gender</th>
              <th>Date of birth</th>
              <th>Date of joining</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((li, index) => {
              return (
                <tr key={index}>
                  <td>{li.employeeId}</td>
                  <td>{li.employeeName}</td>
                  <td>{li.designation}</td>
                  <td>{li.department}</td>
                  <td>{li.gender}</td>
                  <td>{li.dateOfBirth}</td>
                  <td>{li.dateOfJoining}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setEmpId(li.employeeId);
                        setBox(!box);
                        fetchdata(li.employeeId);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      type="button"
                      onClick={() => {
                        deleteEmployee(li.employeeId);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {box ? <EditEmployeeData toggle={showbox} id={empId} /> : null}
      </div>
      <Link to="/AddEmployee">
        <CustomButton>Add</CustomButton>
      </Link>
    </div>
  );
};

export default CustomerMaster;
