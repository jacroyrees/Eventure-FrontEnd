import React from "react";
import DropdownMenu from "../DropdownMenu";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface Props {}

const OverflowMenu: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <DropdownMenu
      toggleButtonContent={[<ArrowDropDownIcon />, <ArrowDropUpIcon />]}
      items={[{ label: "About", icon: "", data: "/about" }]}
      onItemClick={(item) => navigate(item.data!)}
    />
  );
};

export default OverflowMenu;
