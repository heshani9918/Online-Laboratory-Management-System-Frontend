import React, { useState } from "react";
import axios from "axios";
import Notification from "../Notification/index";
import "antd/dist/antd.min.css";
import { DatePicker, Space } from "antd";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Navigate, useNavigate } from "react-router-dom";
import { TimePicker } from "antd";

function GetDateAndTime() {
	const [date, setDate] = useState(new Date("2000/01/01"));
	const [time, setTime] = useState("");
	const [open, setOpen] = useState(false);

	console.log("time", time);
	localStorage.setItem("date", date);
	localStorage.setItem("time", time);

	const handletime = (newTime) => {
		setTime(newTime);
	};

	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const Navigation = useNavigate();
	const makeAppointment = (dat, tim) => {
		Navigation("/patient/appointment/add", {
			state: { date: dat, time: tim },
		});
	};

	//const timeValue: Date = new Date("01/01/2021 08:30 AM");
	//const minTime: Date = new Date("01/02/2021 01:00 AM");
	//const maxTime: Date = new Date("01/02/2021 12:00 PM");

	const error = document.getElementById("errorMessage");

	// error handling
	const errorhandling = () => {
		if (date === "" || time === "") {
			error.innerHTML =
				"* Fill out all the fields. (All the fields are required)";
		} else {
			error.innerHTML = "";
		}
	};

	// on submit function
	const submit = async (e) => {
		e.preventDefault();
		errorhandling();

		const data = {
			date: date,
			time: time,
		};

		console.log("data", data);

		try {
			await axios
				.get("/api/appointment", {
					headers: {
						authentication:
							localStorage.getItem("authentication"),
					},
				})
				.then((res) => {
					console.log("check date and time", res);
					if (res.data.date === date && res.data.time === time) {
						setNotify({
							isOpen: true,
							message: "Available!",
							type: "success",
						});
					} else {
						setNotify({
							isOpen: true,
							message: "Not Available!",
							type: "error",
						});
					}
				})
				.catch((err) => {
					console.log(err);
					setNotify({
						isOpen: true,
						message: "Not Available!",
						type: "error",
					});
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="bg-main-blue w-[100%] h-full">
				<div className="flex justify-center items-center">
					<div className="ml-20 w-full">
						<div className="w-[100%] mb-10 mt-10">
							<h1 className="text-button-blue font-semibold text-3xl text-center">
								Make Your Appointment
							</h1>
						</div>
						<div className="flex justify-center items-center">
							<form
								onSubmit={submit}
								className="bg-white w-[55%] h-auto p-14 rounded-xl mt-5 ">
								<p
									className="text-red-600 mb-6 text-sm"
									id="errorMessage"
								/>
								<div className="flex justify-center items-center mt-8">
									<div className="p-0 md:gap-24">
										<div class="grid md:grid-cols-1 md:gap-6">
											<div class="relative z-0 mb-0 w-full group">
												<label
													for="floating_date"
													class="peer-focus:font-medium absolute text-2xl text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													<strong>
														Select Date{" "}
													</strong>
												</label>
											</div>
											<div class="relative z-0 mb-6 w-full group">
												<Space
													direction="vertical"
													style={{
														width: "100%",
													}}>
													<DatePicker
														placeholder="Select the date"
														required=""
														onChange={(date) =>
															setDate(date)
														}
														style={{
															background:
																"transparent",
															border: "none",
															borderBottom:
																"2px solid #265673",
															marginTop:
																"10px",
															width: "100%",
															color: "#265673",
														}}
													/>
												</Space>
											</div>
											<div class="relative z-0 mb-0 w-full group">
												<label
													for="floating_phone"
													class="peer-focus:font-medium absolute text-2xl text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													<strong>Time</strong>
												</label>
											</div>
											<div class="relative z-0 mb-6 w-full group">
												{/* <TimePickerComponent placeholder="Select a Time"
											required=""
											onChange={(e) =>
												setTime(e.target.value)}
											//value={setTime}
											// min={minTime}
											// max={maxTime}
											//format="HH:mm"
											//</div>step={60}
											/> */}
												<TimePicker
													use12Hours
													open={open}
													onOpenChange={setOpen}
													getTi
													value={time}
													onChange={handletime}
													className="w-full"
												/>
											</div>
											{/* <input
										type="text"
										name="floating_phone"
										id="floating_phone"
										class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
										placeholder=" "
										required=""
										onChange={(e) =>
											setTime(e.target.value)
										}
									/> */}
											<div class="grid md:grid-cols-1 md:gap-6">
												<div class="relative z-0 mb-2 w-full group flex justify-center items-center">
													<button
														type="submit"
														class="text-white bg-button-blue hover:bg-button-hover-blue focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-[234px] py-2.5 text-center dark:bg-button-blue dark:hover:bg-button-hover-blue mt-5">
														Check Availability
													</button>
												</div>
											</div>

											<div class="grid md:grid-cols-1 md:gap-2">
												<div class="relative z-0 mb-6 w-full group flex justify-center items-center">
													<button
														type="button"
														onClick={
															makeAppointment
														}
														class="text-white bg-button-blue hover:bg-button-hover-blue focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-[234px] py-2.5 text-center dark:bg-button-blue dark:hover:bg-button-hover-blue mt-5">
														Make Your
														Appointment
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Notification notify={notify} setNotify={setNotify} />
		</>
	);
}

export default GetDateAndTime;
