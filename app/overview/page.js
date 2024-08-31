import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const page = () => {
  return (
    <DashboardLayout>
      <div className="bg-white text-primary-color">
        <h2 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[32px] pb-[32px] px-[25px]">
          Overview
        </h2>
      </div>
    </DashboardLayout>
  );
};

export default page;
