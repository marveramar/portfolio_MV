import React from 'react';
import Perfil from '../stylesheets/images/dolly.png';

const AboutMe = () => {
    return <section className="aboutMeSection"><a name="aboutMe"></a>
        <h4 className="aboutMe_title">About Me</h4>
        <div className="aboutMe">
            <img className="aboutMe_img" src={Perfil} alt="fotografía de la autora" />
            <div className="aboutMe_description">
                <p className="aboutMe_desciption-text"> The concern to develop and learn new things has always directed my decisions and led me to move around Europe looking for new things and knowledge. I have a psichology degree, and I like to study. As my mind is always active and receptive to new knowledge, I decided to move on the technological world where I saw a great growth opportunity. I really like meet new challenges and solve problems.</p>
                <p className="aboutMe_description-phrase"> My brain is happy when is busy.</p>
            </div>
        </div>
    </section>

}
export default AboutMe;