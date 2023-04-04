// react
import React, { useEffect, useState } from "react";
// react-redux
import { useSelector } from "react-redux";

// components
import TestElement from "../../components/TestElement";

// styles
import styles from "./styles.module.css";

export default function SingleTest({ category }) {
  const { tests, activeCategory } = useSelector((state) => state.testsReducer);
  const [currentSlide, setCurrentSlide] = useState(0);

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
  };

  return (
    <div className={styles.singleTestPage}>
      <div className={styles.cardsSliderCont}>
        <div
          className={styles.slider}
          style={{
            marginLeft: `-${currentSlide * 100}%`,
            transition: "margin-left 0.5s ease",
          }}
        >
          {tests?.map((testEl, index) =>
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
