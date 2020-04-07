import React from "react";
import { Card } from "react-bootstrap";
import {
  CourseContainer,
  CourseImage,
  CourseDetails,
  CourseTitle,
  StudentsAndRatings,
  Line,
  AuthorContainer,
  AuthorImg,
  AuthorName,
} from "./Course.styles";

const Course = ({
  courseImageUrl,
  title,
  description,
  numberOfStudents,
  authorImageUrl,
  authorName,
  ratings
}) => {
  return (
    <CourseContainer>
    <Card>
      <CourseImage variant="top" src={courseImageUrl} />
      <CourseDetails>
        <CourseTitle>{title}</CourseTitle>
        <Card.Text>{description}</Card.Text>
        <StudentsAndRatings>
          <Card.Text style={{ color: "#fc3c64" }}>
            {numberOfStudents} <span>students</span>{" "}
          </Card.Text>
          <Card.Text>
            <i className="fa fa-star" aria-hidden="true">
              {" "}
              <span>{ratings}</span>
            </i>
          </Card.Text>
        </StudentsAndRatings>
      </CourseDetails>
      <Line />
      <AuthorContainer>
        <AuthorImg src={authorImageUrl} />
        <AuthorName>{authorName}</AuthorName>
      </AuthorContainer>
    </Card>
    </CourseContainer>
  );
};

export default Course;
