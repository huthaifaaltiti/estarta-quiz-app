// tests reducer constants
import * as TESTS_CONSTANTS from "./constants";

// fetching the needed tests
export const FetchTests = (categorySent) => async (dispatch) => {
  try {
    dispatch({
      type: TESTS_CONSTANTS.TESTS_FETCH_DATA_REQUEST,
    });

    const response = await fetch("http://localhost:7000/Tests");
    const dataTests = await response.json();

    const findMatchedCategories = dataTests.filter(
      (findCategory) => findCategory.Category === categorySent
    );

    dispatch({
      type: TESTS_CONSTANTS.TESTS_FETCH_DATA_SUCCESS,
      payload: findMatchedCategories,
    });
  } catch (error) {
    dispatch({
      type: TESTS_CONSTANTS.TESTS_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
