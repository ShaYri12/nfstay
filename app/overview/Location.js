import React from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

const Location = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] mt-[45px] px-[25px] pb-[60px]">
      {/* Location Section */}
      <div
        className="px-[25px] py-[20px] bg-white rounded-[14px]"
        style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
      >
        <h2 className="text-[20px] leading-[25.2px] text-primary-color font-[600] mb-[15px]">
          Location
        </h2>
        <div className="h-[137px] rounded-[10px] overflow-hidden">
          <MapComponent />
        </div>
      </div>

      {/* Purchase Section */}
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center gap-[5px]">
          <div className="flex flex-col text-primary-color gap-[12px]">
            <span className="text-[12px] leading-[15px] font-[400]">
              CURRENT PRICE
            </span>
            <div className="text-[32px] leading-[32px] font-[700]">
              $860{" "}
              <span className="text-[14px] font-[600] leading-[32px]">
                (1.5 BNB)
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between gap-1 bg-[#8165EC] flex-grow max-w-[185px] bg-opacity-[0.1] text-primary-color rounded-full p-[10px]">
            <button className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
              <span className="text-[30px] mt-[-5.5px]">-</span>
            </button>
            <span className="text-[28px] font-[600] text-[#954AFC] leading-[35.28px]">
              2
            </span>
            <button className="w-[38px] h-[38px] rounded-full bg-white text-lg flex items-center justify-center">
              <span className="text-[28px] mt-[-7px]">+</span>
            </button>
          </div>
        </div>

        {/* Buy Button */}
        <div className="relative mt-[24px]">
          <button className="w-full py-[16px] gap-[6px] rounded-full text-white text-[16px] leading-[20.16px] font-[600] bg-custom-gradient flex items-center justify-center">
            Buy Now{" "}
            <span className="w-[22px] h-[22px]">
              <img src="/assets/icons/wallet-icon.svg" alt="wallet" />
            </span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-[20px]">
          <p className="text-[20] leading-[32px] font-[700] text-primary-color">
            795,540 of 860,000 shares bought
          </p>
          <div className="w-full bg-[#0000000D] rounded-full h-[26px] mt-[7px]">
            <div
              className="bg-gradient-to-r from-[#E5C9FF] to-[#954AFC] h-full rounded-full"
              style={{ width: "80.5%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
