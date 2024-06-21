import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  const gradient = {
    background: "-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative bg-[#131314] text-zinc-200">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] ">
        <p>Ai-Assistant</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        <div className="greet mx-[50px] text-[56px] font-medium p-[20px] text-[#444746]">
          <p>
            <span style={gradient} className="">
              Hello, Dev.
            </span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
