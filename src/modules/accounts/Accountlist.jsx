import { useState } from "react";
import { Sidebar } from "../partials/Sidebar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

import "./accounts.css";

export const Accountlist = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amount, setAmount] = useState("");
  const [cards, setCards] = useState([
    {
      name: "NIMB",
      imageUrl:
        "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg",
      amount: "3000",
    },
    // Add more cards as needed
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleAddCard = () => {
    const newCard = { name, imageUrl, amount };
    setCards([...cards, newCard]);
    setOpen(false); // Close the popup after adding the card
  };
  const currencies = [
    {
      value: "Cash",
      label: "Cash",
    },
    {
      value: "Bank",
      label: "Bank",
    },
    {
      value: "Digital wallet",
      label: "Digital wallet",
    },
  ];

  // const handleEdit = (index, newData) => {
  //   const updatedCards = [...cards];
  //   updatedCards[index] = newData;
  //   setCards(updatedCards);
  // };
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
              <TextField
                id="outlined-select-currency"
                select
                label=" Type"
                // defaultValue="EUR"
                helperText="Please select your account type"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleAddCard}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

const Card = ({ name, imageUrl, amount, onDelete }) => {
  return (
    <div className="card">
      <div className="top">
        <p className="text-xl font-bold text-black">{name}</p>
        <img src={imageUrl} alt="" />
      </div>
      <div className="bottom">
        <div className="texts">
          <p className="text-2xl font-bold text-black">Rs. {amount}</p>
          <p className="text-xl font-bold text-grey">Rs. {amount}</p>
        </div>
        <div className="buttons">
          <i className="ri-pencil-line"></i>
          <i className="ri-delete-bin-6-line" onClick={onDelete}></i>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
