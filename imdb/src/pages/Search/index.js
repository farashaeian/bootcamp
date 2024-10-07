import { Style } from "./style";
import SearchIcon from '../../assets/images/search.png'
import MoviesTiles from '../../assets/images/movies-tiles.svg'

const Search = () => {
    return (
      <Style>
        <div style={{backgroundImage:`url(${MoviesTiles})`}}>
          <div className="search container">
            <div className="search-title">IMDB</div>
            <div className="search-bar">
              <input placeholder="Type the name of your favorite movie ..."/>
              <button>
                <span>Search</span>
                <img src={SearchIcon}/>
              </button>
            </div>
          </div>
        </div>
      </Style>
    );
  };
  export default Search;
  