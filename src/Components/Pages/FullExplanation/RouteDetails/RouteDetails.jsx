import React from "react";

const RouteDetails = ({title, description}) => {
    return(
        <div className="route-detail">
            <h3 className="route-detail__title">{title}</h3>
            <p className="route-detail__description">{description}</p>
        </div>
    )
}

export default RouteDetails;