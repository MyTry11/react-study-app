import React, { ReactNode } from "react";
import classes from "./MyInput.module.css";

const MyInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={classes.myInput}
      onBlur={props.onBlur}
      type="text"
      placeholder={props.placeholder}
      {...props}
    />
  );
};

export default MyInput;
