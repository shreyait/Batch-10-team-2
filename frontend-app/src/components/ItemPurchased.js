import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./ItemPurchased.module.css";
const ItemPurchased = () => {
   
    let data1=window.sessionStorage.getItem("UserDataSession");
    data1=JSON.parse(data1);
    console.log(data1);
    // let EmployeeID = data1.employeeId;
    let data2=window.sessionStorage.getItem("loginData");
    data2=JSON.parse(data2);
    console.log(data2);
    console.log(data2.employeeId)
    let EmpID = data1?data1.employeeId:data2.employeeId;

    const [data, setData] = useState([]);
    useEffect(()=> {
        axios.get('https://localhost:7033/api/ApplyLoans/' + EmpID)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    console.log(data);
    return (
        
        <div  className={styles["table-container"]}>
            <div className={styles["heading-container"]}>
            <div className={styles["rectangle"]}></div>
             <h3>Item Purchased</h3>
             </div>
            <div className={styles["custom-table"]}>
               
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Issue ID</th>
                            <th>Item Description</th>
                            <th>Item Make</th>
                            <th>Item Category</th>
                            <th>Item Valuation</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((data, index) => {
              return (
                <tr key={index}>
                <td>{data.id}</td>
                                    <td>{data.iDes}</td>
                                    <td>{data.iMake}</td>
                                    <td>{data.empName}</td>
                                    <td>{data.ivalue}</td>
                </tr>
              );
            })}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default ItemPurchased;
