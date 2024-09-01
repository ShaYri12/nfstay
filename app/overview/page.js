import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Details from "./details";
import Location from "./location";
import HowMuchOverview from "./HowMuchOverview";
import RecentActivity from "./RecentActivity";
import FinancialBreakdown from "./FinancialBreakdown";
import InviteFriends from "./InviteFriends";
import DownloadConfidential from "./DownloadConfidential";

const page = () => {
  return (
    <DashboardLayout>
      <div className="bg-white text-primary-color pt-[120px] lg:pt-[32px]">
        <h2 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pb-[30px] md:px-[25px] px-[15px]">
          Overview
        </h2>

        <Details />

        <Location />

        <HowMuchOverview />

        <RecentActivity />

        <FinancialBreakdown />

        <DownloadConfidential />

        <InviteFriends />
      </div>
    </DashboardLayout>
  );
};

export default page;
