import React from "react";
import MyAppointments from "../../../Components/MyAppointments/MyAppointments";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/NavBar";

const MyAppointmentPage = () => {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<div className="flex justify-center items-center">
				<MyAppointments />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default MyAppointmentPage;

