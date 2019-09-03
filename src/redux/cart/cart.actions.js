import {cartActionTypes} from "./cart.types";

export const toggleCartHidden= () =>({
    type: cartActionTypes.TOGGLE_HIDDEN
})
export const addItems = (item)=>({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
export const removeItem =(item)=>({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})
export const removeQuantity =(item)=>({
    type: cartActionTypes.REMOVE_ONE_QUANTITY,
    payload: item
})
