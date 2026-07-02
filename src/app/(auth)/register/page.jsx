"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const { register, handleSubmit } = useForm();

  const handleLoginForm = async (data) => {
    // console.log(data);
    const {name, email,password} = data;

    const { data:res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      callbackURL:"/"

    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">name</legend>
          <input
            type="text"
            className="input border"
            placeholder="name"
            {...register("name")}
          />
        </fieldset>
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

export default SignupPage;
