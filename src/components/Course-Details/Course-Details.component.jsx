import React from "react";

import HeaderImg from "../Header-Img/Header-Img.component";
import CourseDescription from "../Course-Description/Course-Description.component";
import CourseCurriculumn from "../Course-Curriculumn/Course-Curriculumn.component";
import CourseReviews from "../Course-Reviews/Course-Reviews.component";
import {
  CourseDetailsContainer,
  CourseNavbar,
  NavbarTabs,
} from "./Course-Details.styles";

const CourseDetails = () => {
  return (
    <div>
      <HeaderImg></HeaderImg>
      <CourseNavbar>
        <NavbarTabs>Description</NavbarTabs>
        <NavbarTabs>Curriculumn</NavbarTabs>
        <NavbarTabs>Reviews</NavbarTabs>
      </CourseNavbar>
      <CourseDetailsContainer>
        <CourseDescription />
        <CourseCurriculumn />
        <CourseReviews />
      </CourseDetailsContainer>
    </div>
  );
};

export default CourseDetails;
