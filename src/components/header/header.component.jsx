import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../asset/logo.svg";
import "./header.style.scss";
import {auth} from "../../firebase/firebase.utils";

const Header =({currentUser})=>(
    <div className="header">
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
              currentUser? <div className="option" onClick={()=>auth.signOut()}> SIGN OUT</div> : <Link className="option" to="/signIn">SIGN IN</Link>
          }
      </div>
    </div>
)
export default Header;
