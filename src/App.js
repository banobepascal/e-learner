import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import CoursesPage from "./Pages/Courses-Page/Courses-Page.component";
import SignInSignUp from './Pages/SignIn-SignUp-Page/SignIn-SignUp.component';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/courses" component={CoursesPage} />
        <Route exact path='/sign_in' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
