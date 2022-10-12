/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import ConfirmDialog from "../ConfirmDialog/index";
import jsPDF from "jspdf";
import "jspdf-autotable";

//import AvatarImage from "../../Assests/Man-Avatar.jpg";
import axios from "axios";

const AppointmentTableView = () => {
	const [appointments, setAppointments] = useState([]);

	//fetching patient appointments from the database
	useEffect(() => {
		const fetchAppointments = async () => {
			const res = await axios.get("api/appointment/", {
				headers: {
					authentication: localStorage.getItem("authentication"),
				},
			});
			setAppointments(res.data);
			console.log(res.data);
		};
		fetchAppointments();
	}, []);


	const handleDelete = async (id, e) => {
		e.preventDefault();
		axios
			.delete(`/api/appointment/delete/${id}`, {
				headers: {
					authentication: localStorage.getItem("authentication"),
				},
			})
			.then((res) => {
				console.log("deleted");
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	//to here

	// setting delete confirmation dialogue

	const [confirmDialog, setConfirmDialog] = useState({
		isOpen: false,
		title: "",
		subTitle: "",
	});


	// filterData(appointments, searchTerm) {
	// 	const result = appointments.filter ( (appoinment) =>
	// 	appoinment.firstName.toLowerCase().includes(searchTerm) 
	// 	// appoinment.lastName.toLowerCase().includes(searchTerm) ||
	// 	// appoinment.nic.toLowerCase().includes(searchTerm) 
	// 	);

	// 	this.setState({ appointments: result });
	// }
	// handleSearchArea = (e) => {
	// 	const searchTerm = e.currentTarget.value;

	// 	axios.get("/api").then((res) => {
			
	// 			this.filterData(res.data.appointments, searchTerm);
			
	// 	});
	// };
	//console.log(appointments.filter(appointment=> appointment.firstName.includes("He")))

	// filterContent(appointments, searchTerm) {
	// 	const result = appointments.filter(
	// 	  (appointment) =>
	// 		appointment.firstName.toLowerCase().includes(searchTerm) 
	// 	);
	// 	this.setState({ appointments: result });
	//   }
	
	//   handleTextSearch = (e) => {
	// 	const searchTerm = e.currentTarget.value;
		
    //     this.filterContent(res.data.appointments, searchTerm);
	
	//   };


	const columns = [
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "NIC", field: "nic" },
        { title: "Phone Number", field: "phoneNumber" },
        { title: "Email", field: "email" },
		{ title: "Test Name", field: "testName" },
		{ title: "Date", field: "date"},
		{ title: "Time", field: "time" },
    ];

    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text(" All Appointment Sheet", 50, 40);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: appointments,
        });
        doc.save("All Appointment Sheet");
    };

	return (
		<>
			<div class="overflow-x-auto">
				<div class="min-w-screen min-h-fit flex justify-center font-sans overflow-hidden mt-20">
					<div class="w-full lg:w-5/6 h-fit">
						<input
							type="search"
							placeholder="🔍         Enter Keyword to Search"
							className="p-2 w-80 bg-white mb-4 rounded-full text-center focus:ring-0 focus:border-none"
							name="searchTerm"
							// onChange={this.handleTextSearch}
							// name="searchTerm"
							// onChange={this.handleTextSearch}
						/>
						<div className="grid md:grid-cols-2">
							<h1 className="text-3xl text-button-blue font-semibold mb-4">
								All Appointment Details
							</h1>
							<button className="relative z-0 mb-6 text-base bg-button-blue text-white py-2 px-5 rounded-full hover:drop-shadow-lg w-1/2"
							onClick={() => downLoadPdf()}>
								Download Appointment List
							</button>
						</div>
						<div class="bg-white shadow-md rounded-2xl w-fit ">
							<table class="min-w-5/6 w-full table-auto">
								<thead>
									<tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal w-full">
										<th class="py-3 px-6 text-left">
											First Name
										</th>
										<th class="py-3 px-6 text-center">
											Last Name
										</th>
										<th class="py-3 px-6 text-center">
											NIC
										</th>
										<th class="py-3 px-6 text-center">
											Phone Number
										</th>
										<th class="py-3 px-6 text-center">
											Email
										</th>
										<th class="py-3 px-6 text-center">
											Test Name
										</th>
										<th class="py-3 px-6 text-center">
											Date
										</th>
										<th class="py-3 px-6 text-center">
											Time
										</th>
										<th class="py-3 px-6 text-center">
											Status
										</th>
										<th class="py-3 px-6 text-center">
											Delete
										</th>
									</tr>
								</thead>
								<tbody class="text-gray-600 text-sm font-light">
									{appointments.map((r) => (
										<>
											<tr class="border-b border-gray-200 hover:bg-gray-100">
												{/* <td class="py-3 px-6 text-left whitespace-nowrap">
													<div class="flex items-center">
														<div class="mr-2"></div>
														<span class="font-medium">
															{count}
														</span>
													</div>
												</td> */}
												<td class="py-3 px-6 text-left">
													<div class="flex items-center">
														<div class="mr-2">
															{/* <img
																class="w-6 h-6 rounded-full"
																src={
																	AvatarImage
																}
																alt="img"
															/> */}
														</div>
														<span className="capitalize">
															{r.firstName}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
														<span>
															{r.lastName}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
														<span>
															{r.nic}
														</span>
													</div>
												</td>
												<td class="py-3 px-3 text-center w-fit">
													<span
														id="phoneNumber"
														class="bg-green-200 text-green-600 py-1 px-12 rounded-full text-xs capitalize w-fit">
														{r.phoneNumber}
													</span>
												</td>
												<td class="py-3 px-6 text-center">
													<span
														id="email"
														class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
														{r.email}
													</span>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
														<span>
															{r.testName}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
														<span>
															{
																r.date.split(
																	"T",
																)[0]
															}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
														<span>
															{r.time}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
														<div class="flex items-center justify-center cols-1">
															<div className="cols-1 mr-4">
																<button
																	type="submit"
																	class="cols-1 text-white bg-green-600 focus:outline-none  rounded-full text-sm  sm:w-auto px-[15px] py-2 text-center dark:bg-green-600 mt-0">
																	Approve
																</button>
															</div>
															<div className="cols-1">
																<button
																	type="submit"
																	class="cols-1 text-white bg-red-600 focus:outline-none  rounded-full text-sm  sm:w-auto px-[15px] py-2 text-center dark:bg-red-600 mt-0">
																	Decline
																</button>
															</div>
														</div>
														<span>
															{r.status}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex items-center justify-center">
													<div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
															<svg
															onClick={(
																e,
															) =>
																setConfirmDialog(
																	{
																		isOpen: true,
																		title: "Delete Appointment",
																		subTitle:
																			"Äre You Sure You Want TO Delete This Appointment?",
																		onConfirm:
																			() => {
																				handleDelete(
																					r._id,
																					e,
																				);
																			},
																	},
																)
															}
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor">
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
																/>
															</svg>
														</div>
													</div>
												</td>
											</tr>
										</>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<ConfirmDialog
				confirmDialog={confirmDialog}
				setConfirmDialog={setConfirmDialog}
			/>
		</>
	);
};

export default AppointmentTableView;
