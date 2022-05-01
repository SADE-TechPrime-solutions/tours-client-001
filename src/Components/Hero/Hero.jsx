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
                <Link className="textbox__button" to='/gallery'>explore today &hearts; &rarr;</Link>

                <div className="home__subfeatures">
                    <Link to="/climbing-mount-kenya" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Hike />
                            </div>
                            <p className="subfeature__text">mt ruwenzori</p>
                        </div>
                    </Link>
                    <Link to="/climbing-mount-kenya-2" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Mountain  />
                            </div>
                            <p className="subfeature__text">mt kenya</p>
                        </div>
                    </Link>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Plane />
                            </div>
                            <p className="subfeature__text">mount kilimanjaro</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Camp />
                            </div>
                            <p className="subfeature__text">nothern kenya</p>
                        </div>
                    </a>
                    <a href="/" className="home__subfeature--link">
                        <div className="subfeature">
                            <div className="subfeature__svg">
                                <Fish />
                            </div>
                            <p className="subfeature__text">combined kenya tanzania safari</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero;