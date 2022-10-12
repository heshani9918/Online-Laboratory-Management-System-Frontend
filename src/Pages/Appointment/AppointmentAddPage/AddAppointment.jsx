import React from "react";
import AppointmentAdd from "../../../Components/AppointmentAdd/AppointmentAdd";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/NavBar";

const AddAppointmentPage = () => {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<div className="flex justify-center items-center">
				<AppointmentAdd />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default AddAppointmentPage;

