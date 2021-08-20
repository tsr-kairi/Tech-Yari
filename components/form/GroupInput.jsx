import React from "react";
import FormInput from "./FormInput";

function GroupInput() {
  return (
    <form className="flex gap-2">
      <FormInput type="text" name="firstName" placeholder="First Name" />
      <FormInput type="text" name="lastName" placeholder="Last Name" />
    </form>
  );
}

export default GroupInput;
