import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";

import { broswerHistory } from "react-router";

import rootReducer from "./reducers";

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
	]
};


const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(broswerHistory, defaultState);

export default store;