import styled from "styled-components";

const StarWarsStyled = styled.section`
  background: ${({ theme }) => theme.colors.white};
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default StarWarsStyled;
