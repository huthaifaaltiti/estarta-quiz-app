// react
import React, { useEffect, useState, useRef } from "react";
// react-redux
import { useSelector } from "react-redux";

// components
import TestElement from "../../components/TestElement";

// styles
import styles from "./styles.module.css";

export default function SingleTest({ category }) {
  const { tests, activeCategory } = useSelector((state) => state.testsReducer);

  return (
    <div className={styles.singleTestPage}>
      {tests?.map((testEl, index) =>
        testEl.Category === activeCategory ? (
          <TestElement testEl={testEl} key={index} />
        ) : (
          ""
        )
      )}
    </div>
  );
}
