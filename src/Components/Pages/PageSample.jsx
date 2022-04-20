import React from "react";
import Navigation from "../Navigation/Navigation";
import Heading from '../Heading/Heading'

const PageSample = () => {
    return(
        <React.Fragment>
            <Navigation />
            <div className="blog__container">
                <div className="blog__blog">
                    <Heading mainHeading="mount kenya" bgText="mount kenya" subHeading="" />
                </div>
                <div className="blog__blog--links"></div>
            </div>
        </React.Fragment>
    )
}

export default PageSample