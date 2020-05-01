import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-Button/Custom-Button.component";
import HeaderImg from "../Header-Img/Header-Img.component";
import CourseDescription from "../Course-Description/Course-Description.component";
import CourseCurriculumn from "../Course-Curriculumn/Course-Curriculumn.component";
import CourseReviews from "../Course-Reviews/Course-Reviews.component";

import { enrollInCourse } from "../../redux/courses/courses.actions";

import { CourseDetailsContainer } from "./Course-Details.styles";

const CourseDetails = ({ course, enroll, enrollInCourse }) => {
  const { title, authorName, ratings, numberOfStudents } = course;
  return (
    <div>
      <HeaderImg isCourseDetails>
        <h2>{title}</h2>
        <p>
          Created by <span> {authorName}</span>
        </p>
        <p>
          <i className="fa fa-star" aria-hidden="true"></i> {ratings}{" "}
          <span>{numberOfStudents} students enrolled</span>
        </p>
        {enroll ? (
          <CustomButton onClick={() => enrollInCourse(course)}>
            Enroll
          </CustomButton>
        ) : ( 
          <CustomButton onClick={() => enrollInCourse(course)}>
            Quit course
          </CustomButton>
        )}
      </HeaderImg>
      <CourseDetailsContainer>
        <CourseDescription {...course} />
        <CourseCurriculumn {...course} />
        <CourseReviews {...course} />
      </CourseDetailsContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  enroll: state.enroll,
});

const mapDispatchToProps = (dispatch) => ({
  enrollInCourse: (course) => dispatch(enrollInCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
