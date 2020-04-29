import styled from "styled-components";
import { Card } from "react-bootstrap";

export const SignInContainer = styled.div`
  margin-top: 2em;
  font-family: "Poppins", sans-serif;
`;

export const SignInCard = styled(Card)`
  margin: 0 auto;
  width: 22rem;
  text-align: center;
`;

export const SignInCardBody = styled(Card.Body)`
  padding: 2.5em;

  h3 {
    font-size: 24px;
  }

  p {
    padding-top: 1.5em;
    color: #7c7c7c;
    font-size: 0.9em;

    a {
      color: #7c7c7c;

      &:hover {
        color: #fc3c64;
      }
    }
  }

  h6 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
    line-height: 0.1em;
    margin: 1.5em 0;

    span {
      color: #7c7c7c;
      padding: 0 10px;
      background: #fff;
    }
  }
`;

