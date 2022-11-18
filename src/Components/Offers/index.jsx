import { useEffect, useReducer, useState } from "react";
import "./Offers.css";
import Product from "./Product";
import Modal from "./Modal/Modal";
import axios from "axios";
import { shoppingInitialState, shoppingReducer } from "../../reducers/reducer";
import { TYPES } from "../../actions/actions";

export const Offers = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [added, setAdded] = useState(false);
	const [modalProduct, setModalProduct] = useState({});

	const openModal = (id) => {
		setIsOpen(true);
		const prod = products.find((item) => item.id === id);
		setModalProduct(prod);
	};
	const cancelModal = () => setIsOpen(false);

	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const { products } = state;
	const updateState = async () => {
		const PRODUCTS_URL = "http://localhost:5000/products",
			CART_URL = " http://localhost:5000/cart";

		const resProducts = await axios.get(PRODUCTS_URL),
			resCart = await axios.get(CART_URL);

		const productsList = await resProducts.data,
			cartItems = await resCart.data;

		dispatch({
			type: TYPES.READ_STATE,
			payload: [productsList, cartItems],
		});
	};

	useEffect(() => {
		updateState();
	}, []);

	const addToCart = (id) => {
		dispatch({ type: TYPES.ADD_TO_CART, payload: id });
		setAdded(true);
		setTimeout(() => {
			setAdded(false);
		}, 2000);
	};

	return (
		<>
			<div className="offers-container">
				<h2>Últimas ofertas</h2>
				<section className="cards-container">
					{products.map((product) => (
						<Product key={product.id} data={product} openModal={openModal} />
					))}
				</section>
			</div>

			{isOpen ? (
				<section className={`modal ${isOpen && "is-open"}`}>
					<Modal
						dataModal={modalProduct}
						addToCart={addToCart}
						cancelModal={cancelModal}
						isOpen={isOpen}
						added={added}
					/>
				</section>
			) : null}
		</>
	);
};
