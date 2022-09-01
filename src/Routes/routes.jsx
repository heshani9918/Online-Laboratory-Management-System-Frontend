import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Register, PatientUpdate } from "../Pages";

const PageRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/patient/register"
							element={<Register />}
						/>
						<Route
							path="/patient/update"
							element={<PatientUpdate />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
