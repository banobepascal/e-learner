import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import SignIn from "./components/Sign-In/Sign-In.component";
import SignUp from "./components/Sign-Up/Sign-Up.component";
import CoursesPage from "./Pages/Courses-Page/Courses-Page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged((user) => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/sign_in" component={SignIn} />
          <Route exact path="/sign_up" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
