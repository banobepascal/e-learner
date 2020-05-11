import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListGroupContainer = styled(ListGroup)`
  border: 1px solid #ededed;
  background-color: #fff;
  margin-top: 1em;
`;

export const CourseImage = styled.img`
  height: 30vh;
  width: 20%;
  border: 0;
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
  padding: 20px 33px 20px;

  p {
    padding-top: 10px;
    color: #5f5d5d;
  }
`;

export const TitleAndRatings = styled(Card.Body)`
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
`;

export const Line = styled.hr`
  margin: 0;
`;

export const AuthorContainer = styled.div`
  p {
    color: #bbb;

    &:hover {
      color: #fc3c64;
      cursor: pointer;
    }
  }
`;
