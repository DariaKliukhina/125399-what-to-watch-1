import {combineReducers} from "redux";
import {reducer as data} from "./data/data";

import NameSpace from "./name-spaces";

const reducer = combineReducers({
  [NameSpace.DATA]: data
});

export default reducer;
