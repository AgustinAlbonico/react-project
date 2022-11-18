import React, { useState } from "react";
import axios from "axios";
import { TYPES } from "../actions/actions";
import shoppingReducer, { shoppingInitialState } from "../reducers/reducer";
import { useReducer, useEffect } from "react";
import CartItem from "../Components/cartItem/CartItem";

export default function Carrito() {
	const [cart, setCartList] = useState([]);
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const updateState = async () => {
		const CART_URL = "http://localhost:5000/cart";

		const { data } = await axios.get(CART_URL);
		const { productItems } = await axios.get("http://localhost:5000/products");
		console.log(data);

		dispatch({
			type: TYPES.READ_STATE,
			payload: [productItems, data],
		});
		setCartList(data);
	};

	useEffect(() => {
		updateState();
	}, []);

	const deleteFromCart = (id, all = false) => {
		if (all) {
			updateState();
			dispatch({
				type: TYPES.REMOVE_ALL_PRODUCTS,
				payload: id,
			});
		} else {
			dispatch({
				type: TYPES.REMOVE_ONE_PRODUCT,
				payload: id,
			});
		}
	};

	const clearCart = () => {
		updateState();
		dispatch({ type: TYPES.CLEAR_CART });
	};

	return (
		<div
			style={{
				padding: "1rem",
				justifyContent: "space-evenly",
				height: "82vh",
				width: "100%",
				gap: "1rem",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					padding: "1rem",
					justifyContent: "space-evenly",
					height: "100%",
					width: "100%",
					gap: "1rem",
				}}
			>
				<ul style={{ width: "80%", border: "1px solid #ccc" }}>
					{cart.length === 0 ? (
						<li
							style={{
								margin: "auto",
								textAlign: "center",
								padding: "5rem",
								height: "2rem",
								fontSize: "2rem",
								color: "#faa",
							}}
						>
							Aun no tienes productos en el carrito
						</li>
					) : (
						cart.map((item, index) => (
							<li>
								<CartItem
									key={index}
									data={item}
									deleteFromCart={deleteFromCart}
								/>
							</li>
						))
					)}
				</ul>

				<button
					style={{
						padding: ".6rem 2rem",
						backgroundColor: "#eee",
						height: "fit-content",
						margin: "auto",
					}}
					onClick={clearCart}
				>
					Limpiar carrito
				</button>
			</div>
		</div>
	);
}
