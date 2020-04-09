import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategoriesSections } from "../../redux/categories/categories.selectors";
import CoursePreview from "../Course-Preview/Course-Preview.component";
import { CoursesPageContainer, CoursesHeader } from "./Courses.styles";

const CoursesOverview = ({categories}) => {
  return (
    <div>
      <CoursesHeader>
        <h4>Courses</h4>
      </CoursesHeader>
      <CoursesPageContainer>
        {categories.map(({ id, ...otherCollectionProps }) => (
          <CoursePreview key={id} {...otherCollectionProps} />
        ))}
      </CoursesPageContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesSections,
});
export default connect(mapStateToProps)(CoursesOverview);
