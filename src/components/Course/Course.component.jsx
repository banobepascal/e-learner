import React from "react";
import { Card } from "react-bootstrap";

import {
  CourseImage,
  CourseLink,
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
  slug
}) => {
  return (
    <Card>
      <CourseImage src={courseImageUrl} />
      <CourseDetails>
      <CourseLink to={`/courses/${slug}`}>
        <h1>{title}</h1>
      </CourseLink>
        <p>{category}</p>
        <StudentsAndRatings>
          <p>
            {numberOfStudents} <span>students</span>
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
