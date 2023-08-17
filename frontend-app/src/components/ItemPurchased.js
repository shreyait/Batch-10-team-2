import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./ItemPurchased.module.css";
const ItemPurchased = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
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
                        {
                            data.map((user,index) => {
                                return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.id}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default ItemPurchased;
