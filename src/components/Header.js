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
                        <a href="#">About me</a>
                    </li>
                    <li>
                        <a href="#">Works</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
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