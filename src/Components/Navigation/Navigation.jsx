import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navRef = useRef(null)
    const handleNav = () => {
        navRef.current.classList.toggle('active')
    }
    return(
        <header className="header" id="home-main">
            <h1 className="header__logo">
                <span className="header__logo--main">wilderness alternative expeditions</span>
            </h1>
            <nav className="header__navigation">
                <ol className="navigation__list" ref={navRef}>
                    <li className="navigation__list--item"><a href="#home" className="navigation__list--link">home</a></li>
                    <li className="navigation__list--item"><Link to="/about-us" className="navigation__list--link">about</Link></li>
                    <li className="navigation__list--item"><a href="#upcoming-tours" className="navigation__list--link">our trips</a></li>
                    {/* <li className="navigation__list--item"><a href="/" className="navigation__list--link">upcoming tours</a></li> */}
                    {/* <li className="navigation__list--item"><a href="#team" className="navigation__list--link">team</a></li>
                    <li className="navigation__list--item"><a href="#testimonies" className="navigation__list--link">testimonials</a></li> */}

                    <li className="navigation__list--item"><a href="#subscribe" className="navigation__list--link">subscribe</a></li>
                </ol>
            </nav>
            <div className="hamburger" onClick={handleNav}>
                <div className="hamburger__child hamburger__child--1"></div>
                <div className="hamburger__child hamburger__child--2"></div>
                <div className="hamburger__child hamburger__child--3"></div>
            </div>
        </header>
    )
}
export default Navigation;