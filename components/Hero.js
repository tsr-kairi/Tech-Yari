import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaBuffer } from "react-icons/fa";
import Question from "./Question";
import QData from "../data/questions";
import Link from "next/link";

function Hero() {
  return (
    <hero>
      <div className="flex flex-col items-center justify-center sm:px-24 px-6">
        <form className="flex items-center justify-evenly sm:w-[70%] w-[90%] border border-green-500 bg-green-100 rounded-[50px] mt-40">
          <input
            className="py-3 px-8 sm:px-0 outline-none rounded-l-[50px] sm:w-[70%] w-[100%] bg-green-100  shadow-2xl"
            type="text"
            placeholder="Search Question"
          />
          <FiSearch className="text-2xl sm:mr-0 mr-8 text-gray-400 hover:text-[#1FCACA]" />
        </form>

        <div className="sm:flex mt-8 sm:flex-row grid grid-cols-3 gap-4 cursor-pointer">
          <span className="bg-[#1FCACA] text-black py-[3px] px-4 transform hover:scale-110 duration-500 ease-in-out origin-center transition rounded-[50px] text-sm">
            Javascript
          </span>
          <span className="bg-[#1FCACA] text-black py-[3px] px-4 transform hover:scale-110 duration-500 ease-in-out origin-center transition rounded-[50px] text-sm">
            Django
          </span>
          <span className="bg-[#1FCACA] text-black py-[3px] px-4 transform hover:scale-110 duration-500 ease-in-out origin-center transition rounded-[50px] text-sm">
            Python
          </span>
          <span className="bg-[#1FCACA] text-black py-[3px] px-4 transform hover:scale-110 duration-500 ease-in-out origin-center transition rounded-[50px] text-sm sm:mt-0 mt-2">
            HTML
          </span>
          <span className="bg-[#1FCACA] text-black py-[3px] px-4 transform hover:scale-110 duration-500 ease-in-out origin-center transition rounded-[50px] text-sm sm:mt-0 mt-2">
            React Js
          </span>
          <span className="bg-[#1FCACA] text-black py-[3px] px-4 transform hover:scale-110 duration-500 ease-in-out origin-center transition rounded-[50px] text-sm sm:mt-0 mt-2">
            Vue Js
          </span>
        </div>

        <div className="flex flex-col mt-20 mb-16 sm:mx-0 mx-3">
          <h1 className="text-2xl font-bold">Trending QNA's</h1>
          {QData.map((q) => {
            return (
              <Link href="/questions">
                <a>
                  <Question
                    title={q.title}
                    description={q.description}
                    answer={q.answer}
                    like={q.like}
                    dislikes={q.dislikes}
                    tags={q.tags}
                  />
                </a>
              </Link>
            );
          })}

          <div className="flex justify-center items-center gap-8">
            <Link href="/signUp">
              <a>
                <button class="bg-[#1FCACA] hover:bg-blue-700 mt-6 text-white text-sm font-bold py-2 px-8 rounded-[50px]">
                  For Sign Up
                </button>
              </a>
            </Link>

            <Link href="/signIn">
              <a>
                <button class="bg-[#1FCACA] hover:bg-blue-700 mt-6 text-white text-sm font-bold py-2 px-8 rounded-[50px]">
                  For Sign In
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </hero>
  );
}

export default Hero;
