import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./SideBar.css";
import { IoIosAdd, IoIosHelpCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMessage } from "react-icons/fa6";
import { MdHistory, MdOutlineSettings } from "react-icons/md";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar bg-zinc-900 text-white min-h-[100vh] inline-flex flex-col justify-between px-2 sm:px-4 py-[15px]">
      <div className="top text-white">
        {/* <img className='menu w-[20px] block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" /> */}
        <GiHamburgerMenu onClick={() => setExtended(prev => !prev)} className="menu mb-10 mt-[4px] ml-2  block cursor-pointer text-[24px]" />
        <div className="new-chat text-white bg-zinc-800 mt-[10px] inline-flex items-center gap-[10px] rounded-[50px] text-[14px] cursor-pointer p-2 sm:px-6 hover:bg-[#393B3D] transition-all ease-in-out duration-300">
          {/* <img className='w-[20px]' src={assets.plus_icon} alt="" /> */}
          <IoIosAdd className="text-[30px] text-zinc-300" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
            <div className="recent-entry bg-[#004A77] transition-all ease-in-out duration-300 hover:bg-[#112f42] text-white flex items-center px-6 py-2 gap-[10px] cursor-pointer rounded-[50px] justify-center">
              {/* <img className='text-white w-[20px]' src={assets.message_icon} alt="" /> */}
              <FaRegMessage className="text-[20px]" />
              <p className="text-sm w-full">What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col gap-2">
        <div className="bottom-item recent-entry flex gap-[15px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-800 p-2 rounded-[50px] items-center justify-start">
          {/* <img className='w-[20px] text-zinc-100' src={assets.question_icon} alt="" /> */}
          <IoIosHelpCircleOutline className="text-[20px] ml-1 sm:ml-0 text-zinc-300" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex gap-[15px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-800 p-2 rounded-[50px] items-center justify-start">
          {/* <img className='w-[20px]' src={assets.history_icon} alt="" /> */}
          <MdHistory className="text-lg ml-1 sm:ml-0" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex gap-[15px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-800 p-2 rounded-[50px] items-center justify-start">
          {/* <img className='w-[20px]' src={assets.setting_icon} alt="" /> */}
          <MdOutlineSettings className="text-lg ml-1 sm:ml-0" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
