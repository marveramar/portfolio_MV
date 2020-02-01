import React from 'react';

const Welcome = () => {
    return (
        <section className="welcome">
            <h1 className="welcome_title">Hello.</h1>
            <div className="welcome_presentation">
                <h2 className="welcome_name"> I'm María, front-end developer. </h2>
                <p className="welcome_text"> My mind ,that has thirst for knowledge, is always active looking for new challenges and ways to see the world</p>
            </div>
            <div className="down">
                <p className="down_more">Know more about me </p>
                <a href="#aboutMe"><i class="fas fa-chevron-down"></i></a>
            </div>
        </section>
    )
}
export default Welcome;