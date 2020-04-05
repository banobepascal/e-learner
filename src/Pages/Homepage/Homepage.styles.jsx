import styled from "styled-components";
import BackgroundImage from "../../assets/bg.jpg";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const BackgroundContent = styled.div`
  position: relative;
  margin-top: 8%;
  align-items: center;

  h1 {
      font-weight: 700;
  }
`;

export const StartedButton = styled.div`
  width: 160px;
  margin: 5% auto;

  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  }
`;
