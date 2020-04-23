import styled from "styled-components";
import { Card } from "react-bootstrap";

export const AuthButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  i {
    font-size: 1.2em;
  }
`;

export const SignUpContainer = styled.div`
  margin: 1em 0 2em;
  font-family: "Poppins", sans-serif;
`;

export const SignUpCard = styled(Card)`
  margin: 0 auto;
  width: 22rem;
  text-align: center;
`;

export const SignUpCardBody = styled(Card.Body)`
  padding: 2.5em;

  h3 {
    font-size: 24px;
  }

  p {
    padding-top: 1.5em;
    color: #7c7c7c;
    font-size: 0.9em;

   span Link {
      color: #7c7c7c;

      &:hover {
        color: #fc3c64;
      }
    }
  }
`;
