import React, {useState} from "react";
import { Button } from "react-bootstrap";
import ItemFormModal from "./ItemFormMasterModal";

const ItemTableRow = ({ item, editItem, deleteItem }) => {

  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <tr>
      <td>{item.itemid}</td>
      <td>{item.itemDescription}</td>
      <td>{item.issueStatus}</td>
      <td>{item.itemMake}</td>
      <td>{item.itemCategory}</td>
      <td>{item.itemValue}</td>
      <td>
      <ItemFormModal isEdit={true} show={showModal} onHide={closeModal} addItem={(input)=>editItem(item.itemid, input)} a={item.itemid} b={item.itemDescription} c={item.issueStatus} d={item.itemMake} g={item.itemCategory} f={item.itemValue}/>
        <Button
          variant="info"
          onClick={openModal}
        >
          Edit
        </Button>
        <Button variant="warning" onClick={() => deleteItem(item.itemid)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemTableRow;
