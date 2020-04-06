import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import Categories from "./Pages/Categories/Categories.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
