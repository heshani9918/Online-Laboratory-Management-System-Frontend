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
	AppointmentTable,
	AppointmentCheckPage,
	AppointmentCancel,
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
						<Route path="/about" element={<AboutUsPage />} />
						<Route
							path="/patientReport/add"
							element={<AddReportPage />}
						/>
						<Route
							path="/patientReport/all"
							element={<ReportTablePage />}
						/>
						<Route
							path="/patient/appointment/all"
							element={<AppointmentTable />}
						/>
						<Route
							path="/patient/appointment"
							element={<AppointmentCheckPage />}
						/>
						<Route
							path="/patient/appointment/cancel"
							element={<AppointmentCancel />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
