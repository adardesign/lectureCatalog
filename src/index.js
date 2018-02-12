import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'

import { Provider } from "react-redux"

import '../css/styles.css';
import App from "./pages/index";

//import Logo from '../assets/images/logo.png'; // Importing image -> ADDED IN THIS STEP
const router = (
  <Router>
    <Route path="/" Component={App}></Route>
  </Router>
)


export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react

      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
