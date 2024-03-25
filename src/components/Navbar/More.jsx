import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { TbApps, TbSpeakerphone } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { PiPlant } from "react-icons/pi";
import { AiOutlineGold } from "react-icons/ai";

export const More = () => {
  return (
    <Menu className="cursor-pointer bg-white">
      <MenuHandler className="flex items-center gap-1 border-b-2 border-transparent hover:border-purple-900 hover:text-purple-900 transition ease-in delay-15 duration-200">
        <Button>
          <TbApps />
          More
          <IoIosArrowDown />
        </Button>
      </MenuHandler>
      <MenuList className="flex flex-col text-xs font-customfont items-start gap-2 border-2 pr-8 pt-2 pl-2 pb-1">
        <MenuItem className="flex items-center gap-1">
          <PiPlant />
          Mutual Fund
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <TbSpeakerphone />
          IPO
        </MenuItem>
        <MenuItem className="flex items-center gap-1">
          <AiOutlineGold />
          SGB
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
