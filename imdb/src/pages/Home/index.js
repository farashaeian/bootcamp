import heroImage from '../../assets/images/hero.svg';
import  MovieSample from '../../assets/images/movie.png'
import MovieCard from '../../components/MovieCard';
import { Style } from './style';

const Home = () => {
    return  (
      <Style>
        <div className="container-fluid hero-section">
          <img src={heroImage} />
          <div className="container">
            <div className='title'>Movies</div>
              <div  className='movie-list'>
                {[...Array(8)].map((_, index) => (
                    <MovieCard imgUrl={MovieSample} title='The Avengers' rate='2.5' />
                ))}
              </div>
          </div>
        </div>
      </Style>
    )
  };
export default Home;
