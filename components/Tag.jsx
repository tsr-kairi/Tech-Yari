import React from "react";

function Tag(props) {
  return (
    <a
      href="#"
      className="bg-gray-300 text-black py-[1px] shadow-2xl px-3 rounded-[50px] text-[10px] sm:text-xs border-2 border-transparent border-solid hover:border-[#7fb6b6]"
    >
      {props.tag}
    </a>
  );
}

export default Tag;
