
import styled from 'styled-components';

export const Style = styled.div`
  margin-bottom: 1rem;
  .movie-list {
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    div {
        display: flex;
        justify-content: center;
    }
  
    @media (max-width: 768px) {
        justify-content: center;
        grid-template-columns: repeat(2, 1fr); 
      }  
    @media (max-width: 640px) {
        justify-content: center;
        grid-template-columns: 1fr;
      }
}
`;
