import { useReducer } from "react";
import './Offers.css'
import Product from "./Product";
import { shoppingInitialState, shoppingReducer } from "../../reducers/reducer";

export const Offers = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  
  const {products, cart} = state;

  const addToCart = (id) => dispatch ({type:"ADD_TO_CART", payload:id})

 
  return <div className="offers-container">
    <h2>Últimas ofertas</h2>
    <section className="cards-container">
    {
      products.map(product => <Product 
      key = {product.id}
      data={product}
      addToCart={addToCart}/> 
      )
    }  
    </section>
  </div>
};
