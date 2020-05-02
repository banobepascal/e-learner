import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-Button/Custom-Button.component";
import HeaderImg from "../Header-Img/Header-Img.component";
import CourseDescription from "../Course-Description/Course-Description.component";
import CourseCurriculumn from "../Course-Curriculumn/Course-Curriculumn.component";
import CourseReviews from "../Course-Reviews/Course-Reviews.component";

import {
  enrollInCourse,
} from "../../redux/courses/courses.actions";

import { CourseDetailsContainer } from "./Course-Details.styles";

const CourseDetails = ({ course, currentUser, enrollInCourse, quitCourse }) => {
  const { title, authorName, ratings, numberOfStudents, enroll } = course;
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
        {currentUser ? (
          <CustomButton onClick={() => enrollInCourse(course)}>
            {enroll ? "Enroll" : "Enrolled"}
          </CustomButton>
        ) : (
          <p>Log in to enroll in course</p>
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
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  enrollInCourse: (course) => dispatch(enrollInCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
