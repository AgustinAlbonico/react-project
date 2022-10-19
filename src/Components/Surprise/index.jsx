import React from "react";
import { AiFillGift } from "react-icons/ai";

export const Surprise = () => {
	return (
		<div className="w-full bg-gray-50 flex flex-row gap-8 p-16 px-20 justify-center">
			<div id="image" className="flex-1 px-4 pr-5  w-full ">
				<img
					src="https://www.yankodesign.com/images/design_news/2021/09/desk-setups/minimal_clean_desk_setups_hero.jpg"
					alt=""
					className="object-cover w-12/12 h-full rounded shadow-xl"
					style={{ boxShadow: "3px 3px 20px #777 " }}
				/>
			</div>
			<div
				id="description"
				className="flex-1 flex flex-col justify-center gap-8 pr-5 "
			>
				<h2 className="text-5xl font-semibold">
					<span className="text-skyblue leading-normal		">
						Sorprende a un amigo
					</span>
					<br />
					Trabajando desde casa
				</h2>
				<div className="flex flex-col justify-center gap-8">
					<p className="text-xl font-semibold ">
						¿Conoces a alguien que empezó a trabajar desde casa con una
						computadora lenta y te gustaria darle una ayuda para que pueda
						optimizar su lugar de trabajo?
					</p>
					<p className="text-xl font-semibold pr-5">
						No dudes en enviarle un regalo, desde los perifericos mas economicos
						del mercado hasta componentes ultra potentes para su computadora.
						Incluso si se trata solo de un detalle, podes enviarle una Gift
						Card.
					</p>
				</div>
				<button className="rounded p-3 gap-2 bg-sky-100 bg-skyblue w-fit text-xl text-white font-semibold flex flex-row items-center justify-between hover:bg-darkblue">
					Enviar regalo <AiFillGift />
				</button>
			</div>
		</div>
	);
};
