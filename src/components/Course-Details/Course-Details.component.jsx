import React from "react";

import HeaderImg from "../Header-Img/Header-Img.component";
import CustomButton from "../Custom-Button/Custom-Button.component";
import {
  CourseDetailsContainer,
  CourseNavbar,
  NavbarTabs,
  DescriptionContainer,
  CurriculumnContainer,
  CourseContent,
  StatusButton,
  ReviewsContainer,
  ReviewsContent,
  ReviewTitleContainer,
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
        <DescriptionContainer>
          <h4>About Course</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            possimus consequatur et qui, dolor placeat est nisi mollitia vel
            alias expedita, itaque suscipit facilis aut magnam saepe non neque
            quas.
          </p>
        </DescriptionContainer>
        <CurriculumnContainer>
          <h4>Course Outline</h4>
          <CourseContent>
            <p>Introduction Lesson</p>
            <StatusButton>
              <CustomButton>Start</CustomButton>
            </StatusButton>
          </CourseContent>
          <CourseContent>
            <p>Basics of HTML</p>
            <StatusButton>
              <CustomButton>Start</CustomButton>
            </StatusButton>
          </CourseContent>
        </CurriculumnContainer>
        <ReviewsContainer>
          <ReviewsContent>
            <ReviewTitleContainer>
              
            </ReviewTitleContainer>
          </ReviewsContent>
        </ReviewsContainer>
      </CourseDetailsContainer>
    </div>
  );
};

export default CourseDetails;
