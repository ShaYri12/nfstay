"use client";
import { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";

export default function InviteFriends() {
  const [buttonText, setButtonText] = useState("Copy");
  const link = "https://app.mybricksfinance.com/sign";

  const handleCopyClick = () => {
    // Copy the link to the clipboard
    navigator.clipboard.writeText(link).then(() => {
      // Change button text to 'Copied'
      setButtonText("Copied");

      // After 3 seconds, change it back to 'Copy'
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    });
  };
  return (
    <div className="px-[25px] pb-[60px]">
      <div
        className="bg-white rounded-[14px] px-[25px] py-[60px] flex flex-col items-center justify-center text-center"
        style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
      >
        <div className="flex justify-center items-center gap-[10px] mb-[8px]">
          {/* Profile images */}
          <div className="flex -space-x-3">
            {/* Replace with actual image URLs */}
            <img
              src="/assets/chat-profile.jpg"
              alt="Profile"
              className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white object-cover"
            />
            <img
              src="/assets/chat-profile2.jpg"
              alt="Profile"
              className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white object-cover"
            />
            <img
              src="/assets/chat-profile3.jpg"
              alt="Profile"
              className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white object-cover"
            />
            <img
              src="/assets/chat-profile4.jpg"
              alt="Profile"
              className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white object-cover"
            />
            {/* Add a plus icon */}
            <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-[#20E19F] text-primary-color border-[2.5px] border-white">
              <span className="text-[18px] font-[500] mt-[-3.5px] h-fit">
                +
              </span>
            </div>
          </div>
          <span className="font-[600] text-[16px] text-primary-color leading-[22.4px]">
            10K+ Already Joined
          </span>
        </div>
        <h2 className="text-[42px] font-[700] text-primary-color leading-[58.8px] mb-[15px]">
          Invite Your Friends To Join
        </h2>
        <p className="text-primary-color text-[18px] font-[500] leading-[28.8px] opacity-[0.6] mb-[28px]">
          NFsTay And Earn 10% Of Their First Purchase
        </p>
        {/* Input field with copy button */}
        <div className="flex flex-wrap justify-center gap-[12px]">
          <div className="flex justify-center items-center bg-[#9945FF] bg-opacity-[0.1] rounded-[10px] px-[32px] py-[13px] border border-[1.5px] border-dashed border-[#9945FF]">
            <span className="text-[#9945FF]">{link}</span>
          </div>
          <button
            onClick={handleCopyClick}
            className="bg-[#9945FF] text-white px-[23px] py-[13px] rounded-[10px] text-[16px] font-[500] leading-[19.09px] flex items-center gap-[12px]"
          >
            <span className="w-[21px] h-[21px]">
              <BiSolidCopy size={21} color="white" />
            </span>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
