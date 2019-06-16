import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";

const reducer = combineReducers({
  data,
  user
});

export default reducer;
