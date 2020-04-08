import React, { Component } from "react";

import CoursePreview from "../../components/Course-Preview/Course-Preview.component";
import APP_DATA from "../../App.data";
import { CoursesPageContainer, CoursesHeader } from "./Courses.styles";

class CoursesPage extends Component {
  state = {
    coursesCollection: APP_DATA,
  };

  render() {
    const { coursesCollection } = this.state;
    return (
      <div>
        <CoursesHeader>
          <h4>Courses</h4>
        </CoursesHeader>
        <CoursesPageContainer>
          {coursesCollection.map(({id, ...otherCollectionProps}) => (
            <CoursePreview key={id} {...otherCollectionProps}/>
          ))}
        </CoursesPageContainer>
      </div>
    );
  }
}

export default CoursesPage;
