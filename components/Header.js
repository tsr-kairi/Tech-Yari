import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

function Header() {
  return (
    <header className="w-full z-50 fixed h-[70px] bg-green-200 top-0">
      <div className="flex justify-between items-center sm:px-24 px-12">
        <Link href="/">
          <a>
            <h1 className="text-[38px] sm:text-[42px]">
              TECH<span className="font-bold text-[#1FCACA]">YARI</span>
            </h1>
          </a>
        </Link>
        <div className="flex items-center">
          <Link href="/addQuestion">
            <a>
              <button
                className="bg-[#0A7B7B] text-white py-2 text-[20px]
          px-8 rounded-[50px] mr-8 items-center sm:flex hidden transform hover:scale-110 duration-500 ease-in-out origin-center transition"
              >
                <FaPlus className="mr-2 border-2 border-solid border-white rounded-full bg-transparent p-[2px]" />
                ADD QUESTION
              </button>
            </a>
          </Link>

          <Link href="/addQuestion">
            <a>
              <AiOutlinePlus className="sm:hidden block  mt-2 text-3xl border-[3px] border-green-200 border-solid hover:border-[#7fb6b6] rounded-full hover:text-[#7fb6b6]" />
            </a>
          </Link>

          <Link href="/editProfile">
            <a>
              <div className="flex items-center sm:mt-0 mt-1 border-4 border-green-200 border-solid hover:border-[#7fb6b6] rounded-full">
                <Image
                  className="rounded-full cursor-pointer"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  width={50}
                  height={50}
                  alt="user image"
                />
              </div>
            </a>
          </Link>
          {/* <FaBars className="sm:mt-0 mt-1 sm:hidden flex items-center ml-2" /> */}
        </div>
      </div>

      {/* Mobile */}
    </header>
  );
}

export default Header;
