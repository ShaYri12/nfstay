import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Payouts from "@/app/components/Payouts";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div>Home</div>
      <Payouts />
      <Footer />
    </div>
  );
};

export default page;
