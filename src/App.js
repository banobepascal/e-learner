import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import SignIn from "./components/Sign-In/Sign-In.component";
import SignUp from "./components/Sign-Up/Sign-Up.component";
import CoursesPage from "./Pages/Courses-Page/Courses-Page.component";
import SingleCoursePage from "./Pages/Single-Course-Page/Single-Course-Page.component";
import MyCoursesPage from "./Pages/My-Courses-Page/My-Courses-Page.component";
import SearchResultPage from "./Pages/Search-Results/Search-Results.component";
import AboutPage from './Pages/About-Page/About-Page.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
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
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course" component={SingleCoursePage} />
          <Route path="/my_courses" component={MyCoursesPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
