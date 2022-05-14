import React from "react";
import { Suitcase } from "../Icons/Icons";
import { Link } from "react-router-dom";

const Tour = ({image, duration, zone, pricing, description, link}) => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return(
        <div className="tour" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3)),url(${image})`}}>
            <span className="tour__duration">{duration}</span>
            <h2 className="tour__title">{zone}</h2>
            <p className="tour__pricing">{pricing}</p>
            <p className="tour__description">{description} <span className="tour__svg"><Suitcase /></span></p>
            {/* <a href="/" className="tour__button" >learn more and book tour</a> */}
            <Link to={link} className="tour__button" onClick={handleClick}>Read more</Link>
        </div>
    )
}

export default Tour;