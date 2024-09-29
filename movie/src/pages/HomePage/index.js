import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import Movie from "../Movie";
import { Pagination, Spin } from "antd";
import "./style.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState({
    data: [],
    metadata: {
      current_page: "1",
      page_count: 1,
      per_page: 1,
      total_count: 1,
    },
  });

  const getApi = (page = 1) => {
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`)
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getApi(searchParams.get("page"));
  }, []);

  const renderFarn = () => {
    return movies.data.map((movie, index) => {
      const { id, title, poster } = movie;
      return (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <img src={poster} />
            <h3>{title}</h3>
          </Link>
        </li>
      );
    });
  };

  const changePage = (current, size) => {
    setSearchParams(createSearchParams({ page: current }));
    getApi(current);
  };

  return (
    <div className="container">
      <Spin spinning={loading}>
        <div className="movies">
          <h1>Home</h1>
          <ul>{renderFarn()}</ul>
        </div>
        <div style={{ padding: "100px 0" }}>
          <Pagination
            align="center"
            current={movies.metadata.current_page}
            total={movies.metadata.total_count}
            pageSize={movies.metadata.per_page}
            showSizeChanger={false}
            onChange={changePage}
          />
        </div>
      </Spin>
    </div>
  );
};
export default HomePage;
