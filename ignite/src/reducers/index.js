import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  name: gamesReducer,
});

export default rootReducer;
