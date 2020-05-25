import styled from "styled-components";

export const MyCoursesPageContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const MyCoursesContainer = styled.div`
  margin: 2em 6.5vw 4em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;

  @media screen and (min-width: 1824px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
  }

  @media only screen and (max-device-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }

  @media only screen and (max-device-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
