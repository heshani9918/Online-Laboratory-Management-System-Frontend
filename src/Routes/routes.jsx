import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	Register,
	PatientUpdate,
	LoginPage,
	ReportTable,
	AddReportPage,
	AddInventory,
	InventoryTable
} from "../Pages";

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
							path="/patient/update/:id"
							element={<PatientUpdate />}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route
							path="/patient/report/all"
							element={<ReportTable />}
						/>
						<Route
							path="/patient/report/add"
							element={<AddReportPage />}
						/>
						<Route
							path="/inventory/add"
							element={<AddInventory />}
						/>
						<Route
							path="/inventory/all"
							element={<InventoryTable />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
