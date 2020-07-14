

import React from "react";

import {

  BrowserRouter as Router,

  Route,

  Redirect,

  Switch

} from "react-router-dom";

import VideoDetail from './VideoDetail';


export default () => (

  <Router>

    <Switch>
      <Route path="/VideoDetail" component={VideoDetail}></Route>
      <Redirect from="*" to="/"></Redirect>

    </Switch>

  </Router>

);