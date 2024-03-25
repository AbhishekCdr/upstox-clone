import React from "react";
import { More } from "./Navbar/More";
import { Help } from "./Navbar/Help";
import { User } from "./Navbar/User";

export const Navbar = () => {
  return (
    <>
      <nav className="flex h-12 font-customfont items-center text-xs justify-between bg-[#eeebe6]">
        <div className="flex items-center">
          <div className="items-center ">
            <img
              src="https://asset.brandfetch.io/idH_PAk3wi/idhR2wdGPK.jpeg"
              alt="upstox"
              className="h-7 m-4 rounded-sm"
            />
          </div>
          <div className="flex items-center gap-4 ">
            <ul className="flex gap-3 border-r border-gray-300 pr-4">
              <li className="flex gap-1 items-center border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200 hover:text-purple-900 ">
                <svg
                  width="23"
                  height="12"
                  viewBox="0 0 23 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.99452L0.393596 0.705078H7.79684L7.40328 2.99452H5.9398L4.59275 11.1655H1.79884L3.14589 2.99452H0Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.5859 2.99452L11.9795 0.705078H22.3984L22.0048 2.99452H20.3307L18.9836 11.1655H16.1898L17.5368 2.99452H11.5859Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.9625 7.3647C15.9625 9.31876 14.3799 11.0677 12.4258 11.2756C11.3393 11.3893 10.3664 11.0012 9.71505 10.2972L9.57091 11.1675H6.77148L8.51213 0.707031H11.3116L10.6159 4.88958C11.1453 4.51817 11.7634 4.27149 12.4258 4.2022C14.3799 3.99432 15.9625 5.41064 15.9625 7.3647ZM14.499 6.95726L13.7839 6.1091L11.6303 7.92459L11.0787 7.23999L10.2139 7.93569L11.4751 9.50446L14.499 6.95726Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <button>Charts</button>
              </li>
              <li className="border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200 hover:text-purple-900 ">
                <button>Discover</button>
              </li>
            </ul>
            <ul className="flex gap-3">
              <li className="border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200 hover:text-purple-900 ">
                <button>Order</button>
              </li>
              <li className="border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200 hover:text-purple-900 ">
                <button>Position</button>
              </li>
              <li className="border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200 hover:text-purple-900 ">
                <button>Holding</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center flex gap-6 font-semibold m-8">
          <More />
          <Help />
          <User />
        </div>
      </nav>
    </>
  );
};
