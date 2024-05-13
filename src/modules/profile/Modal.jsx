import { useState } from "react";
import "./Modal.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// Ensure this import path matches your CSS file's location

function createData(statement, category, account, amount) {
  return { statement, category, account, amount };
}

function Modal() {
  const [rows, setRows] = useState([
    createData("Family Dinner at Thasang Thakali", "Food", 6.0, 24),
    createData("Ice cream sandwich", "Rent", 237, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16.0, 49),
  ]);

  const [formData, setFormData] = useState({
    statement: "",
    category: "",
    account: "",
    amount: "",
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
      statement: "",
      category: "",
      account: "",
      amount: "",
    });
    toggleModal(); // Close modal after submitting
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleModal}>Add Transaction</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Statement"
                name="statement"
                value={formData.statement}
                onChange={handleChange}
              />
              <input type="date" />
              <div className="radio">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="income"
                    name="transactionType"
                    value="income"
                  />
                  <label htmlFor="income">Income</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="expense"
                    name="transactionType"
                    value="expense"
                  />
                  <label htmlFor="expense">Expense</label>
                </div>
              </div>
              <div className="selection">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option>Select Category</option>
                  <option>Food</option>
                  <option>Rent</option>
                  <option> Transport</option>
                  {/* Add more options here */}
                </select>
                <select
                  name="account"
                  value={formData.account}
                  onChange={handleChange}
                >
                  <option>Select Account</option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option> Digital wallet</option>
                  {/* Add more options here */}
                </select>
              </div>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
              />
              <input type="file" />
              <button type="submit">Save</button>
              <button type="button" onClick={toggleModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Statement</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Account&nbsp;(g)</TableCell>
              <TableCell align="right">Amount&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                className="row"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
  );
}

export default Modal;
