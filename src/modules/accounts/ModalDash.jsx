import { useState, useEffect } from "react";

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

export const ModalDash = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8000/transaction");
        const result = await response.json();
        console.log("Fetched data:", result); // Log the fetched data

        if (Array.isArray(result.data)) {
          setRows(result.data);
        } else {
          console.error("Fetched data is not an array:", result.data);
          setRows([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRows([]);
      }
    };

    fetchTransactions();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRow = createData(
      formData.statement,
      formData.category,
      formData.account,
      formData.amount
    );

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
        setRows((prevRows) => [...prevRows, result.data]);
        setFormData({
          statement: "",
          category: "",
          account: "",
          amount: "",
        });
        toggleModal();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
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
                  <option>Transport</option>
                </select>
                <select
                  name="account"
                  value={formData.account}
                  onChange={handleChange}
                >
                  <option>Select Account</option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>Digital wallet</option>
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
};
