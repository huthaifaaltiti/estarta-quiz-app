// react
import React, { useEffect } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import TestLoader from "../../components/TestLoader/index";

// creator functions
import {
  FetchTests,
  SendCategory,
} from "../../redux/Reducers/testReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { TbMath } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { BsSpeedometer } from "react-icons/bs";

export default function Home() {
  // npx json-server --watch DataBase/data.json --port 7000
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.testsReducer);

  function handleTestQuestions(categorySent) {
    dispatch(SendCategory(categorySent));
  }

  function handleReset() {
    dispatch(FetchTests());
  }

  useEffect(() => {
    if (!tests || tests?.length === 0) {
      dispatch(FetchTests());
    }
  }, []);


  // filter out duplicates by category
  const categories = Array.from(new Set(tests.map((test) => test.Category)));

  return (
    <div className={styles.homePage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quizy Dashboard</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      {/* Dashboard loaders containers */}
      <div className={`${styles.dashboard} ${styles.dashboardCont}`}>
        {categories.map((category) => {
          const categoryTests = tests.filter(
            (test) => test.Category === category
          );
          const categoryNumOfSolvedQuestions = categoryTests.filter(
            (test) => test.isAnswered === true
          ).length;

          return (
            <div className={styles.categoryCont}>
              <h3>{category} Test</h3>

              <div className={styles.loaderCont}>
                <TestLoader
                  total={categoryTests.length}
                  progress={categoryNumOfSolvedQuestions}
                />
              </div>
            </div>
          );
        })}
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

        {/* Physics Btn */}
        <Link to={"test/Physics"}>
          <button
            className={styles.testBtn}
            onClick={() => handleTestQuestions("Physics")}
          >
            <BsSpeedometer className={styles.testBtnIcon} />

            <span>Physics Test</span>
          </button>
        </Link>

        {/* Rest tests container */}
        <div className={styles.resetBtnCont}>
          <button onClick={handleReset}>Reset Tests</button>
        </div>
      </div>
    </div>
  );
}
