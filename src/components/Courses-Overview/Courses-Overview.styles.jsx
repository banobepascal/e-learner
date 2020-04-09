import styled from "styled-components";
import Background from "../../assets/bg.jpg";

export const CoursesPageContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const CoursesContainer = styled.div`
 margin: 4em 6.5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
`;

export const CoursesHeader = styled.div`
  height: 40vh;
  background: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  font-family: "Poppins", sans-serif;

  h4 {
    padding-top: 10%;
    text-transform: uppercase;
    font-weight: bold;
    color: #fc3c64;
  }
`;
