import React from "react";

const CartItem = ({ data, deleteFromCart }) => {
	const { id, name, price, img, quantity } = data;

	const buttonStyle = {
		padding: ".6rem 2rem",
		backgroundColor: "#eee",
		height: "fit-content",
	};

	return (
		<div
			style={{
				backgroundColor: "#fff",
				padding: "0.5rem 1rem",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: "1rem",
				width: "100%",
				border: "1px solid #eee",
				boxShadow: "2px 2px 10px #aaa",
				borderRadius: ".5rem",
			}}
		>
			<img src={img} alt={name} style={{ width: "100px" }} />
			<h4 style={{ flex: "1 1" }}>{name}</h4>
			{/* {quantity ? (
				<h5 style={{ flex: "1 1" }}>
					${price} x {quantity} = ${price * quantity}
				</h5>
			) : (
				<h5 style={{ flex: "1 1" }}>${price}</h5>
			)} */}
			<h5 style={{ flex: "1 1" }}>${price}</h5>
			<button style={buttonStyle} onClick={() => deleteFromCart(id, true)}>
				Eliminar
			</button>
		</div>
	);
};

export default CartItem;
