import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsFetchingCourses } from '../../redux/courses/courses.selectors';
import Spinner from '../Spinner/Spinner.component';
import CoursesOverview from './Courses-Overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCourses
});

const CoursesOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CoursesOverview);

export default CoursesOverviewContainer;