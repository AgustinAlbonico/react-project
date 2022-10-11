import { useReducer, useState } from "react";
import './Offers.css'
import Product from "./Product";
import Modal from "./Modal/Modal";
import { shoppingInitialState, shoppingReducer } from "../../reducers/reducer";


export const Offers = () => {

  const[isOpen, setIsOpen] = useState(true);
    const openModal = () => setIsOpen (true);
    const cancelModal = () => setIsOpen(false);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
   
  const {products} = state;

  const addToCart = (id) => dispatch ({type:"ADD_TO_CART", payload:id});

  return <>
    <div className="offers-container">
      <h2>Últimas ofertas</h2>
      <section className="cards-container">
      {
        products.map(product => <Product 
        key = {product.id}
        data={product}
        viewDetails={openModal}/> 
        )
      }  
      </section>    
    </div>

    <section className={`modal ${isOpen && "is-open"}`}>
      {
        products.map(product => <Modal
        key = {product.id}
        dataModal={product}
        addToCart={addToCart}
        cancelModal={cancelModal}
        /> 
        )
      }  
     </section>
   

  </>
  
};
