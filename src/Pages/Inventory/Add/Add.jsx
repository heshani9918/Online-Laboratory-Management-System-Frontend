import React from "react";
import AddInventory from "../../../Components/Inventory/AddInventory/AddInventory";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/NavBar";

const AddInventoryPage = () => {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<div className="flex justify-center items-center">
				<AddInventory />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default AddInventoryPage;

