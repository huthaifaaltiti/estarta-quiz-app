// react
import React, { useEffect, useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// creator functions
import { checkTestAnswer } from "../../redux/Reducers/testReducer/actions";

// styles
import styles from "./styles.module.css";

export default function TestElement({ testEl }) {
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.testsReducer);


  function handleChoiceClicked(selectedChoice, testId) {
    dispatch(checkTestAnswer(selectedChoice, testId));
  }

  return (
    <div className={styles.testElementBody}>
      <div className={styles.testElementQues}>
        <p>{testEl?.Question}</p>
      </div>

      <div className={styles.testElementChoices}>
        {testEl?.Choices?.map((choice, index) => (
          <span className={styles.choicesCont} key={index}>
            <button onClick={() => handleChoiceClicked(choice, testEl?.id)}>
              {choice}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
