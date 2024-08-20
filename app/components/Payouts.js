import React from "react";

const payoutsData = [
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  {
    img: "/assets/payouts-img.png",
    propertyName: "3–Bedroom Family Home",
    date: "5–07–22",
    price: "$36,250",
    nftsOwned: "50/1000",
    payout: "$250.12",
    status: "Pending",
  },
  // Add as many items as needed in the same format
];

const Payouts = () => {
  return (
    <div className="bg-white text-primary-color">
      <h2 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[32px] pb-[32px] px-[25px]">
        Payouts
      </h2>
      <div className="overflow-x-auto px-[25px]">
        <table
          className="min-w-full bg-white rounded-[14px] pt-[32px] mb-[108px] pb-[20px]" // Adds padding to the bottom
          style={{
            boxShadow: `
              0px 18.1px 54.29px -3.39px rgba(0, 0, 0, 0.06),
              0px 5.78px 17.33px -2.55px rgba(0, 0, 0, 0.1),
              0px 2.18px 6.55px -1.7px rgba(0, 0, 0, 0.12),
              0px 0.72px 2.16px -0.85px rgba(0, 0, 0, 0.12)
            `,
          }}
        >
          <thead>
            <tr className="text-[14px] leading-[16px] font-[500] text-primary-color opacity-[0.5]">
              <th className="px-[23px] py-[32px] text-left">Property Name</th>
              <th className="px-[23px] py-[32px] text-center min-w-[126px]">
                Date
              </th>
              <th className="px-[23px] py-[32px] text-center">Price</th>
              <th className="px-[23px] py-[32px] text-center min-w-[132px]">
                NFTs Owned
              </th>
              <th className="px-[23px] py-[32px] text-center">Payout</th>
              <th className="px-[23px] py-[32px] text-center">Status</th>
              <th className="px-[23px] py-[32px] text-center"></th>
            </tr>
          </thead>
          <tbody>
            {payoutsData.map((payout, index) => (
              <tr
                key={index}
                className={`border-[#0C0839] border-opacity-[0.2] ${
                  index !== payoutsData.length - 1 ? "border-b" : ""
                }`}
              >
                <td className="ps-[23px] py-[20px] flex items-center">
                  <img
                    src={payout.img}
                    alt="property"
                    className="w-[44px] h-[44px] rounded-full mr-4"
                  />
                  <div className="pe-[20px] font-[600] text-[16px] leading-[23px] text-primary-color text-left">
                    {payout.propertyName}
                  </div>
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center min-w-[126px]">
                  {payout.date}
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                  {payout.price}
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                  {payout.nftsOwned}
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                  {payout.payout}
                </td>
                <td className="font-[600] text-[16px] leading-[23px] px-[23px] py-[20px] text-center">
                  <div className="text-[#43CD61] mx-auto flex gap-[5px]">
                    <div className="my-auto w-[4px] h-[4px] rounded-full bg-[#43CD61]"></div>
                    {payout.status}
                  </div>
                </td>
                <td className="font-[600] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                  <button className="text-[#D9D9D9] hover:text-gray-600 mx-auto">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payouts;
