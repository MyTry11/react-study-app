import React from "react";
import cl from "./MyModalChangeUser.module.css";

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: JSX.Element;
}
const MyModalChangeUser: React.FC<Props> = ({
  user,
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
