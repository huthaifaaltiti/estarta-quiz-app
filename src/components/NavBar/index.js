// react
import React from "react";
// react-router-dom
import { NavLink, Link } from "react-router-dom";

// styles
import styles from "./styles.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBarBody}>
      <nav>
        <Link className={styles.LogoCont}>
          <span>Q</span>
          <span>uizy</span>
        </Link>
        <span>
          <NavLink className={styles.navLink} to="/">
            Dashboard
          </NavLink>
        </span>
      </nav>
    </div>
  );
}
