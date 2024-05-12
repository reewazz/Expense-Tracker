// import { Sidebar } from "../partials/Sidebar"
// import { useState } from "react";
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import { TextField } from "@mui/material";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//   }));
// export const Accountlist = ()=>{

//       const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//     return (
//         <>

//         <Sidebar/>
//         <div className="accounts-container">
// <p class="text-2xl font-bold text-black">Accounts</p>

// <div className="account-cards">
// <div className="cards">
// <div className="card">

// <div className="top">
// <p class="text-xl font-bold text-black">NIMB</p>
// <img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
// </div>
// <div className="bottom">
// <div className="texts">
// <p class="text-2xl font-bold text-black">Rs. 3000</p>
// <p class="text-xl font-bold text-grey">Rs. 3000</p>

// </div>
// <div className="buttons">
// <i class="ri-pencil-line"></i>
// <i class="ri-delete-bin-6-line"></i>
// </div>

// </div>

// </div>
// <div className="card">

// <div className="top">
// <p class="text-xl font-bold text-black">Esewa</p>
// <img src="esewa.png" alt="" />
// </div>
// <div className="bottom">
// <div className="texts">
// <p class="text-2xl font-bold text-black">Rs. 3000</p>
// <p class="text-xl font-bold text-grey">Rs. 3000</p>

// </div>
// <div className="buttons">
// <i class="ri-pencil-line"></i>
// <i class="ri-delete-bin-6-line"></i>
// </div>

// </div>

// </div>
// <div className="card">

// <div className="top">
// <p class="text-xl font-bold text-black">Esewa</p>
// <img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
// </div>
// <div className="bottom">
// <div className="texts">
// <p class="text-2xl font-bold text-black">Rs. 3000</p>
// <p class="text-xl font-bold text-grey">Rs. 3000</p>

// </div>
// <div className="buttons">
// <i class="ri-pencil-line"></i>
// <i class="ri-delete-bin-6-line"></i>
// </div>

// </div>

// </div>
// <div className="card">

// <div className="top">
// <p class="text-xl font-bold text-black">Esewa</p>
// <img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
// </div>
// <div className="bottom">
// <div className="texts">
// <p class="text-2xl font-bold text-black">Rs. 3000</p>
// <p class="text-xl font-bold text-grey">Rs. 3000</p>

// </div>
// <div className="buttons">
// <i class="ri-pencil-line"></i>
// <i class="ri-delete-bin-6-line"></i>
// </div>

// </div>

// </div>

// </div>
// <div  className="new-card">

// <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//       <p >Add Account</p>

//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//          Add Account
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>

//          <div className="form">
//             <div className="img-area">
//             <div class="flex -space-x-2 overflow-hidden">

// <img class="inline-block h-40 w-30 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
// </div>
//             </div>
//             <div className="text-area">
//      <input type="text" placeholder="Account Type" />
//      <input type="text" placeholder="Account Type" />
//      <input type="text" placeholder="Account Type" />

//             </div>

//          </div>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>

// </div>

// </div>
//         </div>
//         </>
//     )
// }
import React, { useState } from "react";
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
