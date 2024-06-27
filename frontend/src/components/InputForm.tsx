type InputForm = {
  textLabel: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: () => void;
};

export const InputForm = ({
  textLabel,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputForm) => {
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
