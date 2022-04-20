import React from "react";

const TourImg = ({image, title, description}) => {
    return(
        <div className="tour__marquee" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3)),url(${image})`}}>
            <div className="tour__marquee--content">
            <h5 className="tour__marquee--title">{title}</h5>
            <p className="tour__marquee--description">{description}</p>
            </div>
        </div>
    )
}

export default TourImg;