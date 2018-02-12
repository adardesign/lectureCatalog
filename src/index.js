import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import createHistory from 'history/createBrowserHistory';

// import { connect } from 'react-redux';

// import '../css/styles.css';
import Collection from "./components/Collection";
import Home from "./pages/index";
import Speakers from "./pages/speakers";

//import Logo from '../assets/images/logo.png'; // Importing image -> ADDED IN THIS STEP
 const Routes = () => (
   <Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/speakers" component={Speakers}/>
     </div>
   </Router>
 )

render(<Routes />, document.getElementById('app'));