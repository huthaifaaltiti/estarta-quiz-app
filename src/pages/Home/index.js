// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// creator functions
import { FetchTests } from "../../redux/Reducers/testReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { TbMath } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";

export default function Home() {
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.testsReducer);

  function handleTestQuestions(categorySent) {
    dispatch(FetchTests(categorySent));

    // console.log({tests});
  }

  return (
    <div className={styles.homePage}>
      {/* Dashboard loaders containers */}
      <div className={`${styles.dashboard} ${styles.dashboardCont}`}>
        Dashboard
      </div>

      {/* Buttons dashboard container */}
      <div className={`${styles.dashboard} ${styles.dashboardBtnsCont}`}>
      {/* Math Btn */}
        <Link to={"test/math"}>
          <button
            className={styles.testBtn}
            onClick={() => handleTestQuestions("Math")}
          >
            <TbMath className={styles.testBtnIcon} />

            <span>Math Test</span>
          </button>
        </Link>

        {/* Chemistry Btn */}
        <Link to={"test/chemistry"}>
          <button
            className={styles.testBtn}
            onClick={() => handleTestQuestions("Chemistry")}
          >
            <SlChemistry className={styles.testBtnIcon} />

            <span>Chemistry Test</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
