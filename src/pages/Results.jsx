import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Film from "../UI/Film";
import Loading from "../UI/Loading";
import SearchError from "../UI/SearchError";
import "./Results.css";

function Results() {
  const [films, setFilms] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Sort");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  const selectRef = useRef(null);

  const filterFilms = (selectedOption, unsortedFilms) => {
    if (selectedOption === null) {
      return unsortedFilms;
    } else if (selectedOption === "LOW_TO_HIGH") {
      return unsortedFilms.sort((a, b) => a.Year - b.Year);
    } else if (selectedOption === "HIGH_TO_LOW") {
      return unsortedFilms.sort((a, b) => b.Year - a.Year);
    }
  };

  const handleOptionChange = () => {
    const selectedOption = selectRef.current.value;
    setFilms(filterFilms(selectedOption, films));
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=2a3e348d&s=${search}`
      );

      if (
        data.Error === "Too many results." ||
        data.Error === "Movie not found!"
      ) {
        //console.log(`This is the error: ${data.Error}`); //remove later
        setError(data.Error);
      } else {
        setError(false);
      }

      let unsortedFilms = [];
      if (data.Search) {
        // check if data.Search is defined before calling splice
        unsortedFilms = data.Search.splice(0, 6);
      }

      function filterFilms(selectedOption) {
        if (selectedOption === null) {
          setFilms(unsortedFilms);
        } else if (selectedOption === "LOW_TO_HIGH") {
          setFilms(unsortedFilms.sort((a, b) => a.Year - b.Year));
        } else if (selectedOption === "HIGH_TO_LOW") {
          setFilms(unsortedFilms.sort((a, b) => b.Year - a.Year));
        }
      }
      filterFilms(null);
      setSelectedOption("Sort");
      setLoading(false);
    }
    console.log(loading);
    fetchData();
  }, [search, error]);

  return loading ? (
    <div className="results__loading">
      <Loading />
    </div>
  ) : (
    <div className="results">
      <div className="results__searchBar">
        <Searchbar />
      </div>
      {error ? (
        <></>
      ) : (
        <div className="results__sort">
          <select
            ref={selectRef}
            id="filter"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option disabled value="Sort">
              Sort
            </option>
            <option value="LOW_TO_HIGH">Year: low to high</option>
            <option value="HIGH_TO_LOW">Year: high to low</option>
          </select>
        </div>
      )}
      <div className="results__films">
        {error ? (
          <SearchError error={error} />
        ) : (
          films.map((film) => (
            <div className="results__film" key={film.imdbID}>
              <Film
                title={film.Title}
                year={film.Year}
                poster={film.Poster}
                id={film.imdbID}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Results;