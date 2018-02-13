import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { store, history } from './store';



// import '../css/styles.css';
import Collection from "./components/Collection";
import Home from "./pages/index";
import Speakers from "./pages/speakers";

//import Logo from '../assets/images/logo.png'; // Importing image -> ADDED IN THIS STEP
 const Routes = () => (
   <Provider store={store}>
    <Router history={history}>
      <div>
        <Collection/>
        <Route path="/" exact component={Home}/>
        <Route path="/speakers" component={Speakers}/>
      </div>
    </Router>
   </Provider>
 )

render(<Routes />, document.getElementById('app'));