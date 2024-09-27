import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Movie from "../Movie";
import { Pagination } from "antd";

const Home = () => {
  const [movies, setMovies] = useState({
    data: [],
    metadata: {
      current_page: "1",
      page_count: 1,
      per_page: 1,
      total_count: 1,
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://moviesapi.codingfront.dev/api/v1/movies?page=${1}`
        );
        if (response.status == 200) {
          setMovies(response.data);
          console.log(response.data);
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

  const changePage = (current, size) => {
    setLoading(true)
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://moviesapi.codingfront.dev/api/v1/movies?page=${current}`
        );
        if (response.status == 200) {
          setMovies(response.data.data);
          console.log(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  };

  return (
    <>
      <h1>home</h1>
      {movies.data ? (
      <>
        <ul>
          {movies.data.map((movie) => (
            <Link to={Movie}>
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            </Link>
          ))}
        </ul>
        <Pagination
          current={movies.metadata.current_page}
          total={movies.metadata.total_count}
          pageSize={movies.metadata.per_page}
          showSizeChanger={false}
          onChange={changePage}
        />
      </>
     ) : (
        <h1>No Film</h1>
      )}
    </>
  );
};
export default Home;
