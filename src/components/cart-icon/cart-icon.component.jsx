import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../asset/cart-icon.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {getItemCount} from "../../redux/cart/cart.selector";


const CartIcon = ({toggleCartHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}> 
    {/* No callback is used since it doesn't take an argument */}
        <ShoppingIcon className="shopping-icon"  />
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapStateToProps = (state)=>({
 itemCount: getItemCount(state)
})
const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden:() => dispatch(toggleCartHidden())
   })
   export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);