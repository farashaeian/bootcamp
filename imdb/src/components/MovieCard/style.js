import styled from "styled-components"
import { colorPallete, typography } from "../../style/theme"


export const Style = styled.div`

   .movie-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .movie-image{
        width: 276px;
        height : 409px;
        border-radius: ${typography.radius};
        img{
            width : 100%;
            height : auto;
            object-fit: cover;
            border-radius: ${typography.radius};
        }
    }
    .movie-info{
        display: flex;
        align-items: center;

        .movie-info-title{
            margin-right: auto;
            font-weight: 700;
        }
        img {
            width: 1rem;
            height: 1rem;
            margin-right: 6px;
        }
        .rate{
            color: ${colorPallete.gray40}
            font-weight: 400;
        }
    }
}
@media (max-width : 768px){
    .movie-image{
        width: 270px;
        height : 342px;
    } 
}
`
