import React from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import SearchInput from "./Components/SearchInput";

const Header = () => {
  return (
    <header className="flex flex-row  justify-between items-center ml-10 mr-10 mt-10">
      <div className={"w-[50%] flex flex-row space-x-10 space-evenly"}>
        <h1 className={'flex text-purple-500 font-bold text-xl justify-center items-center'}>Eventure</h1>
        <SearchInput />
      </div>

      <div className="flex items-center space-x-2">
        <SettingsIcon />
        <PersonIcon />
        <ArrowDropDownIcon />
      </div>
    </header>
  );
};

export default Header;
