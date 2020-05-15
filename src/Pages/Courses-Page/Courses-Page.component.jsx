import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CoursesOverviewContainer from "../../components/Courses-Overview/Courses-Overview-Container.component";

import { fetchCoursesStartAsync } from "../../redux/courses/courses.actions";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { fetchCoursesStartAsync } = this.props;
    fetchCoursesStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CoursesOverviewContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoursesStartAsync: () => dispatch(fetchCoursesStartAsync()),
});

export default connect(null, mapDispatchToProps)(CoursesPage);
