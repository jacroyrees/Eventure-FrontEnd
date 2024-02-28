import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import SearchInput from "../SearchInput";
import OverflowMenu from "../Overflow Menu/OverflowMenu";

const Header = () => {
	const navigate = useNavigate()

	return (
		<header className="flex flex-row  justify-between items-center ml-10 mr-10 mt-5">
			<div className={"w-[50%] flex flex-row space-x-10 space-evenly items-center"}>
				<div role="button" onClick={() => navigate('/')}>
					<h1 className={'text-purple-500 font-bold text-xl'}>Eventure</h1>
				</div>
				<SearchInput />
			</div>

			<div className="flex items-center space-x-2">
				<SettingsIcon />
				<PersonIcon />
				<OverflowMenu />
			</div>
		</header>
	);
};

export default Header;
