import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="w-full h-[85px] bg-black">
			<div className="max-w-[1500px] mx-auto px-4 flex justify-between items-center h-full">
				<div>
					<h1 className="text-[#00d8ff] ">
						<Link to="/" className="hover:text-[#38a4b8]">
							BytePro
						</Link>
					</h1>
				</div>
				<div className="hidden md:flex">
					<ul className="flex text-white items-center font-bold">
						<li>
							<Link to="/Micros" className="hover:text-[#bbb1b1]">
								Micros
							</Link>
						</li>
						<li>
							<Link to="/Productos" className="hover:text-[#bbb1b1]">
								Productos
							</Link>
						</li>
						<li>
							<Link to="/Soporte" className="hover:text-[#bbb1b1]">
								Soporte
							</Link>
						</li>
						<li>
							<Link to="/Monitores" className="hover:text-[#bbb1b1]">
								Monitores
							</Link>
						</li>
						<li>
							<Link to="/Notebooks" className="hover:text-[#bbb1b1]">
								Notebooks
							</Link>
						</li>
						<li>
							<Link to="/Comunidad" className="hover:text-[#bbb1b1]">
								Comunidad
							</Link>
						</li>
						<li>
							<Link to="/Nosotros" className="hover:text-[#bbb1b1]">
								Nosotros
							</Link>
						</li>
					</ul>
					<Link to="/Carrito">
						<button className="ml-4 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-3 px-7 rounded-3xl font-bold hover:text-white	">
							Carrito
						</button>
					</Link>
				</div>

				{/* Hamburger menu */}
				<div onClick={handleNav} className="block md:hidden">
					{nav ? (
						<AiOutlineClose size={30} className="text-white" />
					) : (
						<AiOutlineMenu size={30} className="text-white" />
					)}
				</div>

				{/* Mobile Menu */}
				<div
					className={
						nav
							? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
							: "absolute left-[-100%]"
					}
				>
					<ul>
						<li className="text-2xl">Micros</li>
						<li className="text-2xl">Monitores</li>
						<li className="text-2xl">Notebooks</li>
						<li className="text-2xl">Nostros</li>
						<li className="text-2xl">Productos</li>
						<li className="text-2xl">Soporte</li>

						<button className="m-8 ">Carrito </button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
