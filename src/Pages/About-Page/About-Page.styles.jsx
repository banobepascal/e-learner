import styled from "styled-components";
import { Card } from "react-bootstrap";

export const AboutPageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;

  h3 {
    padding-top: 2em;
  }

  h5 {
    color: #5f5d5d;
    span {
      color: #fc3c64;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    h3 {
      font-size: 1.2em;
      padding: 2em 1em 0;
    }

    h5 {
      font-size: 1em;
    }
  }
`;

export const AboutDetailsContainer = styled.div`
  margin: 3em 6.5vw 4em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5em;

  @media screen and (min-width: 1824px) {
    padding: 0 20vw;
  }

  @media only screen and (max-device-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }

  @media only screen and (max-device-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutCards = styled(Card.Body)`
  box-shadow: 0 0 4px 0 rgba(17, 22, 26, 0.16),
    0 2px 4px 0 rgba(17, 22, 26, 0.08), 0 4px 8px 0 rgba(17, 22, 26, 0.08);

  i {
    font-size: 2em;
  }
  h4 {
    color: #fc3c64;
    font-size: 1rem;
    font-weight: bold;
    padding-top: 1em;
  }

  p {
    font-size: 0.9em;
    margin-top: 1em;
    line-height: 24px;
  }
`;
