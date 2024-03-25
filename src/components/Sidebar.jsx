import React from "react";
import Ticker from "./Sidebar/Ticker";
import Watchlist from "./Sidebar/Watchlist";
import Items from "./Sidebar/Items";

export const Sidebar = () => {
  return (
    <>
      <div className="h-screen flex flex-col bg-[rgb(242,242,242)]">
        <Ticker />
        <div>
          <Watchlist />
        </div>
        <div className="h-screen">
          <Items />
        </div>
      </div>
    </>
  );
};
