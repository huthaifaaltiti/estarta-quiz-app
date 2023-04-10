// tests reducer constants
import * as TESTS_CONSTANTS from "./constants";

// fetching the needed tests depends on category
export const FetchTests = () => async (dispatch) => {
  try {
    dispatch({
      type: TESTS_CONSTANTS.TESTS_FETCH_DATA_REQUEST,
    });

    const response = await fetch("../../../../DataBase/data.json");
    const dataTests = await response.json();

    dispatch({
      type: TESTS_CONSTANTS.TESTS_FETCH_DATA_SUCCESS,
      payload: dataTests,
    });
  } catch (error) {
    dispatch({
      type: TESTS_CONSTANTS.TESTS_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const SendCategory = (categorySent) => (dispatch) => {
  dispatch({
    type: TESTS_CONSTANTS.TESTS_SEND_TEST_CATEGORY,
    payload: categorySent,
  });
};

export const checkTestAnswer = (selectedChoice, testId, testCategory) => (dispatch) => {
    dispatch({
      type: TESTS_CONSTANTS.TESTS_SEND_TEST_ANSWER,
      payload: { selectedChoice, testId, testCategory },
    });
  };
