import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/results/${input}`);
  };

  return (
    <div className="search">
      <form className="search__input">
        <input
          value={input}
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={search}>
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}

export default Searchbar;