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

  function handleChoiceClicked(selectedChoice, testId, testCategory) {
    dispatch(checkTestAnswer(selectedChoice, testId,testCategory));
  }

  return (
    <div className={styles.testElementBody}>
      <div className={styles.testElementQues}>
        <p>{testEl?.Question}</p>
      </div>

      <div className={styles.testElementChoices}>
        {testEl?.Choices?.map((choice, index) => (
          <span className={styles.choicesCont} key={index}>
            <button onClick={() => handleChoiceClicked(choice, testEl?.id, testEl?.Category)}>
              {choice}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
