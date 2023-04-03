// Tests Reducer Constants
import * as TESTS_CONSTANTS from "./constants";

// testsReducer state
const initialState = {
  tests: [],
  loading: false,
  error: null,
  activeCategory: {},
};

// testsReducer
const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TESTS_CONSTANTS.TESTS_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TESTS_CONSTANTS.TESTS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        tests: action.payload,
      };

    case TESTS_CONSTANTS.TESTS_FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default testsReducer;
