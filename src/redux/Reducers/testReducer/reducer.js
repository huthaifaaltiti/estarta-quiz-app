// Tests Reducer Constants
import * as TESTS_CONSTANTS from "./constants";

// testsReducer state
const initialState = {
  tests: [],
  activeCategory: "",
  loading: false,
  error: null,
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

    case TESTS_CONSTANTS.TESTS_RESET_TESTS:
      return {
        ...state,
        tests: [],
      };

    case TESTS_CONSTANTS.TESTS_FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TESTS_CONSTANTS.TESTS_SEND_TEST_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };

    case TESTS_CONSTANTS.TESTS_SEND_TEST_ANSWER:
      const { selectedChoice, testId, testCategory } = action.payload;

      const updatedState = state.tests.map((test) =>
        test?.id === testId
          ? test?.Category === testCategory
            ? test?.Answer === selectedChoice
              ? { ...test, isAnswered: true, numOfSolvedTask: 1 }
              : test
            : test
          : test
      );

      return {
        ...state,
        tests: updatedState,
        activeCategory: testCategory,
      };

    default:
      return state;
  }
};

export default testsReducer;
