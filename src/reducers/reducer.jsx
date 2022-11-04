import { TYPES } from "../actions/actions";

export const shoppingInitialState = {
    products: [
      {id: 1, name: "CPU", sale: 150.999, price: 156.999, img: require('../Components/Offers/images/cpu.png')},
      {id: 2, name: "Mouse 2.4Ghz Inalámbrico", sale: 2500, price: 2.899, img: require('../Components/Offers/images/mouse.png')},
      {id: 3, name: "Teclado bluetooth Logitech ", sale: 17.999, price: 20.999, img: require('../Components/Offers/images/teclado.png')},
      {id: 4, name: "Disco Rigido HDD 1TB", sale: 9.899, price: 12.099, img: require('../Components/Offers/images/disco.png')},
      {id: 5, name: "PC Gamer", sale: 150.999, price: 159.999, img: require('../Components/Offers/images/pc-gamer.png')},
      
    ],
    cart: []
  }

  export function shoppingReducer(state, action) {
    switch (action.type) {
      case TYPES.ADD_TO_CART: {
          const newItem = state.products.find(product => product.id === action.payload)
          const itemInCart = state.cart.find(item => item.id === newItem.id)
          return itemInCart 
          ? {
              ...state,
              cart: state.cart.map(item => 
                  item.id === newItem.id 
                      ? {...item, quantity: item.quantity + 1}
                      : item 
              )
          }
          :{
              ...state,
              cart:[...state.cart, {...newItem, quantity: 1}]
          }
      }
      case TYPES.REMOVE_ONE_PRODUCT: {
        const itemToDelete = state.cart.find(item=>item.id === action.payload)

        return itemToDelete.quantity>1
        ?{
          ...state,
          cart: state.cart.map(item => 
              item.id === action.payload 
                  ? {...item, quantity: item.quantity - 1}
                  : item 
          )
        }
        :{
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        }
      }
      
      case TYPES.REMOVE_ALL_PRODUCTS: {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        }

      }
      
      case TYPES.CLEAR_CART: {
        return shoppingInitialState;
      }
        
    
      default:
        return state;
    }
}

export default shoppingReducer;