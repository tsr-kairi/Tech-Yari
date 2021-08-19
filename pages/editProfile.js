import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

export default function editProfile() {
  return (
    <editProfile>
      <div className="bg-green-50 h-auto">
        <div className="w-[100%] flex flex-col sm:items-start items-center px-4 sm:px-32 gap-4">
          <div className="flex flex-col items-start mt-36 mb-20 w-full">
            <div className="mt-4 flex flex-col items-center justify-center w-full p-8 rounded-lg bg-white">
              <div className="flex mt-4 justify-between w-full items-center">
                <div className="flex items-center justify-center">
                  <div className="hidden sm:flex items-center border-4 border-white border-solid hover:border-[#7fb6b6] rounded-full">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={100}
                      height={100}
                      alt="user image"
                    />
                  </div>
                  <div className="flex items-center border-4 border-white border-solid hover:border-[#7fb6b6] rounded-full sm:hidden">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      width={60}
                      height={60}
                      alt="user image"
                    />
                  </div>
                  <p className="sm:text-xl text-lg flex flex-col items-stretch justify-center ml-4">
                    Jhon Doe{" "}
                    <small className="text-gray-400 mr-1 sm:text-sm text-sm">
                      {" "}
                      Djnago Developer
                    </small>{" "}
                  </p>
                </div>
                <button className="text-xs sm:text-sm text-white bg-[#15BCBC] py-1 sm:px-7 px-5 rounded-[50px] transform hover:scale-110 duration-500 ease-in-out origin-center transition">
                  Edit Profile
                </button>
              </div>
              <form className="flex w-full gap-6 mt-8">
                {/* Left */}
                <div className="w-[50%] flex flex-col">
                  <input
                    class="w-full h-12 px-3 bg-[#F3F3F3] text-base placeholder-gray-400 border-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name"
                    autoComplete
                  />

                  <input
                    class="w-full h-12 px-3 mt-8 bg-[#F3F3F3] text-base placeholder-gray-400 border-none focus:shadow-outline"
                    type="text"
                    placeholder="Email Address"
                  />

                  <input
                    class="w-full h-12 px-3 mt-8 bg-[#F3F3F3] text-base placeholder-gray-400 border-none focus:shadow-outline"
                    type="text"
                    placeholder="Designation"
                  />
                </div>

                {/* Right */}
                <div className="w-[50%] flex flex-col">
                  <input
                    class="w-full h-12 px-3 text-base bg-[#F3F3F3] placeholder-gray-400 border-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name"
                  />

                  <input
                    class="w-full h-12 px-3 mt-8 text-base bg-[#F3F3F3] placeholder-gray-400 border-none focus:shadow-outline"
                    type="text"
                    placeholder="Phone Number"
                  />

                  <input
                    class="w-full h-12 px-3 mt-8 items-center text-base bg-[#F3F3F3] placeholder-gray-400 border-none focus:shadow-outline"
                    type="file"
                    placeholder="Profile Picture"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </editProfile>
  );
}
