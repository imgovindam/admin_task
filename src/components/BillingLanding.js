import React from "react";
import Func from "./Func";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Billing from "./Billing";

const BillingLanding = () => {
  return (
    <div>
      <Func
        Navbar={<Navbar text="Billing Page" />}
        Dashboard={<Dashboard />}
        Content={<Billing />}
      />
    </div>
  );
};

export default BillingLanding;
