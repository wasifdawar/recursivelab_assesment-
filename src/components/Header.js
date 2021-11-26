import React from "react";
import Balance from "./Balance";
import DaysToProgress from "./DaysToProgress";
export const Header = () => {
  return (
    <div>
      <div className="left-section">
        <h2>
          USDC Balance
          <Balance />
          <DaysToProgress />
        </h2>
      </div>
      <div className="right-section"></div>
    </div>
  );
};
