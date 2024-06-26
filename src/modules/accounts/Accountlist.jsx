import { useState, useEffect } from "react";
import { Sidebar } from "../partials/Sidebar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { InputLabel, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Card } from "./Card";
import { TotalAmount } from "./TotalAmount"; // Import the new component
import "./accounts.css";

export const Accountlist = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:8000/cards");
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const result = await response.json();
        console.log("Fetched data:", result); // Log the data
        if (Array.isArray(result.data)) {
          setCards(result.data);
        } else if (result.data && typeof result.data === "object") {
          setCards(Object.values(result.data));
        } else {
          throw new Error("Data is not an array or object");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchCards();
  }, []);

  const calculateTotalAmount = () => {
    return cards.reduce(
      (total, card) => total + parseFloat(card.amount || 0),
      0
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = { name, imageUrl, amount };
    setCards([...cards, newCard]);
    setOpen(false);

    try {
      const response = await fetch("http://localhost:8000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageUrl, amount }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      setImageUrl("");
      setName("");
      setAmount("");
      setType("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleEdit = (index, newData) => {
    const updatedCards = [...cards];
    updatedCards[index] = newData;
    setCards(updatedCards);
  };

  return (
    <>
      <Sidebar />
      <div className="accounts-container">
        <p className="text-2xl font-bold text-black">Accounts</p>

        <div className="account-cards">
          {cards.map((card, index) => (
            <div className="cards" key={index}>
              {console.log("Card Data:", card)}
              <Card
                name={card.name}
                imageUrl={card.imageUrl}
                amount={card.amount}
                onDelete={() => handleDelete(index)}
                onEdit={(newData) => handleEdit(index, newData)}
              />
            </div>
          ))}
        </div>
        <div className="new-card">
          <Button
            style={{ margin: "20px" }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            <p>Add Account</p>
          </Button>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add Account</DialogTitle>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <TextField
                label="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Account Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={"Bank"}>Bank</MenuItem>
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"Digital Wallet"}>Digital Wallet</MenuItem>
              </Select>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};
