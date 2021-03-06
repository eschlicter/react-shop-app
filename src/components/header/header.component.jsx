import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/terrapin5.svg'
import { auth } from '../../firebase/firebase.utils';


import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <div className='logo-container'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>

    </div>
)

export default Header;