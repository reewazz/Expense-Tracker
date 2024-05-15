import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableModal = () => {
  const [scheduledRows, setScheduledRows] = useState([]);

  useEffect(() => {
    const fetchScheduledTransactions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/scheduled-transaction"
        );
        const result = await response.json();
        console.log("Fetched scheduled data:", result);

        if (Array.isArray(result.data)) {
          setScheduledRows(result.data);
        } else {
          console.error("Fetched scheduled data is not an array:", result.data);
          setScheduledRows([]);
        }
      } catch (error) {
        console.error("Error fetching scheduled data:", error);
        setScheduledRows([]);
      }
    };

    fetchScheduledTransactions();
  }, []);

  const [formData, setFormData] = useState({
    statement: "",
    category: "",
    account: "",
    amount: "",
    date: "",
    period: "",
    recursion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/scheduled-transaction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setScheduledRows((prevRows) => [...prevRows, result.data]);
        setFormData({
          statement: "",
          category: "",
          account: "",
          amount: "",
          date: "",
          period: "",
          recursion: "",
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
      <button onClick={toggleModal}>Add Scheduled Transaction</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Add Scheduled Transaction</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Statement"
                name="statement"
                value={formData.statement}
                onChange={handleChange}
              />

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

              <select
                name="recursion"
                value={formData.recursion}
                onChange={handleChange}
              >
                <option>Recursion</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>

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

              <TableCell align="right">Recursion</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduledRows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.statement}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>

                <TableCell align="right">{row.recursion}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
