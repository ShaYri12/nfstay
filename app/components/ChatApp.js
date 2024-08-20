import React from "react";

const ChatList = () => {
  return (
    <div className="w-1/3 h-screen border-r border-[#0C0839] border-opacity-[0.1] px-[25px] py-[38px]">
      <input
        type="text"
        placeholder="Search Chat"
        className="w-full px-[16px] py-[15px] text-[#0C0839] border rounded-[14px] bg-[#F5F5F5] text-[14px] mb-4"
      />
      <div className="overflow-y-auto pt-[27px]">
        {/* Repeat this block for each chat */}
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b border-[#0C0839] border-opacity-[0.2]">
          <div className="flex items-center gap-[16px] pb-[16px]">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-[64px] h-[64px] rounded-full"
            />
            <div className="flex flex-col gap-[8px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                Candy Bosley
              </p>
              <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6]">
                Michele, let's go for...
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-[12px] mt-[-6px]">
            <p className="text-[12px] font-[500] leading-[15.12px] text-primary-color opacity-[0.6]">
              10:45 AM
            </p>
            <span className="w-fit text-right text-[12px] leading-[15.12px] text-white bg-[#954AFC] rounded-full px-[9px] py-[4.5px]">
              7
            </span>
          </div>
        </div>
        {/* Repeat this block ends */}
      </div>
    </div>
  );
};

const Conversation = () => {
  return (
    <div className="w-2/3 h-screen flex flex-col text-primary-color">
      <div className="flex items-center justify-between pt-[32px] pb-[27px] px-[25px]">
        <div className="flex items-center gap-[16px]">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-[65px] h-[65px] rounded-full"
          />
          <div className="flex flex-col gap-[8px] text-primary-color">
            <p className="text-[16px] leading-[20.16px] font-[700]">
              Candy Bosley
            </p>
            <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6]">
              Last seen Yesterday 02.30 PM
            </p>
          </div>
        </div>
        <button className="text-primary-color pb-[3px] text-opacity-[0.5] rotate-[90deg] bg-[#F5F5F5] rounded-full text-[12px] w-[48px] h-[48px] hover:text-gray-600">
          •••
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-[25px] bg-[#F5F5F5]">
        {/* Repeat this block for each message */}
        <div className="flex items-start gap-[13px]">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col gap-[4px] text-primary-color">
            <p className="text-[16px] leading-[20.16px] font-[700]">
              Candy Bosley
            </p>
            <p className="text-[12px] font-[500] leading-[15.12px] opacity-[0.6]">
              08.00 AM
            </p>
            <p className="text-[16px] font-[500] leading-[20.16px] w-fit text-primary-color px-[16px] py-[14px] rounded-r-full text-opacity-[0.6] rounded-b-full mt-[10px] bg-[#FFFFFF]">
              Id ut varius quis aliquet mattis ante eget.
            </p>
            <p className="text-[16px] font-[500] leading-[20.16px] w-fit text-primary-color px-[16px] py-[14px] rounded-r-full text-opacity-[0.6] rounded-b-full mt-[10px] bg-[#FFFFFF]">
              Nulla pellentesque senectus fames eu facilisis.
            </p>
          </div>
        </div>
        <div className="flex items-end flex-col justify-end mt-[24px]">
          <div className="flex items-start  gap-[13px]">
            <div className="flex flex-col items-end gap-[4px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                Candy Bosley
              </p>
              <p className="text-[12px] font-[500] leading-[15.12px] opacity-[0.6]">
                08.00 AM
              </p>
            </div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          <p className="text-[16px] font-[500] text-white leading-[20.16px] w-fit px-[16px] py-[14px] rounded-l-full rounded-b-full mt-[10px] bg-[#954AFC]">
            Ok thanks for the progress update
          </p>
          <p className="text-[16px] font-[500] text-white leading-[20.16px] w-fit px-[16px] py-[14px] rounded-l-full rounded-b-full mt-[10px] bg-[#954AFC]">
            Wow, that's okay, really, where are we going on vacation?
          </p>
        </div>
        {/* Repeat this block ends */}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          placeholder="Type Your Message Here..."
          className="flex-1 px-4 py-2 border rounded-full"
        />
        <button className="ml-4 bg-purple-600 text-white p-3 rounded-full">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10v11a1 1 0 001 1h11m0-14a1 1 0 011 1v11m-7-8l8-8m-8 0h8v8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ChatApp = () => {
  return (
    <div className="flex h-screen">
      <ChatList />
      <Conversation />
    </div>
  );
};

export default ChatApp;
