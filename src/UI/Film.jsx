import React from "react";
import { Link } from "react-router-dom";
import "./Film.css";

function Film({ title, year, poster, id }) {
  return (
    <Link className="film" to={`/${id}`}>
      <figure className="film__poster">
        <img src={poster} />
      </figure>
      <h2 className="film__title">{title}</h2>
      <h4 className="film__year">{year}</h4>
    </Link>
  );
}

export default Film;