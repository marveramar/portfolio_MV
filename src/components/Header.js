import React from 'react';
import Logo from '../stylesheets/images/logo.jpg';

const Header = () => {
    return (
        <header className="header">
            <nav className="menu"><a name="welcome"></a>
                <ul className="menu_list">
                    <li>
                        <a href="#aboutMe">About me</a>
                    </li>
                    <li>
                        <a href="#works">Works</a>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>
                    </li>
                    <li>
                        <img className="logo" src={Logo} alt="logo"></img>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;