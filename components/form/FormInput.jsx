import React, { useState } from "react";

function FormInput(props) {
  // const [value, setValue] = useState("");
  // console.log(value);

  return (
    <input
      type={props.type}
      class="block border border-none w-full py-3 px-6 rounded-[50px] mb-4 
              shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              "
      name={props.name}
      placeholder={props.placeholder}
      // onKeyUp={(e) => setValue(e.target.value)}
    />
  );
}

export default FormInput;
