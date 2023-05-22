import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Movie.css";
import axios from "axios";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Loading from "../UI/Loading";

function Movie() {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=2a3e348d&i=${id}`
      );
      setFilm(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  return loading ? (
    <div className="fullMovie__loading">
      <Loading />
    </div>
  ) : (
    <div className="fullMovie">
      <div className="fullMovie__back" onClick={() => navigate(-1)}>
        <KeyboardBackspaceOutlinedIcon />
      </div>
      <div className="fullMovie__left">
        <figure className="fullMovie__poster">
          <img src={film.Poster} />
        </figure>
        <div className="fullMovie__ratings">
          <div className="fullMovie__rating fullMovie__ratingAge">
            Rating: {film.Rated}
          </div>
        </div>
      </div>
      <div className="fullMovie__right">
        <h2 className="fullMovie__title">{film.Title}</h2>
        <div className="fullMovie__year">{film.Year}</div>
        <span className="fullMovie__divider"></span>
        <div className="fullMovie__plot">{film.Plot}</div>
        <div className="fullMovie__bottom">
          <span className="fullMovie__dividerBottom"></span>
          <div className="fullMovie__actors">
            <b>Stars:</b> {film.Actors}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;