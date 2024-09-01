import React from "react";
import { LuBedDouble, LuCodesandbox, LuUsers } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { FaLock, FaRegHeart } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Details = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-[35px] p-[25px] bg-white rounded-xl">
      <div className="relative">
        <img
          src="/assets/overview-img.png"
          className="lg:w-[510px] min-w-[330px] h-full rounded-xl object-cover"
          alt="Property Image"
        />
        <div className="absolute top-[22px] left-[21px] bg-white rounded-[36px] flex items-center justify-center">
          <h3 className="flex gap-[5px] items-center text-[12px] leading-[16px] tracking-[1px] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#20E19F] px-[6px] py-[5px]">
            <span className="min-w-[16px] min-h-[16px]">
              <img src="/assets/icons/location-pin.svg" alt="location icon" />
            </span>
            Manchester, United Kingdom
          </h3>
        </div>
        <div className="absolute top-[21px] right-[21px] bg-white text-gray-700 text-sm font-semibold w-[30px] h-[30px] p-[7px] rounded-full shadow-md">
          <span className="w-[16px] h-[16px]">
            <img
              className="w-full h-full"
              src="/assets/icons/favorited.svg"
              alt="favorite-icon"
            />
          </span>
        </div>
      </div>

      <div className="flex text-primary-color flex-col justify-between">
        <div className="flex w-fit gap-[10px] items-center justify-start border-[#8165EC] border rounded-[11px] px-[14px] py-[10px]">
          <span className="w-[20px] h-[20px] text-[#8165EC]">
            <LuBedDouble size={20} />
          </span>
          <span className="text-[#8165EC] text-[14px] font-[400] leading-[21px]">
            3 Beds | 1,800 sqft
          </span>
        </div>

        <h2 className="text-primary-color lg:text-[32px] md:text-[25px] font-[700] leading-[40.32px] tracking-[-2%] mt-[16px]">
          Authentic 3-Bedroom Penthouse with a Private Terrace
        </h2>

        <div className="grid  grid-cols-2 sm:grid-cols-4 flex-warp items-center gap-[30px] text-primary-color text-[15px] font-[600] leading-[21px] my-[30px]">
          <span className="flex w-max gap-[6px] items-center">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <LuUsers size={20} />
            </span>
            650 Owners
          </span>
          <span className="flex gap-[6px] items-center">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <LuCodesandbox size={20} />
            </span>
            1000 Total NFTs
          </span>
          <span className="flex gap-[6px] items-center">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <FiEye size={20} />
            </span>
            0 Views
          </span>
          <span className="flex gap-[6px] items-center">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <FaRegHeart size={20} />
            </span>
            1.2k Favorites
          </span>
        </div>

        <div className="grid grid-cols-2 gap-[15px]">
          <div className="flex flex-col gap-[17px] bg-[#F5F5F5] p-[16px] rounded-[14px]">
            <h3 className="text-[16px] leading-[24px] font-[400] text-primary-color">
              Property Listing Price
            </h3>
            <p className="text-[30px] leading-[37.8px] font-[700] text-primary-color">
              860,000 USD
            </p>
          </div>
          <div className="flex flex-col gap-[17px] bg-[#F5F5F5] p-[16px] rounded-[14px]">
            <h3 className="text-[16px] leading-[24px] font-[400] text-primary-color">
              Annual Yield
            </h3>
            <p className="text-[30px] leading-[37.8px] font-[700] text-primary-color">
              14.86%
            </p>
          </div>
          <div className="flex flex-col gap-[17px] bg-[#F5F5F5] p-[16px] rounded-[14px]">
            <h3 className="text-[16px] leading-[24px] font-[400] text-primary-color">
              6 YR Expected Asset Appreciation
            </h3>
            <p className="text-[30px] leading-[37.8px] font-[700] text-primary-color">
              20%
            </p>
          </div>
          <div className="flex flex-col gap-[17px] bg-[#F5F5F5] p-[16px] rounded-[14px]">
            <h3 className="flex gap-[9px] items-center text-[16px] leading-[24px] font-[400] text-primary-color">
              6 YR Expected ROI
              <IoIosInformationCircleOutline />
            </h3>
            <p className="text-[30px] leading-[37.8px] font-[700] text-primary-color">
              109.12%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
