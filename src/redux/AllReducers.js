// redux
import { combineReducers } from "redux";

// reducers
import testsReducer from "./Reducers/testReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  testsReducer,
});

export default AllReducers;
