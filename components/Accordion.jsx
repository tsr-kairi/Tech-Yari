import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function Accordion(props) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div class="w-full">
      <div
        class="flex mt-4 justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <button
          class="flex justify-between bg-blue-600 w-full mt-4 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 text-sm focus:outline-none"
          type="button"
        >
          {props.title}
          <AiOutlinePlus className="text-3xl border-[3px] border-white border-solid hover:border-[#7fb6b6] rounded-full hover:text-[#7fb6b6]" />
        </button>
      </div>

      <p
        class={
          isActive
            ? "border px-4 py-3 my-2 text-gray-700 hidden" : "border px-4 py-3 my-2 text-gray-700"
        }
      >
        {props.content}
      </p>
    </div>
  );
}

export default Accordion;
