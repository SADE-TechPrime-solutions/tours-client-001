import React from 'react';
// import img from './../../../../Assets/images/bgh1.jpg';

const Educational = ({title, todoText}) => {
    return(
        <section className="educational">
            <div className="educational__educationals">
                <h1 className="educational__title">{title}</h1>
                <p className="educational__text">
                {todoText}
                </p>
            </div>
        </section>
    )
}
export default Educational;