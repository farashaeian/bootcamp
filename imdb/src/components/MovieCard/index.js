import { Style } from "./style"
import  Star from '../../assets/images/star.png'

const MovieCard = ({imgUrl, title, rate}) => {
    return (
    <Style>
        <div className="movie-card">
            <div className="movie-image">
                <img src={imgUrl}/>
            </div>
            <div className="movie-info subtitle">
                <span className="movie-info-title">{title}</span>
                <img src={Star}/>
                <span className="rate">{rate}</span>
            </div>
        </div>
    </Style>
    )
}
export default MovieCard