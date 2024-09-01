import React from "react";

const FinancialBreakdown = () => {
  return (
    <div className=" p-[25px]">
      <h1 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-center text-primary-color mb-8">
        Financial Breakdown
      </h1>
      <div className="flex flex-col md:flex-row gap-[30px] justify-center px-[25px]">
        {/* Transaction Card */}
        <div className="bg-[#F7F6FF] shadow-md rounded-lg p-6 w-full md:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-white p-[9px] rounded-[10px] mr-2">
                {/* Placeholder for Icon */}
                <span className="w-[22px] h-[22px]">
                  <img src="/assets/icons/wallet-black.svg" alt="wallet" />
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-900">
                  Transaction
                </h2>
                <a href="#" className="text-sm text-blue-500 underline">
                  Details
                </a>
              </div>
            </div>
            <div className="text-gray-500 text-sm">Last Update: 2 days ago</div>
          </div>
          <ul className="text-gray-700 space-y-1">
            <li className="flex justify-between">
              <span>Property Listing Price</span>
              <span>USD 728,000</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>Transaction Costs</span>
              <span>USD 72,000</span>
            </li>
            {/* Add other list items in a similar manner */}
            <li className="flex justify-between text-purple-600 font-semibold">
              <span>Total Acquisition Cost</span>
              <span>USD 7,200</span>
            </li>
            <li className="flex justify-between">
              <span>Total Number of NFTs</span>
              <span>1,000</span>
            </li>
            <li className="flex justify-between">
              <span>Value of One NFT</span>
              <span>1/1000</span>
            </li>
            <li className="flex justify-between text-purple-600 font-semibold">
              <span>Mint Price Per NFT</span>
              <span>USD 800</span>
            </li>
          </ul>
        </div>

        {/* Rental Card */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-2">
                {/* Placeholder for Icon */}
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L11.297 8.187H0L0.702 0H12Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-900">
                  Rental
                </h2>
                <a href="#" className="text-sm text-blue-500 underline">
                  Breakdown
                </a>
              </div>
            </div>
            <div className="text-gray-500 text-sm">Last Update: 2 days ago</div>
          </div>
          <ul className="text-gray-700 space-y-1">
            <li className="flex justify-between">
              <span>Gross Yield</span>
              <span>10.32 %</span>
            </li>
            <li className="flex justify-between">
              <span>Gross Rent Per Year</span>
              <span>USD 88,560</span>
            </li>
            {/* Add other list items in a similar manner */}
            <li className="flex justify-between text-purple-600 font-semibold">
              <span>Annual Rental Income</span>
              <span>USD 45,752</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialBreakdown;
