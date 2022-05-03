import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <section className="home" id='home'>
            <div className="home__textbox">
                <h1 className="home__title">
                    <span className="home__title--main">Discover</span>
                    <span className="home__title--sub">the world</span>
                </h1>
                <Link className="textbox__button" to='/gallery'>explore today &hearts; &rarr;</Link>
            </div>
        </section>
    )
}
export default Hero;