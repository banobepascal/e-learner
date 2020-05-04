import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-Button/Custom-Button.component";

import { startLesson, enrollInCourse } from "../../redux/courses/courses.actions";

import { CourseContent } from "./Course-Lesson.styles";

const CourseLesson = ({ ...courseContent }) => {
  const { lesson, start } = courseContent;
  return (
    <CourseContent>
      <p>{lesson}</p>
      <CustomButton onClick={() => startLesson(courseContent)}>
        {start ? "Finish" : "Start"}
      </CustomButton>
    </CourseContent>
  );
};

const mapDispatchToProps = (dispatch) => ({
  courseContent: (courseContent) => dispatch(startLesson(courseContent)),
});

export default connect(null, mapDispatchToProps)(CourseLesson);
