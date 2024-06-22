import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { FaCode, FaMessage, FaMicrophone, FaRegCompass } from "react-icons/fa6";
import { IoBulbOutline, IoSend } from "react-icons/io5";
import { FaCodeBranch, FaRegMessage } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { BiPhotoAlbum } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { Context } from "../../context/Context";
import MarkdownPreview from '@uiw/react-markdown-preview'
import "./Main.css";
import { LuMessageCircle } from "react-icons/lu";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setResultData,
    setRecentPrompt
  } = useContext(Context);

  const gradient = {
    background: "-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const handleCard = (query) => {
    setRecentPrompt(query)
    setInput(query)
    onSent(query)
  }
  return (
    <div className="main flex-1 min-h-screen overflow-hidden relative bg-[#131314] text-zinc-200">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] ">
        <p>Ai-Assistant</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        <div className="min-h-[72vh]">
          {!showResult ? (
            <>
              {" "}
              <div className="greet text-center sm:text-start sm:mx-[50px] font-medium p-[20px] pt-[40px] text-[#444746]">
                <p>
                  <span style={gradient} className="sm:text-6xl text-5xl">
                    Hello, Dev.
                  </span>
                </p>
                <p className="text-4xl sm:text-6xl leading-8  mt-2">How can I help you today?</p>
              </div>
              <div className="cards flex flex-wrap justify-center items-center gap-[15px] p-[20px] mt-4">
                <div onClick={() => handleCard("Suggest beautiful places to see on an upcoming road trip")} className="card bg-[#1E1F20] hover:bg-[#393B3D] transition-all ease-in-out duration-300 rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] sm:h-[200px] h-[170px] cursor-pointer">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  {/* <img src={assets.compass_icon} alt="" /> */}
                  <FaRegCompass className=" bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
                </div>
                <div onClick={() => handleCard("Briefly summarize this concept: urban planning")} className="card bg-[#1E1F20] rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] sm:h-[200px] h-[170px] hover:bg-[#393B3D] transition-all ease-in-out duration-300 cursor-pointer">
                  <p>Briefly summarize this concept: urban planning</p>
                  {/* <img src={assets.bulb_icon} alt="" /> */}
                  <IoBulbOutline className="bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
                </div>
                <div onClick={() => handleCard("Brainstorm team bonding activities for our work retreat")} className="card bg-[#1E1F20] rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] sm:h-[200px] h-[170px] hover:bg-[#393B3D] transition-all ease-in-out duration-300 cursor-pointer">
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  {/* <img src={assets.message_icon} alt="" /> */}
                  {/* <FaRegMessage className="text-[4px] bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" /> */}
                  <LuMessageCircle className=" bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
                </div>
                <div onClick={() => handleCard("Tell me about React js and React native")} className="card bg-[#1E1F20] rounded-2xl p-4 flex flex-col items-end justify-between gap-8 w-[200px] sm:h-[200px] h-[170px] hover:bg-[#393B3D] transition-all ease-in-out duration-300 cursor-pointer">
                  <p>Tell me about React js and React native</p>
                  {/* <img src={assets.code_icon} alt="" /> */}
                  <FaCode className=" bg-zinc-900 w-[40px] h-[40px] p-2 rounded-full" />
                </div>
              </div>
            </>
          ) : (
            <div className="result py-[5%] max-h-[72vh] overflow-y-scroll hide-scrollbar">
              <div className="result-title bg-[#2F2F2F] rounded-lg p-2 mx-2 sm:mx-[10px] flex items-start gap-2 sm:gap-[20px]">
                <img
                  className="w-[30px] sm:w-[40px] rounded-full"
                  src={assets.user_icon}
                  alt=""
                />
                <p className="mt-1 sm:mt-2">{recentPrompt}</p>
              </div>
              <div className="result-data bg-[#2F2F2F] rounded-lg flex items-start ml-2 mt-2 sm:mt-6 sm:p-2 gap-1 p-1 pr-1 mr-2 sm:gap-[10px] justify-start">
                <img className="w-[30px] sm:w-[40px]" src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader p-2 w-full flex flex-col gap-[10px]">
                    <hr
                      className="rounded-[4px] h-[20px] border-none bg-[f6f7f8]"
                      style={{
                        background:
                          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                        backgroundSize: "800px 50px",
                      }}
                    />
                    <hr
                      className="rounded-[4px] h-[20px] border-none bg-[f6f7f8]"
                      style={{
                        background:
                          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                        backgroundSize: "800px 50px",
                      }}
                    />
                    <hr
                      className="rounded-[4px] h-[20px] border-none bg-[f6f7f8]"
                      style={{
                        background:
                          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                        backgroundSize: "800px 50px",
                      }}
                    />
                  </div>
                ) : (
                  // <p className="text-[17px] pt-1 font-light" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  <MarkdownPreview source={resultData} className="bg-[#2F2F2F] text-zinc-200 text-[17px] pt-1 font-light rounded-lg" />
                )}
                {/* <p dangerouslySetInnerHTML={{__html:resultData}}></p> */}
              </div>
            </div>
          )}
        </div>

        <div className="main-bottom">
          <div className="search-box flex justify-between items-center my-4">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              value={input}
              type="text"
              className="py-4 px-6 border-none outline-none w-full text-white bg-[#1E1F20] rounded-l-full ml-2 sm:ml-0"
              placeholder="Enter a prompt here..."
            />
            <div className="flex text-2xl gap-4 bg-[#1E1F20] py-4 px-6 mr-2 sm:mr-0 rounded-r-full">
              {/* <GrGallery className="cursor-pointer" /> */}
              {/* <FaMicrophone className="cursor-pointer" /> */}
              <IoSend onClick={() => onSent()} className="cursor-pointer" />
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
