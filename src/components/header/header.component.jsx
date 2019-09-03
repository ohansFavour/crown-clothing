import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../asset/logo.svg";
import "./header.style.scss";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import { getCurrentUser } from "../../redux/user/user.selector";
import { getHiddenValue } from "../../redux/cart/cart.selector";

const Header =({currentUser, hidden})=>(
    <div className="header">
        {console.log(hidden)}
      <Link to="/" className="logo-container">
      <Logo/>
      </Link>
      <div className="options">
          <Link to="/shop" className="option">
              SHOP
          </Link>
          <Link to="/shop" className="option">
              CONTACT
          </Link>
          {
              currentUser ? (<div className="option" onClick={()=>auth.signOut()}> SIGN OUT</div>) : <Link className="option" to="/signIn">SIGN IN</Link>
          }
          <CartIcon/>
          {hidden ? null : <CartDropDown/> } 
      </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUser,
    hidden: getHiddenValue
})
export default connect(mapStateToProps)(Header);
