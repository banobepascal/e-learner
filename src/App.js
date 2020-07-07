import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import SignIn from "./components/Sign-In/Sign-In.component";
import SignUp from "./components/Sign-Up/Sign-Up.component";
import CoursesPage from "./Pages/Courses-Page/Courses-Page.component";
import SingleCoursePage from "./Pages/Single-Course-Page/Single-Course-Page.component";
import MyCoursesPage from "./Pages/My-Courses-Page/My-Courses-Page.component";
import AboutPage from "./Pages/About-Page/About-Page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

class App extends Component {
  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/sign_in"
            render={() =>
              this.props.currentUser ? <Redirect to="/courses" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/sign_up"
            render={() =>
              this.props.currentUser ? <Redirect to="/courses" /> : <SignUp />
            }
          />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course" component={SingleCoursePage} />
          <Route path="/my_courses" component={MyCoursesPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
