import React from 'react';
import { Building } from '../Icons/Icons';
import PageSample from '../Pages/PageSample';
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
                                <Building />
                            </div>
                            <p className="subfeature__text">Hikes</p>
                        </div>
                    </Link>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Building />
                            </div>
                            <p className="subfeature__text">safaris</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Building />
                            </div>
                            <p className="subfeature__text">excursions</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Building />
                            </div>
                            <p className="subfeature__text">camping</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Building />
                            </div>
                            <p className="subfeature__text">fishing</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Building />
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