import React from 'react';
import ProyectOne from '../stylesheets/images/proyOne.png';
import ProyectTwo from '../stylesheets/images/proyTwo.png';
import ProyectThree from '../stylesheets/images/proyThree.png';

const Works = () => {
    return <section className="works">
        <div className="works_description">
            <h4 className="works_title">Works</h4><a name="works"></a>
            <p className="works_languages"> Languages I speak:</p>
            <p className="works_LanguagesSpecific">HTML5, CSS, Sass, JavaScript (Framework React)</p>
            <h5 className="works_subtitle"> · Here, you can find more about my dev jobs. I encorauge you to explore them  and feel free to give me a feedback · </h5>
        </div>
        <div>
            <ul className="works_list">
                <li>
                    <a href="https://github.com/marveramar/project-promo-h-module-1-team-2-afternoon-sprint-2-" target="blank"><img className="img" src={ProyectOne} alt="link P1" /></a>
                </li>
                <li>
                    <a href="https://github.com/marveramar/project-promo-h-module-2-team-4-afternoon?organization=marveramar&organization=marveramar" target="blank"><img className="img" src={ProyectTwo} alt="link P2" /></a>
                </li>
                <li>
                    <a href="https://github.com/marveramar/project-promo-h-module-3-team-4-afternoon-" target="blank"><img className="img" src={ProyectThree} alt="link P3" /></a>
                    <a href="http://beta.adalab.es/project-promo-h-module-3-team-4-afternoon-/#/">Awesome profile-cards</a>
                </li>
                <li>
                    <a><img className="img" src="" alt="" /></a>
                </li>""                <li>
                    <a><img className="img" src="" alt="" /></a>
                </li>
                <li>
                    <a><img className="img" src="" alt="" /></a>
                </li>
                <li>
                    <a><img clasName="img" src="" alt="" /></a>
                </li>
            </ul>
        </div>
    </section>
}

export default Works;