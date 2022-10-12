import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	Register,
	PatientUpdate,
	LoginPage,
	PatientTableList,
	AddAppointmentPage,
	AboutUsPage,
	ReportTablePage,
	AddReportPage,
	UpdateReport,
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
							path="/patient/details"
							element={<PatientTableList />}
						/>
						<Route
							path="/appointment/add"
							element={<AddAppointmentPage />}
						/>
						<Route path="/aboutus" element={<AboutUsPage />} />
						<Route
							path="/patientReport/add"
							element={<AddReportPage />}
						/>
						<Route
							path="/patientReport/all"
							element={<ReportTablePage />}
						/>
						<Route
							path="/patientReport/update/:id"
							element={<UpdateReport />}
						/>
					</Routes>
					
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
