import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {

    //button that is usable as a normal button 
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;
