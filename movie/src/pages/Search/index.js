import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
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
        setData(response.data);
      })
      .catch((error) => {});
  };
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
    <div className="search">
      <div className="container">
        <h1>Search</h1>
        <input
          onChange={type}
          style={{ padding: "10px", width: "100%", fontSize: "30px" }}
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
