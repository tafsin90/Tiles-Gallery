"use client";

import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const handleLoginForm = (data) => {
console.log(data);

  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">email</legend>
          <input
            type="email"
            className="input border"
            placeholder="email"
            {...register("email")}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">password</legend>
          <input
            type="password"
            className="input border "
            placeholder="password"
            {...register("password")}
          />
        </fieldset>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
