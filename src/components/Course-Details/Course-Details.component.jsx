import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../Custom-Button/Custom-Button.component";
import HeaderImg from "../Header-Img/Header-Img.component";
import CourseDescription from "../Course-Description/Course-Description.component";
import CourseCurriculumn from "../Course-Curriculumn/Course-Curriculumn.component";
import CourseReviews from "../Course-Reviews/Course-Reviews.component";

import { enrollInCourse } from "../../redux/courses/courses.actions";
import  {selectCurrentUser} from '../../redux/user/user.selectors'

import { CourseDetailsContainer } from "./Course-Details.styles";

const CourseDetails = ({ course, currentUser, enrollInCourse }) => {
  const { title, authorName, ratings, numberOfStudents, enroll } = course;
  return (
    <div>
      <HeaderImg isCourseDetails>
        <h2>{title}</h2>
        <p>
          <i className="fa fa-star" aria-hidden="true"></i> {ratings}{" "}
          <span>{numberOfStudents} students enrolled</span>
        </p>
        <p>
          Created by <span> {authorName}</span>
        </p>
        {currentUser ? (
          <div>
            {enroll ? (
              <CustomButton>Enrolled</CustomButton>
            ) : (
              <CustomButton onClick={() => enrollInCourse(course)}>
                Enroll
              </CustomButton>
            )}
          </div>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  enrollInCourse: (course) => dispatch(enrollInCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
