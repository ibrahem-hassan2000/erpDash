"use client";
import { Menu } from "@mantine/core";
import { useState } from "react";
import user from "../assets/images/user.png";
import { Link } from "react-router-dom";
import DownIcon from "../assets/icons/down";
function MenuProfile() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      shadow="sm"
      width={190}
      opened={opened}
      onChange={setOpened}
      classNames={{
        dropdown: "  rounded-xl border  border-grey ",
      }}
    >
      <Menu.Target>
        <button className="px-[6px] py-[3px] w-fit rounded-xl   flex items-center justify-between gap-1 mdl:gap-3">
          <img src={user} alt="profile" className="w-8 mdl:w-11 h-8 mdl:h-11 rounded-full" />
          <div className="flex items-center gap-1 mdl:gap-3">
            <div>
              <h2 className="text-start  text-[10px] mdl:text-sm font-bold text-nowrap truncate max-w-[60px] mdl:max-w-[130px]">Mohamed Kamal</h2>
              <p className="text-start text-[10px] text-gray">Admin</p>
            </div>
            <DownIcon className={` duration-300 ${opened && "rotate-180"}`} />
          </div>
        </button>
      </Menu.Target>
      <Menu.Dropdown className=" py-1 mdl:py-3 !w-[100px] mdl:!w-[190px] bg-main/5">
        <Menu.Item className="  py-0 h-[30px] text-main px-1 text-[14px] font-medium  rounded-lg">
          <Link to={"/"} className="text-xs mdl:text-base">Profile</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuProfile;
