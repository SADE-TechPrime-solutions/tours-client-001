import React from 'react';
import img from './../../../../Assets/images/bgh1.jpg';

const Educational = () => {
    return(
        <section className="educational">
            <div className="educational__educationals">
                <h1 className="educational__title">Things you should know before you travelling to any places</h1>
                <ol className="educational__list">
                    <li className="educational__item">Always make sure that you carry a lot of water, if there is no water, the tour guide will provide, this is essential</li>
                    <li className="educational__item">Don't go where the tour guide has not advised you to go, you might get eaten</li>
                    <li className="educational__item">Always make sure that you carry a lot of water, if there is no water, the tour guide will provide, this is essential</li>
                    <li className="educational__item">Don't go where the tour guide has not advised you to go, you might get eaten</li>
                    <li className="educational__item">Always make sure that you carry a lot of water, if there is no water, the tour guide will provide, this is essential</li>
                    <li className="educational__item">Don't go where the tour guide has not advised you to go, you might get eaten</li>
                    <li className="educational__item">Always make sure that you carry a lot of water, if there is no water, the tour guide will provide, this is essential</li>
                    <li className="educational__item">Don't go where the tour guide has not advised you to go, you might get eaten</li>
                    <li className="educational__item">Always make sure that you carry a lot of water, if there is no water, the tour guide will provide, this is essential</li>
                    <li className="educational__item">Don't go where the tour guide has not advised you to go, you might get eaten</li>
                </ol>
            </div>
            <div className="educational__image">
                <img src={img} alt="traveller enjoying life" className="educational__image--img" />
            </div>
        </section>
    )
}
export default Educational;