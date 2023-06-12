import React from "react";
interface Option {
  value: string;
  name: string;
}

export type UserType = {
  name: string;
  email: string;
  phone: string;
  id: number;
  favourite?: boolean;
  index?: number;
};

export type UserT = "name" | "email" | "phone" | "id" | "favourite" | "index";

interface Props {
  options: Option[];
  defaultValue: string;
  value: UserT;
  onChange: (value: UserT) => void;
}
const MySelect: React.FC<Props> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select
      className="rounded-lg"
      value={value}
      onChange={(event) => onChange(event.target.value as UserT)}
    >
      <option value="value1">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
