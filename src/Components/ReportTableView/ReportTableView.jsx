/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import ConfirmDialog from "../ConfirmDialog/index";
import AvatarImage from "../../Assests/Man-Avatar.jpg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const ReportTableView = () => {
	const [reports, setReports] = useState([]);

	//fetching patient reports from the database
	useEffect(() => {
		const fetchReports = async () => {
			const res = await axios.get("api/report/", {
				headers: {
					authentication: localStorage.getItem("authentication"),
				},
			});
			setReports(res.data);
			console.log(res.data);
		};
		fetchReports();
	}, []);

	//for delete
	const handleDelete = async (id, e) => {
		e.preventDefault();
		axios
			.delete(`/api/report/delete/${id}`, {
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

	const Navigation = useNavigate();
	const addReport = () => {
		Navigation("/patient/report/add");
	};

	return (
		<>
			<div class="overflow-x-auto">
				<div class="min-w-screen min-h-fit flex justify-center font-sans overflow-hidden mt-20">
					<div class="w-full lg:w-5/6 h-fit">
						<h1 className="text-3xl text-button-blue font-semibold mb-8">
							Patient Report Table
						</h1>

						<div class="grid md:grid-cols-2">
							<input
								type="text"
								placeholder="🔍 Enter Keyword to Search"
								className="p-2 w-80 bg-white mb-12 rounded-full text-center focus:ring-0 focus:border-none"
							/>

							<button
								type="button"
								onClick={addReport}
								className="text-base bg-button-blue text-white py-2 mb-12 px-5 rounded-full hover:drop-shadow-lg w-1/2">
								+ Add Reports
							</button>
						</div>
						<div class="bg-white shadow-md rounded-2xl my-6">
							<table class="min-w-max w-full table-auto">
								<thead>
									<tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
										{/* <th class="py-3 px-6 text-left">
											Report No.
										</th> */}
										<th class="py-3 px-6 text-left">
											Patient Name
										</th>
										<th class="py-3 px-6 text-center">
											NIC
										</th>
										<th class="py-3 px-6 text-center">
											Gender
										</th>
										<th class="py-3 px-6 text-center">
											Date
										</th>
										<th class="py-3 px-6 text-center">
											Age
										</th>
										<th class="py-3 px-6 text-center">
											Actions
										</th>
									</tr>
								</thead>
								<tbody class="text-gray-600 text-sm font-light">
									{reports.map((r) => (
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
															<img
																class="w-6 h-6 rounded-full"
																src={
																	AvatarImage
																}
																alt="img"
															/>
														</div>
														<span className="capitalize">
															{r.firstName +
																" " +
																r.lastName}
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
												<td class="py-3 px-6 text-center">
													<span
														id="gender"
														class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs capitalize">
														{r.Gender}
													</span>
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
															{r.age}
														</span>
													</div>
												</td>
												<td class="py-3 px-6 text-center">
													<div class="flex item-center justify-center">
														<div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor">
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
																/>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
																/>
															</svg>
														</div>
														<div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor">
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
																/>
															</svg>
														</div>
														<div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
															<svg
																//delete
																onClick={(
																	e,
																) =>
																	setConfirmDialog(
																		{
																			isOpen: true,
																			title: "Delete Report",
																			subTitle:
																				"Äre you sure you want to delete this report?",
																			onConfirm:
																				() => {
																					handleDelete(
																						r._id,
																						e,
																					);
																				},
																		},
																	)
																} //to here
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

export default ReportTableView;