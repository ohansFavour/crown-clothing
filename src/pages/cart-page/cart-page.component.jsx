import React from "react";
import "./cart-page.styles.scss";
import {createStructuredSelector} from "reselect";
import {getCartItems, getTotal} from "../../redux/cart/cart.selector";
import {connect} from "react-redux";
import CartItem from "../../components/checkout-item/checkout-item.component";

const CartPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
         <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>    
        </div>
       {
           cartItems.map(item=>(
            <CartItem key={item.id} cartItem={item}/>
           ))
       }
       <div className="total">TOTAL: ${total}</div>

    </div>
)
const mapStateToProps=  createStructuredSelector({
    cartItems: getCartItems,
    total : getTotal
})
export default connect(mapStateToProps)(CartPage);