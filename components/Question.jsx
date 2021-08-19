import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaBuffer } from "react-icons/fa";
import Tag from "./Tag";

function Question(props) {
  return (
    <div className="mt-10 flex flex-col sm:w-[800px] sm:h-[150px] h-[210px] bg-white items-start justify-center shadow-md rounded-2xl px-4">
      <h4 className="text-base font-medium">{props.title}</h4>
      <p className="text-xs mt-4 text-gray-500">{props.description}</p>
      <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between w-full mt-4">
        <div className="flex items-center gap-4 sm:gap-4 cursor-pointer">
          <span className="flex items-center">
            <FaBuffer /> <small>{props.ans} Ans</small>
          </span>
          <span className="flex items-center text-green-700 hover:text-[#1FCACA]">
            <AiOutlineLike /> <small>{props.like}</small>
          </span>
          <span className="flex items-center text-red-700 hover:text-[#1FCACA]">
            <AiOutlineDislike /> <small>{props.dislikes}</small>
          </span>
          <span>
            <AiOutlineHeart className="hover:text-[#1FCACA]" />
          </span>
        </div>
        <div className="flex gap-4 sm:gap-3 sm:mt-0 mt-2">
          {props.tags.map((tag) => {
            return <Tag tag={tag} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
