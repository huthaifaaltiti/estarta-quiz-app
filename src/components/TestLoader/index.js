// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function TestLoader({ progress, total }) {
  const width = `${(progress / total) * 100}%`;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderProgress} style={{ width }}>
        <div className={styles.loaderText}>{`${progress} out of ${total}`}</div>
      </div>
    </div>
  );
}
