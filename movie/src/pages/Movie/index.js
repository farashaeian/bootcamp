import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Movie = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({
    actors: "",
    awards: "",
    box_office: "",
    country: "",
    director: "",
    dvd: "",
    genres: [],
    id: 0,
    images: [],
    imdb_id: "",
    imdb_rating: "",
    imdb_votes: "",
    language: "",
    metascore: "",
    plot: "",
    poster: "",
    production: "",
    rated: "",
    ratings: "",
    released: "",
    response: "",
    runtime: "",
    title: "",
    type: "",
    website: "",
    writer: "",
    year: "",
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`
        );

        if (response.status === 200) {
          setMovie(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <>{movie ? movie.title : "not found"}</>;
};
export default Movie;
