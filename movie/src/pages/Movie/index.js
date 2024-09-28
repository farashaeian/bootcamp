import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Movie = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
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
      window.scrollTo(0,0)

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

      axios
        .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${parseInt(Math.random()*21)}`)
        .then((response) => {
          setMovies(response.data.data);
        })
        .catch(() => {});
    };

    fetchMovies();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderRelatedMovies = () => {
    return movies.map(({ title, poster, id }, index) => {
      return (
        <div key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
      );
    });
  };
  return (
    <>
      {movie ? movie.title : "not found"}
      <hr/>
      <div className="related">{renderRelatedMovies()}</div>
    </>
  );
};
export default Movie;
