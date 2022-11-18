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
	const [products, setProducts] = useState([]);
	const [modalProduct, setModalProduct] = useState({});
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const openModal = (id) => {
		setIsOpen(true);
		const prod = products.find((item) => item.id === id);
		setModalProduct(prod);
	};
	const cancelModal = () => setIsOpen(false);

	const updateState = async () => {
		const PRODUCTS_URL = "http://localhost:5000/products";

		const { data } = await axios.get(PRODUCTS_URL);
		const { cartItems } = await axios.get("http://localhost:5000/cart");

		setProducts(data);
		dispatch({
			type: TYPES.READ_STATE,
			payload: [data, cartItems],
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

	if (products)
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
