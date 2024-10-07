import styled from 'styled-components';
import { colorPallete } from '../../style/theme';

export const Style = styled.div`
.search{
    height: 100dvh;
    margin-bottom: 50px;
    // background-image: url("/assets/images/movies-tiles.svg");
    background-repeat: no-repeat;
    background-color: transparent;
    .search-title{
        color: ${colorPallete.primaryGray};
        font-size: 96px;
        font-weight: 700;
        line-height: 112.5px;
        text-align: right;
        padding-top: 20%;
        margin-bottom: 120px;

        @media (max-width: 640px){
            font-size: 48px;
            line-height: 56.25px;
            text-align: center;
            padding-top: 30%;
            color: ${colorPallete.gray60};
        }
    }
    .search-bar{
        display: flex;
        flex-direction: row;
        gap:12px;
        @media (max-width: 640px){
            flex-direction: column;
            font-size: 16px;
            font-weight: 400;
               line-height: 20px;
        }

        input{
            padding: 1rem;
            border-radius: 100px;
            text-align: left;
            width: -webkit-fill-available;
        }

        button{
            padding: 1rem;
            background: ${colorPallete.primaryRed};
            color: ${colorPallete.primaryGray};
            width: 162px;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            border: 1px solid ${colorPallete.primaryGray};
            @media (max-width: 640px){
                width: 100%;
            }

            img{
                width: 21px;
                height: 21px;
                @media (max-width:640px){
                    width: 18px;
                    height: 18px;
                }
            }
            span{
                font-size: 21px;
                font-weight: 400;
                line-height: 24.61px;
                text-align: left;
                 @media (max-width:640px){
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                }
            }
        }
    }
}
`;
