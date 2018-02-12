import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import speakers from "./speakers"; 
import categories from "./categories";

const rootReducer = combineReducers({
    speakers, 
    categories
  },
  router:routerReducer);

export default rootReducer;