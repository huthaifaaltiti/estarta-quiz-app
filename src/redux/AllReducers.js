// redux
import { combineReducers } from "redux";

// reducers
import testReducer from "./Reducers/testReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  testReducer,
});

export default AllReducers;
