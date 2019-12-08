import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selector.js";

import { ReactComponent as Logo } from '../../assets/crown.svg';
// this syntax is for adding svgs to react.
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{/* if current user is true, add a div, if not, add link */
			currentUser ? (
				/* sign out comes from auth library in firebase.  */
				<div className="option" onClick={() => auth.signOut()}>
					{' '}
					SIGN OUT{' '}
				</div>
			) : (
				<Link className="option" to="/signin">
					{' '}
					SIGN IN{' '}
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
