import { TYPES } from "../actions/actions";
import axios from "axios";

export const shoppingInitialState = {
	products: [],
	cart: [],
};

export async function shoppingReducer(state, action) {
	switch (action.type) {
		case TYPES.READ_STATE: {
			return {
				...state,
				products: action.payload[0],
				cart: action.payload[1],
			};
		}

		case TYPES.ADD_TO_CART: {
			const { data } = await axios.get("http://localhost:5000/products");

			const newItem = data.filter((product) => {
				return product.id === action.payload;
			});

			await axios.post("http://localhost:5000/cart", newItem[0]);

			break;
		}

		case TYPES.REMOVE_ALL_PRODUCTS: {
			return axios.delete(`http://localhost:5000/cart/${action.payload}`);
		}

		case TYPES.CLEAR_CART: {
			const resCart = await axios.get("http://localhost:5000/cart");
			for (let item of resCart.data) {
				await axios.delete(`http://localhost:5000/cart/${item.id}`);
			}
			break;
		}

		default:
			return state;
	}
}

export default shoppingReducer;
