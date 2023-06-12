import classes from "./RegisterForm.module.css";
import Modal from "./UI/Modal";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";

const isFourChars = (input) => {
  return input.trim().length >= 4;
};
const isEmailValid = (input) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return input.trim().match(validRegex);
};
const isValidPhone = (input) => {
  let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return input.trim().match(validRegex);
};

const RegisterForm = (props) => {
  const actionData = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const {
    input: firstNameInput,
    setInputTouched: setFirstNameInputTouched,
    inputIsValid: firstNameInputIsValid,
    inputHasError: firstNameInputHasError,
    inputClasses: firstNameInputClasses,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput(isFourChars);

  const {
    input: lastNameInput,
    inputIsValid: lasttNameInputIsValid,
    setInputTouched: setLastNameInputTouched,
    inputHasError: lastNameInputHasError,
    inputClasses: lastNameInputClasses,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput(isFourChars);

  const {
    input: emailInput,
    inputIsValid: emailInputIsValid,
    setInputTouched: setEmailInputTouched,
    inputHasError: emailInputHasError,
    inputClasses: emailInputClasses,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput(isEmailValid);

  const {
    input: phoneInput,
    inputIsValid: phoneInputIsValid,
    setInputTouched: setPhoneInputTouched,
    inputHasError: phoneInputHasError,
    inputClasses: phoneInputClasses,
    inputChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
  } = useInput(isValidPhone);

  const {
    input: queryInput,
    inputIsValid: queryInputIsValid,
    setInputTouched: setQueryInputTouched,
    inputHasError: queryInputHasError,
    inputClasses: queryInputClasses,
    inputChangeHandler: queryInputChangeHandler,
    inputBlurHandler: queryInputBlurHandler,
  } = useInput(isFourChars);

  const onFormSubmitHandler = (events) => {
    events.preventDefault();
    setFirstNameInputTouched(true);
    setLastNameInputTouched(true);
    setEmailInputTouched(true);
    setPhoneInputTouched(true);
    setQueryInputTouched(true);
    if (
      !firstNameInput &&
      !lastNameInput &&
      !emailInput &&
      !phoneInput &&
      !queryInput
    ) {
      return;
    }
  };

  let formIsValid =
    firstNameInputIsValid &&
    lasttNameInputIsValid &&
    emailInputIsValid &&
    phoneInputIsValid &&
    queryInputIsValid;

  const form = (
    <Form
      method="post"
      className={classes["form-contol"]}
      // onSubmit={onFormSubmitHandler}
    >
      <div className={classes.name}>
        <div className={firstNameInputClasses}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameInputHasError && <p>First Name is not valid.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && <p> Last Name is not valid.</p>}
        </div>
      </div>

      <div className={emailInputClasses}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && <p> Email is not valid.</p>}
      </div>

      <div className={phoneInputClasses}>
        <input
          type="text"
          name="phoneno"
          placeholder="Phone no."
          onChange={phoneInputChangeHandler}
          onBlur={phoneInputBlurHandler}
        />
        {phoneInputHasError && <p> Phone no. is not valid.</p>}
      </div>

      <div className={queryInputClasses}>
        <textarea
          name="query"
          placeholder="Type Your Query"
          onChange={queryInputChangeHandler}
          onBlur={queryInputBlurHandler}
        />
        {queryInputHasError && <p> Query is not valid.</p>}
      </div>

      <div className={classes["form-actions"]}>
        <button
          onClick={props.onClose}
          className={`${classes.cancel} ${classes.btn}`}
        >
          Close
        </button>
        <button
          type="submit"
          disabled={!formIsValid || isSubmitting}
          className={`${classes.confirm} ${classes.btn}`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </Form>
  );

  const successFormSubmission = (
    <div className={classes.success}>
      <h5>Submitted successfully!!!</h5>
      <button
        onClick={props.onClose}
        className={`${classes.cancel} ${classes.btn}`}
      >
        Close
      </button>
    </div>
  );

  return (
    <>
      {!actionData && form}
      {actionData && successFormSubmission}
    </>
  );
};

export default RegisterForm;

const action = async ({ request }) => {
  const formData = await request.formData();

  const formatData = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phoneno"),
    query: formData.get("query"),
  };

  const response = fetch(
    "https://innovation-8d5d8-default-rtdb.firebaseio.com//userDataRecords.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formatData),
    }
  );
  return response;
};

export { action };
