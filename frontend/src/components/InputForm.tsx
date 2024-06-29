import { ChangeEvent } from "react";

interface InputFormProps {
  textLabel: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = ({
  textLabel,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputFormProps) => {
  return (
    <>
      <label htmlFor={name}>{textLabel}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
