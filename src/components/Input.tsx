type InputForm = {
  label: string;
  type: string;
  placeholder: string;
};

export const Input = ({ label, type, placeholder }: InputForm) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} />
    </>
  );
};
