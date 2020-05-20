import styled from "styled-components";
import { Card } from "react-bootstrap";

export const AboutPageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  background: #fff;

  h3 {
    padding-top: 2em;
  }

  h5 {
    color: #5f5d5d;
    span {
      color: #fc3c64;
    }
  }
`;

export const AboutDetailsContainer = styled.div`
  margin: 3em 6.5vw 4em;
  display: flex;
  justify-content: space-between;
`;

export const ReviewCards = styled(Card.Body)`
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
