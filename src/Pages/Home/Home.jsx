import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Background from "../../Assests/Background.png";
import "./Home.css";

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="w-full h-screen bg-main-blue">
				<img
					src={Background}
					alt=""
					className="md:visible lg:visible sm:invisible xxs:invisible"
				/>
			</div>
			<div>
				<h6 className="absolute w-auto left-[213px] top-[220px] font-medium text-lg">
					Welcome to
				</h6>
			</div>
		</>
	);
};

export default Home;
