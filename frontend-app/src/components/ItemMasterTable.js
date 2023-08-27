import React from "react";
import { Table, Button } from "react-bootstrap";
import ItemTableRow from "./ItemTableMasterRow";
import styles from "./displayLoan.module.css";

const ItemMasterTable = ({ items, editItem, deleteItem }) => {
  return (
    <Table striped bordered hover className={styles["custom-table"]}>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item Description</th>
          <th>Item Status</th>
          <th>Item Make</th>
          <th>Item Category</th>
          <th>Item Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ItemTableRow
            key={item.item_id}
            item={item}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ItemMasterTable;
