import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Ensure this path is correct
import logo from '../../assets/img/logo.png';

function Header() {
    const nav_titles = [
        { path: '/', display: 'Home' },
        { path: '/plans', display: 'Services' },
        { path: '/courses', display: 'Courses' },
        { path: '/about-us', display: 'About Us' }
    ];

    return (
        <header className='header'>
            <div className='container'>
                <div className='nav_container'>
                    <div className='logo'>
                        <div className='logo-img'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <h2>TechFlix AI</h2>
                    </div>
                    <div className='navigation'>
                        <ul className="menu">
                            {nav_titles.map((item) => (
                                <li key={item.path} className='nav-item'>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
