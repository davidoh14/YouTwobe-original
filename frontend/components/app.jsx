import React from "react";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { Route } from "react-router";
import nav_bar_container from "./nav/nav_bar_container";

const App = () => (
    <div>
        <header>
            <h1>YouTwobe</h1>
            <Route exact path='/' component={nav_bar_container} />
            <AuthRoute exact path="/login" component={login_form_container} />
            <AuthRoute exact path="/signup" component={signup_form_container} />
        </header>
    </div>
); 

export default App;