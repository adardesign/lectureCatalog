import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

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
const history = syncHistoryWithStore(browserHistory, store)
