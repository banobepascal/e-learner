import styled from "styled-components";
import BackgroundImage from "../../assets/bg2.jpg";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 91vh;
  font-family: "Poppins", sans-serif;
  display: flex;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0 4em;
  justify-content: space-between;
`;

export const MainSection = styled.div`
  text-align: left;
  margin-top: 10%;
  padding-right: 10%;

  h1 {
    font-weight: 700;
    padding-top: 10%;
    color: #fff;
  }

  p {
      color: #f2f2f2;
  }
`;

export const StartedButton = styled.div`
  width: 160px;
`;
