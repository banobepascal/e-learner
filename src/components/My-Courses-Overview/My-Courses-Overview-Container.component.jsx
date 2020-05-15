import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsFetchingCourses} from '../../redux/courses/courses.selectors';
import Spinner from '../Spinner/Spinner.component';
import MyCourses from './My-Courses-Overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetchingCourses
  });
  
  const MyCoursesOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
  )(MyCourses);
  
  export default MyCoursesOverviewContainer;