import React from "react";
import AppointmentTableView from "../../../Components/AppointmentTableView/AppointmentTableView";
import Footer from "./../../../Components/Footer/footer";
import NavBar from "./../../../Components/NavBar/NavBar";

const AppointmentTable = () => {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<AppointmentTableView />
				<Footer />
			</div>
		</>
	);
};

export default AppointmentTable;
