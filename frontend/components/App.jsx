import React from "react";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router";
import Router from "react-router-dom";
import nav_bar_container from "./nav/nav_bar_container";
import PageNotFound from "./session/page_not_found";
import video_index_container from "./videos/video_index_container";


const App = () => (
  <div>
    <header>
      <Switch>
        <AuthRoute exact path="/login" component={login_form_container} />
        <AuthRoute exact path="/signup" component={signup_form_container} />
        <Route exact path='/' component={nav_bar_container} />
        <Route component={PageNotFound} />
      </Switch>
    </header>
  </div>
);

export default App;
