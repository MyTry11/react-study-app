import React, { useState } from "react";

const TestSelect = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
    //   console.log(isChecked)
  };
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
    </div>
  );
};

export default TestSelect;
