import React from 'react';
// import img from './../../../../Assets/images/bgh1.jpg';

const Educational = ({image, todoText}) => {
    return(
        <section className="educational">
            <div className="educational__educationals">
                <h1 className="educational__title">Things you should know before you travelling to any places</h1>
                <p className="educational__text">
                {todoText}
                </p>
            </div>
            <div className="educational__image">
                <img src={image} alt="traveller enjoying life" className="educational__image--img" />
            </div>
        </section>
    )
}
export default Educational;