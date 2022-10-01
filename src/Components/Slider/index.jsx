import React from "react";
import slideImg from "../../Assests/slide1.jpg";

export default function ControlledCarousel() {
	const Slide = (props) => {
		const btnContainer = {
			display: "inline-block",
			float: "right",
		};
		const btn = {
			border: "none",
			background: "blue",
			color: "white",
			fontSize: "22px",
			padding: "5px 10px",
			borderRadius: "10px",
			margin: "0 10px",
		};
		return (
			<React.Fragment>
				<div className="bg-gradient-to-r from-cyan-500 to-blue-500 ...">
					<img
						src={props.image.link}
						alt="Sliderr_image"
						className="w-full h-auto object-cover opacity-[0.5]"
					/>
					<div className="absolute top-48 left-36">
						<h1 className="text-white font-semibold text-5xl">
							We are Care For You
						</h1>
					</div>
				</div>
			</React.Fragment>
		);
	};
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const slides = [
		{
			id: 1,
			title: "First Slide",
			link: "https://www.kansashealthsystem.com/-/media/Project/Website/Hero/NonClinical_Researchers_AS118485830_hero.jpg?h=586&w=1440&la=en&hash=E982C6651864B3FD30FA205959286E05E8C01494",
		},
		{
			id: 2,
			title: "Second Slide",
			link: "https://www.kansashealthsystem.com/-/media/Project/Website/Hero/Research_LabPathology_AS52554426_hero.jpeg?h=586&w=1440&la=en&hash=F2764779995097C787906B24F51B19F433E62A19",
		},
		{
			id: 3,
			title: "Third Slide",
			link: "https://www.kansashealthsystem.com/-/media/Project/Website/Hero/Pharmacy_PharmacistWorking_iS886984200_hero.jpg?h=586&w=1440&la=en&hash=BB01F29EB4ED65808309FAF7791E761F68EC07EA",
		},
	];
	const slideNext = (e) => {
		setCurrentSlide((prev) => {
			return prev + 1 === slides.length ? 0 : currentSlide + 1;
		});
	};
	const slidePrev = (e) => {
		setCurrentSlide((prev) => {
			return prev === 0 ? slides.length - 1 : currentSlide - 1;
		});
	};
	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prev) => {
				return prev + 1 === slides.length ? 0 : prev + 1;
			});
		}, 4000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<React.Fragment>
			<h1></h1>
			<Slide
				image={slides[currentSlide]}
				slideNext={slideNext}
				slidePrev={slidePrev}
			/>
		</React.Fragment>
	);
}
