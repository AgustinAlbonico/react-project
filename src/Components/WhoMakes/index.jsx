import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export const WhoMakes = () => {
	return (
		<div className="w-full bg-gray-50 flex lg:flex-row xl:p-16 xl:px-20  md:p-12  p-4 gap-5 justify-center items-center flex-col-reverse">
			<div
				id="description"
				className="flex-1 flex flex-col justify-center 2xl:gap-7 xl:gap-5 gap-4 md:pl-6 px-3"
			>
				<div className="flex flex-col 2xl:gap-5 gap-3">
					<h2 className="2xl:text-5xl md:text-3xl text-2xl  font-semibold">
						<span className="text-skyblue">Que componentes </span>
						ofrecemos?
					</h2>
					<p className="2xl:text-xl md:text-base text-sm font-semibold xl:pr-16 pr-8">
						Nos encargamos de brindarle a nuestros clientes la mejor calidad del
						mercado y sabemos que lo hacemos. ¿Por que?
					</p>
				</div>
				<ul className="flex flex-col justify-center 2xl:gap-5 gap-4 ">
					<li className="flex flex-row items-center gap-3">
						<BsCheckCircleFill color="#05dbf2" className="text-xl" />
						<p className="2xl:text-lg text-sm">
							Porque hace 5 años trabajamos con las mejores marcas de todo el
							mundo.
						</p>
					</li>
					<li className="flex flex-row items-center gap-3">
						<BsCheckCircleFill color="#05dbf2" className="text-xl" />
						<p className="2xl:text-lg text-sm">
							Porque nos aseguramos de probar los componentes y entregar
							productos 100% funcionales
						</p>
					</li>
					<li className="flex flex-row items-center gap-3">
						<BsCheckCircleFill color="#05dbf2" className="text-xl" />
						<p className="2xl:text-lg text-sm">
							Porque sabemos lo esenciales que son nuestros productos para el
							dia a dia.
						</p>
					</li>
					<li className="flex flex-row items-center gap-3">
						<BsCheckCircleFill color="#05dbf2" className="text-xl" />
						<p className="2xl:text-lg text-sm">
							Porque creemos que la calidad debe estar por delante de todo.
						</p>
					</li>
					<li className="flex flex-row items-center gap-3">
						<BsCheckCircleFill color="#05dbf2" className="text-xl" />
						<p className="2xl:text-lg text-sm">
							Y sobre todo, porque las personas nos siguen eligiendo.
						</p>
					</li>
				</ul>
				<button className="rounded md:px-6 py-3 bg-sky-100 bg-skyblue md:w-fit w-full hover:bg-darkblue 2xl:text-xl xl:text-lg text-white font-semibold">
					Descubre nuestros productos
				</button>
			</div>
			<div
				id="image"
				className="flex-1 xl:pr-6 xl:w-full h-96 xl:h-full  md:px-10 "
			>
				<img
					src="https://www.nme.com/wp-content/uploads/2021/10/pc-gamers-ram-hardware.jpg"
					alt=""
					className="object-cover w-12/12 h-full  rounded"
					style={{ boxShadow: "3px 3px 20px #777" }}
				/>
			</div>
		</div>
	);
};
