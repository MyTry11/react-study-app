import React from "react";
import cl from "./MyModalChangeUser.module.css";

interface Props {
  children: JSX.Element;
  modalChangeUser: boolean;
  setModalChangeUser: (modalChangeUser: boolean) => void;
}
const MyModalChangeUser: React.FC<Props> = ({
  modalChangeUser,
  setModalChangeUser,
  children,
}) => {
  const rootClassesChangeUser = [cl.myModalChangeUser];
  if (modalChangeUser) {
    rootClassesChangeUser.push(cl.active);
  }

  return (
    <div
      className={`${rootClassesChangeUser.join(" ")} `}
      onClick={() => setModalChangeUser(false)}
    >
      <div
        className={cl.myModalContentChangeUser}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModalChangeUser;
