import React from "react";

const ImageData = ({image, caption}) => {
    return(
        <div className="tour__page__image">
            <img src={image} alt="tour exploration _image" className="tour__page__image--img" />
            <div className="tour__page--text">
                <h1 className="tour__page__title">{caption}</h1>
            </div>
        </div>
    )
}

export default ImageData;