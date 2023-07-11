import React from "react";
import { useForm } from "react-hook-form";
import "../../LoginForm.css";

import { useAuth } from "../../common/hooks";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { loginUser } = useAuth();

  const onHandleLogin = async (values) => {
    await loginUser(values);
  };

  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register({
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="inputPassword">Name</label>
        <input
          type="text"
          id="inputPassword"
          name="name"
          ref={register({ required: "Enter your name" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <button type="submit" onClick={handleSubmit(onHandleLogin)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
