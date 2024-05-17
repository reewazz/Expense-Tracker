import "./sidebar.css";
import * as React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/profile" onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/user-settings" onClick={handleClose}>
          User settings
        </MenuItem>
        <MenuItem component={Link} to="/logout" onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
      <div className="topbar">
        <div className="gm">
          <p className="text-xl font-bold text-black">Good Morning, Riwaj</p>
        </div>
        <div className="extras">
          <div className="extra">
            <h2>Friday 19 June, 2024</h2>
          </div>
          <div className="extra">
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="extra">
            <div className="avatar">
              <div className="flex -space-x-2 overflow-hidden">
                <NavLink to="/profile" exact>
                  <img
                    onClick={handleClick}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="logoshort">
          <img src="LogoShort.png" alt="Logo" />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "icons active-link" : "icons"
              }
              to="/"
              exact
            >
              <i className="ri-folder-2-line "></i>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "icons active-link" : "icons"
              }
              to="/calendar"
              exact
            >
              <i className="ri-calendar-2-line "></i>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "icons active-link" : "icons"
              }
              to="/transactions"
              exact
            >
              <i className="ri-pages-line "></i>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "icons active-link" : "icons"
              }
              to="/stats"
              exact
            >
              <i className="ri-bar-chart-2-line "></i>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "icons active-link" : "icons"
              }
              to="/schedule"
              exact
            >
              <i className="ri-time-line"></i>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "icons active-link" : "icons"
              }
              to="/accountlist"
              exact
            >
              <i className="ri-server-line "></i>
            </NavLink>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
