import { useState, useEffect } from "react";
import "./Modal.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(statement, category, account, amount) {
  return { statement, category, account, amount };
}

function Modal() {
  const [rows, setRows] = useState([]);
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const fetchTotals = async () => {
    try {
      const response = await fetch("http://localhost:8000/transaction");
      const data = await response.json();
      setTotals({
        totalIncome: data.totalIncome,
        totalExpense: data.totalExpense,
      });
      if (Array.isArray(data.transactions)) {
        setRows(data.transactions);
      }
    } catch (error) {
      console.error("Error fetching totals:", error);
    }
  };

  useEffect(() => {
    fetchTotals();
  }, []);

  const [formData, setFormData] = useState({
    statement: "",
    category: "",
    account: "",
    amount: "",
    date: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setFormData({
          statement: "",
          category: "",
          account: "",
          amount: "",
          date: "",
          type: "",
        });
        toggleModal();
        fetchTotals(); // Re-fetch totals and transactions after a successful submission
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <select name="type" value={formData.type} onChange={handleChange}>
                <option>Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
              <div className="selection">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option>Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Rent">Rent</option>
                  <option value="Transport">Transport</option>
                </select>
                <select
                  name="account"
                  value={formData.account}
                  onChange={handleChange}
                >
                  <option>Select Account</option>
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
                  <option value="Digital wallet">Digital wallet</option>
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
              <TableCell>
                <strong>Statement</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Category</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Account</strong>{" "}
              </TableCell>
              <TableCell align="right">
                <strong>Amount</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
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
