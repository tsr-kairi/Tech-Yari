import React from "react";
import Image from "next/image";
import Accordion from "../components/Accordion";
import accordionData from "../data/accordionData";

export default function addQuestion() {
  return (
    <addQuestion>
      <div className="bg-green-50 h-auto">
        <div className="w-[100%] flex flex-col sm:items-start items-center px-4 sm:px-24 gap-4">
          <div className="flex flex-col items-start mt-24 w-full">
            <h1 className="uppercase font-bold text-3xl text-[#000000]">
              Add Your Question
            </h1>

            {accordionData.map(({ title, content }) => {
              return <Accordion title={title} content={content} />;
            })}
          </div>
          <div className="w-[100%] flex sm:flex-row flex-col sm:items-start items-center mb-16 justify-between gap-4">
            {/* Left Side */}
            <left className="w-full sm:w-[60%] flex flex-col">
              {/* 1st Step */}
              <div className="flex flex-col items-start justify-center p-4 bg-green-100 rounded-lg">
                <input
                  class="w-full h-10 px-4 text-sm text-gray-800 placeholder-gray-300 border focus:shadow-outline"
                  type="text"
                  placeholder="Question Title"
                />
                <div class="relative inline-block w-full bg-gray-300 text-gray-700 mt-4">
                  <select class="w-full h-10 pl-3 pr-6 text-base border appearance-none focus:shadow-outline">
                    <option>Select Category</option>
                    <option>Another option</option>
                    <option>And one more</option>
                    <option>And one more</option>
                    <option>And one more</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h1 className="text-lg mt-4 text-gray-500">
                  Markdown Reference
                </h1>
                <div className="mt-4 w-full">
                  <textarea
                    className="w-full p-4"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write your answer in markdown"
                  ></textarea>

                  <button className="items-center font-medium justify-center uppercase mt-4 text-lg flex w-full transform hover:scale-95 duration-500 ease-in-out origin-center transition bg-[#66E5E5] hover:bg-green-400 py-3 px-5">
                    Submit your question
                  </button>
                </div>
              </div>
            </left>

            {/* Right Side */}
            <right className="w-full sm:w-[40%]">
              {/* 1st step */}
              <div className="w-full h-[70vh] relative">
                <Image
                  className=""
                  src="/features.jpg"
                  width={100}
                  height={100}
                  alt="features image"
                  layout="fill"
                />
              </div>
            </right>
          </div>
        </div>
      </div>
    </addQuestion>
  );
}
