import React from "react";
import "./SearchError.css";

function SearchError({ error }) {
  function errorType(error) {
    if (error === "Movie not found!") {
      return (
        <p>
          Movie not found! <br />
          Did you type it correctly?
        </p>
      );
    } else if (error === "Too many results.") {
      return (
        <p>
          Too many results. <br />
          Could you be more specific?
        </p>
      );
    }
  }

  return <h2 className="searchError animate__pulse">{errorType(error)}</h2>;
}

export default SearchError;