import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar_bg">
          <img src={Logo} alt="" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
