import React from 'react';
import ProyectOne from '../stylesheets/images/P1.png';
import ProyectTwo from '../stylesheets/images/P2.png';
import ProyectThree from '../stylesheets/images/P3.png';
import FinalThree from '../stylesheets/images/R&M.png';


const Works = () => {
    return <section className="works"><a name="works"></a>
        <div className="works_description">
            <h4 className="works_title">Works</h4>
            <p className="works_languages"> Languages I 'speak':</p>
            <div className="works_LanguagesSpecific">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-sass"></i>
                <i class="fab fa-bootstrap"></i>
                <i class="fab fa-gulp"></i>
                <i class="fab fa-github-alt"></i>
                <i class="fab fa-git-alt"></i>
            </div>
            <h5 className="works_subtitle"> ·· Here, you can find more about my dev jobs. I encourage you to explore them  and feel free to give me a feedback ·· </h5>
        </div>
        <div>
            <ul className="works_list">
                <li>
                    <p className="work_list-title">Front-Walkers</p>
                    <p className="work_list-description">Creation of a website with two pages, one for the presentation of the creative team and the other with a contact form. This was my first group project in the world of web development. We use HTML5, CSS3, Sass, Bootstrap and git for version control.</p>
                    <a href="https://github.com/marveramar/project-promo-h-module-1-team-2-afternoon-sprint-2-" target="blank"><img className="work_list-img" src={ProyectOne} alt="link P1" /> </a>
                </li>
                <li>
                    <p className="work_list-title">Coco-Lab</p>
                    <p className="work_list-description">Development of a dynamic website to create personalized contact cards. Use of JavaScript to create several functionalities. Developed in a work team with Agile philosophy.</p>
                    <a href="https://github.com/marveramar/project-promo-h-module-2-team-4-afternoon?organization=marveramar&organization=marveramar" target="blank"><img className="work_list-img" src={ProyectTwo} alt="link P2" /></a>
                </li>
                <li>
                    <p className="work_list-title">Las Merches</p>
                    <p className="work_list-description">Migration of legacy code from JavaScript to React. Some new functionality had to be added and the style changed at some point. The developer team worked using Scrum work process.</p>
                    <a href="https://github.com/marveramar/project-promo-h-module-3-team-4-afternoon-" target="blank"><img className="work_list-img" src={ProyectThree} alt="link P3" /></a>
                </li>
                <li>
                    <p className="work_list-title">Rick&Morty</p>
                    <p className="work_list-description">Development of web search for characters from a cartoon series. It is a SPA application implemented in React, using React router.</p>
                    <a href="https://github.com/marveramar/modulo-3-evaluacion-final-marveramar" target="blank"><img className="work_list-img" src={FinalThree} alt="finalThree" /></a>
                </li>

            </ul>
        </div>
    </section>
}

export default Works;