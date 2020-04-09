import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage.component";
import CoursesOverview from "./components/Courses-Overview/Courses-Overview.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/courses" component={CoursesOverview} />
      </Switch>
    </div>
  );
}

export default App;
