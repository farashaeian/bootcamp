import styled from 'styled-components';
import { colorPallete } from '../../style/theme';

export const Style = styled.div`
    .notfound{
        text-align: center;
        font-weight: 700;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .warning-title{
            font-size: 128px;
            line-height: 150px;
            color: ${colorPallete.primaryGray};
            @media (max-width: 768px) {
                font-size: 96px;
                line-height: 112.5px;
            }
        }
        .warning-caption{
            font-size: 48px;
            line-height: 56.25px;
            color: ${colorPallete.primaryRed};
            @media (max-width: 768px) {
                font-size: 40px;
                line-height: 46.88px;
            }
        }
}`;
