import React from 'react';
import Perfil from '../stylesheets/images/img1.jpg';
import download from '../stylesheets/images/CV_María Vera.zip';

const AboutMe = () => {
    return <section className="aboutMeSection"><a name="aboutMe"></a>
        <h4 className="aboutMe_title">About Me</h4>
        <div className="aboutMe">
            <img className="aboutMe_img" src={Perfil} alt="fotografía de la autora" />
            <div className="aboutMe_description">
                <p className="aboutMe_desciption-text"> The concern to develop and learn new things has always directed my decisions and led me to move around Europe looking for new things and knowledge. I'm also a mountain lover, I like feel nature around that makes me feel balanced. And I'm a dancer, I Love rehearsing once and again. I have a psychology degree,but when I started to work I did realise that was not my world. As my mind is always active and receptive to new knowledge, I decided to move through the technological world where I saw a great growth opportunity. I really like to meet new challenges and solve problems.
            </p>
                <p className="aboutMe_description-phrase"> My brain is happy when is busy.</p>
                <a className="aboutMe_description-download" href={download} download={download}>~Download my CV~</a>
            </div>
        </div>
    </section>

}
export default AboutMe;