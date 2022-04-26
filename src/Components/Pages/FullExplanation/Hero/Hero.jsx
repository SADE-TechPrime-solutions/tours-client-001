import React from "react";

const HeroFE = ({backImg, title, description}) => {
    return(
        <section className="fe-hero" style={{backgroundImage: `url(${backImg})`}}>
            <div className="fe-hero__textbox">
                <h1 className="herofe__title">{title}</h1>
                <p className="herofe__description">{description}</p>
            </div>
        </section>
    )
}

export default HeroFE;

// `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3)),