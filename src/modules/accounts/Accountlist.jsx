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

import "./accounts.css";

export const Accountlist = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [cards, setCards] = useState([
    {
      name: "NIMB",
      imageUrl:
        "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg",
      amount: "3000",
    },
    // Add more cards as needed
  ]);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/cards");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch cards");
  //       }
  //       const data = await response.json();
  //       setCards(data);
  //     } catch (error) {
  //       console.error("Error:", error.message);
  //     }
  //   };

  //   fetchCards();
  // }, []);

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
      const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl, name, amount }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      // Optionally, you can clear the input fields after successful submission
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
