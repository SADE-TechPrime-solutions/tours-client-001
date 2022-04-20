import React from 'react';
import { Hike, Mountain, Plane, Camp, Fish, Beach } from '../Icons/Icons';
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <section className="home" id='home'>
            <div className="home__textbox">
                <h1 className="home__title">
                    <span className="home__title--main">Discover</span>
                    <span className="home__title--sub">the world</span>
                </h1>
                <a href="/" className="textbox__button">explore today &hearts; &rarr;</a>

                <div className="home__subfeatures">
                    <Link to="/climbing-mount-kenya" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Hike />
                            </div>
                            <p className="subfeature__text">Hikes</p>
                        </div>
                    </Link>
                    <Link to="/climbing-mount-kenya-2" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Mountain  />
                            </div>
                            <p className="subfeature__text">mountain hikes</p>
                        </div>
                    </Link>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Plane />
                            </div>
                            <p className="subfeature__text">excursions</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Camp />
                            </div>
                            <p className="subfeature__text">camping</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Fish />
                            </div>
                            <p className="subfeature__text">fishing</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Beach />
                            </div>
                            <p className="subfeature__text">beach</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero;