import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../asset/logo.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import { getCurrentUser } from "../../redux/user/user.selector";
import { getHiddenValue } from "../../redux/cart/cart.selector";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles";

const Header =({currentUser, hidden})=>(
    <HeaderContainer >
      <LogoContainer to="/" >
      <Logo/>
      </LogoContainer>
      <OptionsContainer >
          <OptionLink to="/shop" >
              SHOP
          </OptionLink>
          <OptionLink to="/shop">
              CONTACT
          </OptionLink>
          {
              currentUser ? (<OptionDiv  onClick={()=>auth.signOut()}> SIGN OUT</OptionDiv>) : <Link className="option" to="/signIn">SIGN IN</Link>
          }
          <CartIcon/>
          {hidden ? null : <CartDropDown/> } 
      </OptionsContainer>
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUser,
    hidden: getHiddenValue
})
export default connect(mapStateToProps)(Header);
