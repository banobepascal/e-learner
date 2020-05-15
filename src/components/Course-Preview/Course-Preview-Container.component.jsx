import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCoursesLoaded } from "../../redux/courses/courses.selectors";

import Spinner from "../Spinner/Spinner.component";
import CoursePreview from "./Course-Preview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCoursesLoaded(state),
});

const CoursePreviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CoursePreview);

export default CoursePreviewContainer;
