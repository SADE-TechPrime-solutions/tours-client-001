import React from "react";

const Arrangement = ({title, description,image}) => {
    return(
        <div className="arrangement">
            <img src={image} alt="arrangement image" className="arrangement__image" />
            <div className="arrangement__details">
                <h3 className="arrangement__title">{title}</h3>
                <p className="arrangement__description">{description}</p>
            </div>
        </div>
    )
}

export default Arrangement;