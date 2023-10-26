import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/recipe-realm-logo.png'
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-brand'>
                <NavLink
                    to="/"
                    className='logo-link'>
                        <img src={logo} className='logo' alt='logo' />
                        <h1 className='company-title'>Recipe Realm</h1>
                    </NavLink>
            </div>
            <div className='navbar-directory'>
                <nav className='nav-links'>
                    <NavLink
                        to="/generate"
                        className='nav-link' 
                    >
                        GENERATE
                    </NavLink>
                    <NavLink
                        to="/about"
                        className='nav-link' 
                    >
                        ABOUT
                    </NavLink>
                </nav>
                <button className='nav-button'>Login</button>
            </div>
        </div>
    )
}

export default Navbar;