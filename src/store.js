import React from "react";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers } from 'redux'
import { browserHistory } from 'react-router'

import rootReducer from "./reducers/index"

// Add the reducer to your store on the `routing` key


const defaultState = {
	speakers:[
		{
			id:"1",
			name:"Rabbi YY-jackabson",
			lectures:515
		},
		{
			id:"2",
			name:"Rabbi Avrahm M. Malach",
			lectures:515
		}
	],
  categories:[
    {
      id:"1",
      name:"parsha",
      img:"/parsha.jpg"
    }
  ]
};

export const store = createStore(rootReducer, defaultState);
// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);

