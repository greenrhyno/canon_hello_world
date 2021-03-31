import React from "react";
import {Route, IndexRoute, browserHistory} from "react-router";

import {Login, SignUp} from "@datawheel/canon-core";
import {Builder, Profile} from "@datawheel/canon-cms";

import App from "./App";
import Home from "./pages/Home";

function createRoute() {
  return (
    <Route path="/" component={App} history={browserHistory}>
      <IndexRoute component={Home} />
      <Route exact path="/cms" component={Builder}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route path="/profile/:slug/:id" component={Profile} />
    </Route>
  );
}

export default createRoute;
