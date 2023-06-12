import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FindUser: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className="w-5/6 rounded-lg p-2"
      type="text"
      placeholder="Find user"
      value={value}
      onChange={onChange}
    />
  );
};

export default FindUser;
