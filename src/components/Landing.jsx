import React from "react";
import Searchbar from "./Searchbar";
import "./Landing.css";
import 'animate.css';

function Landing() {

  return (
    <div className="landing">
      <div className="landing__text animate__fadeIn">
        Discover your next favorite movie with our browser
      </div>
      <div className="landing__search animate__fadeInUpBig">
        <Searchbar />
      </div>
    </div>
  );
}

export default Landing;