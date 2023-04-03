// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";

// styles
import styles from "./styles.module.css";

export default function SingleTest() {
  const { tests } = useSelector((state) => state.testsReducer);

  console.log(tests);

  return (
    <div className={styles.singleTestPage}>
      {tests?.map((testElement, index) => {
        <div key={index}>{testElement.id} </div>;

        <p>hi</p>
      })}
    </div>
  );
}
