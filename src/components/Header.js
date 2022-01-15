import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/Profile.png';

const Header = () => (
    <header id="header">
        <div className="inner">
            <a href="/" className="image avatar">
                <img src={avatar} alt="" />
            </a>
            <h1>
                <strong>I am Scott Mercer</strong>, a Software Engineer
                <br />
                with a passion for code and a strong aptitude for
                troubleshooting.
            </h1>
        </div>
        <Footer />
    </header>
);

export default Header;
