import React from "react";
import FormInput from "./FormInput";

function LoginForm() {
  return (
    <div>
      <FormInput type="text" name="Email-Address" placeholder="Email Address" />
      <FormInput type="password" name="password" placeholder="Password" />
    </div>
  );
}

export default LoginForm;
