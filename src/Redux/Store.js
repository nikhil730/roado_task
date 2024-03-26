import { legacy_createStore } from "redux";
import { appReducer } from "./AppReducer";

export const store = legacy_createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
