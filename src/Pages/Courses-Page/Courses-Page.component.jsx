import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCoursesStartAsync } from "../../redux/courses/courses.actions";
import { selectIsFetchingCourses } from "../../redux/courses/courses.selectors";
import CoursesOverview from "../../components/Courses-Overview/Courses-Overview.component";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { fetchCoursesStartAsync } = this.props;
    fetchCoursesStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CoursesOverview} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingCourses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoursesStartAsync: () => dispatch(fetchCoursesStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
