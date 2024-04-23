import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Schedule } from '../scheduleTransactions/Schedule';

import Popover from '@mui/material/Popover';
import { Button } from '@mantine/core';

function createData(statement,category,account,amount) {
  return { statement,category,account,amount};
}




export default function TransactionTable() {
  const [rows, setRows] = useState([
    createData('Family Dinner at Thasang Thakali', "Food", 6.0, 24),
    createData('Ice cream sandwich', "Rent", 237, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    statement: '',
    category: '',
    account: '',
    amount: '',
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover-form' : undefined;

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
    handleClose();
  };

 
  return (
    <div className="transactionTable">
      
       <Button onClick={handleClick}>Add Row</Button>
       <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <input
            type="text"
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            placeholder="Statement"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            type="text"
            name="account"
            value={formData.account}
            onChange={handleChange}
            placeholder="Account"
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
          />
          <button type="submit">Add Row</button>
        </form>
      </Popover>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>Statement</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Account&nbsp;(g)</TableCell>
            <TableCell align="right">Amount&nbsp;(g)</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className='row'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.statement}
              </TableCell>
           
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.account}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
    // <div className="table">
    //   <div className="left">
    //     <div className="statement">

    //     </div>
    //   </div>
    //   <div className="right"></div>

    // </div>
  );
}