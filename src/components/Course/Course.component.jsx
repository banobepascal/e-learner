import React from "react";
import { Card } from "react-bootstrap";

import {
  CourseImage,
  Enroll,
  CourseDetails,
  StudentsAndRatings,
  Line,
  AuthorContainer,
} from "./Course.styles";

const Course = ({
  courseImageUrl,
  title,
  category,
  numberOfStudents,
  authorImageUrl,
  authorName,
  ratings,
}) => {
  return (
    <Card>
      <CourseImage src={courseImageUrl} />
      <CourseDetails>
        <h1>{title}</h1>
        <p>{category}</p>
        <StudentsAndRatings>
          <p>
            {numberOfStudents} <span>students</span>{" "}
          </p>
          <i className="fa fa-star" aria-hidden="true">
            {" "}
            <span>{ratings}</span>
          </i>
        </StudentsAndRatings>
      </CourseDetails>
      <Line />
      <AuthorContainer>
        <img src={authorImageUrl} alt="" />
        <p>{authorName}</p>
      </AuthorContainer>
    </Card>
  );
};

export default Course;
