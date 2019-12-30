import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import CartIcon from "./Cart/CartIcon";
import CartDropDown from "./Cart/Cart-DropDown";
import { selectCartHidden } from "../components/Cart/Cart-Selector";
import { selectCurrentUser } from "../components/User/User-Selector";

import { auth } from "../firebase/fireBaseUtils";

const Navbar = ({ currentUser, hidden }) => (
  <React.Fragment>
    <header className="navbar-header">
      <Link to="/">
        <img src={logo} alt="Veganease LLC Logo" className="logo" />
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          {currentUser ? (
            <div className="nav-items" onClick={() => auth.signOut()}>
              SIGN OUT <span>{currentUser.displayName}</span>
            </div>
          ) : (
            <Link to="/sign-in">Sign In</Link>
          )}
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <CartIcon className="nav-items" />
          {hidden ? null : <CartDropDown />}
        </li>
      </ul>
    </header>
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
