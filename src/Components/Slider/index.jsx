import React, { useState } from "react";
import slide from "../../Assests/slide1.jpg";

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	let currentSlideID = 1;

	// let sliderElement = document.getElementById("slider");
	// let totalSlides = 3;

	// function next() {
	// 	if (totalSlides < currentSlideID) {
	// 		currentSlideID++;
	// 		showSlide();
	// 	}
	// }
	// function prev() {
	// 	if (currentSlideID > 1) {
	// 		currentSlideID--;
	// 		showSlide();
	// 	}
	// }

	// function showSlide() {
	let slides = document
		.getElementById("slides")
		.getElementsByTagName("li");
	// 	for (let index = 0; index < totalSlides; index++) {
	// 		const element = slides[index];
	// 		if (currentSlideID === index + 1) {
	// 			element.classList.remove("hidden");
	// 		} else {
	// 			element.classList.add("hidden");
	// 		}
	// 	}
	// }

	for (let index = 0; index <= 3; index++) {
		const element = slides[index];
		if (currentSlideID === index + 1) {
			element.classList.remove("hidden");
		}
	}

	return (
		<>
			<section>
				<div className="relative">
					<ul id="slider">
						<li className="h-[50vh] relative">
							<img
								src={slide}
								alt=""
								className="h-full w-full object-cover"
							/>
							<div className="absolute top-0 left-0 h-full w-full flex">
								<h2 className="px-20 text-4xl font-bold text-white my-auto w-full text-center">
									Header 1
								</h2>
							</div>
						</li>
						<li className="h-[50vh] relative hidden">
							<img
								src={slide}
								alt=""
								className="h-full w-full object-cover"
							/>
							<div className="absolute top-0 left-0 h-full w-full flex">
								<h2 className="px-20 text-4xl font-bold text-white my-auto w-full text-center">
									Header 2
								</h2>
							</div>
						</li>
						<li className="h-[50vh] relative hidden">
							<img
								src={slide}
								alt=""
								className="h-full w-full object-cover"
							/>
							<div className="absolute top-0 left-0 h-full w-full flex">
								<h2 className="px-20 text-4xl font-bold text-white my-auto w-full text-center">
									Header 3
								</h2>
							</div>
						</li>
					</ul>
				</div>
				<div className="absolute px-5 flex h-full w-full top-0 left-0">
					<div className="my-auto w-full flex justify-between">
						<button
							// onClick={prev()}
							className="bg-white p-3 rounded-full bg-opacity-80 shadow-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
						</button>
						<button
							// onClick={next()}
							className="bg-white p-3 rounded-full bg-opacity-80 shadow-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default ControlledCarousel;
