import React, { ReactNode } from "react";
import classes from "./MyButton.module.css";
interface Props {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
