import React from 'react';
import '../styles/Header.css'; // Optional if you're using a CSS file for styling

const Header = () => {
    return (
        <header
            className="d-flex flex-column align-items-center justify-content-center"
            id="intro"
        >
            <h1>Christi's Favorite Things!</h1>
            <p>Inspired by Oprah, I created this site to share my personal collection of favorites that have brought joy, inspiration, and comfort to my life. I hope these recommendations inspire you as they have inspired me! </p>
        </header>
    );
};

export default Header;
