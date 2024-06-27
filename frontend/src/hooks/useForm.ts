import { useState } from "react";

export const useForm = (initialValues: object) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChange];
};
