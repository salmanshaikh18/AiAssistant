import React from 'react'
import { assets } from '../../assets/assets'
import "./SideBar.css"
import { IoIosAdd, IoIosHelpCircleOutline } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegMessage } from 'react-icons/fa6'
import { MdHistory, MdOutlineSettings } from 'react-icons/md'

const SideBar = () => {
  return (
    <div className='sidebar bg-zinc-900 text-white min-h-[100vh] inline-flex flex-col justify-between px-4 py-[15px]'>
        <div className="top text-white">
            {/* <img className='menu w-[20px] block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" /> */}
            <GiHamburgerMenu className='menu w-[20px] mb-10 mt-[10px] block ml-[10px] cursor-pointer text-[20px]' />
            <div className="new-chat text-white bg-zinc-800 mt-[10px] inline-flex items-center gap-[10px] rounded-[50px] text-[14px] cursor-pointer px-6 py-2 hover:bg-[#393B3D] transition-all ease-in-out duration-300">
                {/* <img className='w-[20px]' src={assets.plus_icon} alt="" /> */}
                <IoIosAdd className='text-[30px] text-zinc-300' />
                <p>New Chat</p>
            </div>
            <div className="recent flex flex-col">
                <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
                <div className="recent-entry bg-[#004A77] transition-all ease-in-out duration-300 hover:bg-[#112f42] text-white flex items-center px-6 py-2 gap-[10px] cursor-pointer rounded-[50px] justify-center">
                    {/* <img className='text-white w-[20px]' src={assets.message_icon} alt="" /> */}
                    <FaRegMessage className='text-[14px]' />
                    <p>What is react ...</p>
                </div>
            </div>
        </div>
        <div className="bottom flex flex-col gap-2">
            <div className="bottom-item recent-entry flex gap-[15px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-800 p-2 rounded-[50px] items-center justify-start pl-4">
                {/* <img className='w-[20px] text-zinc-100' src={assets.question_icon} alt="" /> */}
                <IoIosHelpCircleOutline className='text-[20px] text-zinc-300' />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry flex gap-[15px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-800 p-2 rounded-[50px] items-center justify-start pl-4">
                {/* <img className='w-[20px]' src={assets.history_icon} alt="" /> */}
                <MdHistory className="text-lg" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry flex gap-[15px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-800 p-2 rounded-[50px] items-center justify-start pl-4">
                {/* <img className='w-[20px]' src={assets.setting_icon} alt="" /> */}
                <MdOutlineSettings className='text-lg' />
                <p>Setting</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar