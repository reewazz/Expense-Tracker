import { Button, TextField } from "@mui/material";
import { Sidebar } from "../partials/Sidebar";
export const UserSettings = () => {
  return (
    <>
      <Sidebar />
      <div className="user-container">
        <p className="text-2xl font-bold text-black">User Settings</p>
        <div className="min-nav">
          <div className="items">
            <div className="item">
              <p className="text-l font-bold text-black"> Edit Profile </p>
            </div>
            <div className="item">
              <p className="text-l font-bold text-black"> Password Settings </p>
            </div>
          </div>
        </div>
        <div className="form-area">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              alt="profile image"
            />
          </div>
          <div className="inputs">
            <TextField label="Full Name" variant="outlined" fullWidth />
            <TextField label="Date of Birth" variant="outlined" fullWidth />
            <TextField label="Occupation" variant="outlined" fullWidth />
            <TextField label="Address" variant="outlined" fullWidth />

            <Button>Cancel</Button>
            <Button>Save</Button>
          </div>
          <div className="note">
            <p className="text-l font-bold text-black"> Note </p>
            <p className="text-l font text-black">
              {" "}
              This information is for your personal use only. We do not use this
              information{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
