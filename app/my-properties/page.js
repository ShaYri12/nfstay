import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import BarChart from "./BarChart";
import YourProperties from "./YourProperties";
import RecentPayoutsAndHoldings from "./RecentPayoutsAndHoldings";

const page = () => {
  return (
    <DashboardLayout>
      <div className="md:px-[25px] px-[15px] pt-[120px] lg:pt-[32px]">
        <div className="bg-white text-primary-color">
          <h2 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color">
            Portfolio
          </h2>
          <p className="pb-[31px]">Find all of your properties in one place.</p>
        </div>

        <BarChart />

        <YourProperties />
      </div>
      <RecentPayoutsAndHoldings />
    </DashboardLayout>
  );
};

export default page;
