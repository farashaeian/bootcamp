import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import './style.css'
const Search = () => {
  const [queryStrings, setQueryStings] = useSearchParams();
  const [data, setData] = useState({
    data: [],
    metadata: {},
  });
  const type = (e) => {
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value}`
      )
      .then((response) => {
        setQueryStings(createSearchParams({ key: e.target.value }));
        setData(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${queryStrings.get(
          "key"
        )}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  const renderFarms = () => {
    if (data.data.length == 0) {
      return <h3>The Movie Is Not Found!</h3>;
    }
    return data.data.map(({ title, id, poster }, index) => {
      return (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      );
    });
  };
  return (
    <div className="container">
      <div className="search">
        <h1>Search</h1>
        <input
          // value={queryStrings.get("key") ? queryStrings.get("key") : ""}
          onChange={type}
          placeholder="Enter The Movie Title..."
        />
        <div className="movies">
          <ul>{renderFarms()}</ul>
        </div>
      </div>
    </div>
  );
};
export default Search;
