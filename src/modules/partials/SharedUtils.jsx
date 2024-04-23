import { useState } from 'react';

export const useTransactionState = () => {
  const [rows, setRows] = useState([
    createData('Family Dinner at Thasang Thakali', "Food", 6.0, 24),
    createData('Ice cream sandwich', "Rent", 237, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ]);

  const [formData, setFormData] = useState({
    statement: '',
    category: '',
    account: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRow = createData(
      formData.statement,
      formData.category,
      formData.account,
      formData.amount
    );
    setRows([...rows, newRow]);
    setFormData({
      statement: '',
      category: '',
      account: '',
      amount: '',
    });
  };

  return { rows, setRows, formData, setFormData, handleChange, handleSubmit };
};
