import React from 'react';
import Logo from '../stylesheets/images/logo.jpg';

const Footer = () => {
    return (


        <section className="footer"> <a name="footer"></a>
            <hr className="footer_line"></hr>
            <ul className="footer_list">
                <li>
                    <a href="https://twitter.com/marveramar_" target="blank">Twitter <i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mariaveramar/" target="blank">Linkedin <i
                        class="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/marveramar" target="blank">GitHub <i class="fab fa-github-alt"></i></a>
                </li>
                <li>
                    <a href="mailto:m.veramartin@gmail.com" target="blank">Email <i class="fas fa-envelope"></i></a>
                </li>
                <li>
                    <a href="#welcome"><img className="footer_logo" src={Logo} alt="logo" /></a>
                </li>

            </ul>
        </section>
    )
}

export default Footer;