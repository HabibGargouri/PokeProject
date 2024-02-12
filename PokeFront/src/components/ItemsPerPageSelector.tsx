import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ItemsPerPageSelector = ({ onItemsPerPageChange }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default value

  const handleSelectChange = (e :any) => {
    const selectedValue = parseInt(e.target.value, 10);
    setItemsPerPage(selectedValue);
    onItemsPerPageChange(selectedValue); // Notify parent component about the change
  };

  return (
    <Form.Group controlId="itemsPerPageSelect">
      <Form.Label>Select Items Per Page:</Form.Label>
      <Form.Control as="select" value={itemsPerPage} onChange={handleSelectChange} placeholder="Choose number of items per page">
        <option value={16}>Choose number of items per page</option>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
        <option value={32}>32</option>
        <option value={128}>128</option>
      </Form.Control>
    </Form.Group>
  );
};

export default ItemsPerPageSelector;