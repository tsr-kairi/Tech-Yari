import React from "react";

export default function signIn() {
  return (
    <signIn>
      <div class="bg-grey-lighter min-h-screen flex flex-col bg-green-50">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-[#D4FFFF] px-6 py-8 rounded shadow-2xl text-black w-full">
            <h1 class="mb-8 text-3xl text-center font-bold">Sign In</h1>
            <input
              type="text"
              class="block border border-none w-full py-3 px-6 rounded-[50px] mb-4 
              shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              class="block border border-none w-full py-3 px-6 rounded-[50px] mb-4 
              shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              "
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              class="w-full items-center text-center uppercase py-2 rounded-[50px] bg-[#10F3F3] text-black hover:bg-green-dark focus:outline-none mt-6 transform hover:scale-110 duration-500 ease-in-out origin-center transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </signIn>
  );
}
