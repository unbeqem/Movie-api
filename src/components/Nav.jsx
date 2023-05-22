import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to={"/"} className="nav__logo">
        <img src={require("../assets/logo.png")} alt="PMovies" />
      </Link>
      <div className="nav_pages">
        <Link to={"/"}>
          <Button>
            <h3 className="nav__link">Home  </h3>
          </Button>
        </Link>

      </div>
    </div>
  );
}

export default Nav;