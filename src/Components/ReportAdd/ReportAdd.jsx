import React from "react";

import { DatePicker, Space } from "antd";

const ReportAdd = () => {
	return (
		<>
			<div class="overflow-x-auto">
				<div class="min-w-screen min-h-fit flex justify-center font-sans overflow-hidden mt-10">
					<div class="w-full lg:w-5/6 h-fit">
						<h1 className="text-center text-3xl font-semibold text-button-blue mb-10">
							Portal For Report Submission
						</h1>
						<div class="bg-white shadow-md rounded-2xl my-6">
							{/*---------------------------*/}
							<div class="grid md:grid-cols-2 md:gap-6 px-20 py-5">
								<div class="relative z-0 mb-6 w-full group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
										placeholder=" "
										required=""
										// onChange={(e) =>
										// 	setEmail(e.target.value)
										// }
									/>
									<label
										for="floating_email"
										class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										First Name
									</label>
								</div>
								<div class="relative z-0 mb-6 w-full group">
									<input
										type="text"
										name="lastName"
										id="lastName"
										class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
										placeholder=" "
										required=""
										// onChange={(e) =>
										// 	setPhoneNumber(e.target.value)
										// }
									/>
									<label
										for="lastName"
										class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Last Name
									</label>
								</div>
							</div>
							<div class="grid md:grid-cols-2 md:gap-6 px-20">
								<div class="relative z-0 mb-6 w-full group">
									<h3 class="mb-4 font-regular text-sm text-button-blue">
										Select Gender
									</h3>
									<ul class="items-center w-full text-sm font-medium rounded-xl border sm:flex text-white bg-cyan-800">
										<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
											<div class="flex items-center pl-3">
												<input
													id="radio-Male"
													type="radio"
													value="male"
													name="list-radio"
													checked="true"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-license"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Male
												</label>
											</div>
										</li>
										<li class="w-full border-b border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="radio-Female"
													type="radio"
													value="female"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Female
												</label>
											</div>
										</li>
									</ul>
								</div>
								<div class="relative z-0 mt-6 w-full group">
									<Space
										direction="vertical"
										style={{ width: "100%" }}>
										<DatePicker
											placeholder="Select Date of Birth"
											// onChange={(date) =>
											// 	setDOB(date)
											// }
											style={{
												background: "transparent",
												border: "none",
												borderBottom:
													"2px solid #265673",
												marginTop: "10px",
												width: "100%",
												color: "#265673",
											}}
										/>
									</Space>
								</div>
							</div>
							<div class="grid md:grid-cols-2 md:gap-6 px-20">
								<div class="relative z-0 mb-6 w-full group">
									<input
										type="text"
										name="nic"
										id="nic"
										class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
										placeholder=" "
										required=""
										// onChange={(e) =>
										// 	setPhoneNumber(e.target.value)
										// }
									/>
									<label
										for="nic"
										class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										NIC
									</label>
								</div>
								<div class="relative z-0 mb-6 w-full group">
									<input
										type="text"
										name="age"
										id="age"
										class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
										placeholder=" "
										required=""
										// onChange={(e) =>
										// 	setPhoneNumber(e.target.value)
										// }
									/>
									<label
										for="age"
										class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Age
									</label>
								</div>
							</div>
							<div class="grid md:grid-cols-2 md:gap-6 px-20">
								<div class="relative z-0 mb-6 w-full group">
									<input
										type="text"
										name="phone"
										id="phone"
										class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
										placeholder=" "
										required=""
										// onChange={(e) =>
										// 	setPhoneNumber(e.target.value)
										// }
									/>
									<label
										for="phone"
										class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Phone
									</label>
								</div>
							</div>
							<hr className="h-1 bg-button-blue mb-5 mt-5" />
							<div class="grid md:grid-cols-1 md:gap-6 px-20">
								<div class="relative z-0 mb-6 w-full group">
									<h3 class="mb-4 font-regular text-sm text-button-blue">
										Test Name
									</h3>
									<ul class="items-center w-full text-sm font-medium rounded-xl border sm:flex text-white bg-cyan-800">
										<li class="w-full border-none border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
											<div class="flex items-center pl-3">
												<input
													id="bloodSugar"
													type="radio"
													value="bloodSugar"
													name="list-radio"
													checked="true"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-license"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Blood Sugar
												</label>
											</div>
										</li>
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="psa"
													type="radio"
													value="psa"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													PSA
												</label>
											</div>
										</li>
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="fab"
													type="radio"
													value="fab"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Sputin-For-FAB
												</label>
											</div>
										</li>
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="CardiacP"
													type="radio"
													value="CardiacP"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Cardiac-Profile
												</label>
											</div>
										</li>
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="esr"
													type="radio"
													value="esr"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													ESR
												</label>
											</div>
										</li>
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="ggt"
													type="radio"
													value="ggt"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													GGT
												</label>
											</div>
										</li>
									</ul>
									<ul class="items-center w-full text-sm font-medium rounded-xl border sm:flex text-white bg-cyan-800">
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="ironS"
													type="radio"
													value="ironS"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Iron Study
												</label>
											</div>
										</li>
										<li class="w-full border-none border-white sm:border-b-0 sm:border-">
											<div class="flex items-center pl-3">
												<input
													id="plateCount"
													type="radio"
													value="plateCount"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-id"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Platelet Count
												</label>
											</div>
										</li>
										<li class="w-full border-none border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
											<div class="flex items-center pl-3">
												<input
													id="rProfile"
													type="radio"
													value="rProfile"
													name="list-radio"
													checked="true"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-license"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Renai Profile
												</label>
											</div>
										</li>
										<li class="w-full border-none border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
											<div class="flex items-center pl-3">
												<input
													id="urineRoutine"
													type="radio"
													value="urineRoutine"
													name="list-radio"
													checked="true"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-license"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Urine Routine
												</label>
											</div>
										</li>
										<li class="w-full border-none border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
											<div class="flex items-center pl-3">
												<input
													id="sChemistry"
													type="radio"
													value="sChemistry"
													name="list-radio"
													checked="true"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-license"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													Serum Chemistry
												</label>
											</div>
										</li>
										<li class="w-full border-none border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
											<div class="flex items-center pl-3">
												<input
													id="hcv"
													type="radio"
													value="hcv"
													name="list-radio"
													checked="true"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
													// onChange={(e) =>
													// 	setGender(
													// 		e.target.value,
													// 	)
													// }
												/>
												<label
													for="horizontal-list-radio-license"
													class="py-3 ml-2 w-full text-sm font-medium text-white">
													HCV
												</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<hr className="h-1 bg-button-blue mb-5 mt-5" />
							<div class="grid md:grid-cols-1 md:gap-6 px-20">
								Begin to write Your Code From Here
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReportAdd;
