import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaListCheck } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { LuHeartHandshake } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { TbPointerMinus } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";

export function User() {
  return (
    <Menu className="items-start ">
      <MenuHandler className="flex items-center gap-1 border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200  hover:text-purple-900 ">
        <Button>
          <FiUser /> Abhishek K. <IoIosArrowDown />
        </Button>
      </MenuHandler>
      <MenuList className="flex flex-col text-xs font-customfont items-start gap-2 border-2 pr-8 pt-2 pl-2 ">
        <MenuItem className="flex items-center gap-1">
          <FiUser />
          My Account
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <FaListCheck />
          Activate F&O, MCX
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <RiPagesLine />
          Reports & Corporate Actions
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <LuHeartHandshake />
          Refer & Earn
        </MenuItem>
        <hr className="my-0 border" />
        <MenuItem className="flex items-center gap-1">
          <GoBell />
          Manage Price Alers
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <TbPointerMinus />
          Terms & Conditions
        </MenuItem>
        <hr className="my-0 " />
        <MenuItem className="flex items-center gap-1">
          <AiOutlineLogout />
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
