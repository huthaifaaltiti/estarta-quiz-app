// react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// components
import TestElement from "../../components/TestElement";

// styles
import styles from "./styles.module.css";

export default function SingleTest({ category }) {
  const { tests, activeCategory } = useSelector((state) => state.testsReducer);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nav = useNavigate();

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => {
      // don't let the counter go below 0 (the first slide)
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      // don't let the counter go beyond 9 (the last slide)
      if (prev === 9) return prev;
      return prev + 1;
    });

    if (currentSlide === 9) {
      nav("/");
    }
  };

  return (
    <div className={styles.singleTestPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Quizy ${activeCategory} Test`}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <div className={styles.cardsSliderCont}>
        <div
          className={styles.slider}
          style={{
            marginLeft: `-${currentSlide * 100}%`,
            transition: "margin-left 0.5s ease",
          }}
        >
          {tests.map((testEl, index) =>
            testEl?.Category === activeCategory ? (
              <div className={styles.sliderItem}>
                <TestElement testEl={testEl} key={index} />
              </div>
            ) : (
              ""
            )
          )}
        </div>

        {/* Buttons container */}
        <div className={styles.btnsCont}>
          <button onClick={handlePrevSlide} class={styles.sliderPrev}>
            Prev
          </button>
          <button onClick={handleNextSlide} class={styles.sliderNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
