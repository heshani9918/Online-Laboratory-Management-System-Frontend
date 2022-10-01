import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	Register,
	PatientUpdate,
	LoginPage,
	ReportTable,
	AddReportPage,
	AddAppointmentPage,
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
							path="/patient/report/all"
							element={<ReportTable />}
						/>
						<Route
							path="/patient/report/add"
							element={<AddReportPage />}
						/>
						<Route
							path="/patient/appointment/add"
							element={<AddAppointmentPage />}
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
