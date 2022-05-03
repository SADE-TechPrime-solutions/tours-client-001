import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <section className="home" id='home'>
            <div className="home__textbox">
                <h1 className="home__title">
                    <span className="home__title--main">travel to east africa</span>
                    <span className="home__title--sub">home of authentic safaris</span>
                </h1>
                <Link className="textbox__button" to='/gallery'>explore gallery &hearts; &rarr;</Link>
            </div>
        </section>
    )
}
export default Hero;