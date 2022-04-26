import React from "react";

const Benefit = ({image, title, description}) => {
    return(
        <div className="benefit">
            <div className="benefit__image">
                <img src={image} alt="benefit image" className="benefit__image--img" />
            </div>
            <h3 className="benefit__title">{title}</h3>
            <p className="benefit__description">{description}</p>
        </div>
    )
}

export default Benefit;