import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <ul className="menu_list">
                    <li>
                        <a href="#" >Welcome</a>
                    </li>
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
                        <img src="../stylesheets/images/dolly.png" alt="logo"></img>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;