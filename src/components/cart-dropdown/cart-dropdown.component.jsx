import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import {connect} from "react-redux";
import {getCartItems} from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {withRouter} from "react-router-dom";




const CartDropdown = ({cartItems, history, dispatch})=>(
<div className="cart-dropdown" >
    <div className=" cart-items">
       {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item ={cartItem}/>) : 
       <span className="empty-message">Your cart is empty</span>}
    </div>
    <CustomButton onClick={()=>{
        history.push("./checkout");
         dispatch(toggleCartHidden())
         }}>GO TO CHECKOUT</CustomButton>
</div>
);
// Never forget that the state is from root reducer
const mapStateToProps = createStructuredSelector({
cartItems: getCartItems
});
// withRouter is used to give a component the access to the history location and match
export default withRouter(connect(mapStateToProps)(CartDropdown));