import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { SlLocationPin } from "react-icons/sl";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Voting = () => {
  const recentProposals = [
    {
      id: 5238,
      name: "Villa Ibiza",
      propertyType: "Holiday Home",
      date: "22 Aug, 2024",
      votes: "80/20",
      noOfOwners: "100 of 300",
      proposal: "Increase rent by 12.5%",
    },
    {
      id: 2630,
      name: "Apart, Berlin",
      propertyType: "Null Address",
      date: "1 Aug, 2024",
      votes: "200/50",
      noOfOwners: "250 of 600",
      proposal: "Sell the property for $875,000",
    },
  ];
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-[60px]">
        <div className="vote-card text-primary-color justify-between rounded-lg px-3 md:px-[25px] pt-[120px] lg:pt-[32px] gap-[25px]">
          <div
            className="bg-white flex items-center md:items-start lg:p-[25px] p-[10px] rounded-[14px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            {/* Main Content Section */}
            <div className="flex-grow flex flex-col md:gap-[18px] gap-[10px]">
              {/* Image Section */}
              <div className="flex md:flex-row flex-col lg:gap-[25px] md:gap-[18px] gap-[10px]">
                <img
                  className="lg:h-[130px] md:h-[100px] h-[80px] lg:w-[130px] md:w-[100px] w-[80px] rounded-[10px] object-cover"
                  src="/assets/bedroom-family.png"
                  alt="Property"
                />
                <div className="flex flex-col">
                  <div className="flex items-start justify-between space-x-2">
                    <h2 className="lg:text-[24px] md:text-[20px] text-[18px] font-[700] leading-[30.24px]">
                      3-Bedroom Family home
                    </h2>
                    <p className="text-primary-color font-[400] lg:text-[16px] text-[14px] leading-[20px] opacity-[0.6] flex items-center gap-[3.6px]">
                      <SlLocationPin
                        className="flex-shrink-0"
                        stroke="1.5px"
                        size={17}
                      />{" "}
                      Stockholm, Sweden
                    </p>
                  </div>
                  <p className="text-primary-color font-[400] md:text-[16px] text-[14px] leading-[24px] md:mt-[15px] mt-[6px]">
                    Should we sell the property at a future market valuation of
                    $1,000,000? Nibh risus dui ac in quis cursus nibh nulla.
                    Amet ut tristique quisque.
                  </p>
                </div>
              </div>

              {/* Voting Section */}
              <div className="flex sm:flex-row flex-col sm:gap-[25px] gap-[6px]">
                <div className="flex flex-col justify-between text-left items-start min-h-full lg:min-w-[130px] md:min-w-[100px] min-w-[80px]">
                  <div className="flex flex-col items-start gap-[5px]">
                    <p className="text-primary-color leading-[24px] font-[400] text-[12px] opacity-[0.5]">
                      CREATED BY
                    </p>
                    <div className="font-[400] leading-[20px] flex gap-[6px] text-[16px]">
                      <div className="w-[24px] h-[24px]">
                        <img
                          className="rounded-full h-full w-full object-cover"
                          src="/assets/chat-profile3.jpg"
                          alt="profile"
                        />
                      </div>
                      <span className="border-b border-b-primary-color">
                        Gohard
                      </span>
                    </div>
                  </div>
                  <span className="text-[12px] font-[400] leading-[24px] opacity-[0.5]">
                    120 of 600 voted
                  </span>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                  <p className="opacity-[0.5] text-[12px] font-[400] leading-[24px]">
                    VOTE
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex space-x-4">
                      {/* Progress Bar Container */}
                      <div className="relative flex items-center w-full bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        {/* Progress Bar */}
                        <div
                          className="absolute left-0 top-0 h-full bg-[#20E19F] rounded-[10px]"
                          style={{ width: "30%" }}
                        ></div>

                        {/* Thumbs Up and Text */}
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-white">
                            <LuThumbsUp size={20} />
                          </span>
                          <span className="text-white text-[16px] leading-[20.16px] font-[500]">
                            Yes
                          </span>
                        </div>

                        {/* Votes Count */}
                        <div className="absolute right-[7px] top-0 h-full flex items-center z-10">
                          <p className="text-primary-color opacity-[0.5] text-[14px] font-[400] leading-[17.64px]">
                            12 votes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {/* Progress Bar Container */}
                      <div className="relative flex items-center w-full bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        {/* Progress Bar */}
                        <div
                          className="absolute left-0 top-0 h-full bg-[#954AFC] rounded-[10px]"
                          style={{ width: "80%" }}
                        ></div>

                        {/* Thumbs Up and Text */}
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-white">
                            <LuThumbsDown size={20} />
                          </span>
                          <span className="text-white text-[16px] leading-[20.16px] font-[500]">
                            No
                          </span>
                        </div>

                        {/* Votes Count */}
                        <div className="absolute right-[7px] top-0 h-full flex items-center z-10">
                          <p className="text-primary-color opacity-[0.5] text-[14px] font-[400] leading-[17.64px]">
                            68 votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Remaining Section */}
          <div
            className="time-card bg-[#F5F5F5] rounded-[14px] lg:px-[20px] px-[10px] lg:px-[25px] py-[10px] py-[25px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            <p className="lg:text-[30px] md:text-[25px] text-[20px] leading-[37.8px] font-[700] text-primary-color">
              1d : 12h : 47m : <span className="text-[#954AFC]">22s</span>
            </p>
            <p className="text-primary-color md:text-[16px] text-[14px] font-[400] leading-[24px] md:mt-[10px] md:pb-[20px] pb-[8px] border-b border-[#0000001F] border-b-[1.5px]">
              Time Remaining
            </p>

            <div className="md:pt-[24px] pt-[8px]">
              <p className="text-primary-color md:text-[16px] text-[14px] leading-[24px] font-[400] opacity-[0.6]">
                Minimum Requirements
              </p>
              <ul className="flex flex-col md:gap-[15px] gap-[10px] text-primary-color md:text-[16px] text-[14px] leading-[20.16px] font-[500] mt-2 space-y-1">
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  At least 50% of all owners must vote
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  Overall, 75% must accept the proposal
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  A vote is valid for 7 days
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vote-card text-primary-color justify-between rounded-lg px-3 md:px-[25px] gap-[25px]">
          <div
            className="bg-white flex items-center md:items-start lg:p-[25px] p-[10px] rounded-[14px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            {/* Main Content Section */}
            <div className="flex-grow flex flex-col md:gap-[18px] gap-[10px]">
              {/* Image Section */}
              <div className="flex md:flex-row flex-col lg:gap-[25px] md:gap-[18px] gap-[10px]">
                <img
                  className="lg:h-[130px] md:h-[100px] h-[80px] lg:w-[130px] md:w-[100px] w-[80px] rounded-[10px] object-cover"
                  src="/assets/bedroom-family.png"
                  alt="Property"
                />
                <div className="flex flex-col">
                  <div className="flex items-start justify-between space-x-2">
                    <h2 className="lg:text-[24px] md:text-[20px] text-[18px] font-[700] leading-[30.24px]">
                      3-Bedroom Family home
                    </h2>
                    <p className="text-primary-color font-[400] lg:text-[16px] text-[14px] leading-[20px] opacity-[0.6] flex items-center gap-[3.6px]">
                      <SlLocationPin
                        className="flex-shrink-0"
                        stroke="1.5px"
                        size={17}
                      />{" "}
                      Stockholm, Sweden
                    </p>
                  </div>
                  <p className="text-primary-color font-[400] md:text-[16px] text-[14px] leading-[24px] md:mt-[15px] mt-[6px]">
                    Should we sell the property at a future market valuation of
                    $1,000,000? Nibh risus dui ac in quis cursus nibh nulla.
                    Amet ut tristique quisque.
                  </p>
                </div>
              </div>

              {/* Voting Section */}
              <div className="flex sm:flex-row flex-col sm:gap-[25px] gap-[6px]">
                <div className="flex flex-col justify-between text-left items-start min-h-full lg:min-w-[130px] md:min-w-[100px] min-w-[80px]">
                  <div className="flex flex-col items-start gap-[5px]">
                    <p className="text-primary-color leading-[24px] font-[400] text-[12px] opacity-[0.5]">
                      CREATED BY
                    </p>
                    <div className="font-[400] leading-[20px] flex gap-[6px] text-[16px]">
                      <div className="w-[24px] h-[24px]">
                        <img
                          className="rounded-full h-full w-full object-cover"
                          src="/assets/chat-profile3.jpg"
                          alt="profile"
                        />
                      </div>
                      <span className="border-b border-b-primary-color">
                        Gohard
                      </span>
                    </div>
                  </div>
                  <span className="text-[12px] font-[400] leading-[24px] opacity-[0.5]">
                    120 of 600 voted
                  </span>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                  <p className="opacity-[0.5] text-[12px] font-[400] leading-[24px]">
                    VOTE
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex space-x-4">
                      {/* Progress Bar Container */}
                      <div className="relative flex items-center w-full bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        {/* Progress Bar */}
                        <div
                          className="absolute left-0 top-0 h-full bg-[#20E19F] rounded-[10px]"
                          style={{ width: "30%" }}
                        ></div>

                        {/* Thumbs Up and Text */}
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-white">
                            <LuThumbsUp size={20} />
                          </span>
                          <span className="text-white text-[16px] leading-[20.16px] font-[500]">
                            Yes
                          </span>
                        </div>

                        {/* Votes Count */}
                        <div className="absolute right-[7px] top-0 h-full flex items-center z-10">
                          <p className="text-primary-color opacity-[0.5] text-[14px] font-[400] leading-[17.64px]">
                            12 votes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {/* Progress Bar Container */}
                      <div className="relative flex items-center w-full bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        {/* Progress Bar */}
                        <div
                          className="absolute left-0 top-0 h-full bg-[#954AFC] rounded-[10px]"
                          style={{ width: "80%" }}
                        ></div>

                        {/* Thumbs Up and Text */}
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-white">
                            <LuThumbsDown size={20} />
                          </span>
                          <span className="text-white text-[16px] leading-[20.16px] font-[500]">
                            No
                          </span>
                        </div>

                        {/* Votes Count */}
                        <div className="absolute right-[7px] top-0 h-full flex items-center z-10">
                          <p className="text-primary-color opacity-[0.5] text-[14px] font-[400] leading-[17.64px]">
                            68 votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Remaining Section */}
          <div
            className="time-card bg-[#F5F5F5] rounded-[14px] lg:px-[20px] px-[10px] lg:px-[25px] py-[10px] py-[25px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            <p className="lg:text-[30px] md:text-[25px] text-[20px] leading-[37.8px] font-[700] text-primary-color">
              1d : 12h : 47m : <span className="text-[#954AFC]">22s</span>
            </p>
            <p className="text-primary-color md:text-[16px] text-[14px] font-[400] leading-[24px] md:mt-[10px] md:pb-[20px] pb-[8px] border-b border-[#0000001F] border-b-[1.5px]">
              Time Remaining
            </p>

            <div className="md:pt-[24px] pt-[8px]">
              <p className="text-primary-color md:text-[16px] text-[14px] leading-[24px] font-[400] opacity-[0.6]">
                Minimum Requirements
              </p>
              <ul className="flex flex-col md:gap-[15px] gap-[10px] text-primary-color md:text-[16px] text-[14px] leading-[20.16px] font-[500] mt-2 space-y-1">
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  At least 50% of all owners must vote
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  Overall, 75% must accept the proposal
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  A vote is valid for 7 days
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white text-primary-color pb-[80px]">
          <h2 className="md:text-[32px] text-[25px] md:leading-[40.32px] tracking-[-2%] font-[700] text-primary-color md:pb-[30px] pb-[16px] px-[25px]">
            Recent Proposals
          </h2>
          <div className="overflow-x-auto px-[25px]">
            <table className="min-w-full bg-white rounded-[14px] pt-[32px] mb-[108px] pb-[20px]">
              <thead>
                <tr className="text-[14px] leading-[16px] font-[500] text-primary-color opacity-[0.5]">
                  <th className="px-[23px] py-[32px] text-left">
                    NFT<span className="ps-[2px]">ID</span>
                  </th>
                  <th className="px-[23px] py-[32px] text-center min-w-[126px]">
                    Name
                  </th>
                  <th className="px-[23px] py-[32px] text-center">
                    Property Type
                  </th>
                  <th className="px-[23px] py-[32px] text-center min-w-[132px]">
                    Date
                  </th>
                  <th className="px-[23px] py-[32px] text-center">Yes/No</th>
                  <th className="px-[23px] py-[32px] text-center">
                    No. of Owners
                  </th>
                  <th className="px-[23px] py-[32px] text-center">Proposal</th>
                </tr>
              </thead>
              <tbody>
                {recentProposals.map((proposal, index) => (
                  <tr
                    key={index}
                    className={`border-[#0C0839] border-opacity-[0.2] ${
                      index !== recentProposals - 1 ? "border-b" : ""
                    }`}
                  >
                    <td className="font-[600] md:text-[16px] text-[14px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                      {proposal.id}
                    </td>
                    <td className="font-[600] md:text-[16px] text-[14px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center min-w-[126px]">
                      {proposal.name}
                    </td>
                    <td className="font-[600] md:text-[16px] text-[14px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                      {proposal.propertyType}
                    </td>
                    <td className="font-[600] md:text-[16px] text-[14px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                      {proposal.date}
                    </td>
                    <td className="font-[600] md:text-[16px] text-[14px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                      {proposal.votes}
                    </td>
                    <td className="font-[600] md:text-[16px] text-[14px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                      {proposal.noOfOwners}
                    </td>
                    <td className="font-[600] text-[#8165EC] md:text-[16px] text-[14px] leading-[23px] px-[23px] py-[20px] text-center">
                      {proposal.proposal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Voting;
