import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div className="w-full h-full  pt-1">
      <div className="textstructure mt-37 px-15">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker flex items-center">
              {index === 1 ? (
                <div className="box mb-4 w-[140px] h-[90px] ml-5 bg-zinc-500 rounded-lg"></div>
              ) : (
                ""
              )}
              <h1 className="uppercase ml-5 font-[bebasNeue] leading-[7vw] font-bold text-9xl ">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-32 px-10 py-3 font-[inter] text-zinc-700 flex justify-between items-center">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p className="text-lg">{item}</p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-5 py-2 border-[1px] uppercase rounded-full">start the project</div>
          <div className="w-10 h-10 border-[1px] rounded-full flex justify-center items-center">
            <span className="rotate-[-45deg] text-2xl">
            <IoArrowForwardSharp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
