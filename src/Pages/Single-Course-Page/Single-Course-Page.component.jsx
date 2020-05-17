import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CoursePreviewContainer from "../../components/Course-Preview/Course-Preview-Container.component";
import { fetchCoursesStartAsync } from "../../redux/courses/courses.actions";

class SingleCoursePage extends React.Component {
  componentDidMount() {
    const { fetchCoursesStartAsync } = this.props;
    fetchCoursesStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          path={`${match.path}/:slug`}
          component={CoursePreviewContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoursesStartAsync: () => dispatch(fetchCoursesStartAsync()),
});

export default connect(null, mapDispatchToProps)(SingleCoursePage);
