import React from "react";
import "./App.css";
import TradingViewWidget from "./components/TradingViewWidget";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-3 flex flex-col">
          <div>
            <Navbar />
          </div>
          <div className="flex-1">
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
