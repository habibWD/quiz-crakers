import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-menu container">
                <div className="course-name">
                    <h2>Quiz Crackers</h2>
                </div>
                <nav className="menu-item">
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;