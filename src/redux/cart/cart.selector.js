import {createSelector} from "reselect";
const getCart = (state) => state.cart
export const getCartItems = createSelector(
    [getCart],
    (cart)=> cart.cartItems
);
export const getItemCount = createSelector(
    [getCartItems],
    (cartItems)=> cartItems.reduce((accumulator, cartItem)=> accumulator + cartItem.quantity,0)
)
