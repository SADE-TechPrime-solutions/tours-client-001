import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__cont">
                    <h2 className="footer__header">Wilderness Alternative Expeditions</h2>
                    <p className="footer__text">
                    Wilderness Alternative Expedition, Founded by Kenyan Born wild photographer and mountaineer Kennedy Mutuma  in 2015, Wilderness Alternative Expedition offers high quality adventure holidays including climbing expeditions, trekking holidays and wildlife safaris, school trips In East Africa and charity treks.
                    </p>
                </div>
                <div className="footer__cont">
                    <h2 className="footer__header">quick links</h2>
                    <ol className="footer__nav">
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">Home</a></li>
                        {/* <li className="footer__nav--item"><a href="/" className="footer__nav--link">About us</a></li> */}
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">upcoming tours</a></li>
                        {/* <li className="footer__nav--item"><a href="/" className="footer__nav--link">our team</a></li> */}
                        {/* <li className="footer__nav--item"><a href="/" className="footer__nav--link">testimonies</a></li> */}
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">subscribe</a></li>
                    </ol>
                </div>
                {/* <div className="footer__cont">
                    <h2 className="footer__header">recent blogs</h2>
                    <div className="footer__blog-list">
                        <a href="/" className="footer__blog--link">ultimate packing guide for Ladies.</a>
                        <a href="/" className="footer__blog--link">how to survive rocky hikes.</a>
                        <a href="/" className="footer__blog--link">what you should eat in these touring areas.</a>
                        <a href="/" className="footer__blog--link">saving tips for your next tour</a>
                        <a href="/" className="footer__blog--link">how to spend during your day out.</a>
                        <a href="/" className="footer__blog--link">pictorials of castle mountain tour.</a>
                    </div>
                </div> */}
                <div className="footer__cont">
                    <h2 className="footer__header">contact us</h2>
                    <div className="footer__contact">
                        <p className="footer__contact--item">call: +254743789655</p>
                        <p className="footer__contact--item">send us a whatsapp message: +254743789655</p>
                        <p className="footer__contact--item">email:info@wildernessalternativeexpedition.com </p>
                    </div>
                </div>
            </div>
            {/* <p className="footer__text footer__copyright">
                &copy; 2015. No part of this page should be reproduced for any purpose whatsoever, all rights and credits to the owner. +254743789655
            </p> */}
        </footer>
    )
}

export default Footer;