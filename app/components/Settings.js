"use client";
import { useState } from "react";
import { FaUser, FaXTwitter } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Settings = () => {
  const [isRealEstateSold, setIsRealEstateSold] = useState(false);
  const [isAuctionExpires, setIsAuctionExpires] = useState(false);
  const [isNftUpdate, setIsNftUpdate] = useState(false);
  const [isSuccessfulPurchase, setIsSuccessfulPurchase] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-[15px] mt-[32px] mb-[109px] text-primary-color">
      <div className="flex flex-wrap gap-[16px] justify-between items-end mb-[29px]">
        <div>
          <h1 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] mb-[6px]">
            General Settings
          </h1>
          <p className="text-[18px] leading-[27px] font-[500] opacity-[0.5]">
            Upload your photo and details here
          </p>
        </div>
        <div className="flex gap-[19px]">
          <button className="text-[16px] leading-[20.16px] rounded-full font-[600] text-white w-[126px] h-[41px] bg-[#954AFC]">
            Save
          </button>
          <button className="text-[16px] leading-[20.16px] rounded-full font-[600] text-black w-[126px] h-[41px] bg-[#F4F4F4]">
            Cancel
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
        <div className="md:col-span-2 md:order-1 order-2">
          <div
            className="bg-white rounded-[14px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            <div className="border-b border-[#0C0839] border-opacity-[0.2] text-primary-color">
              <p className="px-[25px] pt-[24px] pb-[20px] text-[20px] font-[600] leading-[25.2px]">
                Personal Information
              </p>
            </div>
            <div className="p-[25px] flex flex-col gap-[34px]">
              <div className="">
                <label className="font-[500] text-[17px] leading-[27px] mb-[8px] opacity-[0.5]">
                  Username *
                </label>
                <div className="relative">
                  <FaUser
                    size={20}
                    className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-black opacity-[0.3]"
                  />
                  <input
                    type="text"
                    className="h-[60px] w-full bg-[#F5F5F5] rounded-[14px] pl-12 pr-12"
                  />
                  <IoIosCheckmarkCircle
                    size={20}
                    className="absolute right-[23px] top-1/2 transform -translate-y-1/2 text-[#20E19F]"
                  />
                </div>
              </div>
              <div className="">
                <label className="font-[500] text-[17px] leading-[27px] mb-[8px] opacity-[0.5]">
                  Email Address *
                </label>
                <div className="relative">
                  <MdEmail
                    size={24}
                    className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-black opacity-[0.3]"
                  />
                  <input
                    type="email"
                    className="h-[60px] w-full bg-[#F5F5F5] rounded-[14px]"
                  />
                  <IoIosCheckmarkCircle
                    size={20}
                    className="absolute right-[23px] top-1/2 transform -translate-y-1/2 text-[#20E19F]"
                  />
                </div>
              </div>
              <div className="">
                <label className="font-[500] text-[17px] leading-[27px] mb-[8px] opacity-[0.5]">
                  Wallet address
                </label>
                <input
                  type="text"
                  className="h-[60px] w-full bg-[#F5F5F5] rounded-[14px]"
                />
              </div>
              <div>
                <label className="font-[500] text-[17px] leading-[27px] mb-[8px] opacity-[0.5]">
                  Twitter
                </label>
                <div className="relative">
                  <FaXTwitter
                    size={20}
                    className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-black opacity-[0.3]"
                  />
                  <input
                    type="text"
                    className="h-[60px] w-full bg-[#F5F5F5] rounded-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-[37px] bg-white rounded-[14px] text-primary-color"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            <div className="border-b border-[#0C0839] border-opacity-[0.2] text-primary-color">
              <p className="px-[25px] pt-[24px] pb-[20px] text-[20px] font-[600] leading-[25.2px]">
                Personal Information
              </p>
            </div>
            <div className="p-[25px] flex flex-col gap-[28px]">
              {/* Real Estate NFT Sold */}
              <div className="flex justify-between gap-[10px]">
                <div className="flex flex-col gap-[5px]">
                  <h6 className="font-[500] text-[18px] leading-[27px]">
                    Real Estate NFT Sold
                  </h6>
                  <p className="font-[500] text-[14px] leading-[21px] opacity-[0.5]">
                    When someone purchases one of your NFTs
                  </p>
                </div>
                <div className="toggle-switch flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isRealEstateSold"
                    className="hidden"
                    checked={isRealEstateSold}
                    onChange={() => setIsRealEstateSold(!isRealEstateSold)}
                  />
                  <label
                    htmlFor="isRealEstateSold"
                    id="slider"
                    className={`toggleSwitch relative mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${
                      isRealEstateSold ? "bg-[#9945FF]" : "bg-gray-300"
                    }`}
                  ></label>
                </div>
              </div>

              {/* Auction Expires */}
              <div className="flex justify-between gap-[10px]">
                <div className="flex flex-col gap-[5px]">
                  <h6 className="font-[500] text-[18px] leading-[27px]">
                    Auction Expires
                  </h6>
                  <p className="font-[500] text-[14px] leading-[21px] opacity-[0.5]">
                    When an auction you participate in ends
                  </p>
                </div>
                <div className="toggle-switch flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isAuctionExpires"
                    className="hidden"
                    checked={isAuctionExpires}
                    onChange={() => setIsAuctionExpires(!isAuctionExpires)}
                  />
                  <label
                    htmlFor="isAuctionExpires"
                    id="slider"
                    className={`toggleSwitch relative mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${
                      isAuctionExpires ? "bg-[#9945FF]" : "bg-gray-300"
                    }`}
                  ></label>
                </div>
              </div>

              {/* Individual NFTs Update */}
              <div className="flex justify-between gap-[10px]">
                <div className="flex flex-col gap-[5px]">
                  <h6 className="font-[500] text-[18px] leading-[27px]">
                    Individual NFTs Update
                  </h6>
                  <p className="font-[500] text-[14px] leading-[21px] opacity-[0.5]">
                    When important updates occur regarding your NFT
                  </p>
                </div>
                <div className="toggle-switch flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isNftUpdate"
                    className="hidden"
                    checked={isNftUpdate}
                    onChange={() => setIsNftUpdate(!isNftUpdate)}
                  />
                  <label
                    htmlFor="isNftUpdate"
                    id="slider"
                    className={`toggleSwitch relative mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${
                      isNftUpdate ? "bg-[#9945FF]" : "bg-gray-300"
                    }`}
                  ></label>
                </div>
              </div>

              {/* Successful Purchase */}
              <div className="flex justify-between gap-[10px]">
                <div className="flex flex-col gap-[5px]">
                  <h6 className="font-[500] text-[18px] leading-[27px]">
                    Successful Purchase
                  </h6>
                  <p className="font-[500] text-[14px] leading-[21px] opacity-[0.5]">
                    When you successfully buy an NFT
                  </p>
                </div>
                <div className="toggle-switch flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isSuccessfulPurchase"
                    className="hidden"
                    checked={isSuccessfulPurchase}
                    onChange={() =>
                      setIsSuccessfulPurchase(!isSuccessfulPurchase)
                    }
                  />
                  <label
                    htmlFor="isSuccessfulPurchase"
                    id="slider"
                    className={`toggleSwitch relative mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${
                      isSuccessfulPurchase ? "bg-[#9945FF]" : "bg-gray-300"
                    }`}
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-[14px] flex flex-col items-center h-fit w-full md:order-2 order-1"
          style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
        >
          <div className="border-b border-[#0C0839] border-opacity-[0.2] text-primary-color w-full">
            <p className="px-[25px] pt-[24px] pb-[20px] text-[20px] font-[600] leading-[25.2px]">
              Your Photo
            </p>
          </div>
          <div className="flex flex-col gap-[28px] mt-[42px] mb-[40px]">
            <div className="w-[108px] h-[108px] mx-auto rounded-full overflow-hidden">
              <img
                src="/assets/payouts-img.png"
                alt="Profile photo"
                className="object-cover h-full w-full"
              />
            </div>
            <button className="bg-white text-[#954AFC] border border-[#954AFC] rounded-full text-[16px] leading-[20.16px] font-[600] px-[23px] py-[14.5px]">
              Update profile photo
            </button>
            <button className="text-[#FF2424] text-[16px] font-[600] leading-[20.16px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
