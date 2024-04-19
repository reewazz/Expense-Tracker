import { Sidebar } from "../partials/Sidebar"
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
export const Accountlist = ()=>{
  
      const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>

        <Sidebar/>
        <div className="accounts-container"> 
<p class="text-2xl font-bold text-black">Accounts</p>

<div className="account-cards">
<div className="cards">
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>

</div>
<div  className="new-card">

<React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      <p >Add Account</p>

      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Add Account
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
         
         <div className="form">
            <div className="img-area">
            <div class="flex -space-x-2 overflow-hidden">

<img class="inline-block h-40 w-30 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</div>
            </div>
            <div className="text-area">
     <input type="text" placeholder="Account Type" />
     <input type="text" placeholder="Account Type" />
     <input type="text" placeholder="Account Type" />

            </div>

         </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>

</div>


</div>
        </div>
        </>
    )
}