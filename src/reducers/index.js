import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import speakers from "./speakers"; 
import categories from "./categories";
import collections from "./collections";

const rootReducer = combineReducers({
    speakers, 
    categories,
    collections,
    routing:routerReducer
  });

export default rootReducer;