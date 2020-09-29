import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/terrapin4.svg'
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>

        </div>

    </div>
)

export default Header;