import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Nav from "./components/Nav";
import Videos from "./components/Videos";
import Splash from "./components/Splash";
import Movies from "./components/Movies";

/* import Food from "./containers/food";
import Movie from "./containers/movies"; */

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      {/* <Route path="/books/:id" exact component={} /> */}
        <Route path="/movie" component={Movies} />
        <Route path="/video" component={Videos} />
        <Route path="/" component={Splash} />
      </Switch>
    </div>
  </Router>
  
);

export default App;
