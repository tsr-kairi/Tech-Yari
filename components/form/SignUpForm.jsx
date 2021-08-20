import React from "react";
import FormInput from "./FormInput";
import GroupInput from "./GroupInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  // firstName: yup.string().required(),
  // lastName: yup.string().required(),
  email: yup.string().email.required(),
  password: yup.string().min(4).max(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function SignUpForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <GroupInput />
      <FormInput
        type="text"
        name="email"
        placeholder="Email Address"
        ref={register}
      />
      <p>{errors.email?.message}</p>
      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      <p>{errors.password?.message}</p>

      <FormInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        ref={register}
      />
      <p>{errors.confirmPassword && "Password Should Match!"}</p>

      <button
        type="submit"
        class="w-full items-center text-center uppercase py-2 rounded-[50px] bg-[#10F3F3] text-black hover:bg-green-dark focus:outline-none mt-6 transform hover:scale-110 duration-500 ease-in-out origin-center transition"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
