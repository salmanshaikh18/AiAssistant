import React from "react";
import { assets } from "../../assets/assets";
import { FaCode, FaMicrophone, FaRegCompass } from "react-icons/fa6";
import { IoBulbOutline, IoSend } from "react-icons/io5";
import { FaCodeBranch, FaRegMessage } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { BiPhotoAlbum } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";

const Main = () => {
  const gradient = {
    background: "-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="main flex-1 min-h-screen overflow-hidden relative bg-[#131314] text-zinc-200">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] ">
        <p>Ai-Assistant</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        <div className="greet mx-[50px] font-medium p-[20px] text-[#444746]">
          <p>
            <span style={gradient} className="text-6xl">
              Hello, Dev.
            </span>
          </p>
          <p className="text-6xl">How can I help you today?</p>
        </div>
        <div className="cards flex flex-wrap justify-center items-center gap-[15px] p-[20px] mt-8">
          <div className="card bg-[#1E1F20] hover:bg-[#393B3D] transition-all ease-in-out duration-300 rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] h-[200px] cursor-pointer">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            {/* <img src={assets.compass_icon} alt="" /> */}
            <FaRegCompass className=" bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
          </div>
          <div className="card bg-[#1E1F20] rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] h-[200px] hover:bg-[#393B3D] transition-all ease-in-out duration-300 cursor-pointer">
            <p>Briefly summarize this concept: urban planning</p>
            {/* <img src={assets.bulb_icon} alt="" /> */}
            <IoBulbOutline className="bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
          </div>
          <div className="card bg-[#1E1F20] rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] h-[200px] hover:bg-[#393B3D] transition-all ease-in-out duration-300 cursor-pointer">
            <p>Brainstorm team bonding activities for our work retreat</p>
            {/* <img src={assets.message_icon} alt="" /> */}
            {/* <FaRegMessage className="text-[4px] bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" /> */}
            <TiMessage className=" bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
          </div>
          <div className="card bg-[#1E1F20] rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] h-[200px] hover:bg-[#393B3D] transition-all ease-in-out duration-300 cursor-pointer">
            <p>Tell me about React js and React native</p>
            {/* <img src={assets.code_icon} alt="" /> */}
            <FaCode className=" bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box flex justify-between items-center my-4">
            <input
              type="text"
              className="py-4 px-6 border-none outline-none w-full text-white bg-[#1E1F20] rounded-l-full"
              placeholder="Enter a prompt here..."
            />
            <div className="flex text-2xl gap-4 bg-[#1E1F20] py-4 px-6 rounded-r-full">
              {/* <img src={assets.gallery_icon} alt="" /> */}
              <GrGallery className="cursor-pointer" />
              {/* <img src={assets.mic_icon} alt="" /> */}
              <FaMicrophone className="cursor-pointer" />
              {/* <img src={assets.send_icon} alt="" /> */}
              <IoSend className="cursor-pointer" />
            </div>
            
          </div>
          {/* <div className="relative bottom-2">
              <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so
                double-check its responses. Your privacy & Gemini Apps
              </p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
