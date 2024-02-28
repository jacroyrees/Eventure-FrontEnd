import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import React from 'react';

const RootLayout = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;