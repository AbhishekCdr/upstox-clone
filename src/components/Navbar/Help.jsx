import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegQuestionCircle, FaRegCompass } from "react-icons/fa";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { LuPenLine } from "react-icons/lu";

export function Help() {
  return (
    <Menu>
      <MenuHandler className="flex items-center gap-1 border-b-2 border-transparent hover:border-purple-900 transition ease-in delay-15 duration-200  hover:text-purple-900">
        <Button>
          <FaRegQuestionCircle />
          Help
          <IoIosArrowDown />
        </Button>
      </MenuHandler>
      <MenuList className="flex flex-col text-xs font-customfont items-start gap-2 border-2 pr-8 pt-2 pl-2 ">
        <MenuItem className="flex items-center gap-1">
          <FaRegCompass />
          Take a tour
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          {" "}
          <FaRegQuestionCircle />
          UpLearn
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <MdOutlineKeyboardAlt />
          Keyboard shorcuts
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <BiSupport />
          Help & Support
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <LuPenLine />
          Raise a ticket
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
