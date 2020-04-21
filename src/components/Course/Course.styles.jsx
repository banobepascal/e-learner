import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CourseImage = styled(Card.Img)`
  height: 270px;
`;

export const CourseLink = styled(Link)`
  color: #000;

  h1 {
    font-size: 20px;
  }
  &:hover {
    text-decoration: none;
    color: #fc3c64;
  }
`;

export const CourseDetails = styled(Card.Body)`
  padding: 25px 33px 25px;

  p {
    color: #bbbbbb;
  }
`;

export const StudentsAndRatings = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  padding: 0;

  i {
    color: orange;
    span {
      font-family: "Poppins", sans-serif;
      color: #000;
      font-weight: normal;
    }
  }

  p {
    color: #fc3c64;
  }
`;

export const Line = styled.hr`
  margin: 0;
`;

export const AuthorContainer = styled(Card.Body)`
  display: flex;
  padding: 0.5em 2em;
  max-height: 4em;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  p {
    padding-top: 10px;
    padding-left: 30px;
    color: #5f5d5d;

    &:hover {
      color: #fc3c64;
      cursor: pointer;
    }
  }
`;
