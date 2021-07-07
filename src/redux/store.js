import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

export default createStore(
  reducer,composeWithDevTools(
  applyMiddleware(thunk, isDev ? logger : (s) => (n) => (a) => n(a)),
));
