import React, { FC } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
  id: number;
};
interface Props {
  onChange: (value: React.FormEvent<HTMLInputElement>) => void;
}

const SortUsers: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="mb-4" onChange={onChange}>
      <p className="mb-1">Sort users by</p>
      <input type="radio" value="name" name="type" /> Name
      <input type="radio" value="email" name="type" /> Email
      <input type="radio" value="phone" name="type" /> Phone
    </div>
  );
};

export default SortUsers;
