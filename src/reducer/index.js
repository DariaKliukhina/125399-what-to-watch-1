import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";
import {reducer as reviews} from "./reviews/reviews";

const reducer = combineReducers({
  data,
  user,
  reviews
});

export default reducer;
