import React from "react";
interface Option {
  value: string;
  name: string;
}

interface Props {
  options: Option[];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
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
      onChange={(event) => onChange(event.target.value)}
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
