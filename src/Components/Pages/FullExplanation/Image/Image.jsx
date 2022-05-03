import React from "react";

const Image = ({image, caption, altText}) => {
    return(
        <figure className="educational__image">
            <img src={image} alt={altText} className="educational__image--img" />
            <figcaption className="educational__image--caption">{caption}</figcaption>
        </figure>
    )
}

export default Image;