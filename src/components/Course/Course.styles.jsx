import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CourseContainer = styled.div`
padding-top: 2em;
`;

export const CourseImage = styled(Card.Img)`
  height: 270px;
`;

export const CourseDetails = styled(Card.Body)`
  padding: 25px 33px 25px;
`;

export const CourseTitle = styled(Card.Title)`
  &:hover {
    color: #fc3c64;
    cursor: pointer;
  }
`;

export const StudentsAndRatings = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const Line = styled.hr`
  margin: 0;
`;

export const AuthorContainer = styled(Card.Body)`
  display: flex;
  padding: 0.5em 2em;
`;

export const AuthorImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const AuthorName = styled(Card.Text)`
  padding-top: 10px;
  padding-left: 30px;
  color: #5f5d5d;
`;
