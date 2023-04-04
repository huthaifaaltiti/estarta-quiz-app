// react
import React, { useEffect, useState, useRef } from "react";
// react-redux
import { useSelector } from "react-redux";

// components
import TestElement from "../../components/TestElement";

// styles
import styles from "./styles.module.css";

export default function SingleTest() {
  const { tests } = useSelector((state) => state.testsReducer);

  const checkSolvedTests = tests.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.numOfSolvedTask || 0,
    0
  );

  console.log({ checkSolvedTests });
  console.log(tests);

  return (
    <div className={styles.singleTestPage}>
      {tests?.map((testEl, index) => (
        <TestElement testEl={testEl} key={index} />
      ))}
    </div>
  );
}
