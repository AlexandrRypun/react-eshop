import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { setCurrentUser } from "../../redux/user/user.actions";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropDownVisible } from '../../redux/cart/cart.selectors';

class Header extends React.Component {
    signOut = () => {
        this.props.updateCurrentUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };
    render() {
        return (
            <div className='header'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='option' to='/shop'>
                        CONTACT
                    </Link>
                    {
                        this.props.user ? <div className='option' onClick={this.signOut}>SIGN OUT</div> : <Link className='option' to='signin'>SIGN IN</Link>
                    }
                    <CartIcon />
                </div>
                {this.props.isDropdownVisible ? (<CartDropdown />) : null}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    isDropdownVisible: selectCartDropDownVisible
});
const mapDispatchToProps = dispatch => ({
    updateCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
