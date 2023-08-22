import React from "react";
import { Button } from "react-bootstrap";

const ItemTableRow = ({ item, editItem, deleteItem }) => {
  return (
    <tr>
      <td>{item.item_id}</td>
      <td>{item.item_description}</td>
      <td>{item.item_status}</td>
      <td>{item.item_make}</td>
      <td>{item.item_category}</td>
      <td>{item.item_valuation}</td>
      <td>
        <Button
          variant="secondary"
          onClick={() =>
            editItem(item.item_id, {
              item_id: item.item_id,
              item_description: item.item_description,
              item_status: item.item_status,
              item_make: item.item_make,
              item_category: item.item_category,
              item_valuation: item.item_valuation,
            })
          }
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteItem(item.item_id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemTableRow;
