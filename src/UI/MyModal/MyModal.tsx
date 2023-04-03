import React from "react";
import cl from "./MyModal.module.css";

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: JSX.Element;
}

const MyModal: React.FC<Props> = ({ visible, setVisible, children }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={`${rootClasses.join(" ")} `}
      onClick={() => setVisible(false)}
    >
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      {/* <div className="bg-black text-2xl h-96">dsfsdfsdf</div> */}
    </div>
  );
};

export default MyModal;
