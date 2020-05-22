import styled from "styled-components";

export const CoursesPageContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const CoursesContainer = styled.div`
  margin: 2em 6.5vw 4em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;

  @media screen and (min-width: 1824px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
