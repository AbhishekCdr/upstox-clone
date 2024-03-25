import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { Dropdown } from "./Dropdown";

const Watchlist = () => {
  return (
    <div className="flex flex-row items-center justify-between h-12 text-xs p-2 pt-2 border-t font-customfont border-b border-gray-300">
      <div className="w-full">
        <Dropdown />
      </div>
      <div className="flex items-center gap-2 m-2">
        <div className="text-2xl">
          <button>
            <MdOutlineSort />
          </button>
        </div>
        <div className="text-purple-900 text-4xl">
          <button>
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
