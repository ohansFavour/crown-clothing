import {cartActionTypes} from "./cart.types";
import {addToCart} from "./cart.utils";
import {removeQuantity} from "./cart.utils";
const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

export const cartReducer = (state= INITIAL_STATE, action)=> {

switch (action.type){
    case cartActionTypes.TOGGLE_HIDDEN:
    return {
        ...state,
     hidden : !state.hidden
    };
    case cartActionTypes.ADD_ITEM:
        return {
            ...state,
            cartItems: addToCart(state.cartItems, action.payload)
        };
    case cartActionTypes.REMOVE_ITEM:
        return{
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
        }  
    case cartActionTypes.REMOVE_ONE_QUANTITY:
        return{
            ...state,
            cartItems: removeQuantity(state.cartItems, action.payload)
        }  

    default:
         return state
}
}
