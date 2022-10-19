import React from "react";

export const Surprise = () => {
	return (
		<div className="w-full bg-gray-50 flex flex-row p-16 gap-5">
			<div id="image" className="flex-1 px-4 w-full ">
				<img
					src="https://t2.tudocdn.net/606944?w=1920"
					alt=""
					className="object-cover w-full h-5/5"
				/>
			</div>
			<div
				id="description"
				className="flex-1 flex flex-col justify-center gap-7 pr-5"
			>
				<h2 className="text-5xl font-semibold">
					<span className="text-skyblue leading-normal		">Surprise Someone</span>
					<br />
					Working from Home
				</h2>
				<div className="flex flex-col justify-center gap-5 ">
					<p className="text-xl font-semibold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
						corrupti dolorum, quas mollitia, ab, quibusdam iusto dolores
						perspiciatis quae aut adipisci voluptatibus? Quas, nam ullam porro
						eos a nisi quaerat!
					</p>
					<p className="text-xl font-semibold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
						quisquam. Illo quo voluptatibus.ab, quibusdam iusto dolores
						perspiciatis quae aut adipisci voluptatibus?
					</p>
				</div>
				<button className="rounded p-3 bg-sky-100 bg-skyblue w-36 text-xl text-white font-semibold">
					Buy now
				</button>
			</div>
		</div>
	);
};
