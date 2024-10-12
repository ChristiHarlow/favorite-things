import React from 'react';
import '../styles/Header.css'; // Optional if you're using a CSS file for styling

const Header = () => {
    return (
        <header
            className="d-flex flex-column align-items-center justify-content-center"
            id="intro"
        >
            <h1>Christi's Favorite Things</h1>
        </header>
    );
};

export default Header;
