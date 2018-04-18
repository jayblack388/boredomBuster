import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Videos from "./components/Videos";
/* import Food from "./containers/food";
import Movie from "./containers/movies"; */

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      {/* <Route path="/books/:id" exact component={} />
      <Route path="/books" component={} /> */}

        <Route path="/" component={Videos} />
      </Switch>
    </div>
  </Router>
  
);

export default App;
