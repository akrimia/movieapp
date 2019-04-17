import { createStore, combineReducers } from "redux";
import card from "./reducers/card";
import search from "./reducers/search";
import rate from "./reducers/rate";

const store = createStore(
  combineReducers({
    card,
    search,
    rate
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());
export default store;
