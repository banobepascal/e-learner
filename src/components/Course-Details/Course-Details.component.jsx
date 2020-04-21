import React from "react";

import HeaderImg from "../Header-Img/Header-Img.component";
import CourseDescription from "../Course-Description/Course-Description.component";
import CourseCurriculumn from "../Course-Curriculumn/Course-Curriculumn.component";
import CourseReviews from "../Course-Reviews/Course-Reviews.component";
import { CourseDetailsContainer } from "./Course-Details.styles";

const CourseDetails = ({ course }) => {
  const { title, authorName, ratings, numberOfStudents } = course;
  return (
    <div>
      <HeaderImg isCourseDetails>
        <h2>{title}</h2>
        <p>
          Created by <span> {authorName}</span>
        </p>
        <p>
        <i className="fa fa-star" aria-hidden="true"></i> {ratings} <span>{numberOfStudents} students enrolled</span>
        </p>
      </HeaderImg>
      <CourseDetailsContainer>
        <CourseDescription {...course} />
        <CourseCurriculumn {...course} />
        <CourseReviews {...course} />
      </CourseDetailsContainer>
    </div>
  );
};

export default CourseDetails;
