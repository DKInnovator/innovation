import { useState } from "react";

import classes from "../Components/RegisterForm.module.css";

const useInput = (validationFun) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validationFun(input);
  const inputHasError = !inputIsValid && inputTouched;

  const inputChangeHandler = (events) => {
    setInput(events.target.value);
  };

  const inputBlurHandler = (events) => {
    setInputTouched(true);
  };

  const inputClasses = inputHasError ? classes.invalid : "";

  return {
    input,
    inputTouched,
    setInputTouched,
    inputIsValid,
    inputHasError,
    inputClasses,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
