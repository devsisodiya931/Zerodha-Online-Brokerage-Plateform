import React from "react";
import Hero from "./Hero";
import Table from "./Table";
import Brokerage from "./Brokerage";
import AccountCharges from "./AccountCharges";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Table />
      <Brokerage />
      <AccountCharges/>
    </>
  );
}

export default PricingPage;
