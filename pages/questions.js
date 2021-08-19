import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Image from "next/image";

export default function questions() {
  return (
    <questions>
      <div className="bg-green-50 h-auto">
        <div className="w-[100%] flex sm:flex-row flex-col sm:items-start items-center justify-between px-4 sm:px-24 gap-4">
          {/* Left Side */}
          <left className="mt-24 w-full sm:w-[60%] flex flex-col">
            {/* 1st Step */}
            <div className="flex flex-col items-start justify-center p-4 bg-white">
              <h4 className="text-base font-medium">
                How to Define URL Patterns in Djnago 3.1?
              </h4>
              <div className="flex mt-4 justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-4 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-sm flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-sm text-gray-500">25-JAN-2021 22-41</div>
              </div>
              <p className="text-sm mt-4 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>
              <div className="flex items-start justify-between w-full mt-6">
                <div className="text-gray-500 text-sm sm:text-base">
                  20 Answers
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] rounded-[50px] px-3 text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd step */}

            <div className="flex flex-col mt-4 p-4 bg-white">
              <div className="flex justify-between w-full">
                <div className="text-xs sm:text-sm text-gray-500">
                  ANSWER THIS QUESTION!
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center border-4 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs sm:text-sm flex items-center gap-1 sm:gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400">Djnago Developer</small>{" "}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  className="w-full p-4"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write your answer in your markdown"
                ></textarea>
              </div>
              <div className="flex justify-between w-full mt-4">
                <div className="text-sm text-gray-400">Markdown reference</div>
                <button className="py-1 px-3 bg-green-700 text-white text-sm">
                  Post Your Answer
                </button>
              </div>
            </div>

            {/* 3rd Step */}
            <div className="flex flex-col items-start justify-center p-4 bg-white mt-4">
              <div className="flex mt-4 justify-between w-full">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center border-4 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs sm:text-sm flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  25-JAN-2021 22-41
                </div>
              </div>
              <p className="text-sm mt-4 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              </p>
              <p className="text-sm mt-4 text-gray-500">
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi{" "}
              </p>
              <p className="text-sm mt-4 text-gray-500">
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam
              </p>
              <div className="flex items-start justify-between w-full mt-6">
                <div className="flex items-center gap-4 sm:gap-4 cursor-pointer">
                  <span className="flex items-center text-green-700 hover:text-[#1FCACA]">
                    <AiOutlineLike /> <small>20</small>
                  </span>
                  <span className="flex items-center text-red-700 hover:text-[#1FCACA]">
                    <AiOutlineDislike /> <small>6</small>
                  </span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>

            {/* 4th Step */}
            <div className="flex flex-col items-start justify-center p-4 bg-white mt-4">
              <div className="flex mt-4 justify-between w-full">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center border-4 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs sm:text-sm flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  25-JAN-2021 22-41
                </div>
              </div>
              <p className="text-sm mt-4 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              </p>
              <p className="text-sm mt-4 text-gray-500">
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam
              </p>
              <div className="flex items-start justify-between w-full mt-6">
                <div className="flex items-center gap-4 sm:gap-4 cursor-pointer">
                  <span className="flex items-center text-green-700 hover:text-[#1FCACA]">
                    <AiOutlineLike /> <small>20</small>
                  </span>
                  <span className="flex items-center text-red-700 hover:text-[#1FCACA]">
                    <AiOutlineDislike /> <small>6</small>
                  </span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-xs hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>
          </left>

          {/* Right Side */}
          <right className="mt-24 w-[100%] sm:w-[40%]">
            {/* 1st step */}
            <div className="w-full h-[40vh] relative">
              <Image
                className=""
                src="/features.jpg"
                width={100}
                height={100}
                alt="features image"
                layout="fill"
              />
            </div>

            {/* 2nd step */}
            <h1 className="text-xl w-[45%] sm:w-[35%] mt-2 font-bold hover:border-b border-green-500">
              Trending QNA's
            </h1>
            <div className="flex flex-col items-start justify-center mt-4 p-4 bg-white">
              <h4 className="text-sm font-medium">
                How to Define URL Patterns in Djnago 3.1?
              </h4>
              <div className="flex mt-2 justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs text-gray-500">25-JAN-2021 22-41</div>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="flex items-start justify-between w-full mt-4">
                <div className="text-gray-500 text-sm">20 Answers</div>
                <div className="flex gap-4 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd Step */}

            <div className="flex flex-col items-start justify-center mt-4 p-4 bg-white">
              <h4 className="text-sm font-medium">
                How to Define URL Patterns in Djnago 3.1?
              </h4>
              <div className="flex mt-2 justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs text-gray-500">25-JAN-2021 22-41</div>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="flex items-start justify-between w-full mt-4">
                <div className="text-gray-500 text-sm">20 Answers</div>
                <div className="flex gap-4 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>

            {/* 4th Step */}

            <div className="flex flex-col items-start justify-center mt-4 p-4 bg-white">
              <h4 className="text-sm font-medium">
                How to Define URL Patterns in Djnago 3.1?
              </h4>
              <div className="flex mt-2 justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs text-gray-500">25-JAN-2021 22-41</div>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="flex items-start justify-between w-full mt-4">
                <div className="text-gray-500 text-sm">20 Answers</div>
                <div className="flex gap-4 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>

            {/* 5th step */}

            <div className="flex flex-col items-start justify-center mt-4 p-4 bg-white">
              <h4 className="text-sm font-medium">
                How to Define URL Patterns in Djnago 3.1?
              </h4>
              <div className="flex mt-2 justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs text-gray-500">25-JAN-2021 22-41</div>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="flex items-start justify-between w-full mt-4">
                <div className="text-gray-500 text-sm">20 Answers</div>
                <div className="flex gap-4 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>

            {/* 6th Step */}

            <div className="flex flex-col items-start justify-center mt-4 p-4 bg-white">
              <h4 className="text-sm font-medium">
                How to Define URL Patterns in Djnago 3.1?
              </h4>
              <div className="flex mt-2 justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <p className="text-xs flex items-center gap-3">
                    JHON DEO,{" "}
                    <small className="text-gray-400"> Djnago Developer</small>{" "}
                  </p>
                </div>
                <div className="text-xs text-gray-500">25-JAN-2021 22-41</div>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="flex items-start justify-between w-full mt-4">
                <div className="text-gray-500 text-sm">20 Answers</div>
                <div className="flex gap-4 sm:gap-3">
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Djnago
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    URL
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Patterns
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 text-black py-[1px] px-3 rounded-[50px] text-[10px] sm:text-[10px] hover:border border-[#1FCACA]"
                  >
                    Define
                  </a>
                </div>
              </div>
            </div>
          </right>
        </div>
      </div>
    </questions>
  );
}
