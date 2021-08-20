import React from "react";
import Form from "../components/form/SignUpForm";
export default function signUp(props) {
  return (
    <signUp>
      <div class="bg-grey-lighter min-h-screen flex flex-col bg-green-50 mt-4">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-[#D4FFFF] px-6 py-8 rounded shadow-2xl text-black w-full">
            <h1 class="mb-8 text-3xl text-center font-bold">Sign Up</h1>
            <Form />
          </div>
        </div>
      </div>
    </signUp>
  );
}
