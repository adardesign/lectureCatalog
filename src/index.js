import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import speakers from "./reducers/speakers"; 
import categories from "./reducers/categories";

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    speakers,
    categories,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)




// import '../css/styles.css';
import Collection from "./components/Collection";
import Home from "./pages/index";
import Speakers from "./pages/speakers";

//import Logo from '../assets/images/logo.png'; // Importing image -> ADDED IN THIS STEP
 const Routes = () => (
   <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/speakers" component={Speakers}/>
      </div>
    </Router>
   </Provider>
 )

render(<Routes />, document.getElementById('app'));