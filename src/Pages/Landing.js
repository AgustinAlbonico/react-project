import React from "react";
import { Banner } from "../Components/Banner";
import { Offers } from "../Components/Offers";
import { WhyChoose } from "../Components/WhyChoose";
import { WhoMakes } from "../Components/WhoMakes";
import { Partner } from "../Components/Partner";
import { Surprise } from "../Components/Surprise";
import { Instagram } from "../Components/Instagram";
import { TellaFriend } from "../Components/TellaFriend";
import { Foot } from "../Components/Foot";

export const Landing = () => {
	return (
		<>
			<Banner />
			<Offers />
			<WhyChoose />
			<WhoMakes />
			<Instagram />
			{/* <Partner /> */}
			<Surprise />
			<TellaFriend />
			<Foot />
		</>
	);
};

export default Landing;
