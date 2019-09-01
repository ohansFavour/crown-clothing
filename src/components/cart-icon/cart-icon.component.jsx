import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../asset/cart-icon.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";


const CartIcon = ({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}> 
    {/* No callback is used since it doesn't take an argument */}
        <ShoppingIcon className="shopping-icon"  />
        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden:() => dispatch(toggleCartHidden())
   })
   export default connect(null, mapDispatchToProps)(CartIcon);