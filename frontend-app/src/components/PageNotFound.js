// NotFound.js
import React from "react";
import styles from "./PageNotFound.module.css"; // Import your CSS file for styling

const NotFound = () => {
  return (
    <div className={styles["container"]}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button className="back-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
