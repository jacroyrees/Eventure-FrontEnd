import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const Home = lazy(() => import('./views/Home'))
const About = lazy(() => import('./views/About'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Suspense fallback={<div>Loading...</div>}><RootLayout /></Suspense>,
		children: [
			{ index: true, element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
			{ path: '/about', element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense> },
		]
	}
])